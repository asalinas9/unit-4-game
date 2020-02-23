$(document).ready(function () {
    var ranNum = Math.floor(Math.random() * 101 + 19);
$("#randomNumber").text(ranNum);

    var box1 = Math.floor(Math.random() * 11 + 1);
    var box2 = Math.floor(Math.random() * 11 + 1);
    var box3 = Math.floor(Math.random() * 11 + 1);
    var box4 = Math.floor(Math.random() * 11 + 1);

    //counter
    var wins = 0;
    var losses = 0;
    var playerScore = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    reset();
});
//functions
function reset() {

    ranNum = Math.floor(Math.random() * 101 + 19);
    console.log(ranNum)
    $("#randomNumber").text(ranNum);
    box1 = Math.floor(Math.random() * 11 + 1);
    box2 = Math.floor(Math.random() * 11 + 1);
    box3 = Math.floor(Math.random() * 11 + 1);
    box4 = Math.floor(Math.random() * 11 + 1);
    finalScore = 0;
    $("#finalScore").text(playerScore);
}
// wins towards finalScore
function beast() {
    alert("You Win");
    wins++;
    document.getElementById("numberWins").innerText = "numberWins" + numberWins;
    $("#numberWins").text(wins);
    reset()

}
// losses of playerScore
function loser() {
    alert("You lose");
    losses++;
    $("#numberLosses").text(losses);
    reset();

}
// on click for Boxes
$("#box1").on('click', function () {
    playerScore = playerScore + box1;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").text(playerScore);
    //sets win/lose conditions
    if (playerScore == ranNum) {
        best();
    }
    else if (playerScore > ranNum) {
        loser();
    }
});
$("#box2").on('click', function () {
    playerScore = playerScore + box2;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").text(playerScore);
    if (playerScore == ranNum) {
        beast();
    }
    else if (playerScore > ranNum) {
        loser();
    }
});
$("#box3").on('click', function () {
    playerScore = playerScore + box3;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").text(playerScore);
    //sets win/lose conditions
    if (playerScore == ranNum) {
        beast();
    }
    else if (playerScore > ranNum) {
        loser();
    }
});
$("#box4").on('click', function () {
    playerScore = playerScore + box4;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").text(playerScore);

    if (playerScore == ranNum) {
        beast();
    }
    else if (playerScore > ranNum) {
        loser();
    }
});