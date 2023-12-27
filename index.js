let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start'); //ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
startButton.addEventListener('click', function (  ) {//ЭДэВЕНТлИСТНЕР('ТЯП', function () {
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
	timerId = setInterval(updateClock, 1000);//СЕТиНТРЕВАЛ(updateClock, ОДНАсЕКУНДА); // запускаем  updateClock() каждую секунду
	// console.log('click')
});


const stopButton = document.getElementById('stop'); //ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
stopButton.addEventListener('click', function () { //'ТЯП'
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
	clearInterval(timerId); // останавливаем таймер
	// console.log('click'+' stop')
});


function updateClock() {
	const clock = document.getElementById('clock');
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
	const now = new Date(); //НОВАЯдАТА();
	const hours = now.getHours();//ДАЙчАСЫ()
	const minutes = now.getMinutes();//ДАЙмИНУТЫ()
	const seconds = now.getSeconds();//ДАЙсЕКУНДЫ()
	clock.textContent = hours + ':' + minutes + ':' + seconds;
}
