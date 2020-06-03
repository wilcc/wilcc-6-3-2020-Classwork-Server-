/* eslint-disable no-unused-vars */
// MAKE FOLDER
// - So to make a folder we have 2 choices.
//   `fs.mkdirSync('auth')` which needs no callback or
//   `fs.mkdir('auth',()=>{console.log('folder created')})`
// REMOVE FOLDER
// - same for remove folder
//   `fs.rmdirSync('auth')` no callback or
//   `fs.rmdir('auth',()=>{console.log('folder deleted')})`
// YOU TRY
// I want you to erase or comment out your code.
// Create a new node environment
// - Using fs module:
// - create a directory called content using fs and it should log 'content folder created'
// - create a file using fs called randomText.txt that lives outside the content directory - randomText.txt should have just a short string of any data you want to put in it
// - when you create this file you should also log 'randomtext.txt created'
// - write the randomText.txt data to a new file called verbage.txt inside the content folder and log 'verbage.txt created'
// - Now delete the content directory by adding a setTimeout of 10 seconds to the code and removing the directory content as well as console logging 'content folder deleted'

const fs = require('fs')

fs.mkdir('content',()=>{
    console.log('content folder created')
})
fs.writeFile('randomText.txt','random string of nonsense','utf-8',()=>{
    console.log('randomtext.txt created')

})

fs.readFile('randomText.txt','utf-8',(err,info)=>{
    if(err) return console.log('Something went wrong')
    fs.writeFile('/content/verbage.txt',info,'utf-8',()=>{
        console.log('verbage.txt created')
    })
})
// first way
setTimeout(()=>{
    fs.rmdir('content',{ recursive: true },()=>{
        console.log('content folder deleted')
    })
},10000)
// second way
// setTimeout(()=>{
//     fs.rmdir('content',()=>{
//         fs.unlinkSync('/content/verbage.txt')
//         console.log('content folder deleted')
//     })
// },10000)