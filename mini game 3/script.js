// Get the canvas element
const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

// Define the size of each grid cell
const gridSize = 25;

// Initialize the snake position
let snake = [{ x: 10, y: 10 }];
let dx = 0;
let dy = 0;

// Initialize the food position
let food = { x: 5, y: 5 };

// Main game loop
function main() {
  clearCanvas();
  update();
  draw();
  setTimeout(main, 100); // Repeat main every 100ms
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update game state
function update() {
  // Move the snake
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Check if snake eats food
  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

// Generate new food position
function generateFood() {
  food.x = Math.floor(Math.random() * (canvas.width / gridSize));
  food.y = Math.floor(Math.random() * (canvas.height / gridSize));
}

// Draw game objects
function draw() {
  // Draw snake
  ctx.fillStyle = "green";
  snake.forEach((segment) => {
    ctx.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize,
      gridSize
    );
  });

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// Event listener for key presses
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -1;
  } else if (key === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = 1;
  } else if (key === "ArrowLeft" && dx === 0) {
    dx = -1;
    dy = 0;
  } else if (key === "ArrowRight" && dx === 0) {
    dx = 1;
    dy = 0;
  }
});

// Start the game
main();
