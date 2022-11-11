let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.font = "50px Georgia";
ctx.fillStyle="#347deb";
ctx.fillText("Sound Effect Machine", 120, 60);


function play(sound) {
    let audio = document.getElementById(sound);
    audio.play();
}


$('<p>').appendTo('#map_div').text('Chick ').css({
  position: 'absolute',
  top: '620px',
  left: '315px',
  font: 'italic 1em "Fira Sans", serif'
});

$('<p>').appendTo('#map_div').text('Wind ').css({
  position: 'absolute',
  top: '620px',
  left: '362px',
  font: 'italic 1em "Fira Sans", serif'
});

$('<p>').appendTo('#map_div').text('Ocean ').css({
  position: 'absolute',
  top: '620px',
  left: '408px',
  font: 'italic 1em "Fira Sans", serif'
});

$('<p>').appendTo('#map_div').text('Rain ').css({
  position: 'absolute',
  top: '620px',
  left: '460px',
  font: 'italic 1em "Fira Sans", serif'
});

$('<p>').appendTo('#map_div').text('River ').css({
  position: 'absolute',
  top: '620px',
  left: '504px',
  font: 'italic 1em "Fira Sans", serif'
});

$('<p>').appendTo('#map_div').text('Night ').css({
  position: 'absolute',
  top: '620px',
  left: '550px',
  font: 'italic 1em "Fira Sans", serif'
});
