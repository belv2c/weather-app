"use strict";

let firebaseKey = "";
let userUid = "";

const setKey = (key) => {
	firebaseKey = key;
};

//Firebase: GOOGLE - Use input credentials to authenticate user.
let authenticateGoogle = () => {
    return new Promise((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((authData) => {
        	userUid = authData.user.uid;
            resolve(authData.user);
        }).catch((error) => {
            reject(error);
        });
    });
  };

const getForecastList = () => {
  let forecasts = [];
    return new Promise((resolve, reject) =>{
      $.ajax(`${firebaseKey.databaseURL}/forecasts.json?orderBy="uid"&equalTo="${userUid}"`).then((fbForecasts) => {
        console.log("forecasts", fbForecasts);
        if(fbForecasts != null){
        Object.keys(fbForecasts).forEach((key) => {
          fbForecasts[key].id = key;
          forecasts.push(fbForecasts[key]);
        });
      }

        resolve(forecasts);
      }).catch((error) =>{
        reject(error);
      });
    });
  };

const saveWeather = (forecast) => {
  forecast.uid = userUid;
  return new Promise((resolve, reject) => {
    $.ajax({
        method: "POST", 
        url: `${firebaseKey.databaseURL}/forecasts.json`,
        data: JSON.stringify(forecast)
     }).then((result) => {
        resolve(result);
     }).catch((error) => {
        reject(error);
    });
  });
};
module.exports = {setKey, authenticateGoogle, getForecastList, saveWeather};