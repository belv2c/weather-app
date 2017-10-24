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

