const canvas = document.getElementById("cookie-particles");
const ctx = canvas.getContext("2d");
let particles = [];

// Set canvas dimensions to window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Redraw canvas on window resize
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function drawParticles() {
  drawNewParticles()

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw particles
  for (let i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
    ctx.fillStyle = particles[i].color;
    ctx.fill();
    particles[i].y += particles[i].speed;
    if (particles[i].y > canvas.height) {
      particles.splice(i, 1);
      i--;
    }
  }
  // Request next frame
  requestAnimationFrame(drawParticles);
}

function moneyOrCoin() {
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  if (randomNumber >= 3) {
    return "#008000"
  } else {
    return "#d4af37"
  }
}

function drawNewParticles() {
  // Create new particles
  if (Math.random() < 0.1) {
    particles.push({
      x: Math.random() * canvas.width,
      y: 0,
      size: Math.random() * 5 + 5,
      speed: Math.random() * 5 + 1,
      color: moneyOrCoin()
    });
  }
}

// Call drawParticles to start animation
drawParticles();