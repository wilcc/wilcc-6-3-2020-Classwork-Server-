// const http = require('http')
// const fs = require('fs')

// const obj = {
//     name:"flo",
//     job: "firefigher",
//     age: 200,
// }
// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'
// })
    // const readStream = fs.createReadStream(__dirname + '/index.html','utf8')
    // readStream.pipe(res)
    // res.end('This is my first Node server')
//     if(req.url ==='/'){
//         res.writeHead(200,{'Content-Type':'text/html'
// })
//     const readStream = fs.createReadStream(__dirname + '/index.html','utf8')
//     readStream.pipe(res)
//     }
//     res.end(JSON.stringify(obj))

// })


// server.listen(3000, ()=>{
//     console.log(`Listening on port 3000`)
// })



// eslint-disable-next-line no-undef
// const readStream = fs.createReadStream(__dirname + '/longLorem.txt','utf8')

// readStream.on('data', (chunk)=>{
//     console.log('NEW CHUNK')
//     console.log(chunk)
//     console.log('---------')
// })

// const writeStream = fs.createWriteStream(__dirname + '/writeLorem.txt','utf8')

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)
// })

// readStream.pipe(writeStream)

const http = require('http')
const fs = require('fs')
const obj = {
  name: 'Flo',
  job: 'Firefighter',
  age: 200,
}
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    readStream.pipe(res)
  }
  else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/about.html', 'utf8')
    readStream.pipe(res)
  }
  else if (req.url === '/users') {
    res.writeHead(200, {
    'Content-Type': 'application/json',
    })
    res.end(JSON.stringify(obj))

  }
  else{
    res.writeHead(404, {
        'Content-Type': 'text/html',
      })
      res.end('NO ROUTE')
  }
  //   res.end(JSON.stringify(obj))
})
server.listen(3000, () => {
  console.log(`Listening on port 3000`)
})