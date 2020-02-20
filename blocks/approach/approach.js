$(document).ready(function(){
var 
face = $("#face"),
work = $("#work"),
approachButton = $("#approach-button"),
approachModal = $("#approach-modal"),
approachClose = $("#modal-approach_close"),
experience = $("#experience"),
consultation = $("#consultation"),
footer = $("#footer");

approachButton.on('click', function(){
approachModal.css('display', 'flex');
face.css('display', 'none');
work.css('display', 'none');
experience.css('display', 'none');
consultation.css('display', 'none');
footer.css('display', 'none');
})

approachClose.on('click', function(){
    approachModal.css('display', 'none');
    face.css('display', 'block');
    work.css('display', 'block');
    experience.css('display', 'block');
    consultation.css('display', 'block');
    footer.css('display', 'block');
})

    })