const canvas = document.getElementById("snake");
const cxs = canvas.getContext("2d");
let box = 32; //size of the unit

let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };
//load Images
let imageFood = new Image();
imageFood.src = "img/apple.jpg";

let imageGround = new Image();
imageGround.src = "img/ground.jpg";
//load the audio-clip
let audioName = new Audio();
audioName.src;

//draw the image
cxs.drawimage(imageName, 40, 50, 25, 25);

//draw the rectangle
cxs.fillStyle = "red";
cxs.fillRect = (100, 300, 30, 30);
