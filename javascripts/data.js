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