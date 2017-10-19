"use strict";

const buildDomString = (weatherArray) => {
	let domString = "";
	for (let i = 0; i < weatherArray.length; i++) {
	
	domString += `<div class="mdc-card container-fluid">`;
	domString +=	`<section class="mdc-card__primary">`;
	domString += 	`<h1>City${weatherArray.city}</h1>`;
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