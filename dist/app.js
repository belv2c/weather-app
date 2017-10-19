(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const buildDomString = (weatherArray) => {
	let domString = "";
	for (let i = 0; i < weatherArray.length; i++) {
	
	domString += `<div class="weather-card">`;
	domString += 	`<h1>${weatherArray[i].temp}</h1>`;
	domString +=	`<div>${weatherArray[i].icon}</div>`;
	domString += 	`<h3>${weatherArray[i].pressure}</h3>`;
	domString += 	`<h3>${weatherArray[i].speed}</h3>`;
	domString += `</div>`;
	}
	printToDom(domString);
};

const printToDom = (strang) => {
	$("#weatherOutput").append(strang);
};

module.exports = {buildDomString};
},{}],2:[function(require,module,exports){
"use strict";

let apiKeys = ('./apiKeys');
let dom = require('./dom');
},{"./dom":1}]},{},[2]);
