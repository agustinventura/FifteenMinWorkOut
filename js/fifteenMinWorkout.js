var exercises = [
                 "Marcha en el sitio",
                 "Círculos con los brazos",
                 "Elevaciones de caderas",
                 "Insectos muertos",
                 "Bird dogs",
                 "Paseo del oso",
                 "Zancadas hacia atrás",
                 "YTW",
                 "Sentadillas",
                 "Flexiones",
                 "Zancadas laterales",
                 "Plancha",
                 "Peso muerto rumano (izquierda)",
                 "Peso muerto rumano (derecha)",
                 "Bicicleta",
                 "Superman",
                 "Escaladores"];
var index = 0;

function init() {
	setBackKeyListener();
	//tizen.humanactivitymonitor.start('HRM', hrmListener);
	//tizen.power.request("SCREEN", "SCREEN_NORMAL");
	showWelcomeScreen();
}

$(document).ready(init);