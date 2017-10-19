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