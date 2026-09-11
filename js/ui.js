// ==========================================
// UI: Navbar en scroll + Menú Mobile (hamburguesa)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    // --- Fondo del navbar al hacer scroll ---
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(18, 18, 20, 0.98)';
            } else {
                navbar.style.background = 'rgba(18, 18, 20, 0.85)';
            }
        });
    }

    // --- Menú mobile (hamburguesa) ---
    if (navToggle && navMenu && navOverlay) {

        function openMenu() {
            navMenu.classList.add('is-open');
            navOverlay.classList.add('is-open');
            navToggle.classList.add('is-active');
            navToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('nav-locked');
        }

        function closeMenu() {
            navMenu.classList.remove('is-open');
            navOverlay.classList.remove('is-open');
            navToggle.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('nav-locked');
        }

        function toggleMenu() {
            if (navMenu.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        navToggle.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', closeMenu);

        // Cierra el menú al tocar cualquier link de navegación
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cierra el menú con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Si el usuario agranda la ventana (pasa a desktop), se asegura de resetear el estado
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }
});
