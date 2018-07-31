// // ### FS Exercises
// // fs docs - https://nodejs.org/api/fs.html
// //
//
//
var fs = require('fs');
//
// // ## Challenge 1:
// // Simply print the contents of the text file to the screen.
// //
//
// fs.readFile('./challenge1/info.txt', 'utf8', (err, data)=>{
//   if(err){
//     throw err;
//   }
//   console.log(data)
// })
//
// // ## Challenge 2:
// // Add the names of everyone in your group to the end of the text file.
//
// fs.appendFileSync('./challenge2/info.txt', 'Lauren\n Chelsea\n Elijah\n Albert')
//
// //
// // ## Challenge 3:
// // The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js!)
//
fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', (err, data)=> {
  if(err){
    throw err;
  }
})
//
// ## Challenge 4:
// Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder.

// fs.mkdirSync('./challenge4/copyfolder')
// fs.copyFile('challenge4/info.txt', 'challenge4/copyfolder/info.txt',(err)=>{
//   if(err){
//     throw err;
//   }
// })

//
// ## Challenge 5:
// Replace all of the "-"'s inside the text file with spaces.
//
// fs.readFile('challenge5/info.txt', 'utf8', (err, data)=>{
//   if(err){
//     throw err;
//   }
//   fs.writeFile('challenge5/info.txt', data.replace(/-/g, ' ') , 'utf8', (err, data)=>{
//     if(err){
//       throw err;
//     }
//   })
// })


//
// ## Challenge 6:
// Display all files that end with ".txt". Don't hard code the file names!



let ch6Dir = fs.readdirSync('challenge6/');

for(let i = 0; i < ch6Dir.length; i++){
  if(ch6Dir[i].slice(ch6Dir[i].length-4) == '.txt') {
    console.log(ch6Dir[i])
  }
}
