(function($){
    $(window).on("load",function(){
        $(".flats__list--body").mCustomScrollbar();
    });

    $( function() {
        $( "#slider-floor" ).slider({
            range: true,
            min: 1,
            max: 24,
            values: [ 1, 24 ],
            slide: function( event, ui ) {
                $(this).find('.ui-slider-handle').first().find('b').text(ui.values[ 0 ]);
                $(this).find('.ui-slider-handle').last().find('b').text(ui.values[ 1 ]);
            },

            create: function ( ) {
                $(this).find('.ui-slider-handle').first().html('<b>' + $(this).slider("option", "min") + '<b>');
                $(this).find('.ui-slider-handle').last().html('<b>' + $(this).slider("option", "max") + '<b>');
            }
        });
    });

    $( function() {
        $( "#slider-square" ).slider({
            range: true,
            min: 26,
            max: 128,
            step: 0.1,
            values: [ 26, 128 ],
            slide: function( event, ui ) {
                $(this).find('.ui-slider-handle').first().find('b').text(ui.values[ 0 ]);
                $(this).find('.ui-slider-handle').last().find('b').text(ui.values[ 1 ]);
            },

            create: function ( ) {
                $(this).find('.ui-slider-handle').first().html('<b>' + $(this).slider("option", "min") + '<b>');
                $(this).find('.ui-slider-handle').last().html('<b>' + $(this).slider("option", "max") + '<b>');
            }
        });
    });

    $( function() {
        $( "#slider-cost" ).slider({
            range: true,
            min: 2.6,
            max: 11.8,
            step: 0.1,
            values: [ 2.6, 11.8 ],
            slide: function( event, ui ) {
                $(this).find('.ui-slider-handle').first().find('b').text(ui.values[ 0 ]);
                $(this).find('.ui-slider-handle').last().find('b').text(ui.values[ 1 ]);
            },

            create: function ( ) {
                $(this).find('.ui-slider-handle').first().html('<b>' + $(this).slider("option", "min") + '<b>');
                $(this).find('.ui-slider-handle').last().html('<b>' + $(this).slider("option", "max") + '<b>');
            }
        });
    });


    $.widget( 'app.selectmenu', $.ui.selectmenu, {
        _drawButton: function() {
            this._super();
            var selected = this.element
                    .find( '[selected]' )
                    .length,
                placeholder = this.options.placeholder;

            if (!selected && placeholder) {
                this.buttonItem.text(placeholder);
            }
        }
    });
    $( function() {
        $("#nameHouse").selectmenu({
            placeholder: 'Выберите ЖК',
        });
    });

    $('.show-tab__item').click(function () {
        if (!($(this).hasClass('active'))) {
            $('.show-tab__item.active').removeClass('active');
            $(this).addClass('active');
            $('.form-check-group input').attr('data-tab', $(this).attr('id'))
        }
    });


    $('.form-check-group input, .show-tab__item').click(function(){
      console.log('asdasd');
        if($('.form-check-group input').prop("checked") == true){
            if ($('.form-check-group input').attr('data-tab') == 'show-list') {
                $('.tabs-flats.show').removeClass('show');
                $('#flats').addClass('show');
            } else {
                $('.tabs-flats.show').removeClass('show');
                $('#tile-group').addClass('show');
            }
        }
        else if($('.form-check-group input').prop("checked") == false){
            if ($('.form-check-group input').attr('data-tab') == 'show-list') {
                $('.tabs-flats.show').removeClass('show');
                $('#flats-list').addClass('show');
            } else {
                $('.tabs-flats.show').removeClass('show');
                $('#tile').addClass('show');
            }
        }
    });

})(jQuery);
