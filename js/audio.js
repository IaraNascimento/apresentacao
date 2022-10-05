function executeSounds(background, firstTextList, firstSubText, firstSound, secondTextList, secondSubText, secondSound, buildDefault) {
	document.getElementById("content").style.backgroundImage = "url('" + background + "')";
	const firstText = firstTextList[0] + (firstTextList[1]? '<span>ou</span>' + firstTextList[1] : '');
	const secondText = secondTextList[0] + (secondTextList[1]? '<span>ou</span>' + secondTextList[1] : '');
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
	sound1.addEventListener('loadedmetadata', () => {
		localStorage.setItem('sound1Time', sound1.duration*1000);
	});
	sound2.addEventListener('loadedmetadata', () => {
		localStorage.setItem('sound2Time', sound2.duration*1000);
	});
	const defaultDelay = 750;
	const delay1 = defaultDelay;
	setTimeout(() => {
		text1.classList.add("active");
		sound1.play();
		const delay2 = defaultDelay + JSON.parse(localStorage.getItem('sound1Time'));
		setTimeout(() => {
			text1.classList.remove("active");
		}, delay2);
		const delay3 = delay2 + defaultDelay;
		setTimeout(() => {
			text2.classList.add("active");
			sound2.play();
		}, delay3);
		const delay4 = delay3 + defaultDelay + JSON.parse(localStorage.getItem('sound2Time'));
		setTimeout(() => {
			text2.classList.remove("active");
		}, delay4);
		const delay5 = delay4 + defaultDelay;
		setTimeout(() => {
			buildDefault();
		}, delay5);
	}, delay1);
}

