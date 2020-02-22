$(document).ready(function(){
    var
    workImg = $(".work-info__img"),
    face = $("#face"),
    work = $("#work"),
    consultation = $("#consultation"),
    footer = $("#footer"),
    experience = $("#experience"),
    approach = $("#approach"),
    modalWindowClose = $("#modal-window_close");


    workImg.on('click', function(){
        face.css('display', 'none');
        experience.css('display', 'none');
        approach.css('display', 'none');
        consultation.css('display', 'none');
        footer.css('display', 'none');
        })

    modalWindowClose.on('click', function(){
        face.css('display', 'block');
        experience.css('display', 'block');
        approach.css('display', 'block');
        consultation.css('display', 'block');
        footer.css('display', 'block');
    })




})