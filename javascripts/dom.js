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