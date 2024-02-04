const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

const playerImage = new Image();
playerImage.src = "spaceship.png";

const enemiesImage = new Image();
enemiesImage.src = "enemycraft.png";

const player = {
  x: canvas.width / 2,
  y: canvas.height - 70,
  width: 60,
  height: 60,
  speed: 3,
  health: 100,
};

const bullets = [];
const bulletSpeed = 7;

const enemies = [];
let enemySpeed = 0.5;

const keys = {
  left: false,
  right: false,
  spacebar: false,
};

function drawPlayer() {
  ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function drawBullets() {
  ctx.fillStyle = "#F00";
  for (const bullet of bullets) {
    ctx.fillRect(bullet.x - 2, bullet.y - 10, 4, 10);
  }
}
function drawEnemies() {
  for (const enemy of enemies) {
    ctx.drawImage(
      enemiesImage,
      enemy.x - enemy.width / 2,
      enemy.y - enemy.height / 2,
      enemy.width,
      enemy.height
    );
  }
}

function update() {
  for (const bullet of bullets) {
    bullet.y -= bulletSpeed;
  }

  bullets.forEach((bullet, index) => {
    if (bullet.y < 0) {
      bullets.splice(index, 1);
    }
  });

  for (const enemy of enemies) {
    enemy.y += enemySpeed;
  }

  enemies.forEach((enemy, index) => {
    if (enemy.y > canvas.height) {
      enemies.splice(index, 1);
    }
  });

  for (const bullet of bullets) {
    for (const enemy of enemies) {
      if (
        bullet.x >= enemy.x - enemy.width / 2 &&
        bullet.x <= enemy.x + enemy.width / 2 &&
        bullet.y >= enemy.y - enemy.height / 2 &&
        bullet.y <= enemy.y + enemy.height / 2
      ) {
        bullets.splice(bullets.indexOf(bullet), 1);
        enemies.splice(enemies.indexOf(enemy), 1);
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBullets();
  drawEnemies();
}

function gameLoop() {
  update();
  updatemvt();
  draw();
  requestAnimationFrame(gameLoop);
}

function spawnEnemy() {
  const enemy = {
    x: Math.random() * canvas.width,
    y: 0,
    width: 50,
    height: 50,
  };
  enemies.push(enemy);
}

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);
window.addEventListener("spacebar", keyDownHandler, false);

function keyDownHandler(e) {
  if (e.key === "a") {
    keys.left = true;
  } else if (e.key === "d") {
    keys.right = true;
  } else if (keys.spacebar === spacebar) {
    keys.spacebar = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Left" || e.key === "a") {
    keys.left = false;
  } else if (e.key === "Right" || e.key === "d") {
    keys.right = false;
  }
  if (keys.spacebar === " ") {
    keys.spacebar = false;
  }
}

function updatemvt() {
  if (keys.left && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.right && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }
  if (keys.spacebar === " ") {
    const bullet = {
      x: player.x + 30,
      y: player.y - player.height / 2 + 30,
    };
    bullets.push(bullet);
  }
}
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    bullets.push({
      x: player.x + player.width / 2 - 2.5,
      y: player.y - 5,
    });
  }
});

spawnEnemy();
gameLoop();

setInterval(spawnEnemy, 1000);
