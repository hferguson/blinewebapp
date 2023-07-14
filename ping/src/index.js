/**
 * This service is intended to be a VERY simple ping service.
 * It doesn't do anything but useful in demonstrating the REST
 * API concept.
 * 
 */
const express = require('express');
const heartbeatRouter = require('./routes/heartbeat');
const  {json} = require('body-parser');

const app = express();
app.set('trust proxy', true);
app.use(json());

// add in the routes
app.use(heartbeatRouter);

app.all('*'),  async (req, res) => {
    throw new Error("This is not the page you are looking for");
}


let port = 3000;

const start = async () => {
    console.log("Begin ping service initialization...");

    console.log("Service initialization tasks complete");
}

app.listen(port, () => {
    console.log("This is the ping service");
    console.log(`Ping service listening on port ${port}`);
});

// Service init code goes here, runs after we start listening.
// Any db or service bus connection goes here.
// the method is made async in case it takes a while
start();