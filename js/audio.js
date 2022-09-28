function executeSounds(background, firstText, firstSubText, firstSound, secondText, secondSubText, secondSound, buildDefault) {
	document.getElementById("content").style.backgroundImage = "url('" + background + "')";
	document.getElementById("content").innerHTML = ''
		+ '<ul id="play-list">'
		+ '<li id="text1">'
		+ '<div class="audio-title">' + firstText + '</div>'
		+ '<div class="audio-subtitle">' + firstSubText + '</div>'
		+ '<audio id="sound1"><source type="audio/wav" src="' + firstSound + '"></audio>'
		+ '</li>'
		+ '<li id="text2">'
		+ '<div class="audio-title">' + secondText + '</div>'
		+ '<div class="audio-subtitle">' + secondSubText + '</div>'
		+ '<audio id="sound2"><source type="audio/wav" src="' + secondSound + '"></audio>'
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

