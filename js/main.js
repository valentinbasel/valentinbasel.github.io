/* =========================================================
   Navegación suave
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   Año automático en el footer
   ========================================================= */

const footer = document.querySelector(".site-footer");

if (footer) {

    const year = new Date().getFullYear();

    const yearElement = footer.querySelector(".current-year");

    if (yearElement) {
        yearElement.textContent = year;
    }

}


/* =========================================================
   Resaltar sección actual en la navegación
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            navigationLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);


sections.forEach(section => {
    observer.observe(section);
});
