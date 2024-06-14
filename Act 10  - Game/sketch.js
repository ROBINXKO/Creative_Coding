let player;
let obstacles = [];
let score = 0;
let gameOver = false;
let gameStarted = false;
let obstacleSpeed = 3;
let obstacleColor = '#FA2600';

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  frameRate(60);
  textSize(32);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(240);

  if (!gameStarted) {
    // Displays the initial screen with game instructions
    fill(0);
    textSize(48);
    text("Dodger Game",width / 2,height / 2 - 100);
    textSize(32);
    text("Use the mouse to move the square and dodge the falling red balls.",width / 2,height / 2);
    text("Press any key to start.",width / 2,height / 2 + 100);
  } else if (!gameOver) {
    // Game logic
    player.update();
    player.show();

    if (frameCount % 60 === 0) {
      obstacles.push(new Obstacle());
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].update();
      obstacles[i].show();

      if (obstacles[i].hits(player)) {
        gameOver = true;
      }

      if (obstacles[i].offscreen()) {
        obstacles.splice(i, 1);
        score++;
      }
    }

    fill(0);
    text("Score: " + score,width / 2,50);
  } else {
    // Game over screen
    fill(255, 0, 0);
    textSize(48);
    text("Game Over",width / 2,height / 2 - 40);
    textSize(32);
    text("Final Score: " + score, width / 2,height / 2);
    text("Click to Replay",width / 2,height / 2 + 40);
  }
}

function keyPressed() {
  if (!gameStarted) {
    gameStarted = true;
  } else if (gameOver) {
    resetGame();
  }
}

function mousePressed() {
  if (gameOver) {
    resetGame();
  }
}

function resetGame() {
  score = 0;
  gameOver = false;
  obstacles = [];
}

class Player {
  constructor() {
    this.size = 50;
    this.x = width / 2;
    this.y = height - this.size - 10;
  }

  update() {
    this.x = mouseX;
    this.x = constrain(this.x,0,width - this.size);
  }

  show() {
    fill(0);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
  }
}

class Obstacle {
  constructor() {
    this.size = random(30, 80);
    this.x = random(width - this.size);
    this.y = 0 - this.size;
    this.speed = obstacleSpeed;
    this.color = obstacleColor;
  }

  update() {
    this.y += this.speed;
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.size);
  }

  hits(player) {
    return !(player.x + player.size < this.x - this.size / 2 ||
             player.x > this.x + this.size / 2 ||
             player.y + player.size < this.y - this.size / 2 ||
             player.y > this.y + this.size / 2);
  }

  offscreen() {
    return this.y > height;
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
