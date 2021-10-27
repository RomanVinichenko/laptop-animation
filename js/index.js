$(function () {
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

gsap.to('.laptop__title--first', {
    opacity: 1,
    translateY: 0,
    duration: 1,
});
gsap.to('.laptop__title--second', {
    opacity: 1,
    translateY: 0,
    duration: 1.2,
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

(function () {
    const link = document.querySelectorAll('.contact__type');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
        const span = this.querySelector('.button__hover');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 15,
            xMove = (x / width) * (move * 2) - move,
            yMove = (y / height) * (move * 2) - move;
        span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') span.style.transform = '';
    };
    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})();

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
