/* =========================================
   SUKHWANT SINGH — PERSONAL PORTFOLIO
   STEP 3 — JAVASCRIPT
   ========================================= */


/* =========================================
   1. GET HTML ELEMENTS
   ========================================= */

const menuButton = document.getElementById("menu-button");
const navMenu = document.querySelector(".nav-menu");


/* =========================================
   2. MOBILE NAVIGATION
   ========================================= */

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =========================================
   3. CLOSE MOBILE MENU
      WHEN A NAVIGATION LINK IS CLICKED
   ========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   4. CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================= */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navMenu.classList.remove("active");

    }

});


/* =========================================
   5. SCROLL REVEAL ANIMATION
   ========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".timeline-item, " +
        ".skill-card, " +
        ".experience-card, " +
        ".project-card, " +
        ".sic-content, " +
        ".goal-card, " +
        ".social-card"
    );


/* Add initial hidden class */

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* =========================================
   6. CHECK ELEMENTS ON SCROLL
   ========================================= */

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

}


/* =========================================
   7. RUN SCROLL FUNCTION
   ========================================= */

window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Run once when page loads */

revealOnScroll();


/* =========================================
   8. NAVBAR SHADOW ON SCROLL
   ========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* =========================================
   9. CURRENT YEAR IN FOOTER
   ========================================= */

const footer =
    document.querySelector(".footer p");


const currentYear =
    new Date().getFullYear();


footer.innerHTML =
    `© ${currentYear} Sukhwant Singh.
     Built with HTML, CSS & JavaScript.`;


/* =========================================
   10. PROJECT LINK MESSAGE
   ========================================= */

const projectLink =
    document.querySelector(".project-link");


projectLink.addEventListener("click", () => {

    console.log(
        "Opening Campus Cue project..."
    );

});