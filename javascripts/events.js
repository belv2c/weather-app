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

const myLinks = () => {
	$(document).click((e) =>{
		if(e.target.id === "mine"){
			$("#search").addClass("hide");
		}else if (e.target.id === "searchWeather") {
			$("#search").removeClass("hide");
			$("#myForecasts").addClass("hide");
			/*getMahMovies();*/
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
};



module.exports = {init};


