var exerciseInterval = null;
var exerciseSeconds = null;
var exerciseAudio = null;

function showExerciseScreen() {
	hideAllScreens();
	setExerciseScreenListeners();
	if (index < 5) {
		exerciseSeconds = 30;
	} else {
		exerciseSeconds = 60;
	}
	$("#exercise").text(exercises[index]);
	$("#exerciseSeconds").text(exerciseSeconds);
	startExerciseInterval();
	$("#exerciseScreen").show();
}


function setExerciseScreenListeners() {
	setRotaryListener(exercisePause);
	setClickListener($("#exercisePause"), exercisePause);
}

function exercisePause() {
	stopExerciseInterval();
	showPauseScreen("exerciseScreen");
}

function stopExerciseInterval() {
	clearInterval(exerciseInterval);
	exerciseInterval = null;
}

function resumeExercise() {
	hideAllScreens();
	setExerciseScreenListeners();
	startExerciseInterval();
	$("#exerciseScreen").show();
}

function startExerciseInterval() {
	exerciseInterval = setInterval(refreshExerciseSeconds, 1000);
}

function refreshExerciseSeconds() {
    exerciseSeconds--;
    if (exerciseSeconds === 0) {
    	stopExerciseInterval();
    	loadExerciseAudio();
    	exerciseAudio.load();
    	exerciseAudio.play();
    	navigator.vibrate(1000);
    	if (index < exercises.length) {
    		index++;
    		showCountdownScreen();
    	} else {
    		showEndScreen();
    	}
    } else {
    	$("#exerciseSeconds").text(preprendZerosIfNeeded(exerciseSeconds, 2));
    }
}

function loadExerciseAudio() {
    exerciseAudio = document.createElement('audio');
    exerciseAudio.src = 'snd/beep.mp3';
    exerciseAudio.name = 'beep';
}