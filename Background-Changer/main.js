let body = document.querySelector('body');
let btn = document.querySelector('.colorbtn');
const colors = ['red', 'yellow', 'green', 'brown'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hextext= document.querySelector('.hextext');



// btn.addEventListener('click', function () {
//     let ran = Math.floor(Math.random() * colors.length);
//     console.log(ran)
//     body.style.background = colors[ran];

// })

btn.addEventListener('click', function () {
let hexhash = '#';
    for (let i = 0; i < 6; i++) {
        random = Math.floor(Math.random() * hex.length);
        hexhash += hex[random]
        console.log(hexhash)

    }
    body.style.background = hexhash;
    hextext.textContent = hexhash;

})