;(function ($) {
    var projectComfortable = new Swiper('.project-comfortable__swiper', {
        slidesPerView: 1,
        speed: 400,
        autoplay: true,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.project-comfortable-next',
            prevEl: '.project-comfortable-prev',
        },
    });

    var projectDget = new Swiper('.project-dget__swiper', {
        slidesPerView: 1,
        speed: 400,
        autoplay: true,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.project-dget-next',
            prevEl: '.project-dget-prev',
        },
    });

    var projectDetails = new Swiper('.project-details__swiper', {
        slidesPerView: 1,
        speed: 400,
        autoplay: true,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.project-details-next',
            prevEl: '.project-details-prev',
        },
    });

    var projectYard = new Swiper('.project-yard__swiper', {
        slidesPerView: 1,
        speed: 400,
        autoplay: true,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.project-yard-next',
            prevEl: '.project-yard-prev',
        },
    });

    var projectYard2 = new Swiper('.project-yard2__swiper', {
        slidesPerView: 1,
        speed: 400,
        autoplay: true,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.project-yard2-next',
            prevEl: '.project-yard2-prev',
        },
    });

    //var sliderProject = $('.project-progress__tab.active').find('.project-progress__swiper');


    const sliderProject = new Swiper($('.project-progress__tab.active').find('.project-progress__swiper'), {
        slidesPerView: 'auto',
        spaceBetween: 80,
        loop: true,
        autoplay: false,
    });

    $('.tab__item').click(function () {
        var idTab = $(this).attr('data-tab');

        if (!($(this).hasClass('active'))) {
            $('.tab__item.active').removeClass('active');
            $(this).addClass('active');
            $('.project-progress__tab.active').removeClass('active');

            $('.project-progress__tab[id=' + idTab + ']').addClass('active');
            var sliderProject = new Swiper($('.project-progress__tab.active').find('.project-progress__swiper'), {
                slidesPerView: 'auto',
                spaceBetween: 80,
                loop: true,
                autoplay: false,
            });
        }
    });

    $('.swiper-slide .project-progress__more').click(function () {
        if (!($(this).hasClass('is-active'))) {
            $(this).addClass('is-active').html('Скрыть');
            $(this).prev().find('.project-progress__info').addClass('show');
        } else {
            $(this).removeClass('is-active').html('Описание работ');
            $(this).prev().find('.project-progress__info').removeClass('show');
        }
    });

    $('.project-info__item .circle').click(function () {
        if (!($(this).hasClass('active'))) {
            $(this).addClass('active').html($(this).attr('data-info'));
            $(this).parents().addClass('active');
        } else {
            $(this).removeClass('active').html('+');
            $(this).parents().removeClass('active');
        }
    });

    $('.info-col__more').click(function () {
        if (!($(this).hasClass('active'))) {
            $(this).addClass('active').html("Скрыть");
            $(this).parents().find('.info-col__wrap').addClass('active');
        } else {
            $(this).removeClass('active').html('Подробнее');
            $(this).parents().find('.info-col__wrap').removeClass('active');
        }
    });

    $('.project-main__nav li a').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    /*map*/

    function initMap(){
        var aboutContactsMap = new ymaps.Map('project-ymap', {
            center: [56.845189, 53.222175],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        },{
            searchControlProvider: 'yandex#search'
        });

        aboutContactsMap.behaviors.disable('scrollZoom')

        var Placemark = new ymaps.Placemark(aboutContactsMap.getCenter(), {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://i.ibb.co/gzJdSSb/logo-map1.png',
            iconImageSize: [62, 80],
            iconImageOffset: [-30, -80]
        });

        aboutContactsMap.geoObjects.add(Placemark);
    }

    if($('.project-map').length > 0){
        console.log('1');
        ymaps.ready(initMap);
    }
})(jQuery);
