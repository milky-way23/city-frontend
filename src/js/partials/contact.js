;(function($){
    function initMap(){
        var aboutContactsMap = new ymaps.Map('map', {
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

    if($('.contact-map').length > 0){
        console.log('1');
        ymaps.ready(initMap);
    }

})(jQuery);
