$(document).ready(function(){
    var 
    modalWindow__button_close = $('.modal-window__button_close'),

    talents = $('#talents'),
    talentsBtn = $('#talentsBtn'),
    talentsModule = $('#talentsModule'),

    coach = $('#coach'),
    coachModule = $('#coachModule'),
    coachBtn = $('#coachBtn'),

    facilitation = $('#facilitation'),
    facilitationModule = $('#facilitationModule'),
    facilitationBtn = $('#facilitationBtn'),

    leaders = $('#leaders'),
    leadersModule = $('#leadersModule'),
    leadersBtn = $('#leadersBtn'),
    
    salesDep = $("#SalesDep"),
    salesDepBtn = $("#SalesDepBtn"),
    salesDepModule = $("#SalesDepModule"),

    
    valuesBtn = $('#valuesBtn'),
    valuesModule = $('#valuesModule'),
    buttonModal = $(".button_modal"),
    workModal = $(".work-modal"),
    workModalSubstrate = $(".work-modal__substrate"),
    
    face = $("#face"),
    work = $("#work"),
    consultation = $("#consultation"),
    footer = $("#footer"),
    experience = $("#experience"),
    approach = $("#approach"),
    modalWorkNonSection = $(".modal-window_non-section");

    talents.on('click', function(){
        talentsModule.css('display', 'flex');
    })

    talentsBtn.on('click', function(){
        talentsModule.css('display', 'flex');
        talentsModule.css('z-index', '150');

    })

    facilitation.on('click', function(){
        facilitationModule.css('display', 'flex');
    })

    facilitationBtn.on('click', function(){
        facilitationModule.css('display', 'flex');
        facilitationModule.css('z-index', '150');

    })

    leaders.on('click', function(){
        leadersModule.css('display', 'flex');
    })

    leadersBtn.on('click', function(){
        leadersModule.css('display', 'flex');
        leadersModule.css('z-index', '150');

    })

    coach.on('click', function(){
        coachModule.css('display', 'flex');
    })

    coachBtn.on('click', function(){
        coachModule.css('display', 'flex');
        coachModule.css('z-index', '150');

    })

    salesDep.on('click', function(){
        salesDepModule.css('display', 'flex');
    })

    salesDepBtn.on('click', function(){
        salesDepModule.css('display', 'flex');
        salesDepModule.css('z-index', '150');

    })

    valuesBtn.on('click', function(){
        valuesModule.css('display', 'flex');
        valuesModule.css('z-index', '150');
    })


    modalWindow__button_close.on('click', function(){
        $(".modal-window").css('display', 'none');
    })

    buttonModal.on('click', function(){
        modalWorkNonSection.css('display', 'flex');
        // modalWorkNonSection.css('display', 'flex');
        workModalSubstrate.css('display', 'none');
        face.css('display', 'none');
        work.css('display', 'none');
        experience.css('display', 'none');
        approach.css('display', 'none');
        consultation.css('display', 'none');
        footer.css('display', 'none');
    })


})