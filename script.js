'use strict';
/*function question() {*/
let question = confirm('Хотите написать числа?') 
      if (question == false ) {
        alert('увы, вы выбрали не тот ответ')
      } else {
          alert('Нажмите кнопку')
      }
          
     function calc() {
        let numbers =[];
        while (true) {
            let value = +prompt('введите число', '');
            if (value == false || value == null) break;
            numbers.push(+value);
        }

    let sum = 0; let mul = 1;
    for (let number of numbers) {
        sum += number;
        mul *= number;
        }
      
    return console.log(`произведение ${mul}, cумма  ${sum}`)
    document.getElementById('out').innerHTML = (`произведение ${mul}, cумма  ${sum}`);
    }
   
    
  /*  let num = [];
   function number() {
        num = 0;
        let numbers = document.getElementById('i1').value;
        numbers = parseInt(numbers)
        console.log(numbers)
        num = numbers;
   
   function summa() {
       for (let num of numbers) {
           summa += number;
        document.getElementById('out').innerHTML = summa;
       }
   }
}*/