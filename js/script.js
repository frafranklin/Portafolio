const typingText = document.getElementById("typingText");
const words = [
  "modernas",
  "impactantes",
  "elegantes",
  "interactivas",
  "inolvidables"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.18
});

reveals.forEach((item) => revealObserver.observe(item));

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const card = document.getElementById("parallaxCard");

if (card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  });
}

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 30) {
    header.style.background = "rgba(5, 8, 22, 0.72)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
  } else {
    header.style.background = "rgba(5, 8, 22, 0.45)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.06)";
  }
});