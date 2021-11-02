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
    if (cursor) {
        const animateit = function (e) {
            const span = this.querySelector('.button__hover');
            const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,
                move = 10,
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
    }
})();

// gsap.to('.article__img', {
//     yPercent: -10,
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '.article__img',
//         start: '500px top',
//         end: 'bottom top',
//         scrub: true,
//         markers: true,
//         multiple: true,
//     },
// });
//
// gsap.to('.article__img', {
//     scrollTrigger: {
//         scrub: true,
//     },
//     y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
//     ease: 'none',
// });

var img = document.querySelectorAll('.article__img-wrapper');
img.forEach(function (el) {
    let img = el.querySelector('.article__img');
    gsap.to(img, {
        y: function y() {
            return -(img.scrollHeight - el.getBoundingClientRect().height) + 'px';
        },
        scrollTrigger: {
            scrub: 0.3,
            start: 'top bottom',
            end: 'bottom top',
            trigger: el,
            // markers: true,
        },
    });
});
