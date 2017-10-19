"use strict";

const dom = require('./dom');

let owmKey;
let array = [];



const owmConfiguration = () => {
	return new Promise((resolve, reject) => {
		$.ajax(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${owmKey}`).done((data) => {
			resolve(data.results);
			array.push(data);
			console.log("data", data);
			showResults(array);
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

const showResults = (weatherArray) => {
/*	dom.clearDom();*/
	dom.buildDomString(weatherArray);
};

module.exports = {setKey};