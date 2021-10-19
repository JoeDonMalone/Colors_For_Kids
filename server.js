require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;

// Define any middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// add API and view routes
app.use(routes);

// Connect to MongoDB if exists
//Future

// Start API Server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});