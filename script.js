// Smooth Scroll for Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Dark Mode Toggle

const header = document.querySelector("header");

const darkBtn = document.createElement("button");

darkBtn.textContent = "🌙 Dark Mode";

darkBtn.classList.add("dark-toggle");

header.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    darkBtn.textContent = "☀️ Light Mode";

  } else {

    darkBtn.textContent = "🌙 Dark Mode";

  }

});

// Scroll Animation for Cards

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = 1;

      entry.target.style.transform = "translateY(0)";

    }

  });

}, { threshold: 0.2 });

cards.forEach(card => {

  card.style.opacity = 0;

  card.style.transform = "translateY(50px)";

  card.style.transition = "all 0.6s ease-out";

  observer.observe(card);

});