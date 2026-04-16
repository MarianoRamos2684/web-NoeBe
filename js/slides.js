
document.addEventListener('DOMContentLoaded', function () {

var main = new Splide('#main-slider', {
  type       : 'fade',
  rewind     : true,
  autoplay   : true,
  interval   : 4000,
  speed      : 1000,
  arrows     : true,
  pagination : true,

});

  main.mount();

});