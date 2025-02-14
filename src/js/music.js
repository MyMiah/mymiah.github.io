const audio = document.getElementById("background");
const button = document.getElementById("playPauseBtn");

button.addEventListener("click", () => {
    if (audio.played) {
        audio.play();
        button.textContent = "⏸ Pause";
    } else {
        audio.pause();
        button.textContent = "▶ Play";
    }
})