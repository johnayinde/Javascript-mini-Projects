const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const quoteDisplay = document.querySelector('.quoteDisplay');
const quotePerson = document.querySelector('.quotePerson');
const quoteArray = [
    {
        name: 'Ola',
        quote: 'Ola Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore dolorem modi, tempora optio nostrum! Nobis dignissimos repellat ea optio! '
    },
    {
        name: 'James',
        quote: 'James eius totam deserunt a perspiciatis, nisi consectetur incidunt est vel. Voluptates, temporibus eveniet repellat sed  optio! '
    },
    {
        name: 'Peter',
        quote: 'Peter pariatur repellendus, impedit consequatur rerum mollitia excepturi exercitationem. Ratione mollitia alias tempore itaque enim perferendis porro fugit! '
    },
    {
        name: 'Buhari',
        quote: 'Buhari ercitationem earum eius optio numquam perspiciatis quas animi. Officiis facere libero omnis eligendi maxime. Optio '
    },
    {
        name: 'Gab',
        quote: 'Gab at facere id molestias alias consequatur sit rerum corrupti, exercitationem sint velit ullam debitis architecto corporis? Fugit et,'
    },
    
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quoteArray.length)
    quoteDisplay.textContent = quoteArray[random].quote;
    quotePerson.textContent = quoteArray[random].name;


})
