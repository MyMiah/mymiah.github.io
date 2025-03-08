const audio = document.getElementById("background");
const btn1 = document.getElementById("playBtn");
const btn2 = document.getElementById("pauseBtn");

btn1.addEventListener("click", () => {
    if (audio.played) {
        audio.play();
        audio.loop = true;
    }
})

btn2.addEventListener("click", () => {
    if (audio.paused) {
        audio.pause();
        audio.loop = false;
    }
})