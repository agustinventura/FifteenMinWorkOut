var originalScreen = null;

function showPauseScreen(screen) {
	originalScreen = screen;
	hideAllScreens();
	setPauseScreenListeners();
	$("#pauseScreen").show();
}

function setPauseScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#end"), exit);
	setClickListener($("#continue"), hidePauseScreen);
}

function hidePauseScreen() {
	$("#pauseScreen").hide();
	if (originalScreen === "countdownScreen") {
		resumeCountdown();
	} else if (originalScreen === "exerciseScreen") {
		resumeExercise();
	}
}