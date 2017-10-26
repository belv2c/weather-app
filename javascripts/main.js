"use strict";

const events = require('./events');
const apiKey = require('./apiKeys');




apiKey.retrieveKeys();
events.init();
