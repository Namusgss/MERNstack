
let product = [
  {
    name: "laptop",
    price: 100000,
  },
  {
    name: "mobile",
    price: 30000,
  },
  {
    name: "Tv",
    price: 200000,
  },
];
let output = product.map((value, i) => {
  return value.name;

});
console.log(output);

let output1=product.map((value, i) => {
    return value.price;
  
  });
  console.log(output1);

let output2= product.map((value, i)=>{
return `${value.name} costs ${value.price}`
});
console.log(output2)

  //[{name: "laptop", price: 100000},{name: "tv", price: 200000}]=> filter price greater then 50000
  let output3= product.filter((value, i)=>{
  if(value.price>50000){
    return true;
    }
    else{
        return false
    }
 })
  console.log(output3)
//["laptop", "tv"]
let output4=output3.map((value,i)=>{
    return value.name;
})
console.log(output4)
  