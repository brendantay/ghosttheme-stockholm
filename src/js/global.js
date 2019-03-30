import '../less/global.less';
import './global/analytics.js';

/*====================================================
  TABLE OF CONTENTS
  1. Function Declaration
  2. Initialization
====================================================*/
/*===========================
 1. Function Declaration
 ==========================*/

var globalFunctions = {
  resizeIframe: function(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  },
  tags: function() {
    var tags = {
      nodejs: '<i class="fab fa-node-js"></i>',
      aws: '<i class="fab fa-aws"></i>',
      python: '<i class="fab fa-python"></i>',
      django: '<i class="fab fa-python"></i>',
      nosql: '<i class="fab fa-envira"></i>',
      restapis: '<i class="fab fa-hubspot"></i>',
      frontend: '<i class="far fa-code"></i>',
      data: '<i class="fas fa-chart-pie"></i>',
      mysql: '<i class="fas fa-database"></i>',
      javascript: '<i class="fab fa-js-square"></i>',
      roundup: '<i class="fas fa-undo-alt"></i>',
      excel: '<i class="fal fa-table"></i>',
      devops: '<i class="fas fa-server"></i>',
      pandas: '<i class="fas fa-paw"></i>',
      datascience: '<i class="fas fa-flask"></i>',
      tableau: '<i class="far fa-asterisk"></i>',
      googlecloud: '<i class="fab fa-google"></i>',
      sql: '<i class="fas fa-database"></i>',
      statistics: '<i class="far fa-chart-area"></i>',
      flask: '<i class="fab fa-affiliatetheme"></i>',
      expressjs: '<i class="fab fa-etsy"></i>',
      atlassian: '<i class="fab fa-trello"></i>',
      codesnippetcorner: '<i class="fal fa-laptop-code"></i>',
      saas: '<i class="fal fa-desktop-alt"></i>',
      datavis: '<i class="fal fa-chart-pie"></i>',
      plotly: '<i class="fas fa-chart-bar"></i>',
      postgresql: '<i class="fas fa-elephant"></i>',
      bigdata: '<i class="far fa-chart-network"></i>',
      graphql: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GraphQL icon</title><path d="M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z"></path></svg>',
      dataengineering: '<i class="far fa-wrench"></i>'
    };

    for (var key in tags) {
      $('.' + key).find('i').replaceWith(tags[key]);
    }
  },
  fallbackImages: function(){
    var images = $('picture');
    $(images).each(function(){
      var imagepaths = $(this).find('source:last-of-type').attr('srcset');
      var standardres = String(imagepaths).split(' @1x')[0];
      var highres = String(imagepaths).split(' @1x,')[1];
      var fallback_src = imagepaths.replace('webp', 'jpg');
      var new_srcset = '<source srcset="' + fallback_src + '">';
      $(this).find('source:last-of-type').after(new_srcset);
      console.log('new_srcset = ' + new_srcset);
    });
    picturefill({
      elements: [ document.getElementsByName('picture') ]
    });
  },
  githubrepo: function() {
    $('[data-github]').each(function() {
      var _this = this;
      var repo = $(_this).data('github');

      fetch('https://api.github.com/repos/' + repo).then(function(response) {
        return response.json();
      }).then(function(response) {
        $(_this).find('[data-forks]').text(response.forks);
        $(_this).find('[data-stars]').text(response.stargazers_count);
      });
    });
  },
  retina: function() {
    // Order matters!!
    $('img').attr('data-rjs', 2);
    Retina();
  },
  seriesIcons: function() {
    var flask = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flask icon</title><path d="M7.172 20.655c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777C.95 11.143.796 9.69.222 8.388-.38 7.444.325 6.41 1.36 6.109c.46-.088 1.272-.523.293-.212-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.659-.43 1.6-.903.463-1.544C1.501 1.376 4.34 1.13 3.64 2.58c-.167 1.115 1.984-.204 1.485 1.083.507.619 1.9.141 1.865 1.009.74.05.993.672 1.687.72.72.325 2.023.58 2.267 1.391-.713.565-2.365-1.166-2.444.397.215 2.31.16 4.689 1.005 6.888.4 1.332 1.369 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306-1.15.206-2.319.29-3.484.291-1.912-.151-3.865-.215-5.684-.88-1.025-.298-2.024-.882-2.925-1.465zm1.615.7c1 .432 1.979.888 3.075 1.026 1.74.241 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.292-1.452-1.277-.466.66.598 1.006.685.798.453-.878-.233-1.115-.421-.668-.375-.754-.297-.066.084.139.081.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.449-.622-.197-.341-.752-.557-.36-.74-.705.244-.738-.93-1.07-.763-.745-.235-.29-1.069-1.177-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.942c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.309-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.313-.299-.484-.188 0 0zm1.128.63c.191-.282-.61-.107 0 0zM8.19 20.023c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.398.25 2.32.55 1.116.103-.201.042-2.231-.574-1.116-.103zm-3.921-3.054c-.039-.167-.616-.185 0 0zm1.15.67c.3-.209-.621-.16 0 0zm.967.593c.43-.162-.697-.163 0 0zm-2.585-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17l.198.043zm3.24 1.978c.194-.33-.814-.189 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.974 1.141c1.079.01-.975-.148 0 0zm-4.645-2.96c-.042-.201-.266.017 0 0zm6.47 3.984c.029-.363-.352.27 0 0zm-4.629-2.856c-.065-.191-.337-.008 0 0zm-1.739-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zM9.8 19.6c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.529-.077 0 0zM6.995 17.7c.46-.049-.739-.311 0 0zm4.242 2.637c.718-.285-.7-.14 0 0zM9.03 18.84c.828.106-.985-.563-.181-.06zm2.877 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.289.103.697-.467 1.727.22 2.377.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.219-2.044-.703-2.517-1.542-.192-.315.279.044-.166-.47-.571-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.689-.826-.002-.571.596-.285.177-.707-.09-.592-.387-1.209-.476-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.579-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.099.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.061.328-.905-.119-.83.64-.573-.241-.078.9.209.514.975.264.686.866.711 1.437-.159.333-.785-.783-.14-.731-.508-.827-.562-.299-.985.085-.099.028 1.079.547.34.803.65.1.668.67.8 1.03.391.407.311-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.439-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.241-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.721.155.552.581.778.88.497.224-.712-1.522.142-.526.898.811.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.976 1.34-.027.897-.348-.313-1.579-.7-.573-.104.929.43 1.666.688 2.562 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.011-.468.107.361 0 0zm-.322-.433c-.372-.719.47.204 0 0zm-3.9-2.692c.218-.059.107.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.193-1.525c-.155-.278.323.261 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.512c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.051.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.041-.603.23.413 0 0zm.451.155c.215-.455.365.634 0 0zm-1.085-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.061-.25.66.12.326 1.082-.078.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18l-.177-.18zm3.111 1.808c-.47-.282-.124-1.984.036-.82.457-.148-.025.601.315.594-.053.473-.206.643-.35.226zm1.15.68c.047-.513.098.35 0 0zm-.2-.198c.053-.219.006.258 0 0zM4.57 10.25c-.697-.963 2.027.973.447.244-.165-.043-.364-.059-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.882c.415-.088 1.718.729.521.234-.133-.148-.417-.08-.521-.234zm3.56 1.775c.044-.829.248-.495.002.118l-.002-.118zM4.985 9.594c.169-.248-.449-1.12.089-.313.232.185.672.31.283.387.611.539-.149.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.722c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.509c-.053-.32.18.403 0 0zm.314-.51c-.216-.38.272-1.674.326-.871-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.924c.094-.115.021.139 0 0zm-.538 10.613c-.128-.111.016.071 0 0zm1.11.561c.616.159.613-.096.055-.171-.3-.28-1.246-.575-.399-.035.056.142.234.139.343.206zm-2.192-1.455c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.071-.51-.306-.06-1.52-.539-.805.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.691.46.892.6zm1.16.667c1.411.454-.691-.556 0 0zm5.94 3.598c.02-.28-.192.24 0 0zm.612.257c.325-.315.013.503.539-.077.006-.415-.016-.66-.605-.156-.162.09-.234.473.066.233zM4.408 15.38c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.321 1.663.236.44.04-.182-.269-1.151-.204-.44-.04zm5.098 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 14.038c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.136-.734-.465-.32 0 0zm.867.34c.57-.488-.36-.102 0 0zM4.215 14.55c.163-.242-.42-.031 0 0zm11.306 7.129c.551-.355-.126-.3-.1.032zM8.05 16.97c-.02-.24-.291.02 0 0zm.461.266c-.146-.297-.225.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.569 14.376c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.409.426-.846-.413-.475.204-.31.374-.225.052.298.196.232.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.131.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.682 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zm2.253 1.419c.216-.16-.27-.02 0 0zM3.39 12.816c.62-.24-.664-.171 0 0zm8.985 5.661c-.007-.401-.395.1 0 0zm-9.23-6.231c.398-.135-.368-.089 0 0zm1.155.56c-.007-.133-.122.05 0 0zm14.09 8.64c.513-.104 1.679.26 1.867-.136-.621-.015-2.15-.438-2.222.101l.136.022.22.013zM4.668 12.898c.009-.407-.317-.015 0 0zM1.63 10.79c-.138-.775-.525-.118 0 0zm.724.182c.009-.249-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.221-.167c-.036-.32-.19.04 0 0zm1.22.729c.517-.203-.94-.42-.105-.039zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.051 0 0zM2.573 9.676c.055-.379-.409.075 0 0zM.837 8.513c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.109 1.671-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.291-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.061zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.119zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.231 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.251-.347c-.056-1.214 1.118.432 0 0zm.639-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.362c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.603 12.89c.012-.355-.304.16 0 0zm-2.093-1.429c.06-.409-.27.036 0 0zm2.67 1.567c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 9.254c.451-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.701.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.389-.105-.344-.746-.408-1.059-.545-.177.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.825 4.215c.28-.496-1.155-.668-.188-.175.089.03.069.21.188.175z"></path></svg>';
    var mysql = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MySQL icon</title><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168z"></path><path d="M23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></svg>';
    var python = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img"><title>Python icon</title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z"></path><path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"></path></svg>';
    var aws = '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Amazon AWS icon</title><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607z"></path><path d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"></path></svg>';
    var mongodb = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB icon</title><path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"></path></svg>';
    var graphql = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GraphQL icon</title><path d="M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z"></path></svg>'
    var excel = '<svg aria-hidden="true" data-prefix="fal" data-icon="file-spreadsheet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-file-spreadsheet fa-w-12 fa-5x"><path fill="currentColor" d="M369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01zM64 208v224c0 8.84 7.16 16 16 16h224c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16zm224 208h-80v-48h80v48zm0-80h-80v-48h80v48zM96 224h192v32H96v-32zm0 64h80v48H96v-48zm0 80h80v48H96v-48z" class=""></path></svg>';
    var tableau = '<i class="far fa-asterisk"></i>';
    var pandas = '<i class="fas fa-paw"></i>';
    var google = '<i class="fab fa-google"></i>';
    var sql = '<i class="far fa-database"></i>';
    var mapbox = '<i class="far fa-map"></i>';

    $('.series .seriesitem').each(function(item) {
      if ($(this).hasClass('data-analysis-pandas')) {
        $(this).find('a').prepend(pandas);
      }

      if ($(this).hasClass('building-flask-apps')) {
        $(this).find('a').prepend(flask);
      }

      if ($(this).hasClass('code-snippet-corner')) {
        $(this).find('a').prepend(python);
      }

      if ($(this).hasClass('create-an-aws-api')) {
        $(this).find('a').prepend(aws);
      }

      if ($(this).hasClass('working-with-mysql')) {
        $(this).find('a').prepend(mysql);
      }

      if ($(this).hasClass('mongodb-cloud')) {
        $(this).find('a').prepend(mongodb);
      }

      if ($(this).hasClass('hacking-tableau-server')) {
        $(this).find('a').prepend(tableau);
      }

      if ($(this).hasClass('adventures-in-excel')) {
        $(this).find('a').prepend(excel);
      }

      if ($(this).hasClass('the-rise-of-google-cloud')) {
        $(this).find('a').prepend(google);
      }

      if ($(this).hasClass('welcome-to-sql')) {
        $(this).find('a').prepend(sql);
      }

      if ($(this).hasClass('mapping-data-with-mapbox')) {
        $(this).find('a').prepend(mapbox);
      }

      if ($(this).hasClass('graphql-hype')) {
        $(this).find('a').prepend(graphql);
      }

    });
  },
  search: function() {
      let ghostSearch = new GhostSearch({
        key: '2ba06e23c3fb2a866de96402f0',
        host: 'https://hackersandslackers.com',
        input: '#my-custom-input',
        results: '#my-custom-results',
        options: {
          limit: 5,
          keys: ['title', 'plaintext', 'slug']
        },
        api: {
          resource: 'posts',
          parameters: {
            fields: [
              'title', 'slug', 'plaintext', 'image', 'feature_image'
            ],
            formats: 'plaintext',
            include: 'tags'
          }
        },
        template: function(result) {
          let tag = result.tags[0];
          let url = [location.protocol, '//', location.host].join('');
          return '<li> \n' +
          '<img src="' + result.feature_image + '" alt="' + result.title + '"> \n ' +
          '<div><a href="' + result.url + '">' + result.title + '</a> \n' +
          '<span class="tag "> <span class="' + tag.slug + '"><i class="fas fa-tags"></i> ' + tag.name + '</span></span></div> \n ' +
          '</li>';
        }
      });
  },
  init: function() {
    globalFunctions.retina();
    globalFunctions.tags();
    globalFunctions.seriesIcons();
    globalFunctions.search();
    globalFunctions.fallbackImages();

  }
};

/* ===========================
2. Initialization
=========================== */
$(document).ready(function() {
  globalFunctions.init();
});
