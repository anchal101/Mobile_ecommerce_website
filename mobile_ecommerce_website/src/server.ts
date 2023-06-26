import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from 'helmet';
import compression from 'compression'
import mainRouter from "./routes";
//import mainRouter from './routes';

class Server{
    expressInstance :any
    constructor(){
        this.expressInstance = express();
        this.middlewareSetup();
       this.routingSetup();
    }

    middlewareSetup(){

        // Setup request Gzip compression.
        // the size of a file is reduced before it is transferred from the server to the browser.
        this.expressInstance.use(compression());

        // Setup common security protection.
        // helmet is a Node.js module that helps in securing HTTP headers. It is implemented in express applications. 
        // An HTTP header is a field of an HTTP request or response that passes additional context and metadata about the request or response. 
        this.expressInstance.use(helmet());

        // Cross-Origin Resourse Sharing.
        // Two different hots are share their resourses.
        this.expressInstance.use(cors());

        // Setup request format parsing(Only JSON request will be valid)
        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));
        this.expressInstance.use(bodyParser.json());
    }

    routingSetup(){
        // Initiate the mainRouter object.
        this.expressInstance.use('/', mainRouter);
    }
}

export default Server;


