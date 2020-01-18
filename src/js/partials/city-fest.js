;(function ($) {
    var projectCity2 = new Swiper('.city-block2__swiper', {
        slidesPerView: 1,
        autoplay: false,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.city-block2-next',
            prevEl: '.city-block2-prev',
        },
    });

    var cityGallery = new Swiper('.city-gallery__swiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: false,
        spaceBetween: 80,
        loop: true,

        navigation: {
            nextEl: '.city-gallery-next',
            prevEl: '.city-gallery-prev',
        },
    });

    var citySlider = new Swiper('.city-slider__swiper', {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 80,
        loop: true,

        navigation: {
            nextEl: '.city-slider-next',
            prevEl: '.city-slider-prev',
        },
    });

    var cityInsta = new Swiper('.city-instagram-swiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: false,
        spaceBetween: 60,
        loop: true,

        pagination: {
            el: '.city-instagram-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
})(jQuery);
