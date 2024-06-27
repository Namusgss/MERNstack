//["my", "name", "is"]=>["MY", "NAME", "IS"]
let input =["my", "name", "is"];

let output =input.map((value, i)=>{
    return (`${value.toUpperCase()}N`) ;//["MYN", "NAMEN", "ISN"]
});
console.log(output)

