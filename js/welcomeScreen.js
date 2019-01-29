function showWelcomeScreen() {
	hideAllScreens();
	setWelcomeScreenListeners();
    $("#welcomeScreen").show();
}

function setWelcomeScreenListeners() {
	setRotaryListener(showCountdownScreen);
	setClickListener($("#introDone"), showCountdownScreen);
}