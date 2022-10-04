function executeVideo(video, buildDefault) {
	document.getElementById("content").style.backgroundImage = "";
	document.getElementById("content").innerHTML = ''
		+ '<span id="closeVideo">fechar X</span>'
		+ '<video id="current-movie">'
		+ '<source src="'+video+'" type="video/mp4" />'
		+ '</video>';
	const currentMovie = document.getElementById("current-movie");
	currentMovie.addEventListener('loadedmetadata', () => {
		localStorage.setItem('videoTime', currentMovie.duration);
	});
	currentMovie.addEventListener('ended', handlerEnd, false);
	const closeVideo = document.getElementById("closeVideo");
	closeVideo.onclick = () => {
		currentMovie.pause();
		localStorage.setItem('idleTime', 0);
		localStorage.removeItem('videoTime');
		buildDefault();
	};
	currentMovie.play();
    function handlerEnd(e) {
		setTimeout(() => {
			localStorage.setItem('idleTime', 0);
			localStorage.removeItem('videoTime');
			buildDefault();
		}, 1000);
    }
}