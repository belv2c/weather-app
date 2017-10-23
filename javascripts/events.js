"use strict";

const owm = require('./data');
const dom = require('./dom');
let zip;

const enterEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("enter event", e);
			owm.setWeather(zipInput);
		}	
	});
};

const enterThreeEvent = () => {
	$(document).keypress((e) => {
		let zipInput = $("#pre-filled").val();
		if (e.key === 'Enter' && zipInput.length === 5) {
			console.log("3day enter event", e);
			owm.setThreeDay(zipInput);
		}	
	});
};

const searchZip = () => {
	$("#searchZip").click((e) => {
		console.log("click", e);
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			console.log("it's 5!");
			owm.setWeather(zipInput);
		} 
	});
};

const searchThreeDayZip = () => {
	$("#threeDayButton").click((e) => {
		console.log("click", e);
		let zipInput = $("#pre-filled").val();
		if (zipInput.length === 5) {
			console.log("it's 5!");
			owm.setThreeDay(zipInput);
		} 
	});
};


const searchThree = () => {
$("#threeDayButton").click((e) => {
	owm.setThreeDay(zip);
	console.log("3 days", e);
	});
};



module.exports = {enterEvent, enterThreeEvent, searchZip, searchThree, searchThreeDayZip};