$(document).ready(function(){

    var
    face = $("#face"),
    work = $("#work"),
    consultation = $("#consultation"),
    footer = $("#footer")
    experienceButton = $("#experience-button"),
    experienceModal = $("#experience-modal"),
    experienceClose = $("#modal-experince_close"),
    approach = $("#approach");



    experienceButton.on('click', function(){
        experienceModal.css('display', 'flex');
        face.css('display', 'none');
        work.css('display', 'none');
        approach.css('display', 'none');
        consultation.css('display', 'none');
        footer.css('display', 'none');
        })
        
        experienceClose.on('click', function(){
            experienceModal.css('display', 'none');
            face.css('display', 'block');
            work.css('display', 'block');
            approach.css('display', 'block');
            consultation.css('display', 'block');
            footer.css('display', 'block');
        })

})