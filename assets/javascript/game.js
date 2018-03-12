'use strict'

//Variables
    let envelopeOne = Math.floor(Math.random()*12)+1;
    let envelopeTwo = Math.floor(Math.random()*12)+1;
    let envelopeThree = Math.floor(Math.random()*12)+1;
    let envelopeFour = Math.floor(Math.random()*12)+1;
    const goalNumberFunction = function getRandomIntInclusive(goalMin, goalMax) {
        goalMin = Math.ceil(19);
        goalMax = Math.floor(120);
        return Math.floor(Math.random() * (goalMax - goalMin + 1)) + goalMin;
      }
    let goalNumber = goalNumberFunction();
    let envelopeClickedArray = [];
    let score = 0;
    let runningScore = 0;
    let wins = 0;
    let losses = 0;
//
//Check Variables
     console.log(envelopeOne, envelopeTwo, envelopeThree, envelopeFour);
     console.log(score);
     console.log(goalNumber);
//
//NextGame Function (partial for next game)
    const nextGame = function(){
        envelopeOne = Math.floor(Math.random()*12)+1;
        envelopeTwo = Math.floor(Math.random()*12)+1;
        envelopeThree = Math.floor(Math.random()*12)+1;
        envelopeFour = Math.floor(Math.random()*12)+1;

        goalNumber = goalNumberFunction();

        score = 0;
        runningScore = 0;

        $('#envelopeOne').val(envelopeOne);
        $('#envelopeTwo').val(envelopeTwo);
        $('#envelopeThree').val(envelopeThree);
        $('#envelopeFour').val(envelopeFour);
        
        $('#goalNumber').text(goalNumber);

        $('#score').text(score);

        console.log(envelopeOne, envelopeTwo, envelopeThree, envelopeFour);
    }
//
//Initial Game State
    $('#envelopeOne').val(envelopeOne);
    $('#envelopeTwo').val(envelopeTwo);
    $('#envelopeThree').val(envelopeThree);
    $('#envelopeFour').val(envelopeFour);

    $('#goalNumber').text(goalNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#score').text(score);
//
//Game
    $('.envelope').click(function(){
        let envelopeValue = $(this).val();
        envelopeClickedArray.push(parseInt(envelopeValue));
        runningScore = envelopeClickedArray.reduce(function(score, elem){
            return score + elem;
        }, 0);
        console.log(goalNumber, runningScore);
        $('#score').text(runningScore);
        winLoss();
    });
//
//WinLoss
    const winLoss = function(){
        if (runningScore === goalNumber){
            wins++;
            $('#wins').text(wins);
            document.getElementById('winner').style.visibility = "visible";
            nextGame();
        }
        else if (runningScore > goalNumber){
            losses++;
            $('#losses').text(losses);
            document.getElementById('loser').style.visibility = "visible";
            nextGame();
        }
    }
//
//Style
    $('#instructions').click(function(){
        document.getElementById('instructions').style.visibility = "hidden";
    });

    $('#inst-img').click(function(){
        document.getElementById('instructions').style.visibility = "visible"; 
    });
    $('#winner').click(function(){
            document.getElementById('winner').style.visibility = "hidden";
    });
    $('#loser').click(function(){
            document.getElementById('loser').style.visibility = "hidden";
    });
