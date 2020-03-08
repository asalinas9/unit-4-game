$(document).ready(function() {
	var ranNum = Math.floor(Math.random() * 102 + 19);
	$('.matchedNumber').text(ranNum);

	var box1 = Math.floor(Math.random() * 12 + 1);
	var box2 = Math.floor(Math.random() * 12 + 1);
	var box3 = Math.floor(Math.random() * 12 + 1);
	var box4 = Math.floor(Math.random() * 12 + 1);

	//counter
	var wins = 0;
	var losses = 0;
	var playerScore = 0;

	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);
	reset();
});
//functions
function reset() {
	ranNum = Math.floor(Math.random() * 102 + 19);
	console.log(ranNum);
	$('.matchedNumber').text(ranNum);

	box1 = Math.floor(Math.random() * 12 + 1);
	box2 = Math.floor(Math.random() * 12 + 1);
	box3 = Math.floor(Math.random() * 12 + 1);
	box4 = Math.floor(Math.random() * 12 + 1);
	playerScore = 0;
	$('#finalScore').text(playerScore);
}
// wins towards finalScore
function beast() {
	alert('You Win');
	wins++;
	$('#numberWins').text(wins);
	reset();
}
//losses of playerScore
function loser() {
	alert('You lose');
	losses++;
	$('#numberLosses').text(losses);
	reset();
}
// on click for logos
$('.barca').on('click', function() {
	playerScore = playerScore + box1;
	console.log('New playerScore= ' + playerScore);
	$('#finalScore').text(playerScore);

	if (playerScore == ranNum) {
		beast();
	} else if (playerScore > ranNum) {
		loser();
	}
});

$('.liverpool').on('click', function() {
	playerScore = playerScore + box2;
	console.log('New playerScore= ' + playerScore);
	$('#finalScore').text(playerScore);

	if (playerScore == ranNum) {
		beast();
	} else if (playerScore > ranNum) {
		loser();
	}
});
$('.juve').on('click', function() {
	playerScore = playerScore + box3;
	console.log('New playerScore= ' + playerScore);
	$('#finalScore').text(playerScore);

	if (playerScore == ranNum) {
		beast();
	} else if (playerScore > ranNum) {
		loser();
	}
});

$('.realM').on('click', function() {
	playerScore = playerScore + box4;
	console.log('New playerScore= ' + playerScore);
	$('#finalScore').text(playerScore);

	if (playerScore == ranNum) {
		beast();
	} else if (playerScore > ranNum) {
		loser();
	}
});
