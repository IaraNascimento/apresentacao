function executeVideo(video, buildDefault) {
	document.getElementById("content").innerHTML = ''
		+ '<span id="closeVideo">fechar X</span>'
		+ '<video id="movie">'
		+ '<source src="'+video+'" type="video/mp4" />'
		+ '</video>';
	const movie = document.getElementById("movie");
	movie.addEventListener('ended', handlerEnd, false);
	const closeVideo = document.getElementById("closeVideo");
	closeVideo.onclick = () => {
		buildDefault();
	};
	setTimeout(() => {
		movie.play();
	}, 1000);
    function handlerEnd(e) {
		setTimeout(() => {
			buildDefault();
		}, 1000);
    }
}