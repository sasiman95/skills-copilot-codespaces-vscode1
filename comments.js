// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Data
let comments = [
    {
        id: 1,