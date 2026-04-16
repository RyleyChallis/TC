const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const currentItem = header.parentElement;
        const isOpen = currentItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
        });

        if (!isOpen) {
            currentItem.classList.add("active");
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// 1. Single listener for the hamburger button
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-active'); // This triggers the dimming
});

// 2. Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('nav-active');
    });
});

// 3. Close menu when clicking the dimmed area (outside)
window.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-active');
        }
    }
});