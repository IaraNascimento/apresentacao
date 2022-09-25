function executeSounds(title, firstText, firstSound, secondText, secondSound, buildDefault) {
	document.getElementById("content").innerHTML = ''
		+ '<h1>'+title+'</h1>'
		+ '<ul>'
		+ '<li>'
		+ '<span id="text1">'+firstText+'</span>'
		+ '<audio id="sound1"><source type="audio/wav" src="'+firstSound+'"></audio>'
		+ '</li>'
		+ '<li>'
		+ '<span id="text2">'+secondText+'</span>'
		+ '<audio id="sound2"><source type="audio/wav" src="'+secondSound+'"></audio>'
		+ '</li>'
		+ '</ul>';
	const text1 = document.getElementById("text1");
	const sound1 = document.getElementById("sound1");
	const text2 = document.getElementById("text2");
	const sound2 = document.getElementById("sound2");
	setTimeout(() => {
		text1.classList.add("active");
		sound1.play();
	}, 1000);
	setTimeout(() => {
		text1.classList.remove("active");
	}, 3000);
	setTimeout(() => {
		text2.classList.add("active");
		sound2.play();
	}, 4000);
	setTimeout(() => {
		text2.classList.remove("active");
	}, 6000);
	setTimeout(() => {
		buildDefault();
	}, 7000);
}
			
