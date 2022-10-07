var fruit = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
  {name:"Banana", quantity:25, color:"yellow"},
  {name:"Pear", quantity:10, color:"blue"},
  {name:"Grapes", quantity:20, color:"purple"}
];

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 0;  
let textX = 5;
let numX = 40;
for(let i = 0; i < fruit.length; i++){
  ctx.fillStyle= fruit[i].color;
  ctx.fillRect(x, 500, 100, -(fruit[i].quantity)*25);  
  x += 200; 
  ctx.fillStyle="black";
  ctx.font="20px Courier New blond"; 
  ctx.fillText(fruit[i].quantity, numX, 460);
  ctx.fillText(fruit[i].name, textX, 490);
  textX += (200 + fruit[i].name.length); 
  numX += 200;
}
