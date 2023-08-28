AudioHandler.createAudioContext();
Player.createGainNode();
Player.loadAudioElement();
Player.createMediaElement();
Player.connectMediaElementToGain();

Player.createMediaElement();



async function getFile(audioContext, filepath) {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }



  
// Loading the file: fetch the audio file and decode the data
async function getFile(audioContext, filepath) {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }

  // Create a buffer, plop in data, connect and play -> modify graph here if required
  function playSample(audioContext, audioBuffer, time) {
    const sampleSource = new AudioBufferSourceNode(audioContext, {
      buffer: audioBuffer,
      playbackRate: playbackRate,
    });
    sampleSource.connect(audioContext.destination);
    sampleSource.start(time);
    return sampleSource;
  }

  async function setupSample() {
    const filePath = "dtmf.mp3";
    // Here we're waiting for the load of the file
    // To be able to use this keyword we need to be within an `async` function
    const sample = await getFile(audioCtx, filePath);
    return sample;
  }