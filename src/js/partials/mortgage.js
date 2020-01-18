$('.mortgage-offer__item').click(function () {
    var position = $(this).attr('data-position');

    if (!($(this).hasClass('active'))) {
        $('.mortgage-offer__item.active').removeClass('active');
        $(this).addClass('active');
        $('.mortgage-bank').removeClass('left right').addClass('active');

        if (((position % 4) == 3) || ((position % 4) == 0)) {
            $('.mortgage-bank').addClass('left');
        } else {
            $('.mortgage-bank').addClass('right');
        }
    }
});

$('.mortgage-bank__close').click(function () {
    $(this).closest('.mortgage-bank').removeClass('active left right');
    $('.mortgage-offer__item.active').removeClass('active');
});


// slider

$(function () {
    $(".price-slider").slider({
        min: 35000,
        max: 1000000,
        animate: true,
        value: 500000,

        create: function () {
            $(this).find('.ui-slider-handle span').text($(this).slider("value") + ' ₽');
            $(this).find('.form-slider__min').text($(this).attr('data-min') + ' ₽');
            $(this).find('.form-slider__max').text($(this).attr('data-max') + ' ₽');
        },
        slide: function (event, ui) {
            $(this).find('.ui-slider-handle span').text(ui.value + ' ₽');
        }
    });
});

$(function () {
    $(".rate-slider").slider({
        min: 5,
        max: 30,
        animate: true,
        value: 17,

        create: function () {
            $(this).find('.ui-slider-handle span').text($(this).slider("value") + ' лeт');
            $(this).find('.form-slider__min').text($(this).attr('data-min') + ' лет');
            $(this).find('.form-slider__max').text($(this).attr('data-max') + ' лет');
        },
        slide: function (event, ui) {
            $(this).find('.ui-slider-handle span').text(ui.value + ' лeт');
        }
    });
});
