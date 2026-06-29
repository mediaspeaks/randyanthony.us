
/*
==========================================================
The Piety PayChain
Core Application Script
Version 0.1
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("The Piety PayChain initialized.");

    /*
    -----------------------------------------
    Fade-in animation support
    -----------------------------------------
    */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".fade-up").forEach(element => {

        observer.observe(element);

    });

    /*
    -----------------------------------------
    Hero SVG pulse
    -----------------------------------------
    */

    const nodes = document.querySelectorAll(".node");

    let pulse = false;

    setInterval(() => {

        pulse = !pulse;

        nodes.forEach(node => {

            node.style.transform = pulse
                ? "scale(1.05)"
                : "scale(1.00)";

        });

    }, 1800);

});
