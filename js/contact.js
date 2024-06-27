// ヘッダー拡大
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

$('.header-img').css({
transform: 'scale('+(100 + scroll/10)/100+')',
top: -(scroll/50)  + "%",
  });
});

// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
     $(this).toggleClass('active');
     $('.nav_inner').toggleClass('open'); 
   });
   $(".nav_inner a").click(function () {
    $(".hamburger").removeClass('active');
    $(".nav_inner").removeClass('open');
  });
  });