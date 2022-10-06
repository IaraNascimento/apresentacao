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

function executeSoundsExtraFirstSound(background, firstTextList, firstSubText, firstSound, secondTextList, secondSubText, secondSound, buildDefault) {
	document.getElementById("content").style.backgroundImage = "url('" + background + "')";
	const firstText = firstTextList[0] + (firstTextList[1]? '<span>e</span>' + firstTextList[1] : '');
	const secondText = secondTextList[0] + (secondTextList[1]? '<span>e</span>' + secondTextList[1] : '');
	document.getElementById("content").innerHTML = ''
		+ '<ul id="play-list">'
		+ '<li id="text1">'
		+ '<div class="audio-title">' + firstText + '</div>'
		+ '<div class="audio-subtitle">' + firstSubText + '</div>'
		+ '<audio id="sound1_a"><source type="audio/wav" src="' + firstSound[0] + '"></audio>'
		+ '<audio id="sound1_b"><source type="audio/wav" src="' + firstSound[1] + '"></audio>'
		+ '</li>'
		+ '<li id="text2">'
		+ '<div class="audio-title">' + secondText + '</div>'
		+ '<div class="audio-subtitle">' + secondSubText + '</div>'
		+ '<audio id="sound2"><source type="audio/wav" src="' + secondSound + '"></audio>'
		+ '</li>'
		+ '</ul>';
	const text1 = document.getElementById("text1");
	const sound1a = document.getElementById("sound1_a");
	const sound1b = document.getElementById("sound1_b");
	const text2 = document.getElementById("text2");
	const sound2 = document.getElementById("sound2");
	sound1a.addEventListener('loadedmetadata', () => {
		localStorage.setItem('sound1Time', sound1a.duration*1000);
	});
	sound1b.addEventListener('loadedmetadata', () => {
		localStorage.setItem('sound1bTime', sound1b.duration*1000);
	});
	sound2.addEventListener('loadedmetadata', () => {
		localStorage.setItem('sound2Time', sound2.duration*1000);
	});
	const defaultDelay = 750;
	const delay1 = defaultDelay;
	setTimeout(() => {
		text1.classList.add("active");
		sound1a.play();
		const delay2 = defaultDelay + JSON.parse(localStorage.getItem('sound1Time'));
		setTimeout(() => {
			sound1b.play();
		}, delay2);
		const delay3 = delay2 + defaultDelay + JSON.parse(localStorage.getItem('sound1bTime'));;
		setTimeout(() => {
			text1.classList.remove("active");
		}, delay3);
		const delay4 = delay3 + defaultDelay;
		setTimeout(() => {
			text2.classList.add("active");
			sound2.play();
		}, delay4);
		const delay5 = delay4 + defaultDelay + JSON.parse(localStorage.getItem('sound2Time'));
		setTimeout(() => {
			text2.classList.remove("active");
		}, delay5);
		const delay6 = delay5 + defaultDelay;
		setTimeout(() => {
			buildDefault();
		}, delay6);
	}, delay1);
}
