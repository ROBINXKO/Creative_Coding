let song; // Variable to hold the audio file
let fft; // FFT object for analyzing the audio waveform
let spectrum; // Array to store frequency spectrum data

function preload() {
  song = loadSound('flow.mp3'); // Loads your audio file
}

function setup() {
  createCanvas(800, 400); // Creates a larger canvas
  song.play(); // Starts playing the audio
  
  // Creates an FFT object with a higher resolution for more detail
  fft = new p5.FFT(0.8, 512); // Smoothing and bins
  fft.setInput(song); // Connects FFT to the song
  
  // Sets up colors and drawing properties
  stroke(255, 50); // Semi-transparent white stroke
  noFill(); // No fill for shapes
}

function draw() {
  background(0); // Clears background
  
  // Analyzes the audio spectrum
  spectrum = fft.analyze();
  
  // Draws the spectrum as bars
  let barWidth = width / spectrum.length;
  for (let i = 0; i < spectrum.length; i++) {
    let x = i * barWidth;
    let h = -height + map(spectrum[i], 0, 255, height, 0); // Inverts and scale
    rect(x, height, barWidth, h);
  }
  
  // Draws a pulsating circle based on amplitude
  let amplitude = fft.getEnergy("bass", "lowMid");
  let circleSize = map(amplitude,0,255,50,400); // Maps amplitude to circle size
  let pulseSpeed = map(amplitude,0,255,1,5); // Maps amplitude to pulse speed
  let pulseColor = map(amplitude,0,255,100,255); // Maps amplitude to pulse color
  
  fill(255,pulseColor,0,150); // Fills color with pulsating effect
  ellipse(width /2, height /2,circleSize,circleSize); // Draws pulsating circle
  
  // Draws waveform as a dynamic line
  let waveform = fft.waveform();
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height * 0.75, height * 0.25);
    vertex(x, y);
  }
  endShape();
}
