const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        num = this.getAttribute('data-num');
        console.log(num)
        screen.value += num;
    })

}

equal.addEventListener('click', function () {
    value = eval(screen.value);
    screen.value = value;
})

clear.addEventListener('click', function () {
    screen.value = '';
})