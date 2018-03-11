'use strict'

//Variables
    const envelopeOne = Math.floor(Math.random()*12)+1;
    const envelopeTwo = Math.floor(Math.random()*12)+1;
    const envelopeThree = Math.floor(Math.random()*12)+1;
    const envelopeFour = Math.floor(Math.random()*12)+1;
    const goalNumberFunction = function getRandomIntInclusive(goalMin, goalMax) {
        goalMin = Math.ceil(19);
        goalMax = Math.floor(120);
        return Math.floor(Math.random() * (goalMax - goalMin + 1)) + goalMin;
      }
    const goalNumber = goalNumberFunction();
    let envelopeClickedArray = [];
    let score = 0;
    let wins = 0;
    let losses = 0;
//
//Check Variables
     console.log(envelopeOne, envelopeTwo, envelopeThree, envelopeFour);
     console.log(score);
     console.log(goalNumber);
//
//Clear Function (partial for next game)
    const nextGame = function(){
        envelopeOne = "";
        envelopeTwo = "";
        envelopeThree = "";
        envelopeFour = "";
        goalNumber = "";
        envelopeValue = "";
        score = 0;
        //score on dom
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

//Game
$('.envelope').click(function(){
    let envelopeValue = $(this).val();
    envelopeClickedArray.push(parseInt(envelopeValue));
    score = envelopeClickedArray.reduce(function(score, elem){
        return score + elem;
    }, 0);
    console.log(goalNumber, score);
    $('#score').text(score);
    winLoss();
});

const winLoss = function(){
    if (score === goalNumber){
        wins++;
        $('#wins').text(wins);
    }
    else if (score > goalNumber){
        losses++;
        $('#losses').text(losses);
    }
}
