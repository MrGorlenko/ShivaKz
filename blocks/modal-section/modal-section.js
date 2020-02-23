$(document).ready(function(){

    var 
    talentsPage = $("#talentsPage"),
    talentsButton = $("#talentsButton"),
    buttonClose = $(".button_close");

    talentsButton.on('click', function(){
        talentsPage.css('display', 'flex');
        talentsPage.css('z-index', '110');
    })

    buttonClose.on('click', function(){
        talentsPage.css('display', 'none');
        talentsPage.css('z-index', '1')
    })

})