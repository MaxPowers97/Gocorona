$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__ul-mobile, .header__nav, .nav-logo-block, .header__nav-flex-text').toggleClass('active_nav');
    $('body').toggleClass('lock');
  });
});