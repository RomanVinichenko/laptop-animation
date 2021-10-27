$(function () {
    $('.contact__type-branding').on('click', function () {
        $('.contact__type-branding').toggleClass('contact__type--active');
    });
    $('.contact__type-illustrations').on('click', function () {
        $('.contact__type-illustrations').toggleClass('contact__type--active');
    });
    $('.contact__type-web').on('click', function () {
        $('.contact__type-web').toggleClass('contact__type--active');
    });
    $('.contact__type-html').on('click', function () {
        $('.contact__type-html').toggleClass('contact__type--active');
    });

    $('.contact__budget-ten').on('click', function () {
        $('.contact__budget-ten').toggleClass('contact__type--active');
    });
    $('.contact__budget-twelve').on('click', function () {
        $('.contact__budget-twelve').toggleClass('contact__type--active');
    });
    $('.contact__budget-thirty').on('click', function () {
        $('.contact__budget-thirty').toggleClass('contact__type--active');
    });
    $('.contact__budget-forty').on('click', function () {
        $('.contact__budget-forty').toggleClass('contact__type--active');
    });
    $('.contact__budget-fifty').on('click', function () {
        $('.contact__budget-fifty').toggleClass('contact__type--active');
    });
    $('.links__button').on('click', function () {
        $('.links__list').toggleClass('links__list--active');
    });
});
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

var mixer = mixitup('.article__wrapper');
