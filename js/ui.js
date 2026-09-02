// Opcional: animación suave o control del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 20, 0.98)';
    } else {
        navbar.style.background = 'rgba(18, 18, 20, 0.95)';
    }
});