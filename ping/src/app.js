/**
 * The reason we separate out the index.js from app.js is for the
 * testing. Test frameworks will pick a port and run this app on it
 * therefore our index.js will call this and set the port we listen 
 * to.
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

module.exports = app;