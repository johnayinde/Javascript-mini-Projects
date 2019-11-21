const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const box = document.querySelector('.container');
let num = 0;
let images = [
    "./img/p1.jpg",
    "./img/p2.png",
    "./img/p3.jpeg",
    "./img/p4.png",
];

next.addEventListener('click', function () {
    num++
    if (num >= images.length) {
        num = 0;
    }
    box.style.background = `url(${images[num]}) center center no-repeat `;
    box.animate([{ opacity: '0.1' }, { opacity: '1.0' }], { duration: 300, fill: 'forwards' })
})

prev.addEventListener('click', function () {
    num--
    if (num < 0) {
        num = images.length - 1;
    }
    box.style.background = `url(${images[num]}) center center no-repeat `;
    box.animate([{ opacity: '0.1' }, { opacity: '1.0' }], { duration: 300, fill: 'forwards' })
})
