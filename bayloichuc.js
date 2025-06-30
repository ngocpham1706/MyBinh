
  const wishes = [
    "Chúc bạn luôn mỉm cười 🌸",
    "Sinh nhật vui vẻ 🎂",
    "Luôn rạng rỡ như ánh nắng ☀️",
    "Hạnh phúc và yêu đời 💖",
    "Ước mơ nào cũng thành hiện thực ✨",
    "Mỹ Bình tuyệt vời nhất! 🎉"
  ];

  function createFloatingWish() {
    const container = document.getElementById('floating-wishes-container');
    const wish = document.createElement('div');
    wish.className = 'floating-wish';
    wish.textContent = wishes[Math.floor(Math.random() * wishes.length)];

    // Vị trí ngẫu nhiên theo chiều ngang
    wish.style.left = Math.random() * 90 + "%";

    // Thêm vào trang
    container.appendChild(wish);

    // Xoá sau khi animation kết thúc
    setTimeout(() => {
      wish.remove();
    }, 6000);
  }

  // Tạo lời chúc bay mỗi 2 giây
  setInterval(createFloatingWish, 2000);
