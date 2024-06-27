/*[1,11,12]=[1,11] can use filter
//[1,11,12]=[1,10] cant use filter*/
  
let input =[1,2,3,4,5,6,7,8,9,0];

let output= input.filter((value, i)=>{
if(value>=3){
    return true;
}
else{
    return false;
}
});

console.log(output)

//filter even [1,2,6,3]=[2,6]
let inp= [1,2,6,3];

let out=inp.filter((value, i)=>{
if (value%2===0){
    return true;
}
else{
    return false;
}
});

console.log(out)

//filter positive number
let in1= [1,2,6,3, -1,0.5,0];

let out1=in1.filter((value, i)=>{
if (value>=0){
    return true;
}
else{
    return false;
}
});

console.log(out1)
//filter string ["a", 1, "b", 3, "suman"]= ["a","b", "suman"]
//sample

let a="suman"
console.log(typeof a)

let inputstring=["a", 1, "b", 3, "suman"];

let outputstring=inputstring.filter((value, i)=>{
if (typeof value ==="string"){
    return true;
}
else{
    return false;
}
});

console.log(outputstring)