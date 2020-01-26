$(document).ready(function(){
    var CloseModalWindow = $("#modal-window_close"),
    corpTrain = $('#corpTrain'),
    corpTrainModule = $('#corpTrainModule'),
    corpTrainBtn = $('#corpTrainBtn');

    corpTrain.on('click', function(){
        corpTrainModule.css('display', 'flex');
    })

    corpTrainBtn.on('click', function(){
        corpTrainModule.css('display', 'flex');
        corpTrainModule.css('z-index', '150');

    })


    CloseModalWindow.on('click', function(){
        $(".modal-window").css('display', 'none');
    })
})