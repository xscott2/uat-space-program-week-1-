function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
        setTimeout(function(){
            countdownTimer = countdownTimer - 1;
             document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 1000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 2000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 3000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 4000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 6000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 7000)
      setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 8000)
     setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 9000)
      setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer = "Blastoff!!!"
    }, 10000)
}
//identifying variables as required by assignment
var wins = 0;
var losses = 0;
var ties = 0;
//start button as required for assignment
function playCraps(){
    console.log("playCraps() started");
    var die1;
    var die2;
    //math function to play craps game as required by assignment
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //results of rolled dice
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2); 
    document.getElementById("die2Res").innerHTML = die2;
    //create if sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11
    if(sum == 7 || sum == 11) {
        //tallies of results after each spin
        document.getElementById("crapsRes").innerHTML = "<h1>Craps, You lose!!!</h1>";
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "<h1>Huzzah, You Win!!!</h1>";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, You win!!!")
    } else {
        document.getElementById("crapsRes").innerHTML = "<h2>You did not lose or win. Please try again.</h2>";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
    }

}

function blastoffTimerV2(){
    //varibles
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;

    //loop
    for(var i = 0; i <= 10; i++){
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!!";
            } else if(countdownTimer < halfCDT){
                document.getElementById("countdownDisplay").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)
        
    }
}
