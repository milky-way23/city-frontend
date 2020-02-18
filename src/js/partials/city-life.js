;(function ($) {
    var title = $('.life__question');
    var next = $('.js-first-block .btn-line');

    $('.life-group__input').click(function (e) {
        console.log($(this));
        $(this).parents().attr('data-next', $(this).attr('data-option'));
        $(this).parents().find('.life__btn .btn-line').removeAttr('disabled');
        $(this).parents().parents().find('.life__btn').find('.btn-line').attr('data-next', $('.life__wrap.active').attr('data-next'))
    });
    

    $('.life__btn a').on('click',function(e){
      console.log('asd');
      e.preventDefault();
      if (!($(this).hasClass('disabled'))){
        $('.life__wrap.active').removeClass('active');
        $(`#${$(this).attr("data-prev")}`).addClass('active');
        $(title).html($('.life__wrap.active').attr('data-title'));
      }
    });

    $('.life__wrap .life__btn .btn-line').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('data-next');
        if (target == "finish"){
          let form = $('.js-answer-form');
          let formData = new FormData();
          let that = $(this);
          $('.life-group input:checked').each((i, item) => {
            formData.append($(item).attr('id'), $(item).val());
          });

          $.ajax({
            url: '/city-life.html',
            data: formData,
            method: "POST",
            processData: false,
            contentType: false,
            success: function(){
              console.log('1');
              //TODO add output

            },
            error: function(){
              console.log('2');
              alert('something goes wrong! try again later');
            },
            complete: function(){
              $('.life__wrap.active').removeClass('active');
              $('#' +  that.attr('data-next')).addClass('active');
              that.html($('.life__wrap.active').attr('data-title'));
              $('#' +  that.attr('data-next')).find('.life__btn a').removeClass('disabled');
            }
          })


        } else {
          $('.life__wrap.active').removeClass('active');
          $('#' +  $(this).attr('data-next')).addClass('active');
          $(title).html($('.life__wrap.active').attr('data-title'));
          $('#' +  $(this).attr('data-next')).find('.life__btn a').removeClass('disabled');
        }
    });





})(jQuery);
