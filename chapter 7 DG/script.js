function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

// Animation for hamburger icon
const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    bar.style.animation = `slide-in 0.5s ease forwards ${index / 7 + 0.3}s`;
});

