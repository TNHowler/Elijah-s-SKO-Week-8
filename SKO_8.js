//GitHub Copilot assisted in writing this code.

var elevator;
var ellipses = [];
let InterstateBCFont;
let SpazzText;

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
  InterstateBCFont = loadFont("Interstate_BoldCondensed.ttf");
  SpazzText = loadImage("data/SpazzText.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-1/" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-3/" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-5/" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-7/" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-9/" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-11/" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-0/" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-2/" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-4/" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-6/" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-8/" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-10/" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-12/" },
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);

  image(SpazzText, width / 2, height / 1.5, width / 3, height / 2.5);

  imageMode(CORNER);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 11) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }

  textAlign(CENTER, CENTER);
  textSize(windowWidth / 50);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0);
  text(
    "Codewords Creative Coding and Typography",
    width / 2.5,
    height / 10,
    width / 5, // Specify the width for wrapping the text
    height / 12,  // Specify the height for wrapping the text
  );

  // Display text in the middle of the screen
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 115);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0); 
  text(
    "Week 8 is when we looked at making figures jump around the page and spawn when clicked. This was the last week of the tutorials, after this classes were purely focused on our major projects and working on the SKO. \n\nClick on the image!",
    width / 2.77,
    height / 8,
    width / 3.5, // Specify the width for wrapping the text
    height / 4  // Specify the height for wrapping the text
  );
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }

  let SpazzTextX = width / 2;  
  let SpazzTextY = height / 1.5;  
  let SpazzTextW = width / 3;  
  let SpazzTextH = height / 2.5;  
  if (mouseX > SpazzTextX - SpazzTextW / 2 && mouseX < SpazzTextX + SpazzTextW / 2 && mouseY > SpazzTextY - SpazzTextH / 2 && mouseY < SpazzTextY + SpazzTextH / 2) {  
   window.location.href = "https://tnhowler.github.io/Spazz-Text/";
  }
}
