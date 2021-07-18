var time = moment().format("MMM Do, YYYY");
var hour = moment().hour();
var workdayLength = 10;
var localData = JSON.parse(localStorage.getItem("scheduleData")) || [];

loadSavedData();

$("#currentDay").text(time);

// $("#8").html("test");

// for(i = 0; i < localData.length; i++){
//     var index = i + 8;
//     console.log("loading");
//     console.log(localData);
//     $(`#${index}-block`).val(localData[index].description);
// }

if(hour <= 7){
    console.log("to early");
    $(".description").addClass("future");
}else if(hour >= 8 && hour <= 17){
    console.log("workday");
    switch(hour){
        case 8: $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 9: checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 10:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 11:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 12:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 13:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 14:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 15:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 16:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
                checkFuture(hour);
            break;
        case 17:checkPast(hour);
                $(`#${hour.toString()}`).addClass("present");
            break;
    }
}else if(hour >= 18){
    console.log("to late");
    $(".description").addClass("past");
}

$("i").on("click",function(){
    var btnValue = parseInt($(this).attr('id'));
    var textValue = $(`#${btnValue}-block`).val().trim();
    var index = btnValue - workdayLength;
    save(index, btnValue, textValue);
})

function checkPast(hour){
    for(i = hour - 1;i >= 8; i--){
        $(`#${i.toString()}`).addClass("past");
    }
}

function checkFuture(hour){
    for(i = hour + 1;i <= 17; i++){
        $(`#${i.toString()}`).addClass("future");
    }
}

function save(index, time, description){
    localData.splice(index, 1, {time: time, description: description});
    localStorage.setItem("scheduleData",JSON.stringify(localData))
}

function loadSavedData(){
    for(i = 0; i < workdayLength; i++){
        console.log(i);
        var currentTimeBlock = localData.find(x => x.time === i + 8);
        if(currentTimeBlock != undefined || currentTimeBlock != null){
            console.log(currentTimeBlock.description);
            var index = i + 8;
            $(`#${index.toString()}-block`).val(currentTimeBlock.description);
        }
    }
}