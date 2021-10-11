$(function () {
    $('.contact__type--branding').on('click', function () {
        $('.contact__type--branding').toggleClass('contact__type--active');
    });
    $('.contact__type--illustrations').on('click', function () {
        $('.contact__type--illustrations').toggleClass('contact__type--active');
    });
    $('.contact__type--web').on('click', function () {
        $('.contact__type--web').toggleClass('contact__type--active');
    });
    $('.contact__type--html').on('click', function () {
        $('.contact__type--html').toggleClass('contact__type--active');
    });
    $('.contact__budget--ten').on('click', function () {
        $('.contact__budget--ten').toggleClass('contact__type--active');
    });
    $('.contact__budget--twelve').on('click', function () {
        $('.contact__budget--twelve').toggleClass('contact__type--active');
    });
    $('.contact__budget--thirty').on('click', function () {
        $('.contact__budget--thirty').toggleClass('contact__type--active');
    });
    $('.contact__budget--forty').on('click', function () {
        $('.contact__budget--forty').toggleClass('contact__type--active');
    });
    $('.contact__budget--fifty').on('click', function () {
        $('.contact__budget--fifty').toggleClass('contact__type--active');
    });
});
(function () {
    'use strict';

    const laptopTop = document.querySelector('.laptop__top');

    function toggleLaptop() {
        laptopTop.classList.toggle('laptop__top--active');
    }

    laptopTop.addEventListener('click', toggleLaptop);
})();

document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = 'вниз';
    } else {
        document.getElementById('line').innerHTML = 'вверх';
    }

    var speed = event.deltaY;
    speed = Math.abs(speed);
    if (speed < 75) {
        document.getElementById('speed').innerHTML = 'низкая';
    } else if (speed < 125) {
        document.getElementById('speed').innerHTML = 'средняя';
    } else if (speed < 225) {
        document.getElementById('speed').innerHTML = 'высокая';
    } else {
        document.getElementById('speed').innerHTML = 'очень высокая';
    }
};

var left = 200;
document.getElementById('pole').onwheel = function (event) {
    const line = event.deltaY;
    left = left + line;
    document.getElementById('pole-2').style.left = left + 'px';
    return false;
};
