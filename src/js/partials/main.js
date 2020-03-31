(function($) {
  let scrollTopVal = 0;
  let scrollInstance = null;
  $(window).on('load', function() {
    setTimeout(function() {
      $('.preloader').addClass('hide');
      $('body').addClass('anim');
      //}, 5000);
    }, 0);
    setTimeout(function() {
      $('.main-left .btn-yellow-border').addClass('anim-off');
      $('.main-menu__footer--phone').addClass('anim-off');
      //}, 5000);
    }, 1000);
  });

  function checkMenuScroll() {
    scrollTopVal = $(window).scrollTop();

    if ($('[data-section-name="main1"]').length) {
      if (scrollTopVal > $(window).height()) {
        $('.header-fixed').addClass('active');
        $('.up-btn').addClass('show');
        $('.main-call-link').addClass('show');
      } else {
        $('.header-fixed').removeClass('active');
        $('.up-btn').removeClass('show');
        $('.main-call-link').removeClass('show');
      }
    } else {
      if (scrollTopVal > $('.header-fixed').height() + 100) {
        $('.header-fixed').addClass('active');
        $('.up-btn').addClass('show');
        $('.main-call-link').addClass('show');
      } else {
        $('.header-fixed').removeClass('active');
        $('.up-btn').removeClass('show');
        $('.main-call-link').removeClass('show');
      }
    }

  }

  function runNumberAnim() {
    scrollTopVal = $(window).scrollTop() + ($(window).height() / 2);
    $('[data-section-name]').each(function() {
      if (scrollTopVal >= $(this).offset().top) {
        $(this).find('.main-number').addClass('active');
      }
    })
    if ($('[data-section-name="main1"]').length) {
      if (scrollTopVal >= $('[data-section-name="main1"]').offset().top) {
        //if($(this).data('section-name') == 'main1'){
        $('.sparrow').addClass('active');
      }
    }

  }

  $('window').on('load', function(){
    scrollInstance = new SmoothScroll();

    function SmoothScroll(el) {
      var t = this,
        h = document.documentElement;
      el = el || window;
      t.rAF = false;
      t.target = 0;
      t.scroll = 0;
      t.animate = function() {
        t.scroll += (t.target - t.scroll) * 0.08;
        if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
          cancelAnimationFrame(t.rAF);
          t.rAF = false;
        }
        if (el == window) scrollTo(0, t.scroll);
        else el.scrollTop = t.scroll;
        if (t.rAF) t.rAF = requestAnimationFrame(t.animate);
      };
      el.onmousewheel = function(e) {
        e.stopPropagation();
        if (document.getElementsByTagName('html')[0].classList.value == 'noScroll') return;
        var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
        t.target += (e.wheelDelta > 0) ? -170 : 170;
        if (t.target < 0) t.target = 0;
        if (t.target > scrollEnd) t.target = scrollEnd;
        if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
      };
      el.onscroll = function() {
        if (t.rAF || document.getElementsByTagName('html')[0].classList.value == 'noScroll') return;
        t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
        t.scroll = t.target;
      };
    }
  })


  // function init() {
  //   new SmoothScroll(document, 120, 12)
  // }
  //
  // function SmoothScroll(target, speed, smooth) {
  //   if (target === document)
  //     target = (document.scrollingElement ||
  //       document.documentElement ||
  //       document.body.parentNode ||
  //       document.body) // cross browser support for document scrolling
  //
  //   var moving = false
  //   var pos = target.scrollTop
  //   var frame = target === document.body &&
  //     document.documentElement ?
  //     document.documentElement :
  //     target // safari is the new IE
  //
  //   target.addEventListener('mousewheel', scrolled, {
  //     passive: false
  //   })
  //   target.addEventListener('DOMMouseScroll', scrolled, {
  //     passive: false
  //   })
  //
  //   function scrolled(e) {
  //     if($('html').hasClass('noScroll')){
  //       e.preventDefault();
  //       return false;
  //     } else {
  //       e.preventDefault(); // disable default scrolling
  //
  //       var delta = normalizeWheelDelta(e)
  //
  //       pos += -delta * speed
  //       pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
  //
  //       if (!moving) update()
  //     }
  //   }
  //
  //   function normalizeWheelDelta(e) {
  //     if (e.detail) {
  //       if (e.wheelDelta)
  //         return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
  //       else
  //         return -e.detail / 3 // Firefox
  //     } else
  //       return e.wheelDelta / 120 // IE,Safari,Chrome
  //   }
  //
  //   function update() {
  //     moving = true
  //
  //     var delta = (pos - target.scrollTop) / smooth
  //
  //     target.scrollTop += delta
  //
  //     if (Math.abs(delta) > 0.5)
  //       requestFrame(update)
  //     else
  //       moving = false
  //   }
  //
  //   var requestFrame = function() { // requestAnimationFrame cross browser
  //     return (
  //       window.requestAnimationFrame ||
  //       window.webkitRequestAnimationFrame ||
  //       window.mozRequestAnimationFrame ||
  //       window.oRequestAnimationFrame ||
  //       window.msRequestAnimationFrame ||
  //       function(func) {
  //         window.setTimeout(func, 1000 / 50);
  //       }
  //     );
  //   }()
  // }
  //
  // init();

  $(window).on('scroll', function(e) {
    checkMenuScroll();
    runNumberAnim();
  });

  $('.map-list__items').on('mouseenter', function(e) {
    $('html').addClass('noScroll');
  });

  $('.map-list__items').on('mouseleave', function(e) {
    $('html').removeClass('noScroll');
  });

  $('.main-call-link').on('click', function(e) {
    if ($(window).innerWidth() > 1024) {
      e.preventDefault();
      $('#modalPhone1').addClass('show');
      $('html').addClass('noScroll');
    }
  });

  $('.modal input[type="text"]').on('keyup', function(e){
    var newValue = e.target.value;
    if( newValue.match(/[^a-zA-Zа-яА-Я]/g)) {
       $(this)[0].value = newValue.substring(0, newValue.length - 1)
       return;
    }
  });
  $('.modal input[type="phone"]').mask('+7 (000) 000-00-00');

  // $(function () {
  //     $.scrollify({
  //         section: ".example-classname",
  //         sectionName: "section-name",
  //         scrollSpeed: 2000,
  //         offset: 0,
  //         scrollbars: true,
  //         touchScroll: true,
  //         overflowScroll: true,
  //         standardScrollElements: ".main-complex",
  //         setHeights: true,
  //         before: function (index, sections) {
  //             if (index >= 1) {
  //                 $('.up-btn').addClass('show');
  //                 $('.main-call-link').addClass('show');
  //             } else {
  //                 $('.up-btn').removeClass('show');
  //                 $('.main-call-link').removeClass('show');
  //             }
  //             setTimeout(function () {
  //                 $.scrollify.current().find('.main-number').addClass('active');
  //             }, 1000);
  //             $('.section').each(function() {
  //                 if( $(this).attr('data-section-name') === ref ) {
  //                     $(this).addClass('active-section');
  //                 }
  //                 else {
  //                     $(this).removeClass('active-section');
  //                 }
  //             });
  //         },
  //     });
  // });

  $('.header__btn').click(function() {
    if ($(this).attr('data-open') == 'close') {
      if ($(window).innerWidth() < 768) {
        $('.main-menu').removeClass('fadeOutUp').addClass('fadeInDown');
      } else {
        $(".main-menu__col").each(function(index) {
          var current_elem = $(this);
          setTimeout(function() {
            $(current_elem).css('opacity', '1');
            $(current_elem).addClass("fadeInRight");
          }, (index * 200));
        });
      }
      $('.main-menu').addClass('show');
      $('.main-menu').addClass('animation-menu');
      $(this).attr('data-open', 'open');
      $(this).find('img').attr('src', 'static/img/close.svg');
      //$.scrollify.disable();
      $('html').addClass('noScroll');
      $('.header-page .header__menu').addClass('show');
      $('.header').addClass('invert');
      scrollInstance = null;
    } else {
      if ($(window).innerWidth() < 768) {
        $('.main-menu').removeClass('fadeInDown').addClass('fadeOutUp');
        setTimeout(function() {
          $('.main-menu').removeClass('show');
        }, 1000);
        $('.header__logo img').attr('src', 'static/img/logo-ural-light.svg');
      } else {
        $('.main-menu').removeClass('show');
        $('.header__logo img').attr('src', 'static/img/logo-ural.svg');
      }
      $('.header').removeClass('invert');
      $(this).attr('data-open', 'close');
      $(this).find('img').attr('src', 'static/img/menu-btn.svg');
      $('html').removeClass('noScroll');
      $('ul.min-menu').removeClass('hide');
      $('.min-menu__sub').removeClass('show');
      $('.main-menu').removeClass('bg');
      $(".main-menu__col").css('opacity', '0').removeClass('fadeInRight');
      $('.header-page .header__menu').removeClass('show');
    }
  });

  $('.js-open-menu').on('click', function(e){
    e.preventDefault();
      $('.header__btn').click();
  });

  $(window).on('resize', function() {
    if ($(window).innerWidth() < 768) {
      //$.scrollify.disable();
      $('.header__logo img').attr('src', 'static/img/logo-ural-light.svg');
    } else {
      //$.scrollify.enable();
      $('.header__logo img').attr('src', 'static/img/logo-ural.svg');
    }
  });

  // if ($(window).innerWidth() < 768) {
  //     $.scrollify.disable();
  // }
  // ;

  $('.main__footer--down').click(function(e) {
    $('html, body').animate({
      scrollTop: $(`[data-section-name=main1]`).offset().top
    }, 1000);
    checkMenuScroll();
  });

  $('.up-btn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    checkMenuScroll();
  });

  $('.main-left__priority a').click(function(e) {
    e.preventDefault();
    let target = $(this).attr("href").replace('#', '');
    $('html, body').animate({
      scrollTop: $(`[data-section-name=${target}]`).offset().top
    }, 1000);
    checkMenuScroll();
  });

  $('.min-point').click(function() {
    $('.big-point.show').removeClass('show');
    $('.min-point.hide').removeClass('hide');
    $('.big-point__box.show').removeClass('show')
    var strokeImg = $(this).data('house');
    var bigPoint = $(this).parent().find('.big-point');
    var bigText = $(this).parent().find('.big-point__box');

    $('.stroke-img').removeClass('active');
    $(`.stroke-img.stroke-img--${strokeImg}`).addClass('active');

    $(this).addClass('hide');
    $(bigPoint).addClass('show');
    setTimeout(function() {
      $(bigText).addClass('show');
    }, 500);
  });

  $('.stroke-img').on('click', function() {
    let target = $(this).data('house');
    $('.big-point.show').removeClass('show');
    $('.big-point__box.show').removeClass('show');
    $('.min-point.hide').removeClass('hide');
    $(`.min-point[data-house="${target}"]`).addClass('hide');
    $(`.min-point[data-house="${target}"]`).next().addClass('show');
    setTimeout(function() {
      $(`.min-point[data-house="${target}"]`).next().next().addClass('show');
    }, 500);
    $('.stroke-img').removeClass('active');
    $(`.stroke-img.stroke-img--${target}`).addClass('active');
  });


  $('.min-menu .has-child').click(function(e) {
    e.preventDefault();
    $(this).closest('.min-menu').addClass('hide');
    $(this).parents().find('.min-menu__sub').addClass('show');
    $('.main-menu').addClass('bg');
    $('.header__logo img').attr('src', 'static/img/logo-ural-dark.svg');
    $('.header__btn img').attr('src', 'static/img/close-dark.svg');
  });

  $('.min-menu__comeback').click(function(e) {
    e.preventDefault();
    $(this).closest('ul.min-menu').removeClass('hide');
    $(this).closest('.min-menu__sub').removeClass('show');
    $('.main-menu').removeClass('bg');
    $('.header__logo img').attr('src', 'static/img/logo-ural-light.svg');
    $('.header__btn img').attr('src', 'static/img/close.svg');
  });

  /*показать модальное окно*/
  $('.btn-modal').click(function(e) {
    e.preventDefault();
    var idModal = $(this).attr('data-modal');
    $('#' + idModal).addClass('show');
    $('html').addClass('noScroll');
  });

  /*отлавливаю клин вне области модального окна*/
  // $(document).mouseup(function (e) {

  // });

  $('.modal').on('click', function(e) {
    var div = $(".modal__content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.modal').removeClass('show');
      $('html').removeClass('noScroll');
    }
  })

})(jQuery);
