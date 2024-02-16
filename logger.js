const EventEmitter = require('events')

var url ="http://logger.io/log"


class Logger extends EventEmitter{
 log(message){//to emit event
    console.log(message)
    this.emit('messageLogged',{id:1,url:'http://'});
}
}
//module.exports.log =log;
module.exports = Logger;

//module.exports.endPoint=url;

//middleware
function log(req,res,next){
    console.log("logging...");
    next();
}
module.exports = log

//configuration setting
// {
//     "database": {
//       "url": "mongodb://localhost:27017/mydatabase",
//       "username": "user",
//       "password": "password"
//     },
//     "api_key": "your_api_key"
//   }

//enevironment variable
// const databaseUrl = process.env.DB_URL || "mongodb://localhost:27017/mydatabase";
// const apiKey = process.env.API_KEY || "your_api_key";

  