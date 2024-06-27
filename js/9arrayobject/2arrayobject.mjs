
let products = [
    {
      id: 1,
      title: "Product 1",
      category: "electronics",
      price: 5000,
      description: "This is description and Product 1",
      discount: {
        type: "other",
      },
    },
    {
      id: 2,
      title: "Product 2",
      category: "cloths",
      price: 2000,
      description: "This is description and Product 2",
      discount: {
        type: "a1",
      },
    },
    {
      id: 3,
      title: "Product 3",
      category: "electronics",
      price: 3000,
      description: "This is description and Product 3",
      discount: {
        type: "a2",
      },
    },
  ];
  //["other", "a1","a2"]
let output=products.map((value, i)=>{
return value.discount.type
})  
console.log(output)  //["other", "a1","a2"]