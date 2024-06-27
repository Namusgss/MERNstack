

/* make a arrow function that take a number and return you can enter room only if 
the enter number is less than 18 else you can not enter */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your age? ', (age) => {
    let x = enterNumber(age)
    console.log(`Hello, ${x}!`);
  rl.close();
});

let enterNumber=(age) => {
    if (age<18){
        return('You can enter room')
    }
    else{
        return("You can't enter the room")
    }
}

