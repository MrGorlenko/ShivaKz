$(document).ready(function(){

    var workModal = $('#work-modal'),
     buttonWork = $('#button_work'),
     buttonClose = $('#button_close'),
     modalSubstrate = $('.work-modal__substrate'),
     body = $('.body');


    $('#work-modal__slider').slick({
        infinite: true
    });


    buttonWork.on('click', function(){
        workModal.css('visibility', 'visible');
        modalSubstrate.css('display', 'block');
        body.css('overflow', 'hidden')
    });

    buttonClose.on('click', function(){
        workModal.css('visibility', 'hidden');
        modalSubstrate.css('display', 'none');
        body.css('overflow', 'initial')
    });
    
});

