
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + '%';
  balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.animationDuration = (5 + Math.random() * 3) + 's';
  document.getElementById('balloon-container').appendChild(balloon);
  setTimeout(() => balloon.remove(), 9000);
}
setInterval(createBalloon, 200); // 300ms tạo 1 bóng

