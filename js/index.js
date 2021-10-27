gsap.registerPlugin(ScrollTrigger);
gsap.to('.laptop__top', {
    scrollTrigger: {
        trigger: '.laptop',
        start: 'top top',
        end: '800px top',
        // markers: true,
        scrub: 2.5,
        pin: true,
    },
    rotationX: 0,
    duration: 5,
});

window.addEventListener('load', function () {
    gsap.to('#preloader', {
        opacity: 0,
        duration: 0.3,
        ease: 'Power3.easeOut',
        oncomplete: function () {
            document.getElementById('preloader').classList.add('hide');
        },
    });
});

var mixit = document.querySelector('.article__wrapper');

if (mixit) {
    var mixer = mixitup('.article__wrapper');
}

// gsap.to('.article__img', {
//     yPercent: -100,
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '.article__wrapper',
//         // start: "top bottom", // the default values
//         // end: "bottom top",
//         scrub: true,
//         markers: true,
//     },
// });
//
// gsap.to('.article', {
//     yPercent: 50,
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '.pSection',
//         // start: "top bottom", // the default values
//         // end: "bottom top",
//         scrub: true,
//     },
// });
