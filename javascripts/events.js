"use strict";

const owm = require('./data');
const dom = require('./dom');
const firebaseApi = require('./firebaseApi');
let zip;

const enterEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			owm.setWeather(zipInput);
		}	
	});
};

const enterThreeEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			owm.setThreeDay(zipInput);
		}	
	});
};

const enterFiveEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			owm.setFiveDay(zipInput);
		}	
	});
};

const searchZip = () => {
	$("#searchZip").click((e) => {
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			owm.setWeather(zipInput);
		} 
	});
};

const searchThreeDayZip = () => {
	$("#threeDayButton").click((e) => {
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			owm.setThreeDay(zipInput);
		} 
	});
};


const searchThree = () => {
$("#threeDayButton").click((e) => {
	owm.setThreeDay(zip);
	});
};

const searchFiveDayZip = () => {
	$("#fiveDayButton").click((e) => {
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			owm.setFiveDay(zipInput);
		} 
	});
};

const searchFive = () => {
$("#fiveDayButton").click((e) => {
	owm.setFiveDay(zip);
	});
};

const getMyForecasts = () => {
	firebaseApi.getForecastList().then((results) => {
		dom.clearDom('forecastsMine');
		dom.domString(results, 'forecastsMine');
	}).catch((err) => {
		console.log("error in getMyForecasts", err);
	});
};


const myLinks = () => {
	$(document).click((e) =>{
	 	if (e.target.id === "searchWeather") {
			$("#search").removeClass("hide");
			$("#myForecasts").addClass("hide");
			$("#authScreen").addClass("hide");
			$("#socialFooter").removeClass("hide");
		} else if(e.target.id === "mine"){
			$("#search").addClass("hide");
			$("#myForecasts").removeClass("hide");
			$("#authScreen").addClass("hide");
			$("#socialFooter").removeClass("hide");
			getMyForecasts();
		} else if (e.target.id === "authenticate") {
			$("#search").addClass("hide");
			$("#myForecasts").addClass("hide");
			$("#authScreen").removeClass("hide");
			
			
			
		}
	});
};


const googleAuth = () => {
	$('#googleButton').click((e) =>{
		firebaseApi.authenticateGoogle().then().catch((err) =>{
			console.log("error in authenticateGoogle", err);
		});
	});
};

// closest goes up, find goes down
const saveEvent = () => {
	$('body').on('click', '.heart', (e) => {
		let saveMe = e.target.closest('.card');
		
		let savedForecast = {
			"icon": $(saveMe).find('.icon').html(),
			"temp": $(saveMe).find('.overview').html(),
			"conditions": $(saveMe).find('.description').html().split('/').pop(),
			"high_temp": $(saveMe).find('.extremetemps').html().split('/').pop(),
			"windspeed": $(saveMe).find('.wind').html().split('/').pop(),
			"uid": ""
		};
		
		firebaseApi.saveWeather(savedForecast).then((results) => {
			
			console.log("saveForecast results", results); // id for saved forecasts stored in firebase
		}).catch((err) => {
			console.log("error in saveMovie", err);
		});

	});
};

const init = () => {
	enterEvent();
	enterThreeEvent();
	searchZip();
	searchThree();
	searchThreeDayZip();
	searchFive();
	enterFiveEvent();
	searchFiveDayZip();
	myLinks();
	googleAuth();
	saveEvent();
};



module.exports = {init};


