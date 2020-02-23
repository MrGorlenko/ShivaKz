$(document).ready(function(){
    var
    workImg = $(".work-info__img"),
    face = $("#face"),
    work = $("#work"),
    consultation = $("#consultation"),
    footer = $("#footer"),
    experience = $("#experience"),
    approach = $("#approach"),
    workInfo = $("#work-info"),
    modalWindowClose = $(".modal-window__button_close");


    workImg.on('click', function(){
        face.css('display', 'none');
        experience.css('display', 'none');
        approach.css('display', 'none');
        consultation.css('display', 'none');
        workInfo.css('display', 'none');
        footer.css('display', 'none');
        })

    modalWindowClose.on('click', function(){
        face.css('display', 'block');
        experience.css('display', 'block');
        approach.css('display', 'block');
        consultation.css('display', 'block');
        workInfo.css('display', 'grid');
        footer.css('display', 'block');
    })




})