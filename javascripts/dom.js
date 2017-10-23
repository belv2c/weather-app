"use strict";

let weatherArray = 1;


// current weather domstring 
const buildDomString = (weatherObject) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < 1; i++) {
	domString += `<div class="card col-xs-6 col-xs-offset-3">`;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
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

const threeDayString = (weatherObject) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < 3; i++) {
		if (i % 3 === 0) {
		domString += `<div class="row container-fluid">`;
	}
	domString += `<div class="card col-sm-6 col-md-4">`;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
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

const printToDom = (strang) => {
	$("#weatherOutput").append(strang);
};

const clearDom = () => {
	$("#weatherOutput").empty();
};



module.exports = {buildDomString, clearDom, threeDayString};