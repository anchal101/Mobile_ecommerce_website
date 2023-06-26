import http from 'http';
import expressServer from "./server"
// const connectPSQlDb = require('./config/dbConnection');
import connectPSQlDb from './config/dbConnection';

// Normalize port number which will expose server
const port = normalizePort(3000);

// Instantiate the expressServer class
export let expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);

const server = http.createServer(expressInstance);
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});

connectPSQlDb().then((result) => {
    console.log("Connection of PSQlDb is successfully.")
}).catch((err) =>{
    console.log("err" + err);
})

// Port Normalization
function normalizePort(val: string | number){
    const port = typeof val === 'string' ? parseInt(val, 10) : val;
    return port;
}

