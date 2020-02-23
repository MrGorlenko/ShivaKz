$(document).ready(function(){

    var workModal = $('#work-modal'),
     buttonWork = $('#button_work'),
     buttonClose = $('#button_close'),
     modalSubstrate = $('.work-modal__substrate'),
     body = $('.body'),
     buttonModal = $(".button_modal"),
     
     
     face = $("#face"),
     work = $("#work"),
     consultation = $("#consultation"),
     footer = $("#footer"),
     experience = $("#experience"),
     approach = $("#approach");


    $('#work-modal__slider').slick({
        infinite: true,
        responsive:[{
            breakpoint: 576,
            settings: {
                dots: true,
                arrows: false
            }
          }
        ]
    });


    buttonWork.on('click', function(){
        workModal.css('visibility', 'visible');
        workModal.css('display', 'flex');
        modalSubstrate.css('display', 'block');
    });

    buttonClose.on('click', function(){
        workModal.css('visibility', 'hidden');
        modalSubstrate.css('display', 'none');
    });


    
});

