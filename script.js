console.log("welcome to HearME")
let songIndex = 0;
let audioElement = new Audio("The_Weeknd_-_Acquainted-MPOSA.CO.ZA.mp3");
let masterPlay = document.getElementById('masterPlay');
progressbar = document.getElementById('progressbar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "1", filePath: "The_Weeknd_-_Acquainted-MPOSA.CO.ZA.mp3", coverPath: "" },
    { songName: "2", filePath: "Central-Cee-Doja-Directed-by-Cole-Bennett-via-Naijafinix.com_.mp3", coverPath: "cover3.png" },
    { songName: "3", filePath: "Less Than Zero.mp3", coverPath: "cover4.png" },
    { songName: "4", filePath: "Die-For-You(PaglaSongs).mp3", coverPath: "cover5.png" },
    { songName: "5", filePath: "Post_Malone_-_Circles.mp3", coverPath: "cover7.png" },
    { songName: "6", filePath: "The-Weeknd-Starboy-ft-Daft-Punk-Talkmusics.com_.mp3", coverPath: "cover8.png" },
]

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress)
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songelement')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songelement')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement. = 'Central-Cee-Doja-Directed-by-Cole-Bennett-via-Naijafinix.com_.mp3';
        audioElement.src = 'Central-Cee-Doja-Directed-by-Cole-Bennett-via-Naijafinix.com_.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

