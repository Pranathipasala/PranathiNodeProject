// //global objects
var timeoutId = setTimeout(function() {
    console.log("This code runs after 3 seconds");
}, 3000);


var intervalId = setInterval(function() {
    console.log("This code runs every 1 second");
}, 1000);


setTimeout(function() {
    clearTimeout(timeoutId);
    console.log("Timeout cleared after 2 seconds");
}, 2000);


setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 seconds");
}, 5000);

//global scope

var globalVariable = "I am a global variable";

function globalFunction() {
    console.log(globalVariable); 
}

globalFunction(); 

// //local scope


function localFunction() {
    let localVariable = "I am a local variable";
    console.log(localVariable); 
}

localFunction();

//os
const os = require('os')
var totalmemory=os.totalmem()
var freeMemory =os.freemem()
console.log(`total memory:${totalmemory}`)
console.log(`free memory:${freeMemory}`)

// //file system
// //synchronous
const fs = require('fs')
const files =fs.readdirSync('./')
console.log(files)

// //asynchronous

fs.readdir('./',function(err,files){
    if(err)console.log("error",err)
    else console.log('result',files)
})

//event emitter + event arguement
const EventEmitter = require('events')
//const emitter = new EventEmitter();

const Logger= require('./logger');
const logger = new Logger()

// emitter.on('messageLogged',function(e){
//     console.log("listener called",e)
// })
// emitter.emit('messageLogged',{id:1,url:'http://'})

//or
logger.on('messageLogged',(e)=>{//to handle event
    console.log("listener called",e)
})
//emitter.emit('messageLogged',{id:1,url:'http://'})

logger.log('message');


//http module
const http = require('http')
const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world')
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});


server.listen(3000);
console.log('server listening on port 3000...')







