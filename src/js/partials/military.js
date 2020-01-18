;(function($){
$('.military-price__header').click( function () {
   if ($(this).parent().hasClass('active')) {
       $(this).parent().removeClass('active');
   } else {
       $(this).parent().addClass('active');
   }
});
})(jQuery);
