import express from 'express';
import { ConnectionOptions } from 'mysql2';

// express server
const app = express();
app.set("port",3000);

// static files
app.use(express.static("public"));

//init 
