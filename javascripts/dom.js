"use strict";

let moment = require('../lib/node_modules/moment/moment.js');

// current weather domstring 
const buildDomString = (weatherObject) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
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
	
	domString +=	`<h4>${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;
	domString +=	`<div class="icon">${completedWeatherIcon}</div>`;
	domString +=	`<div class="temp">${Math.round(weatherArray[i].main.temp)} &deg F</div>`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	
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
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
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
	
	domString +=	`<h4>${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;
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
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
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
	
	domString +=	`<h4>${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;
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