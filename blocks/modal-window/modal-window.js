$(document).ready(function(){
    var CloseModalWindow = $("#modal-window_close"),
    coach = $('#coach'),
    coachModule = $('#coachModule'),
    coachBtn = $('#coachBtn'),
    
    salesDep = $("#SalesDep"),
    salesDepBtn = $("#SalesDepBtn"),
    salesDepModule = $("#SalesDepModule");

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


    CloseModalWindow.on('click', function(){
        $(".modal-window").css('display', 'none');
    })
})