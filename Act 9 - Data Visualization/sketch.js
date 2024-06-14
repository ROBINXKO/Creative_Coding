let tempData = [-0.3,-0.1,0.0,0.2,0.3,0.5,0.6,0.8,0.9,1.0,1.2,1.3,1.4,1.5]; // Example temperature anomaly data
let years = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018, 2019,2020]; // Corresponding years

function setup() {
  createCanvas(1000,600); // Create a canvas of size 1000x600 pixels
  background(240); // Set background color to light gray
  textSize(16); // Set text size for labels
  textAlign(CENTER,CENTER); // Center align the text
  noLoop(); // Prevent draw() from looping automatically
}

function draw() {
  // Draw the bar chart
  let maxTemp = max(tempData); // Find the maximum temperature anomaly value
  let minTemp = min(tempData); // Find the minimum temperature anomaly value
  let barWidth = width / tempData.length; // Calculate the width of each bar
  
  for (let i = 0; i < tempData.length; i++) {
    let barHeight = map(tempData[i],minTemp,maxTemp,0, height - 150); // Map temperature data to bar height
    
    // Draw bars with color depending on temperature anomaly
    if (tempData[i] > 0) {
      fill(255,140,0); // Orange for positive anomalies (above average)
    } else {
      fill(70,130,180); // Light blue for negative anomalies (below average)
    }
    noStroke();
    rect(i * barWidth,height - barHeight - 100,barWidth - 10,barHeight); // Draw the bar
    
    // Draw temperature anomaly value on top of the bar
    fill(0); // Set text color to black
    text(tempData[i] + "°C",i * barWidth + barWidth / 2,height - barHeight - 120);
    
    // Draw year labels below the bar
    text(years[i],i * barWidth + barWidth / 2,height - 50);
  }
  
  // Draw title
  textSize(24);
  fill(0);
  text("Global Warming: Annual Temperature Anomalies", width / 2, 40);
  
  // Draw x and y axis labels
  textSize(18);
  text("Year",width / 2,height - 20);
  push();
  translate(20,height / 2);
  rotate(-PI /2);
  text("Temperature Anomaly (°C)",0,0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}