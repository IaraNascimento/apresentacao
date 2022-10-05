
addVideoOnBody();
const bodyContent = document.getElementById("content");
const movie = document.getElementById("movie");
const homeLocation = localStorage.getItem('homeLocation');
const maxIdleTime = 5*60;
movie.style.display = 'none';
localStorage.setItem('idleTime', 0);

function playIdleVideo() {
    bodyContent.style.display = 'none';
    movie.style.display = 'block';
    movie.currentTime = 0;
    movie.onclick = () => {
        document.location = homeLocation;
    };
}

function idleTimeLooping() {
    setTimeout(() => {
        const videoTime = JSON.parse(localStorage.getItem('videoTime'));
        const idleTime = JSON.parse(localStorage.getItem('idleTime')) + 5;
        localStorage.setItem('idleTime', idleTime);
        console.log(idleTime);
        if (idleTime >= (maxIdleTime + videoTime)) {
            playIdleVideo();
        } else {
            idleTimeLooping();
        }
    }, 5000);
}

function addVideoOnBody() {
    const span = document.createElement('span');
    span.innerHTML = ''
        + '<video id="movie" preload="auto" autoplay loop muted>'
        + '<source src="' + localStorage.getItem('videoLocation') + '" type="video/mp4" />'
        + '</video>';
    document.getElementsByTagName("body")[0].prepend(span);
}

bodyContent.onclick = () => {
    localStorage.setItem('idleTime', 0);
}

if (localStorage.getItem('playIdle') === 'play') {
    localStorage.setItem('playIdle', '');
    playIdleVideo();
} else {
    idleTimeLooping();
}