//["my", "name", "is"]=>["My", "Name", "Is"]
const input =["my", "name", "is"];

const output =input.map((value, i)=>{
return value.charAt(0).toUpperCase()+value.slice(1);

});
console.log(output)