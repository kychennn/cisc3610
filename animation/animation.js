document.addEventListener('DOMContentLoaded', init);
let canvas, ctx, backgroundImg, sprites, talkBubble, frames;

function init()
{
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    // Have a background.
    backgroundImg = new Image();
    backgroundImg.src = 'images/background.jpeg';
    backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);

    // Change or reposition some items in the scene in different frames.  
    sprites = new Image();
    sprites.src = 'images/spriteSheets.png';

    // Have talk bubbles appear for Doraemon to say things.
    talkBubble = new Image();
    talkBubble.src = 'images/textBox.png';

    frames = spriteSheets.frames;
    startAnim();
}

function startAnim()
{
    let count = 0;
    setInterval(() =>
    {
        drawFrame(count);
        count >= frames.length - 1 ? count = 0 : count++;
    }, 500);
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, 0, 0);
}

function drawFrame(frameNum)
{
    clearCanvas();
    let f = frames[frameNum];
    ctx.drawImage(
        sprites,
        f.frame.x,
        f.frame.y,
        f.frame.w,
        f.frame.h,
        5 + (frameNum * 50),
        600,
        f.sourceSize.w,
        f.sourceSize.h
    );

    if (frameNum > 0 && frameNum < 5){
        textHome();
    }

    if (frameNum > 7 && frameNum < 15){
        textFood();
    }
}

function textHome()
{
    ctx.drawImage(talkBubble, 220, 420, 200, 150);
    ctx.font = '20px Helvetica';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center';
    ctx.fillText('I am home!', 320, 470);
    ctx.fillText('So hungry', 320, 500);
}

function textFood()
{
    ctx.drawImage(talkBubble, 620, 420, 300, 150);
    ctx.font = '20px Helvetica';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center';
    ctx.fillText('I want to eat dorayaki!', 750, 470);
    ctx.fillText('Dorayaki!!', 750, 500);
}