
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').removeClass('is-open');
      $(this).removeClass('is-open');
      $('.js-header').removeClass('is-open');
      $('body').css('overflow-y','auto'); 
    } else {
      $('.js-drawer-menu').addClass('is-open');
      $(this).addClass('is-open');
      $('.js-header').addClass('is-open');
      $('body').css('overflow-y', 'hidden');

    }
  });

    // タブメニュー
  $(".js-content:first-of-type").css("display", "block");

  $(".js-tab").on("click", function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
    const index = $(this).index();
    $(".js-content").hide().eq(index).fadeIn(300);
  });


  // スクロールすると背景色変更
  $(window).on("scroll", function () {
    const sliderHeight = $(".js-mv").height();
    if (sliderHeight  < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
});

  // ページトップボタン
  const pageTop = $(".page-top");
  pageTop.hide();
  $(window).on("scroll", function () {
    const sliderHeight = $(".js-mv").height();
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
  const swiper1 = new Swiper(".js-mv-swiper", {
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
  const swiper2 = new Swiper(".js-works-swiper", {
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

// 取扱商品詳細
  // サムネイル
const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  slideToClickedSlide: true,
  loopedSlides: 8,
  breakpoints: {
    768: {
      spaceBetween: 8,
      slidesPerView: 8,
    },
  }, // サムネイルの枚数
});
// スライダー
const slider = new Swiper(".slider", {
  loop: true, // ループ
  speed: 1000,
  loopedSlides: 8,
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});
