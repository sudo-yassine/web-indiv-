const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

const fruitimg = new Image();
fruitimg.src = "fruit.png";

let fruits = [];

function drawfruit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fruits.forEach((fruit) => {
    ctx.drawImage(fruitimg, fruit.x, fruit.y, fruit.width, fruit.height);
  });
}

function updatefruitposition() {
  fruits.forEach((fruit) => {
    fruit.velocityy += 0.04;
    fruit.y += fruit.velocityy;
    fruit.x += fruit.velocityx;
    if (fruit.y + fruit.height > canvas.height) {
      fruit.velocityy = -fruit.velocityy * 0.5;
      fruit.y = canvas.height - fruit.height;
    }
  });
}

canvas.addEventListener("click", function (event) {
  let fruit = {
    x: event.clientX - canvas.offsetLeft - 40,
    y: event.clientY - canvas.offsetTop - 40,
    width: 80,
    height: 80,
    velocityy: 0,
    velocityx: 0,
  };
  fruits.push(fruit);
});

function gameLoop() {
  updatefruitposition();
  drawfruit();
  requestAnimationFrame(gameLoop);
}
gameLoop();
