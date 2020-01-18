;(function($){

    let swiperNavigation = null;

    $(window).on('resize',function(){
        if( $(this).innerWidth() < 1025 && (swiperNavigation == null || swiperNavigation.destroyed) && $('.js-navigation-swiper').length > 0){
            setScrollMenu();
        }
        if( $(this).innerWidth() > 1024 && swiperNavigation){
            if(swiperNavigation.initialized != false){
                swiperNavigation.destroy();
            }
            swiperNavigation = null;
        }
    });


    function setScrollMenu(){
        swiperNavigation = new Swiper('.js-navigation-swiper',{
            loop:false,
            slidesPerColumn:1,
            slidesPerView: 'auto',
            freeMode: true,
            noSwiping: false,
        });
    };

    $(window).on('load',function(){
        $(this).trigger('resize');
    });

})(jQuery);
