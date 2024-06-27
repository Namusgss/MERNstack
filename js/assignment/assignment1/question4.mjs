/* make a arrow function named isEven , pass a value, that return true 
if the given number is even else return false */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your choice number? ', (iseven) => {
    let x = choicenum(iseven)
    console.log(x ? 'Number is Even' : 'Number is Odd')
    //console.log(`Hello, ${x}!`);
  rl.close();
});

let choicenum =(randnum) =>
    {
        if(randnum % 2 === 0)
            {
                return true;
            }
        else{
             return false;
        }
    }

