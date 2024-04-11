const fs = require("node:fs");

// Synchronous file write:
fs.writeFileSync('./file1.txt','Hello World!');
// console.log('First');

// Asynchronous file writing with callback function:
// fs.writeFile('./file1.txt',"Hello Everyone!!!!!",(error)=>{
//     if(error){
//         console.log("error: ",error);
//     }
//     console.log("Data written successfully!");
// });

// console.log("Second");


// For append text into write file
fs.writeFile("./file1.txt", " Hello World!", { flag: "a" }, (error) => {
  if (error) {
    console.log("error: ", error);
  }
  console.log("Data appended successfully!");
});


// flags:
// r+ 
// w+
// a
// a+