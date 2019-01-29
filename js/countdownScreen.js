var countdownInterval = null;
var countdownSeconds = 3;

function showCountdownScreen() {
	hideAllScreens();
	countdownSeconds = 3;
	setCountdownScreenListeners();
	$("#countdownSeconds").text(countdownSeconds);
	$("#nextExercise").text(exercises[index]);
	$("#countdownScreen").show();
	startCountdownInterval();
}

function setCountdownScreenListeners() {
	setRotaryListener(countdownPause);
	setClickListener($("#countdownPause"), countdownPause);
}

function countdownPause() {
	stopCountdownInterval();
	showPauseScreen("countdownScreen");
}

function stopCountdownInterval() {
	clearInterval(countdownInterval);
	countdownInterval = null;
}

function resumeCountdown() {
	hideAllScreens();
	setCountdownScreenListeners();
	startCountdownInterval();
	$("#countdownScreen").show();
}

function startCountdownInterval() {
	countdownInterval = setInterval(refreshCountdownSeconds, 1000);
}

function refreshCountdownSeconds() {
    countdownSeconds--;
    if (countdownSeconds === 0) {
    	stopCountdownInterval();
        showExerciseScreen();
    } else {
    	$("#countdownSeconds").text(countdownSeconds);
    }
}