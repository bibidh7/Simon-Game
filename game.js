
var buttonColours = ["red", "blue", "green","yellow"];
var gamePattern = [];
var  userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
if(!started){
    $("#level-title").text("level  " + level);
    nextSequence();
    started = true;
}

});


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
//    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    //nextSequence(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);

})


function playSound(name){

    $("#"+ name).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();



}

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");
setTimeout(function(){
$("#"+ currentColor).removeClass("pressed");
},100);
}


// Main function 
function nextSequence(userChosenColour)
{
    level++;
    $("#level-title").text("level  " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
     
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    
    return;
}
