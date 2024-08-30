document.addEventListener("DOMContentLoaded", (event) => {
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => activateLink(index),
            onEnterBack: () => activateLink(index),
            onLeave: () => deactivateLink(index),
            onLeaveBack: () => deactivateLink(index)
        });
    });

    function activateLink(index) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    function deactivateLink(index) {
        navLinks[index].classList.remove('active');
    }
});