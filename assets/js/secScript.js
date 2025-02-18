const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

// Función para crear una partícula de confeti
function createConfetti() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 10 + 5;
  const color = getRandomColor();
  const speed = Math.random() * 2 + 1;
  const angle = Math.random() * Math.PI * 2;

  return {
    x,
    y,
    size,
    color,
    speed,
    angle,
    update: function() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.y += this.speed; // Simula la gravedad

      // Si la partícula sale de la pantalla, la reiniciamos
      if (this.y > canvas.height) {
        this.x = Math.random() * canvas.width;
        this.y = -size;
      }
    },
    draw: function() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  };
}

// Función para generar un color aleatorio
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

// Creamos un array de partículas de confeti
const confettiParticles = [];
for (let i = 0; i < 200; i++) {
  confettiParticles.push(createConfetti());
}

// Función para animar el confeti
function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateConfetti);
}

// Ajustamos el tamaño del canvas al tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicializamos el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Iniciamos la animación
animateConfetti();
