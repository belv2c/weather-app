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