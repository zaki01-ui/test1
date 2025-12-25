/* =========================================================
   HEADER SCROLL BEHAVIOR
   - Scroll down  → hide header
   - Scroll up    → show header
========================================================= */

let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // تمرير للأسفل
        header.classList.add('header-hidden');
    } else {
        // تمرير للأعلى
        header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
});
