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


  function fadeAnime(){
    // 下からふわっ
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });

    // その場で
  $('.fadeInTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');
    }else{
    $(this).removeClass('fadeIn');
    }
    });
}

  $(window).scroll(function (){
    fadeAnime();
  });