;(function ($) {
    $('.visual__floor').mousemove(function (e) {
        var y = e.pageY - $(this).offset().top;
        $(".house-floor").hover(function () {
            $('.floor-data__floor').html($(this).attr('data-floor'));
            $('.floor-data__flats').html($(this).attr('data-flat'));
            $('.floor-data').addClass('show');
            $('.floor-data').css('top', y - 20);
        });
    });
})(jQuery);
