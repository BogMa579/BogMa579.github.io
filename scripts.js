document.addEventListener('DOMContentLoaded', function() {
    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    const elements = document.querySelectorAll('[data-en]');

    enBtn.addEventListener('click', function() {
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    });

    frBtn.addEventListener('click', function() {
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-fr');
        });
    });
});
