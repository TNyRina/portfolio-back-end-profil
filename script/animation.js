document.addEventListener("DOMContentLoaded", (event) => {
    gsap.from('.top', {
        y: -1500,
    });


    gsap.from('.img-content',{
        x: -1500,
        duration: 2,
        ease: "bounce"
    })

    gsap.from('main',{
        opacity: 0,
        duration: 3
    })

    // gsap.effects.fade("#about");
});

gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
      return gsap.from(targets, {   
        duration: config.duration, 
        y: 400,
        opacity: 0 });
    },
    defaults: { duration: 1 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
  });