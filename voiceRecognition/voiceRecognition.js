var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var button = document.getElementById("speakButton");
var radius = 25;
var diam;
var color = "black";
var updateColor;

// draw bounding box
ctx.beginPath();
ctx.rect(0, 0, 600, 600);
ctx.stroke();

// draw an arc (circle) in the very center of the canvas with a radius of 25 and the fillStyle of black
ctx.beginPath();
ctx.arc(300, 300, radius, 0, 2 * Math.PI);
ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.fill();
ctx.stroke();
ctx.closePath();


window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();


const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;

    if (event.results[0].isFinal) {
        button.innerHTML = "Speak";

      if (speechToText.includes('color')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        color = speechToText.split(' ')[1];
        updateColor = isColor(color);
        if(updateColor == true){
          ctx.beginPath();
          ctx.arc(300, 300, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
        else {
          ctx.beginPath();
          ctx.arc(300, 300, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
      };
      

      if (speechToText.includes('size')) {
        diam = speechToText.split(' ')[1];
        if(diam > 300){
          speak(sizeTooLarge);
        }
        else if(diam < 1){
          speak(sizeTooSmall);
        }
        else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          radius = diam/2;
          ctx.beginPath();
          ctx.arc(300, 300, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
      };

      if (speechToText.includes('help')) {
          speak(help);
      };
    }
  }
}

const speak = (action) => {
  utterThis = new SpeechSynthesisUtterance(action());
  synth.speak(utterThis);
};

const sizeTooLarge = () => {
  return "Size size limit 300";
};

const sizeTooSmall = () => {
  return "Size too small, the minimize size is 1";
};

const help = () => {
  return "Say color, followed by a color, to set the circle color. Say size, followed of a number from 1 to 300, to set the diameter of the circle.";
};

function speakButton() {
    if (button.innerHTML=="Speak") {
        button.innerHTML = "Stop";
        dictate();
    }
    else {
        button.innerHTML = "Speak";
        recognition.stop();
    }
}


function isColor(strColor){
      var s = new Option().style;
      s.color = strColor;
      return s.color == strColor;
}
