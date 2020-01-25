(function ($) {
  let scrollTopVal = 0;
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

    $(window).on('scroll',function(e){
      scrollTopVal = $(this).scrollTop();
      // if(scrollTopVal > $('.header').height() + 130){
      //   $('.header').addClass('hidden');
      // } else {
      //   $('.header').removeClass('hidden');
      // }

      if( scrollTopVal > $('.main').height()){
        $('.header').addClass('hidden');
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
        $('.header').removeClass('hidden');
      }

    })

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
            $.scrollify.disable();
            //$('html').addClass('noScroll');
            $('.header-page .header__menu').addClass('show');

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
            $.scrollify.disable();
            $('.header__logo img').attr('src', 'static/img/logo-ural-light.svg');
        } else {
            $.scrollify.enable();
            $('.header__logo img').attr('src', 'static/img/logo-ural.svg');
        }
    });

    if ($(window).innerWidth() < 768) {
        $.scrollify.disable();
    }
    ;

    $('.main__footer--down').click(function (e) {
        $.scrollify.next();
    });

    $('.up-btn').click(function () {
        $.scrollify.previous();
    });

    $('.main-left__priority a').click(function (e) {
        e.preventDefault();
        console.log($(this).attr("href"));
        $.scrollify.move($(this).attr("href"));
    });

    $('.min-point').click(function () {
        $('.big-point.show').removeClass('show');
        $('.min-point.hide').removeClass('hide');
        $('.big-point__box.show').removeClass('show')

        var bigPoint = $(this).parent().find('.big-point');
        var bigText = $(this).parent().find('.big-point__box');

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
    $(document).mouseup(function (e) {
        var div = $(".modal__content");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.modal').removeClass('show');
            $('html').removeClass('noScroll');
        }
    });

})(jQuery);
