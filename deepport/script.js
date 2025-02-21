// Animate language logos on scroll
const languageLogos = document.querySelectorAll('.language-logo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

languageLogos.forEach((logo) => {
    observer.observe(logo);
});

// 3D Modal
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

languageLogos.forEach((logo) => {
    logo.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-name", {
        strings: ["Hello, I'm Tanishq Kumar Kashyap"],
        typeSpeed: 800,  // Super slow typing (15 words per minute)
        showCursor: false,
        loop: false
    });
});
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-home", {
        strings: ["Hello, I'm Tanishq Kumar Kashyap"],
        typeSpeed: 100,  // Super slow typing (15 words per minute)
        showCursor: false,
        loop: false
    });
});
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-home", {
        strings: ["Hello, I'm Tanishq Kumar Kashyap"],
        typeSpeed: 100,  // Super slow typing (15 WPM)
        showCursor: false,
        loop: false
    });

    setTimeout(() => {  // Delay second text slightly for better effect
        new Typed("#typed-title", {
            strings: ["Full Stack Developer & UI/UX Designer"],
            typeSpeed: 100,
            showCursor: false,
            loop: false
        });
    }, 2000);  // Starts after 2s delay
});
