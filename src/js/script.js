
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      // $('.js-drawer-menu').fadeOut();
      $('.js-drawer-menu').removeClass('is-open');
      $(this).removeClass('is-open');
      $('body').css('overflow-y','auto'); 
    } else {
      // $('.js-drawer-menu').fadeIn();
      $('.js-drawer-menu').addClass('is-open');
      $(this).addClass('is-open');
      $('body').css('overflow-y', 'hidden');

    }
  });

  // ウィンドウがリサイズされたとき
 
  $(window).resize(function(){ // ウィンドウがリサイズされたら
    $('.js-drawer-menu').removeClass('is-open');
    $('.js-hamburger').removeClass('is-open');
  });

  // スクロールすると背景色変更
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight  < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
});

  // ページトップボタン
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) { 
      pageTop.fadeIn(); 
    } else {
      pageTop.fadeOut(); 
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500 
    );
    return false;
  });
  
});


  // swiper MV
  var swiper1 = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade", // フェード切り替え
    // 自動再生
    autoplay: {
      delay: 4000, // 4秒後に次のスライドへ
      disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
    },
    speed: 2000, // 2秒かけてフェード
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swiper Works
  var swiper2 = new Swiper(".js-works-swiper", {
    pagination: {
      el: ".js-works-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
          delay: 4000, // 4秒後に次のスライドへ
          disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
        },
  });

