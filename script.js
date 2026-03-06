document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll para enlaces internos
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });
    });

    // Toggle del menú responsive
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

    }

    // Lightbox para galería de imágenes
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (galleryImages.length && lightbox && lightboxImg) {

        galleryImages.forEach(img => {

            img.addEventListener("click", () => {

                lightbox.style.display = "flex";
                lightboxImg.src = img.src;

            });

        });

        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

    }

});