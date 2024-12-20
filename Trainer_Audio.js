function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

function stopAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
}