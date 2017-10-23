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

const dom = require('./dom');

let owmKey;
let array = [];



const owmConfiguration = (zip) => {
	return new Promise((resolve, reject) => {
		$.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${owmKey}&units=imperial`).done((data) => {
			resolve(data);
			/*array.push(data);*/
			console.log("data", data.list);
			/*showResults(array);*/
		}).fail((error) => {
			reject(error);
		});
		
	});
};

const setWeather = (zip) => {
	// accepts a string
	owmConfiguration(zip).then((results) => {
		showResults(results);
	}).catch((error) => {
		console.log("error from setKey", error);
	});
};

const setKey = (apiKey) => {
	owmKey = apiKey;
	console.log(owmKey);
};

const showResults = (weatherArray) => {
	dom.clearDom();
	dom.buildDomString(weatherArray);
	
};



module.exports = {setKey, setWeather};
},{"./dom":3}],3:[function(require,module,exports){
"use strict";

let weatherArray = 1;

const buildDomString = (weatherObject) => {
	let domString = "";

	
	let weatherArray = weatherObject.list;
	for (let i = 0; i < weatherArray.length; i++) {
	/*	if (i % 3 === 0) {
		domString += `<div class="row">`;
	}*/
	
	domString += `<div class="col-sm-3">`;
	
	domString += 	`<h1>${weatherObject.city.name}</h1>`;
	domString +=	`<div>${weatherArray[i].main.temp} &deg F</div>`;
	domString += 	`<p>${weatherArray[i].weather[0].description}</p>`;
	domString += 	`<h3>${weatherArray[i].main.pressure}</h3>`;
	domString += 	`<h3>${weatherArray[i].wind.speed}</h3>`;
	domString +=	`</section>`;
	domString += `</div>`;
	domString += `</main>`;
	}
	printToDom(domString);
};

const printToDom = (strang) => {
	$("#weatherOutput").append(strang);
};

const clearDom = () => {
	$("#weatherOutput").empty();
};



module.exports = {buildDomString, clearDom};
},{}],4:[function(require,module,exports){
"use strict";

const owm = require('./data');
const dom = require('./dom');

const enterEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("enter event", e);
			owm.setWeather(zipInput);
		}	
	});
};

const searchZip = () => {
	$("#searchZip").click((e) => {
		console.log("click", e);
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			console.log("it's 5!");
			owm.setWeather(zipInput);
		} 
	});
};

module.exports = {enterEvent, searchZip};
},{"./data":2,"./dom":3}],5:[function(require,module,exports){
"use strict";

const events = require('./events');
const apiKey = require('./apiKeys');




apiKey.retrieveKeys();
events.enterEvent();
events.searchZip();

},{"./apiKeys":1,"./events":4}]},{},[5]);
