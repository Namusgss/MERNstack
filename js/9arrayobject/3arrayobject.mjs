let files = [
    {
      fieldname: "fff",
      originalname: "js.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "./public",
      filename: "1673334935126js.jpg",
      path: "public\\1673334935126js.jpg",
      size: 10222,
    },
    {
      fieldname: "fff",
      originalname: "houseOfJobBannerImage.png",
      encoding: "7bit",
      mimetype: "image/png",
      destination: "./public",
      filename: "1673334935126houseOfJobBannerImage.png",
      path: "public\\1673334935126houseOfJobBannerImage.png",
      size: 106821,
    },
  ];

//   [
//       "localhost:8000/1673334935126js.jpg",
//       "localhost:8000/1673334935126houseOfJobBannerImage.png" 
//   ]

let output= files.map((value,i)=>{
return `localhost:8000/${value.filename}`
})
console.log(output)