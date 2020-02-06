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
    $('.map-list__more').click(function () {
        if (!($(this).hasClass('active'))) {
            $(this).addClass('active');
            $(this).find('p').html("Скрыть");
            $(this).prev().addClass('active');
        } else {
            $(this).removeClass('active');
            $(this).find('p').html("Все обозначения");
            $(this).prev().removeClass('active');
            $(this).prev().scrollTop(0);
        }
    });

    $('.project-main__nav li a').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    /*map*/

    let schoolCollection = null;
    let kgCollection = null;
    let medCollection = null;
    let bankCollection = null;
    let parkCollection = null;
    let gymCollection = null;
    let storeCollection = null;
    let cafeCollection = null;

    let buildMark = null;

    let aboutContactsMap = null;

    let schoolCoords = [[56.876261, 53.180225],[56.876834, 53.193749],[56.875479, 53.207748],[56.875896, 53.222415]];
    let kgCoords = [[56.869481, 53.170702],[56.870107, 53.189558],[56.871672, 53.208225],[56.869898, 53.222891]];
    let medCoords = [[56.861031, 53.177273],[56.860562, 53.190606],[56.861083, 53.209558],[56.865778, 53.222891]];
    let bankCoords = [[56.852118, 53.212259],[56.853720, 53.195501],[56.857972, 53.176831],[56.861607, 53.226206]];
    let parkCoords = [[56.846695, 53.226318],[56.842010, 53.214846],[56.842996, 53.235991],[56.835661, 53.206411]];
    let gymCoords = [[56.932495, 53.204871],[56.927885, 53.935015],[56.102373, 53.27548],[56.320598, 53.414943]];
    let storeCoords = [[56.532495, 53.594871],[56.627885, 53.635015],[56.702373, 53.787548],[56.820598, 53.814943]];
    let cafeCoords = [[56.932495, 53.994871],[56.027885, 53.035015],[56.002373, 53.087548],[56.020598, 53.014943]];


    function initMap(){
      let lat = +$('#project-ymap').data('lat');
      let long = +$('#project-ymap').data('long');
        aboutContactsMap = new ymaps.Map('project-ymap', {
            center: [lat,long],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        },{
            searchControlProvider: 'yandex#search'
        });

        aboutContactsMap.behaviors.disable('scrollZoom')

        buildMark = new ymaps.Placemark(aboutContactsMap.getCenter(), {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://i.ibb.co/gzJdSSb/logo-map1.png',
            iconImageSize: [62, 80],
            iconImageOffset: [-30, -80]
        });

        aboutContactsMap.geoObjects.add(buildMark);

        schoolCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/school.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        kgCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/gargen.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        medCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/med.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        bankCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/bank.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        parkCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/park.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        gymCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/gym.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        storeCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/park.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });
        cafeCollection = new ymaps.GeoObjectCollection(null, {
          iconLayout: 'default#image',
          iconImageHref: '/static/img/park.png',
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -20]
        });

        schoolCoords.forEach(function(item,i){
          schoolCollection.add(new ymaps.Placemark(schoolCoords[i]));
        });
        kgCoords.forEach(function(item,i){
          kgCollection.add(new ymaps.Placemark(kgCoords[i]));
        });
        medCoords.forEach(function(item,i){
          medCollection.add(new ymaps.Placemark(medCoords[i]));
        });
        bankCoords.forEach(function(item,i){
          bankCollection.add(new ymaps.Placemark(bankCoords[i]));
        });
        parkCoords.forEach(function(item,i){
          parkCollection.add(new ymaps.Placemark(parkCoords[i]));
        });
        gymCoords.forEach(function(item,i){
          gymCollection.add(new ymaps.Placemark(gymCoords[i]));
        });
        storeCoords.forEach(function(item,i){
          storeCollection.add(new ymaps.Placemark(storeCoords[i]));
        });
        cafeCoords.forEach(function(item,i){
          cafeCollection.add(new ymaps.Placemark(cafeCoords[i]));
        });

        aboutContactsMap.geoObjects.add(schoolCollection);
        aboutContactsMap.geoObjects.add(kgCollection);
        aboutContactsMap.geoObjects.add(medCollection);
        aboutContactsMap.geoObjects.add(bankCollection);
        aboutContactsMap.geoObjects.add(parkCollection);
        aboutContactsMap.geoObjects.add(gymCollection);
        aboutContactsMap.geoObjects.add(storeCollection);
        aboutContactsMap.geoObjects.add(cafeCollection);
    }

    if($('.project-map').length > 0){
        ymaps.ready(initMap);

        $('.js-change-map').on('click',function(){

          let target = $(this).data('target');

          switch (target) {
            case 'school':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(schoolCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(schoolCollection);
                }
              break;
            case 'garden':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(kgCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(kgCollection);
                }
              break;
            case 'med':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(medCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(medCollection);
                }
              break;
            case 'bank':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(bankCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(bankCollection);
                }
              break;
            case 'park':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(parkCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(parkCollection);
                }
              break;
            case 'gym':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(gymCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(gymCollection);
                }
              break;
            case 'store':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(storeCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(storeCollection);
                }
              break;
            case 'cafe':
                if($(this).hasClass('disable')){
                  $(this).removeClass('disable');
                  aboutContactsMap.geoObjects.add(cafeCollection);
                } else {
                  $(this).addClass('disable')
                  aboutContactsMap.geoObjects.remove(cafeCollection);
                }
              break;

            default:

          }

        });
        if ($('.map-list__items > div').length > 6) {
          $('.map-list__more').addClass('show');
        } else {
          $('.map-list__more').addClass('hide');
        }
    }
})(jQuery);
