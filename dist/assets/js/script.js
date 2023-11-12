"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ドロワーメニュー関連

  var isDrawerOpen = false; // ドロワーメニューの状態を管理するフラグ

  $(".js-drawer").click(function () {
    isDrawerOpen = !isDrawerOpen; // ドロワーメニューの状態を切り替える

    $(".js-drawer").toggleClass("open");
    $(".header__drawer").toggleClass("open");
    $("html").toggleClass("is-fixed");
    $("body").toggleClass("is-fixed");
    if (isDrawerOpen) {
      var tl = gsap.timeline();
      // メニューを開くアニメーションを実行
      tl.fromTo('.header__drawer-item', .6, {
        y: 30,
        autoAlpha: 0
      }, {
        delay: 0.2,
        y: 0,
        autoAlpha: 1,
        stagger: {
          each: .1
        }
      }).fromTo('.header__drawer-sns', .6, {
        y: 30,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1
      }, .8);
    }
  });
  $(".header__drawer").click(function () {
    isDrawerOpen = !isDrawerOpen; // ドロワーメニューの状態を切り替える
    $(".js-drawer").toggleClass("open");
    $(".header__drawer").toggleClass("open");
    $("html").toggleClass("is-fixed");
    $("body").toggleClass("is-fixed");
  });

  // ドロワーメニューが768px以上で自動で閉じるようにする

  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches && isDrawerOpen) {
      closeDrawer();
    }
  });
  function closeDrawer() {
    isDrawerOpen = false; // ドロワーメニューを閉じた状態に設定
    $('.js-drawer').removeClass('open');
    $('.header__drawer').removeClass('open');
    $("html").removeClass("is-fixed");
    $("body").removeClass("is-fixed");
  }

  // トップページのslick

  var $slider = $(".js-top-products-slick");

  // 左右の透過の2周目ががたつく対応
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $slider.find(".slick-slide").each(function (index, el) {
      var $this = $(el),
        slickindex = $this.attr("data-slick-index");
      if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
        // 現在のスライドが最初のスライドでそこから最後のスライドに戻る場合
        if (slickindex == "-1") {
          // 最後のスライドに対してクラスを付与
          $this.addClass("is-active-next");
        } else {
          // それ以外は削除
          $this.removeClass("is-active-next");
        }
      } else if (nextSlide == 0) {
        // 次のスライドが最初のスライドの場合
        if (slickindex == slick.slideCount) {
          // 最初のスライドに対してクラスを付与
          $this.addClass("is-active-next");
        } else {
          // それ以外は削除
          $this.removeClass("is-active-next");
        }
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    });
  });
  $('.js-top-products-slick').slick({
    autoplay: false,
    // 自動再生ON
    dots: false,
    // ドットインジケーターON
    centerMode: true,
    // 両サイドに前後のスライド表示
    centerPadding: "",
    // 左右のスライドのpadding
    slidesToShow: 3,
    // 一度に表示するスライド数
    arrow: true,
    responsive: [{
      breakpoint: 768,
      // 768px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        centerPadding: "10%"
      }
    }]
  });

  // 個別ニュースページの「おすすめ商品」のslick

  var $r_slider = $(".js-recommend-slick");

  // 左右の透過の2周目ががたつく対応
  $r_slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $r_slider.find(".slick-slide").each(function (index, el) {
      var $this = $(el),
        slickindex = $this.attr("data-slick-index");
      if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
        // 現在のスライドが最初のスライドでそこから最後のスライドに戻る場合
        if (slickindex == "-1") {
          // 最後のスライドに対してクラスを付与
          $this.addClass("is-active-next");
        } else {
          // それ以外は削除
          $this.removeClass("is-active-next");
        }
      } else if (nextSlide == 0) {
        // 次のスライドが最初のスライドの場合
        if (slickindex == slick.slideCount) {
          // 最初のスライドに対してクラスを付与
          $this.addClass("is-active-next");
        } else {
          // それ以外は削除
          $this.removeClass("is-active-next");
        }
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    });
  });
  $('.js-recommend-slick').slick({
    autoplay: false,
    // 自動再生ON
    dots: false,
    // ドットインジケーターON
    centerMode: true,
    // 両サイドに前後のスライド表示
    centerPadding: "",
    // 左右のスライドのpadding
    slidesToShow: 3,
    // 一度に表示するスライド数
    arrow: true,
    responsive: [{
      breakpoint: 768,
      // 768px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        centerPadding: "10%"
      }
    }]
  });

  // 個別ニュースページの「最新ニュース」のslick

  $('.js-new-post-slick').slick({
    autoplay: false,
    // 自動再生ON
    dots: false,
    // ドットインジケーターON
    slidesToShow: 3,
    // 一度に表示するスライド数
    arrow: true,
    responsive: [{
      breakpoint: 768,
      // 768px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }]
  });

  // テキストを1文字ずつspanで囲む（スペース 改行タグ入ってもOK）

  function spanWrap() {
    var target = document.querySelector('.mv__text');
    var nodes = _toConsumableArray(target.childNodes);
    var spanWrapText = "";
    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        //テキストの場合
        var text = node.textContent.replace(/\r?\n/g, '');
        var words = text.split(' ');
        words.forEach(function (word, index) {
          spanWrapText += word.split('').map(function (_char) {
            return "<span>".concat(_char, "</span>");
          }).join('');
          if (index < words.length - 1) {
            spanWrapText += ' <span>&nbsp;</span>'; // スペースを<span>で囲む
          }
        });
      } else {
        //テキスト以外
        spanWrapText = spanWrapText + node.outerHTML;
      }
    });
    target.innerHTML = spanWrapText;
  }
  spanWrap();

  // トップページのローディング画面の動作

  var tl = gsap.timeline();
  tl.to(".loader__line", 1.5, {
    width: "100%",
    ease: Power2.easeOut
  }).to(".loader__top", 1.5, {
    y: "-100%",
    ease: Power4.easeOut
  }, "one").to(".loader__bottom", 1.5, {
    y: "100%",
    ease: Power4.easeOut
  }, "one").to(".loader__line", 0.1, {
    opacity: "0"
  }, "one").to(".loader", {
    display: "none"
  }, "one+=1").fromTo(".mv__text span", 1, {
    y: 20,
    autoAlpha: 0
  }, {
    y: 0,
    autoAlpha: 1,
    ease: Power4.easeOut,
    stagger: 0.05
  }, "two").fromTo(".header", 1.5, {
    top: "-50%",
    ease: Power3.out
  }, {
    top: 0
  }, "-=1.8").fromTo(".mv__image", 1, {
    y: 20,
    autoAlpha: 0
  }, {
    y: 0,
    autoAlpha: 1,
    ease: Power3.out
  }, "-=1").fromTo(".mv__sns", 1, {
    x: -20,
    autoAlpha: 0
  }, {
    x: 0,
    autoAlpha: 1,
    ease: Power3.out
  }, "<");
});