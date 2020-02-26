(function ($) {
  let scrollTopVal = 0;
  let scrollInstance = null;
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').addClass('hide');
            $('.wrap-main').addClass('anim');

        //}, 5000);
        }, 0);
        setTimeout(function () {
          $('.main-left .btn-yellow-border').addClass('anim-off');
          $('.main-menu__footer--phone').addClass('anim-off');
        //}, 5000);
      }, 1000);
    });

    function checkMenuScroll(){
      scrollTopVal = $(window).scrollTop();

      if(scrollTopVal > $('.header').height() + 130){
        $('.header').addClass('hidden');
        $('body').addClass('padding-top');
      } else {
        $('.header').removeClass('hidden');
        $('body').removeClass('padding-top');
      }

      if( scrollTopVal > $(window).height()){
        $('.header').addClass('fixed');
        $('.up-btn').addClass('show');
        $('.main-call-link').addClass('show');
      } else {
        $('.header').removeClass('fixed');
        $('.up-btn').removeClass('show');
        $('.main-call-link').removeClass('show');
      }
    }

    function runNumberAnim(){
      scrollTopVal = $(window).scrollTop() + ($(window).height() / 2);
      $('[data-section-name]').each(function(){
        if(scrollTopVal >= $(this).offset().top){
          $(this).find('.main-number').addClass('active');
        }
        if($(this).data('section-name') == 'main1'){
          $('.sparrow').addClass('active');
        }
      })
    }

    scrollInstance = new SmoothScroll();

    function SmoothScroll(el) {
        var t = this, h = document.documentElement;
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
          e.preventDefault();
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

    $(window).on('scroll',function(e){
      checkMenuScroll();
      runNumberAnim();
    });

    $('.map-list__items').on('mouseenter',function(e){
      $('html').addClass('noScroll');
    });

    $('.map-list__items').on('mouseleave',function(e){
      $('html').removeClass('noScroll');
    });

    $('.main-call-link').on('click', function(e){
      if( $(window).innerWidth() > 1024){
        e.preventDefault();
        console.log('asd');
        $('#modalPhone1').addClass('show');
        $('html').addClass('noScroll');
      }
    });

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

    $('.header__btn').click(function () {
        if ($(this).attr('data-open') == 'close') {
            if ($(window).innerWidth() < 768) {
                $('.main-menu').removeClass('fadeOutUp').addClass('fadeInDown');
            } else {
                $(".main-menu__col").each(function (index) {
                    var current_elem = $(this);
                    setTimeout(function () {
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
                setTimeout(function () {
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
            $.scrollify.enable();
            $('html').removeClass('noScroll');
            $('ul.min-menu').removeClass('hide');
            $('.min-menu__sub').removeClass('show');
            $('.main-menu').removeClass('bg');
            $(".main-menu__col").css('opacity', '0').removeClass('fadeInRight');
            $('.header-page .header__menu').removeClass('show');
        }
    });

    $(window).on('resize', function () {
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

    $('.main__footer--down').click(function (e) {
      $('html, body').animate({
        scrollTop: $(`[data-section-name=main1]`).offset().top
      }, 1000);
      checkMenuScroll();
    });

    $('.up-btn').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      checkMenuScroll();
    });

    $('.main-left__priority a').click(function (e) {
        e.preventDefault();
        let target = $(this).attr("href").replace('#','');
        $('html, body').animate({
          scrollTop: $(`[data-section-name=${target}]`).offset().top
        }, 1000);
        checkMenuScroll();
    });

    $('.min-point').click(function () {
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
        setTimeout(function () {
            $(bigText).addClass('show');
        }, 500);
    });


    $('.min-menu .has-child').click(function (e) {
        e.preventDefault();
        $(this).closest('.min-menu').addClass('hide');
        $(this).parents().find('.min-menu__sub').addClass('show');
        $('.main-menu').addClass('bg');
        $('.header__logo img').attr('src', 'static/img/logo-ural-dark.svg');
        $('.header__btn img').attr('src', 'static/img/close-dark.svg');
    });

    $('.min-menu__comeback').click(function (e) {
        console.log('1');
        e.preventDefault();
        $(this).closest('ul.min-menu').removeClass('hide');
        $(this).closest('.min-menu__sub').removeClass('show');
        $('.main-menu').removeClass('bg');
        $('.header__logo img').attr('src', 'static/img/logo-ural-light.svg');
        $('.header__btn img').attr('src', 'static/img/close.svg');
    });

    /*показать модальное окно*/
    $('.btn-modal').click(function (e) {
        e.preventDefault();
        var idModal = $(this).attr('data-modal');
        $('#' + idModal).addClass('show');
        $('html').addClass('noScroll');
    });

    /*отлавливаю клин вне области модального окна*/
    // $(document).mouseup(function (e) {

    // });

    $('.modal').on('click',function(e){
      var div = $(".modal__content");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.modal').removeClass('show');
          $('html').removeClass('noScroll');
      }
    })

})(jQuery);
