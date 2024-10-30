// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll behavior for navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('bg-black');
            nav.classList.remove('bg-gradient-to-b', 'from-black/75', 'to-transparent');
        } else {
            nav.classList.remove('bg-black');
            nav.classList.add('bg-gradient-to-b', 'from-black/75', 'to-transparent');
        }
    });
});