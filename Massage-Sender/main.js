const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const massage = document.querySelector('.massage');

button.addEventListener('click', function sendText(){
   let text = document.querySelector('textarea').value;
   if (text == '') {
       alert('Invalid Input Field Can\'t be empty')
   }else{
       massage.textContent = text;
       textarea.value = ' ';
   }
});
