document.addEventListener("DOMContentLoaded", (event) => {
    gsap.from('.top', {
        y: -1500,
    });


    gsap.from('.img-content',{
        x: -1500,
        ease: "elactic.on"
    })

    gsap.from('main',{
        opacity: 0,
        duration: 2
    })

});
