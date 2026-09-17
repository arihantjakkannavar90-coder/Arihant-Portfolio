/* =========================================
   HERO ANIMATIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const heroItems = [
        document.querySelector(".hero-image"),
        document.querySelector(".small-title"),
        document.querySelector(".hero h1"),
        document.querySelector(".hero h2"),
        document.querySelector(".hero-text"),
        document.querySelector(".hero-buttons"),
        document.querySelector(".social-links")
    ];

    heroItems.forEach((item, index) => {

        if (item) {
            item.classList.add("hero-animation");

            setTimeout(() => {
                item.classList.add("show");
            }, 200 + (index * 180));
        }

    });


    /* =========================================
       TYPING EFFECT
       ========================================= */

    const subtitle = document.querySelector(".hero h2");

    if (subtitle) {

        const originalText = subtitle.textContent.trim();

        subtitle.textContent = "";

        let character = 0;

        function typeText() {

            if (character < originalText.length) {

                subtitle.textContent += originalText.charAt(character);

                character++;

                setTimeout(typeText, 55);

            }

        }

        setTimeout(typeText, 1100);

    }


    /* =========================================
       SCROLL REVEAL ANIMATION
       ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-title, .about-text, .skill-card, .project-card, .timeline-item, .contact-text, .contact-links"
    );


    revealElements.forEach((element) => {

        element.classList.add("scroll-reveal");

    });


    const observer