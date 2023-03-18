var gamePattern= [];
var val = 0;
var temp_inp=0;
var buttonColours = ["red","blue","green","yellow"];
function nextSequence() {
    return Math.floor(Math.random() *4);
}
function listgen(){
    var templst =[];
    for(var i=0;i<30;i++){
        var randomNumber = nextSequence();
        var randomChosenColour = buttonColours[randomNumber];
        templst.push(randomChosenColour);
    }
    gamePattern = templst;
}
listgen();

var inte = setInterval(function () {
    $("#"+gamePattern[0]).animate({opacity:.5},300,function(){
        $("#"+gamePattern[0]).animate({opacity:1},400)});
},1000);

$(".red").click(function () {
    clearInterval(inte);
    blinker("red");
    var aud = new Audio("sounds/red.mp3");
    aud.play();
    check_if_correct("red");
});

$(".blue").click(function () {
    clearInterval(inte);
    blinker("blue");
    var aud = new Audio("sounds/blue.mp3");
    aud.play();
    check_if_correct("blue");
});


$(".green").click(function () {
    clearInterval(inte);
    blinker("green");
    var aud = new Audio("sounds/green.mp3");
    aud.play();
    check_if_correct("green");
});


$(".yellow").click(function () {
    clearInterval(inte);
    blinker("yellow");
    var aud = new Audio("sounds/yellow.mp3");
    aud.play();
    check_if_correct("yellow");
});


// temp_inp <=val
function check_if_correct(className){
    if(className == gamePattern[temp_inp] ){
        temp_inp++;
        //console.log("this shit works");
        if(temp_inp-1 === val){
            temp_inp = 0;
            next_level();
            setTimeout(function(){blinker(gamePattern[val]);},1000);
        }
    }
    else if(className != gamePattern[temp_inp]){
        gameover();
    }
}

function blinker(className){
    $("."+className).addClass("pressed");
    setTimeout(function(){$("."+className).removeClass("pressed");},200);
}

function next_level(){
    $("#level-title").text("Level "+val++);
}

function gameover(){
    var aud = new Audio("sounds/wrong.mp3");
    aud.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("you fucking lost bitch");
    // val = 0,temp_inp = 0;
    setTimeout(function(){$("#level-title").text("press any key to restart the game");},100);
    $("body").keydown(function(){
        location.reload();
    })
    // listgen();
}