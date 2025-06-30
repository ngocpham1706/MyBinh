function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.animationDuration = (1 + Math.random() * 1.5) + 's';
  document.getElementById('stars-container').appendChild(star);
  setTimeout(() => star.remove(), 2000);
}

setInterval(createStar, 100);
