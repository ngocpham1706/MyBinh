window.onload = function () {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');

  // phần còn lại của mã fireworks...


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  for (let i = 0; i < 80; i++) { // nhiều hơn
    particles.push({
      x, y,
      radius: 3, // TO hơn
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 6 + 3,
      alpha: 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.01;

    if (p.alpha <= 0) particles.splice(i, 1);

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
animate();

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;
  createFirework(x, y);
}, 1200); // nổ nhanh hơn

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  document.getElementById('sparkle-container').appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1500);
}

setInterval(createSparkle, 80); // điều chỉnh mật độ lấp lánh tại đây\

};