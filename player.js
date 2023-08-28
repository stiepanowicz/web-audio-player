class AudioHandler {
    playing = false;
    currentTime = 0;
    duration = 0;

    constructor() {
        this.initializeAudio();
        this.createGainNode();
        this.loadAudioFile();
        this.connectMediaElementToGain();
    }

    initializeAudio() {
        this.audioContext = new AudioContext();
    }

    createGainNode() {
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
    }

    loadAudioFile() {
        this.audio = document.querySelector('audio');
        this.track = this.audioContext.createMediaElementSource(this.audio);
    }

    connectMediaElementToGain() {
        this.track.connect(this.gainNode)
    }

    // getFileFromUser: function() {

    // },
    // createBuffer: function() {
    //     this.buffer = this.context.createBuffer(
    //         2,         // numberOfChannels
    //         22050,     // length
    //         44100      // sampleRate
    //     );
    // }
};

class Player {

    constructor() {
        this.playPauseButtonEvent();
    }

    playPauseButtonEvent() {
        this.playPauseButton = document.querySelector('.playPauseButton');
        this.playPauseButton.addEventListener( 'click', this.playPause.bind(this) )
    }

    async playPause() {
        if (audioHandler.audioContext.state === 'suspended') {
            audioHandler.audioContext.resume();
        }
        if (audioHandler.playing) {
            audioHandler.audio.pause();
            audioHandler.playing = false;
            this.playPauseButton.textContent = 'play';
        } else {
            await audioHandler.audio.play();
            audioHandler.playing = true;
            this.playPauseButton.textContent = 'pause';
        }
    }

    volumeSlider() {

    }
}

class Display {
    constructor() {
        this.initializeDisplay();
    }

    initializeDisplay() {
        this.progressIndicator = document.querySelector('.progress-indicator');
        this.currentTime = this.progressIndicator.children[0];
        this.progressBar = this.progressIndicator.children[1];
        this.duration = this.progressIndicator.children[2];
    }
    
    displayFilename() {

    }

    displayAudioTime() {

    }
}

let audioHandler = new AudioHandler();
console.log(audioHandler);
let player = new Player();
console.log(player);

// const playButton = document.querySelector("button");

// playButton.addEventListener(
//     "click",
//     () => {
//       // Check if context is in suspended state (autoplay policy)
//       if (audioHandler.context.state === "suspended") {
//         audioHandler.context.resume();
//       }
  
//       // Play or pause track depending on state
//       if (playButton.dataset.playing === "false") {
//         Player.audioElement.play();
//         playButton.dataset.playing = "true";
//       } else if (playButton.dataset.playing === "true") {
//         Player.audioElement.pause();
//         playButton.dataset.playing = "false";
//       }
//     },
//     false,
// )

// Player.audioElement.addEventListener(
//     "ended",
//     () => {
//         playButton.dataset.playing = "false";
//     },
//     false,
// );

