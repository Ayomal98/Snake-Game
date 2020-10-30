const canvas = document.getElementById("snake");
const cxs = canvas.getContext("2d");
let box = 32; //size of the unit

//load Images
let imageFood = new Image();
imageFood.src = "img/apple.jpg";

let imageGround = new Image();
imageGround.src = "img/ground.jpg";

//create the snake
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

//create the food
let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 17 + 1) * box,
};

//create the score
let score = 0;

//drawing the details into the canvas
function draw() {
  cxs.drawImage(imageGround, 0, 0);
}

let game = setInterval(draw, 100);
