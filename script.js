const canvas = document.getElementById("snake");
const cxs = canvas.getContext("2d");
let box = 32; //size of the unit

//load Images
let imageFood = new Image();
imageFood.src = "img/food.png";

let imageGround = new Image();
imageGround.src = "img/ground.png";

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
let d;
document.addEventListener("keydown", direction);

function direction(event) {
  if (event.keyCode == 37) {
    d = "LEFT";
  } else if (event.keyCode == 38) {
    d = "UP";
  } else if (event.keyCode == 39) {
    d = "RIGHT";
  } else if ((event.keyCode = 40)) {
    d = "DOWN";
  }
}

//drawing the details into the canvas
function draw() {
  cxs.drawImage(imageGround, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    cxs.fillStyle = i == 0 ? "green" : "white";
    cxs.fillRect(snake[i].x, snake[i].y, box, box);
    cxs.strokeStyle = "red";
    cxs.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  cxs.drawImage(imageFood, food.x, food.y);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  snake.pop();

  if ((d = "LEFT")) snakeX -= box;
  if ((d = "UP")) snakeY -= box;
  if ((d = "RIGHT")) snakeX += box;
  if ((d = "DOWN")) snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  cxs.fillStyle = "white";
  cxs.font = "45px Change one";
  cxs.fillText(score, 2 * box, 1.6 * box);
}

let game = setInterval(draw, 100);
