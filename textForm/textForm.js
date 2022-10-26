
var box = document.getElementById('name');

// Change background color
let textBackgroundColor = document.getElementById('backgroundColor');
setInterval(()=>{
    let color = textBackgroundColor.value;
    box.style.backgroundColor = color;
}, 200);


// Change text color 
let textColor = document.getElementById('textColor');
setInterval(() => {
    let color = textColor.value;
    box.style.color = color;
}, 200);


// Set the size of the text 
let textSize = document.getElementById('textSize');
function changeSize(){
    let textSize = document.getElementById('textSize').value;
    box.style.fontSize = textSize + "px";
}

// Allow for different fonts to display the text 
function changeFont(obj){
    let name = document.getElementById('name');
    name.style.fontFamily = obj.value; 
}

// Have a reset button to reset the page to their default values:
// Default text: Blank
// Default background color: White
// Default text color: Black
// Default size: 12
button.addEventListener('click', (e) =>{
    document.getElementById('textForm').reset();
    var textarea = document.getElementById('name');
    textarea.setAttribute('style','');
    textarea.value = "";
});