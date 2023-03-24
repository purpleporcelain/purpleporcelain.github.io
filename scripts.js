const audioPlayer = document.getElementById('audioPlayer');
const randomBtn = document.getElementById('randomBtn');

const audioFiles = [
    'path/to/audio1.mp3',
    'path/to/audio2.mp3',
    'path/to/audio3.mp3',
    // Add more audio files here
];

function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    audioPlayer.src = audioFiles[randomIndex];
    audioPlayer.play();
}

randomBtn.addEventListener('click', playRandomAudio);

// Play a random audio file when the page loads
playRandomAudio();
