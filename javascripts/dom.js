"use strict";



const buildDomString = (weatherObject) => {
	let domString = "";

	
	let weatherArray = weatherObject.list;
	for (let i = 0; i < weatherArray.length; i++) {
	
	domString += `<div class="mdc-card container-fluid">`;
	domString +=	`<section class="mdc-card__primary">`;
	domString += 	`<h1>${weatherObject.city.name}</h1>`;
	domString +=	`<div>${weatherArray[i].main.temp}</div>`;
	domString += 	`<h3>${weatherArray[i].main.pressure}</h3>`;
	domString += 	`<h3>${weatherArray[i].wind.speed}</h3>`;
	domString += `</div>`;
	}
	printToDom(domString);
};

const printToDom = (strang) => {
	$("#weatherOutput").append(strang);
};

module.exports = {buildDomString};