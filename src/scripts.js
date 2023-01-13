// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler';
import apiCalls from "./apiCalls";

// Query Selectors
const greeting = document.querySelector('#greeting');
const userInfo = document.querySelector('#userInfo')
const oldTrips = document.querySelector('#oldTripDetails')


// Global Variables

let travelerData;
let tripData;
let destinationData;
let traveler;

// On-Load Functions

apiCalls.fetchAllData().then((data) => {
    travelerData = data[0].travelers;
    tripData = data[1].trips;
    destinationData = data[2].destinations;
    getRandomUser();
    greetUser();
    showUserInfo();
    showOldTrips(2021);
  });

// Functions
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

const getRandomUser = () => {
  traveler = new Traveler(travelerData[getRandomIndex(travelerData)])
  traveler.getTrips(tripData)
  traveler.addDestinationInfo(destinationData)
  console.log(traveler)
}

const greetUser = () => {
  greeting.innerHTML = `Hi, ${traveler.getFirstName()}!`
};

const showUserInfo = () => {
  userInfo.innerHTML = `${traveler.name}`
};

const showOldTrips = (year) => {
  const oldTripArray = traveler.tripHistory.filter(trip => trip.date.year() < year)
  console.log(oldTripArray)
  oldTripArray.forEach(trip => {
    oldTrips.innerHTML += `
    <img src="${trip.image}" alt="${trip.alt}"/>
    <figcaption>${trip.destinationName}</figcaption>`
  })
}