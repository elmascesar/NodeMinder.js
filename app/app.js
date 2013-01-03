// Copyright NodeMinder.js
//
var server = require("./server");
var router = require("./router");
//var grab   = require("./grabm"); // use motion to grab frames
var grab   = require("./grabc");   // use c code to grab frames
var config = require("./config");

config.loadConfig();

server.start(router.route, grab.grabFrame);
