$(document).ready(function(){

    var
    consultationButtonClose = $(".consultation__button_close"),
    consultationModal = $(".consultation__modal"),
    
    subconsciousButton = $("#subconsciousButton"),
    subconsciousModale = $("#subconsciousModale"),

    creedsButton = $("#creedsButton"),
    creedsModale = $("#creedsModale"),

    face = $("#face"),
    work = $("#work"),
    footer = $("#footer"),
    experience = $("#experience"),
    approach = $("#approach");

    $('#consultation-slider').slick({

    })


    consultationButtonClose.on('click', function(){
        consultationModal.css('display', 'none');
        face.css('display', 'block');
        work.css('display', 'block');
        experience.css('display', 'block');
        approach.css('display', 'block');
        footer.css('display', 'block');
    })

    subconsciousButton.on('click', function(){
        subconsciousModale.css('display', 'flex');
        face.css('display', 'none');
        work.css('display', 'none');
        experience.css('display', 'none');
        approach.css('display', 'none');
        footer.css('display', 'none');
    })


    creedsButton.on('click', function(){
        creedsModale.css('display', 'flex');
        face.css('display', 'none');
        work.css('display', 'none');
        experience.css('display', 'none');
        approach.css('display', 'none');
        footer.css('display', 'none');
    })



})