(function () {
    'use strict';

    const laptopTop = document.querySelector('.laptop__top');

    function toggleLaptop() {
        laptopTop.classList.toggle('laptop__top--active');
    }

    laptopTop.addEventListener('click', toggleLaptop);
})();
