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

  // スクロールしたら拡大
    $('.zoomInTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');
    }else{
    $(this).removeClass('zoomIn');
    }
    });

  // 滑らかに出現
  $('.smoothTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smooth');
    }else{
    $(this).removeClass('smooth');
    }
    }); 
  }

  $(window).scroll(function (){
    fadeAnime();
  });