(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const owm = require('./data');

const apiKeys = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys().then((results) => {
		owm.setKey(results.owm.apiKey);
	}).catch((error) => {
		console.log("error from retrieveKey", error);
	});
};

module.exports = { retrieveKeys };
},{"./data":2}],2:[function(require,module,exports){
"use strict";

let owmKey;
let apiArray = [];


const owmConfiguration = () => {
	return new Promise((resolve, reject) => {
		$.ajax(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${owmKey}`).done((data) => {
			resolve(data.results);
			console.log("data", data);
		}).fail((error) => {
			reject(error);
		});
		
	});
};

const setKey = (apiKey) => {
	// accepts a string
	owmKey = apiKey;
	console.log(owmKey);
	owmConfiguration();
};

/*const showResults = () => {
	// calls dom.domstring
};*/

module.exports = {setKey};
},{}],3:[function(require,module,exports){
"use strict";

const apiKey = require('./apiKeys');
/*const dom = require('./dom');*/

apiKey.retrieveKeys();

},{"./apiKeys":1}]},{},[3]);
