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




const owmConfiguration = (zip) => {
	return new Promise((resolve, reject) => {
		$.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${owmKey}&units=imperial`).done((data) => {
			resolve(data);
			console.log("data", data.list);
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

const setThreeDay = (zip) => {
	owmConfiguration(zip).then((results) => {
		showThreeDay(results);
	}).catch((error) => {
		console.log("error from setThreeDay", error);
	});
};

const setFiveDay = (zip) => {
	owmConfiguration(zip).then((results) => {
		showFiveDay(results);
	}).catch((error) => {
		console.log("error from setFiveDay", error);
	});
};

const showResults = (weatherArray) => {
	dom.clearDom();
	dom.buildDomString(weatherArray);
};

const showThreeDay = (weatherArray) => {
	dom.clearDom();
	dom.threeDayString(weatherArray);
};

const showFiveDay = (weatherArray) => {
	dom.clearDom();
	dom.fiveDayString(weatherArray);
};



module.exports = {setKey, setWeather, setThreeDay, setFiveDay};


},{"./dom":3}],3:[function(require,module,exports){
"use strict";


// current weather domstring 
const buildDomString = (weatherObject) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < 1; i++) {
		let weather = weatherArray[i].weather[0].id;
		let dayOrNight = "";
		let currentDate = new Date();
		let currentTime = currentDate.getTime();
		if (currentTime <= weatherArray[i].sys.sunrise) {
			dayOrNight = "day";
		} else if (currentTime >= weatherArray[i].sys.sunrise) {
			dayOrNight = "night";
		}
		let completedWeatherIcon = `<i class="wi wi-owm-${weather}"></i>`;
	domString += `<div class="card col-xs-6 col-xs-offset-3">`;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
	domString +=	`<h4>${weatherArray[i].dt_txt}</h4>`;
	domString +=	`<p>${completedWeatherIcon}</p>`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<div class="currentTemp">${Math.round(weatherArray[i].main.temp)} &deg F</div>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</section>`;
	domString += `</div>`;
	domString += `</main>`;
	}
	printToDom(domString);
};

// three day forecast domstring
const threeDayString = (weatherObject, i) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < weatherArray.length; i++) {
		if (i % 3 === 0) {
		domString += `<div class="row container-fluid">`;
	}
	let weather = weatherArray[i].weather[0].id;
		let dayOrNight = "";
		let currentDate = new Date();
		let currentTime = currentDate.getTime();
		if (currentTime <= weatherArray[i].sys.sunrise) {
			dayOrNight = "day";
		} else if (currentTime >= weatherArray[i].sys.sunrise) {
			dayOrNight = "night";
		}
		let completedWeatherIcon = `<i class="wi wi-owm-${weather}"></i>`;
		if (i === 4 || i === 12 || i === 20) {	
	domString += `<div class="card col-sm-6 col-md-4">`;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
	domString +=	`<h4>${weatherArray[i].dt_txt}</h4>`;
	domString +=	`<p>${completedWeatherIcon}</p>`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<div class="currentTemp">${Math.round(weatherArray[i].main.temp)} &deg F</div>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</section>`;
	domString += `</div>`;
	domString += `</main>`;
}
	}
	printToDom(domString);
};


// seven day forecast domstring
const fiveDayString = (weatherObject, i) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < weatherArray.length; i++) {
		if (i % 3 === 0) {
		domString += `<div class="row container-fluid">`;
	}
	let weather = weatherArray[i].weather[0].id;
		let dayOrNight = "";
		let currentDate = new Date();
		let currentTime = currentDate.getTime();
		if (currentTime <= weatherArray[i].sys.sunrise) {
			dayOrNight = "day";
		} else if (currentTime >= weatherArray[i].sys.sunrise) {
			dayOrNight = "night";
		}
		let completedWeatherIcon = `<i class="wi wi-owm-${weather}"></i>`;
		if (i === 4 || i === 12 || i === 20 || i === 28 || i === 36) {	
	domString += `<div class="card col-sm-6 col-md-4">`;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
	domString +=	`<h4>${weatherArray[i].dt_txt}</h4>`;
	domString +=	`<p>${completedWeatherIcon}</p>`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<div class="currentTemp">${Math.round(weatherArray[i].main.temp)} &deg F</div>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</section>`;
	domString += `</div>`;
	domString += `</main>`;
}
	}
	printToDom(domString);
};


const printToDom = (strang) => {
	$("#weatherOutput").append(strang);
};

const clearDom = () => {
	$("#weatherOutput").empty();
};

module.exports = {buildDomString, clearDom, threeDayString, fiveDayString};
},{}],4:[function(require,module,exports){
"use strict";

const owm = require('./data');
const dom = require('./dom');
let zip;

const enterEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("enter event", e);
			owm.setWeather(zipInput);
		}	
	});
};

const enterThreeEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("3day enter event", e);
			owm.setThreeDay(zipInput);
		}	
	});
};

const enterFiveEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("3day enter event", e);
			owm.setFiveDay(zipInput);
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

const searchThreeDayZip = () => {
	$("#threeDayButton").click((e) => {
		console.log("click", e);
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			console.log("it's 5!");
			owm.setThreeDay(zipInput);
		} 
	});
};


const searchThree = () => {
$("#threeDayButton").click((e) => {
	owm.setThreeDay(zip);
	console.log("3 days", e);
	});
};

const searchFiveDayZip = () => {
	$("#fiveDayButton").click((e) => {
		console.log("click", e);
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			console.log("it's 5!");
			owm.setFiveDay(zipInput);
		} 
	});
};

const searchFive = () => {
$("#fiveDayButton").click((e) => {
	owm.setFiveDay(zip);
	console.log("5 days", e);
	});
};





module.exports = {enterEvent, enterThreeEvent, searchZip, searchThree, searchThreeDayZip, searchFive, enterFiveEvent, searchFiveDayZip};
},{"./data":2,"./dom":3}],5:[function(require,module,exports){
"use strict";

const events = require('./events');
const apiKey = require('./apiKeys');




apiKey.retrieveKeys();
events.enterEvent();
events.enterThreeEvent();
events.searchZip();
events.searchThree();
events.searchThreeDayZip();
events.enterFiveEvent();
events.searchFive();
events.searchFiveDayZip();

},{"./apiKeys":1,"./events":4}]},{},[5]);
