let size = 12; // so i can also make the rows by the size
let grid = []; 
let clock; 
let lastChange = 0; //to keep track to change each second

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(size);
  textAlign(CENTER, CENTER);
  textFont("monospace");

  makeGrid();

  clock = createGraphics(width, height); // to determine the numbers to make up the time, like a canvas for the time specifically
  clock.pixelDensity(1); // 1 number 1 pixel
}

function makeGrid() { //numbers positions
  grid = [];

  for (let y = 0; y < height; y += size) { //vertical
    for (let x = 0; x < width; x += size) { //horizontal

      grid.push({ //new item
        x: x,
        y: y,
        number: random() > 0.5 ? "1" : "0", color: random() //if else short cut, if 50% or higher its 1
      });
    }
  }
}

function draw() {
  background(0);

  if (millis() - lastChange > 1000) {
    lastChange = millis(); //miliseconds minues change, so how long

    for (let cell of grid) {
      cell.number = random() > 0.5 ? "1" : "0"; //if its been a sec, flip it
    }
  }

  // time part
  clock.background(0); //background black
  clock.fill(255); //text white
  clock.textSize(180); 
  clock.textAlign(CENTER, CENTER);
  clock.textFont("monospace");

  let h = hour();

  // not military time
  if (h > 12) {
    h = h - 12;
  }

  if (h == 0) {
    h = 12; // if midnight
  }

  let time = h + ":" + nf(minute(), 2);
                      // makes sure its 2 digits
  clock.text(time, width / 2, height / 2); // time actually put

  // 1/0
  for (let cell of grid) { //for each number

    let pixel = clock.get(cell.x, cell.y); //what number color

    if (pixel[0] > 100) { //white or black

      //if white, clock color
      fill(0);

    } else if (cell.color > 0.5) { //if not clock, check its random value, for half its this color

      // Medium green
      fill(0, 150, 40);

    } else { // else this color

      // Dark green
      fill(0, 70, 20);
    }

    text(cell.number, cell.x, cell.y); //draws it to the number
  }
}

//My clock is a time embedded through colors in rows and columns of binary. I think it's a cool idea, especially with the flickering, and I like how the overall aesthetic of it looks. I began with a different thought, but then scrolled through my Pinterest feed until I saw this graphic of stylized binary. I then decided to create a clock where the time was embedded in the binary by colors, which I did then did. I started where I made the clock numbers lighter, which looked strange, so I instead made it black like empty space. I enjoyed this project and thought it was fun and a cool idea. I learned about second canvases in JS. I had not done that before, which was interesting to understand. Also, the time, flickering, and randomization are all things we discussed in class, but it was my first time applying them.



