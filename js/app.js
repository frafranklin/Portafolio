// Animación al hacer scroll (Intersection Observer)
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});


// Efecto cursor dinámico
document.addEventListener("mousemove", e => {
  document.body.style.backgroundPosition = `${e.clientX/10}px ${e.clientY/10}px`;
});