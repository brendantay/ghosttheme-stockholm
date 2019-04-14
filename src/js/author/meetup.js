author_meetup: function(docs) {
  var meetup_key = process.env.meetup_key;
  var meetup = docs[0]['meetup'];
  console.log('meetup = ', meetup);

  function buildMeetupWidget(json) {
    // Fires after first Meetup call is completed
    $('.sidebar').append('<div class="widget meetup"><h3 class="title">Meetup</h3><div class="widget-body"> \n ' + '<div class="userprofile"> \n ' + '<img class="avatar" src="' + ajaxResult['data']['photo']['thumb_link'] + '" data-rjs="2" > \n' + '<div class="info">' + '<span class="name">' + ajaxResult['data']['name'] + '</span> \n ' + '<span class="location">' + ajaxResult['data']['city'] + ', ' + ajaxResult['data']['state'] + '</span></a> \n ' + '<a href="https://www.meetup.com/members/' + ajaxResult['data']['id'] + '/"><span class="country">View profile</span></a></div></div> \n ' + '<div class="events"></div></div>');
  }

  if (meetup) {
    var url = 'https://api.meetup.com/members/' + meetup + '?key=' + meetup_key;
    var headers = {
      "Content-Type": "application/json"
    };
    fetch(url, {
      method: 'GET',
      headers: headers
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((json) => {
      console.log(json);
      buildMeetupWidget(json);
    });
  }
  $.ajax({
    url: 'https://api.meetup.com/members/' + meetup + '?key=' + meetup_key,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      buildMeetupWidget(json);
    }
  });

  $.ajax({
    url: 'https://api.meetup.com/2/events?key=' + meetup_key + '&member_id=' + meetup + '&offset=0&format=json&limited_events=False&rsvp=yes,maybe&photo-host=public&page=500&fields=&order=time&desc=false&status=upcoming',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(ajaxResult2) {
      var rsvps = ajaxResult2.meta.count;
      if (rsvps == 0) {
        $('.events').append('<span class="noevents">No upcoming events :(</span>');
      } else {
        var events = ajaxResult2.results;

        for (var i = 0; i < events.length; i++) {
          var date = new Date(events[i].time);
          var eventimage = '<time class="date"><span class="day"><span>' + date.getDate() + '</span></span><span class="month"><span>' + date.toLocaleString("en-us", {month: "short"}) + '</span></span></time>';
          if (events[i].photo_url == null) {
            //eventimage = "https://hackers.nyc3.digitaloceanspaces.com/meetup.png"
            eventimage = '<time class="date"><span class="day"><span>' + date.getDate() + '</span></span><span class="month"><span>' + date.toLocaleString("en-us", {month: "short"}) + '</span></span></time>';
          }
          $('.events').append('<a href="' + events[i].event_url + '"> \n' + '<div class="event"> \n' + '<div class="eventheader">' + eventimage + ' \n ' + '<span class="eventname">' + events[i].name + '</span></div> \n ' + '<div class="eventinfo"> \n ' + '<span class="eventhost"><i class="fal fa-users"></i> ' + events[i].group.name + '</span> \n ' + '<span class="venuename"><i class="fal fa-building"></i> ' + events[i].venue.name + '</span> \n ' + '<span class="venueaddress"><i class="fal fa-map-pin"></i> ' + events[i].venue.address_1 + '</span> \n ' +
          //'<span class="date"><i class="fas fa-calendar"></i> ' + date.toString("MMM dd") + '</span> \n ' +
          '</div></div></a>');
        }
      }
    }
  });
  $(".meetup").css('display', 'block');
}
