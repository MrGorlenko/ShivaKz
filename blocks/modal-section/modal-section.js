$(document).ready(function(){

    var 
    talentsPage = $("#talentsPage"),
    talentsButton = $("#talentsButton"),

    facilitationPage = $("#facilitationPage"),
    facilitationButton = $("#facilitationButton"),

    leadersPage = $("#leadersPage"),
    leadersButton = $("#leadersButton"),

    coachPage = $("#coachPage"),
    coachButton = $("#coachButton"),

    valuesPage = $("#valuesPage"),
    valuesButton = $("#valuesButton"),

    buttonClose = $(".button_close");

    talentsButton.on('click', function(){
        talentsPage.css('display', 'flex');
        talentsPage.css('z-index', '110');
    })

    facilitationButton.on('click', function(){
        facilitationPage.css('display', 'flex');
        facilitationPage.css('z-index', '110');
    })

    leadersButton.on('click', function(){
        leadersPage.css('display', 'flex');
        leadersPage.css('z-index', '110');
    })

    coachButton.on('click', function(){
        coachPage.css('display', 'flex');
        coachPage.css('z-index', '110');
    })

    valuesButton.on('click', function(){
        valuesPage.css('display', 'flex');
        valuesPage.css('z-index', '110');
    })

    buttonClose.on('click', function(){
        talentsPage.css('display', 'none');
        talentsPage.css('z-index', '1')
    })

    buttonClose.on('click', function(){
        facilitationPage.css('display', 'none');
        facilitationPage.css('z-index', '1')
    })

    buttonClose.on('click', function(){
        leadersPage.css('display', 'none');
        leadersPage.css('z-index', '1')
    })

    buttonClose.on('click', function(){
        coachPage.css('display', 'none');
        coachPage.css('z-index', '1')
    })
    
    buttonClose.on('click', function(){
        valuesPage.css('display', 'none');
        valuesPage.css('z-index', '1')
    })

})