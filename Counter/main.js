
var counter = document.querySelector('.count');
var reduce = document.querySelector('.btn1');
var add = document.querySelector('.btn2');
var num = 0;

add.addEventListener('click', function () {
    num += 1;
    counter.textContent = num;
    console.log(num)
    if (num >= 1) {
        counter.style.color = 'green';
    } else if (num === 0) {
        counter.style.color = '';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 500, fill: 'forwards' })
})

reduce.addEventListener('click', function () {
    num -= 1;
    counter.textContent = num;
    console.log(num)
    if (num === 0) {
        counter.style.color = '';
    } else if (num < 1) {
        counter.style.color = 'red';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 500, fill: 'forwards' })
})