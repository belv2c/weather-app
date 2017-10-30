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
	domString += `<div class="card col-xs-12">`;
	
	domString +=	`<h4 class="date">${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;
	domString +=	`<div class="row col-md-6">`;
	domString +=	`<div class="icon">${completedWeatherIcon}</div>`;
	domString +=	`</div>`;
	domString +=	`<p class="temp">${Math.round(weatherArray[i].main.temp)}&deg F</p>`;
	domString +=	`<div class="details col-md-12">`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<p class="extremetemps">Hi ${Math.round(weatherArray[i].main.temp_max)}&deg F  |  Lo ${Math.round(weatherArray[i].main.temp_min)}&deg F</p>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</div>`;
	domString +=	`<button class="heart mdc-fab mdc-fab--mini"><i class="material-icons mdc-button__icon">favorite</i></button>`;
	domString += `</div>`;
	domString += `</main>`;
	}
	printToDom(domString);
	console.log(weatherArray);
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
	domString += `<div class="card col-xs-12">`;
	
	domString +=	`<h4>${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;

	domString +=	`<div class="row col-md-6">`;
	domString +=	`<div class="icon">${completedWeatherIcon}</div>`;
	domString +=	`</div>`;
	domString +=	`<p class="temp">${Math.round(weatherArray[i].main.temp)}&deg F</p>`;
	domString +=	`<div class="details col-md-12">`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<p class="extremetemps">Hi ${Math.round(weatherArray[i].main.temp_max)}&deg F  |  Lo ${Math.round(weatherArray[i].main.temp_min)}&deg F</p>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</div>`;
	domString +=	`<button class="heart mdc-fab mdc-fab--mini"><i class="material-icons mdc-button__icon">favorite</i></button>`;
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
	domString += `<div class="card col-xs-12">`;
	
	domString +=	`<h4>${moment.utc(weatherArray[i].dt_txt).format('dddd[, ]MMMM DD')}</h4>`;
	domString +=	`<div class="row col-md-6">`;
	domString +=	`<div class="icon">${completedWeatherIcon}</div>`;
	domString +=	`</div>`;
	domString +=	`<p class="temp">${Math.round(weatherArray[i].main.temp)}&deg F</p>`;
	domString +=	`<div class="details col-md-12">`;
	domString += 	`<p class="description">${weatherArray[i].weather[0].description}</p>`;
	domString +=	`<p class="extremetemps">Hi ${Math.round(weatherArray[i].main.temp_max)}&deg F  |  Lo ${Math.round(weatherArray[i].main.temp_min)}&deg F</p>`;
	domString += 	`<p class="air">Air pressure: ${Math.round(weatherArray[i].main.pressure)} mb</h3>`;
	domString += 	`<p class="wind">Wind speed: ${Math.round(weatherArray[i].wind.speed)} mph</h3>`;
	domString +=	`</div>`;
	domString +=	`<button class="heart mdc-fab mdc-fab--mini"><i class="material-icons mdc-button__icon">favorite</i></button>`;
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