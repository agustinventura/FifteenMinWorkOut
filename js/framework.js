function hideAllScreens() {
	$("#welcomeScreen").hide();
	$("#exerciseScreen").hide();
	$("#countdownScreen").hide();
	$("#pauseScreen").hide();
	$("#endScreen").hide();
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
}

function setBackKeyListener() {
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function backPressed(e) {
    var activeDivId = $('.clock:visible').not(":hidden").prop("id")
    if (e.originalEvent.keyName === 'back') {
		goBack(activeDivId);
    }
}

function goBack(activeDivId) {
	switch (activeDivId) {
		case "welcomeScreen":
			exit();
			break;
		case "exerciseScreen":
			showPauseScreen(activeDivId);
			break;
		case "countdownScreen":
			showPauseScreen(activeDivId);
			break;
		case "endScreen":
			exit();
			break;
	}
}

function exit() {
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
    tizen.application.getCurrentApplication().exit();
}

function hrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#exerciseBPM").text(currentHeartRate);
}

function preprendZerosIfNeeded(number, size) {
	var numberLength = number.toString().length;
	var numberOfZeroes = size - numberLength;
	for (var i=0; i<numberOfZeroes; i++) {
		number = "0" + number;
	}
	return number;
}