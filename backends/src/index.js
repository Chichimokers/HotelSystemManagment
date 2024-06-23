const express = require('express');
require('dotenv').config();
const Server = require('./models/Server')
const server =  new Server();
server.strartserver();
