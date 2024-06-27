//else if
let gender="f";
if(gender==="male"){
    console.log("he is male");
}else if (gender==="female"){
    console.log("she is female");
}else{
    console.log("they are other");
}

let age=100;
if(age>=0 && age<=18){
    console.log("underage");
}else if (age>=19 && age <= 60){
    console.log("adult");
}else if(age>=61 && age <= 150){
    console.log("old");
}else
    console.log("none");


