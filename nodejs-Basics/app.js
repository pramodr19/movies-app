// 1)// import readline module and store it in var 
// // use readline.createInterface to create an instace
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("ENeter the input :",(a) => {
//     console.log("you entered "+a);
//     setTimeout(() => {
//         rl.close();
//     },2000);
// });

// rl.on('close',() => {
//     console.log("close method executed");
//     //exit from the procees
//     process.exit();
// })


// //2)Reading and writing into a file 
// const fs = require('fs');
// //use fs modeules readFileSync('path','encoding');
// const readFile = fs.readFileSync('./input.txt','utf-8',(err,data) => {
//     console.log(readFile);
// });
// let content=`This is the content from input.txt ${readFile} on the date ${new Date()}`;
// fs.writeFileSync('./output.txt',content);

// // 3)Asynchronous programming
// const fs = require('fs');
// fs.readFile('./input.txt','utf-8',(err,data) => {
//     console.log(data);
//     fs.readFile(`./${data}.txt`,'utf-8',(err,data1) => {
//         fs.writeFile('./append.txt',`${data1} and the created on ${new Date}`,() => {
//             console.log("file created successfully");
//             fs.readFile('./append.txt','utf-8',(err,data) => {
//                 console.log(data);
//             });
//         });
//     });
// });
// console.log("Reading file");


