"use strict";

const owm = require('./data');

const apiKeys = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/apiKeys.json').done((data) => {
			resolve(data.apiKeys);
		}).fail((error) => {
			reject(error);
		});
	});
};

const retrieveKeys = () => {
	apiKeys.then((resolve, reject) => {
		// set key
	}).catch((error) => {
		console.log("error from retrieveKeys", error);
	});
};

module.exports = {retrieveKeys};