;(function ($) {
    var title = $('.life__question');
    var next = $('.js-first-block .btn-line');

    $('.life-group__input').click(function () {
        console.log($(this));
        $(this).parents().attr('data-next', $(this).attr('data-option'));
        $(this).parents().find('.life__btn .btn-line').removeAttr('disabled');
        $(this).parents().parents().find('.life__btn').find('.btn-line').attr('data-next', $('.life__wrap.active').attr('data-next'))
    });

    /*$(comeback).click(function(e) {
        e.preventDefault();
        if (!($(this).hasClass('disabled'))){
            $('.life__wrap.active').removeClass('active');
            $('#' + $(this).attr('data-prev') ).addClass('active');

            $(title).html($('.life__wrap.active').attr('data-title'));
        }
    });*/

    $('.life__wrap.active .life__btn .btn-line').click(function (e) {
        e.preventDefault();
        $('.life__wrap.active').removeClass('active');
        $('#' +  $(this).attr('data-next')).addClass('active');
    })

})(jQuery);

