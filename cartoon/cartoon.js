let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


// Background color
ctx.fillStyle = "#0d0d0d";
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Caption text
ctx.font = "50px Georgia";
ctx.fillStyle="#FFFFFF";
ctx.fillText("Snowy Night", 90, 300);


// Moon
ctx.fillStyle = "#e3b94d";
ctx.strokeStyle = "#e3b94d";
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


// Clouds
ctx.beginPath();
ctx.arc(340, 65, 40, 0, 2 * Math.PI)
ctx.fillStyle = "#393d6e";
ctx.fill();
ctx.arc(410, 55, 50, 0, 2 * Math.PI)
ctx.fillStyle = "#393d6e";
ctx.fill();
ctx.arc(470, 65, 40, 0, 2 * Math.PI)
ctx.fillStyle = "#393d6e";
ctx.fill();
ctx.fillStyle = "#393d6e";
ctx.fillRect (345, 35, 120, 70);
ctx.fill();
ctx.beginPath();
ctx.arc(640, 115, 40, 0, 2 * Math.PI)
ctx.fillStyle = "#9196c9";
ctx.fill();
ctx.arc(710, 105, 50, 0, 2 * Math.PI)
ctx.fillStyle = "#9196c9";
ctx.fill();
ctx.arc(770, 115, 40, 0, 2 * Math.PI)
ctx.fillStyle = "#9196c9";
ctx.fill();
ctx.fillStyle = "#9196c9";
ctx.fillRect (645, 85, 120, 70);
ctx.fill();


// Mountains
function drawMountains() {
  let x = 0;
  let y = 500; 
  ctx.strokeStyle = "#264028";
  ctx.beginPath();
  ctx.moveTo(x, y);

  while (x < 1000) {
    let dx = (Math.random() * 20) + 50; 
    let dy = (Math.random() - 0.5) * 100; 
    x = x + dx;
    y = y + dy;

    if (y < 0 || y > 800) {
      y = y - 2 * dy; 
    }
    if (x > 1000) {
      x = 1000;
    }
    ctx.lineTo(x, y);
  }

  ctx.lineTo(1000, y);
  ctx.lineTo(1000, 800);
  ctx.lineTo(0, 800);
  ctx.lineTo(0, 800 * 0.4);
  ctx.stroke();
  ctx.fillStyle = "#264028"
  ctx.fill();
}
drawMountains();


// Use a for loop to draw snow
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}
function snow() {
  const canvasSize = 1000 * 800;
  const snowFraction = canvasSize / 2000;

  for(let i = 0; i < snowFraction; i++) {
    let xPos = random(2, 1000 - 2);
    let yPos = random(2, 800 - 2);
    let alpha = random(0.5, 1);
    let size = random(1, 2);

    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = alpha;
    ctx.fillRect(xPos, yPos, size, size);
  }
}
snow();


// Stars
function drawStar(cx, cy, spikes, outerRadius, innerRadius){
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius)
  for(i = 0;i < spikes; i++){
    x= cx + Math.cos(rot) * outerRadius;
    y= cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x,y)
    rot += step

    x = cx+Math.cos(rot) * innerRadius;
    y = cy+Math.sin(rot) * innerRadius;
    ctx.lineTo(x,y)
    rot += step
  }
  ctx.lineTo(cx, cy-outerRadius);
  ctx.closePath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#f5f7a6";
  ctx.stroke();
  ctx.fillStyle = "#f4f799";
  ctx.fill();
}
drawStar(200,200,5,15,5);
drawStar(850,150,5,15,5);
drawStar(500,150,5,15,5);


// Ground color
ctx.fillStyle = " #4d3319";
ctx.fillRect(0, 770, 1000, 800);


// House with details
// Draw house roof
ctx.fillStyle="#735744";
ctx.beginPath();
ctx.moveTo(412,650);
ctx.lineTo(585,650);
ctx.lineTo(499,600);
ctx.closePath();
ctx.fill();
// Draw house walls
ctx.fillStyle="#a7ad90";
ctx.fillRect(412,650,172,120);
// Draw windows
ctx.fillStyle="#663300";
ctx.fillRect(425,660,35,50);
ctx.fillStyle="#ecfcb1";
ctx.fillRect(427,662,13,23);
ctx.fillRect(443,662,13,23);
ctx.fillRect(443,687,13,21);
ctx.fillRect(427,687,13,21);
// Draw door
ctx.fillStyle = "#754719";
ctx.fillRect(485,680,40,90);
// Draw door knob
ctx.beginPath();
ctx.fillStyle = "#141414";
ctx.arc(500,720,3,0,2*Math.PI);
ctx.fill();
ctx.closePath();


// Use a for loop to draw grass
function drawGrass(x, y) {
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y);
    ctx.lineTo(x + 5, y - 10);
    ctx.fillStyle = "#7bdb82";
    ctx.fill();
    x = x + 10;
  }
}
drawGrass(5, 770);