"use strict";


// current weather domstring 
const buildDomString = (weatherObject) => {
	let domString = "";
	let weatherArray = weatherObject.list;
	for (let i = 0; i < 1; i++) {
		console.log("this one", weatherArray);
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
	domString += 	`<h1 class="name">${weatherObject.city.name}</h1>`;
	domString +=	`<h4>${weatherArray[i].dt_txt}</h4>`;
	domString +=	`<p>${completedWeatherIcon}</p>`;
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
	domString +=	`<h4>${weatherArray[i].dt_txt}</h4>`;
	domString +=	`<p id="currenticon"><img src="http://openweathermap.org/img/w/${weatherArray[i].weather[0].icon}.png" alt=""></p>`;
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

/*const skycons = (weatherIcons) => {
let weatherId = (weatherData.weather[0].id);
let rainIcons = [803];
	for (i=0; i<weatherIcons.length; i++) {
if (weatherId === weatherIcons[i]) {
	$("#currenticon").html('<i class="wi wi-rain"</i>').css({"color": "#244A69"});
}
}
};*/

const clearDom = () => {
	$("#weatherOutput").empty();
};



module.exports = {buildDomString, clearDom, threeDayString};