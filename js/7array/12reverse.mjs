//reverse method gives new as well as changed original value
let ar1= [1,2,3,4,5,6,7]

let ar2=ar1.reverse();

console.log(ar1)
console.log(ar2)

//reverse ["my name is suman"]=["ym si eman namus"]


let input0=  "my name is suman";
let input1= input0.split(" ");
let reversedarray = input1.map((value,i)=>{
//return console.log(value)
return value.split("").reverse().join("");

});

console.log(reversedarray.join(" "))
