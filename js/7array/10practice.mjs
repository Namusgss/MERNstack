//["my", "nAme", "is", "suMan"]=>["My", "Name", "Is", "Suman" ]

let firstlettercapital=(input)=>{
let inputar1= input.split("");

let inputar2= inputar1.map((value, i)=>{
if (i===0){
    return value.toUpperCase();
}
else{
    return value.toLowerCase();
}
});
let output =inputar2.join("");
return output;
};

let realinput= ["my", "nAme", "is", "suMan"];

const realoutput = realinput.map((value, i)=>{
return firstlettercapital(value);
});
console.log(realoutput)