
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      // $('.js-drawer-menu').fadeOut();
      $('.js-drawer-menu').removeClass('is-open');
      $(this).removeClass('is-open');
    } else {
      // $('.js-drawer-menu').fadeIn();
      $('.js-drawer-menu').addClass('is-open');
      $(this).addClass('is-open');
    }
  });

  
});


  // swiper
  const swiper = new Swiper(".swiper", {
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
