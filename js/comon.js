    //ローディングアニメーション
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});


  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top-80;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
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

  //  左上へパタっ
    $('.flipLeftTopTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('flipLeftTop');
      }else{
      $(this).removeClass('flipLeftTop');
      }
      });

  // 右上へパタっ
    $('.flipRightTopTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('flipRightTop');
      }else{
      $(this).removeClass('flipRightTop');
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

  // 順番に表示
  function delayScrollAnime() {
    var time = 0.2;
    var value = time;
    $('.delayScroll').each(function () {
      var parent = this;
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();
      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        $(childs).each(function () {
          if (!$(this).hasClass("fadeUp")) {
            $(parent).addClass("play"); 
            $(this).css("animation-delay", value + "s");
            $(this).addClass("fadeUp");
            value = value + time;
            var index = $(childs).index(this);
            if((childs.length-1) == index){
              $(parent).removeClass("play");
            }
          }
        })
      }else {
        $(childs).removeClass("fadeUp");
        value = time;
      }
    })
  }
    $(window).scroll(function (){
      delayScrollAnime();
    });


