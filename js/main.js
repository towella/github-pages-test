const display = document.getElementById("gameArea");
const ctx = display.getContext('2d');

// player mouse coords
let mx = 0;
let my = 0;


// --- UPDATE -----------------------------------------------------

function update() {
  // keep track of player mouse
  document.onmousemove = handleMouseMove
  function handleMouseMove(event) {
    // normalise mouse coords to display canvas
    mx = event.clientX - display.offsetLeft;
    my = event.clientY - display.offsetTop;
  }

  draw();
}


// --- RENDERING ---------------------------------------------------

function draw() {
  // clear screen
  clear();

  // draw cursor
  drawPoint(mx, my);
}


function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, display.width, display.height);
}


function drawPoint(x, y) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}


// --- GAME CLOCK ---------------------------------------------------

// sets game loop. Calls update at given intervals
setInterval(update, 1000 / 60) // time in ms
