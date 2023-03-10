// Imports

import './css/styles.css';
import Traveler from './Traveler';
import Trips from './Trips';
import {
  fetchApiUrl,
  fetchAllData,
  deleteTrip,
} from './apiCalls'
import dayjs from "dayjs";

// Query Selectors

const loginPage = document.querySelector('.login-page')
const loginForm = document.querySelector('#loginForm')
const usernameField = document.querySelector('#usernameField')
const passwordField = document.querySelector('#passwordField')
const homescreen = document.querySelector('.main-page')
const greeting = document.querySelector('#greeting');
const upcomingTrips = document.querySelector('#upcomingDisplay')
const oldTrips = document.querySelector('#pastDisplay')
const pendingTrips = document.querySelector('#pendingDisplay')
const spendingBreakdown = document.querySelector('#costBreakdown')
const newTripForm = document.querySelector('#newTripForm')
const destinationList = document.querySelector('#destinations')
const destinationInput = document.querySelector('#destinationInput')
const dateInput = document.querySelector('#dateInput')
const travelerInput = document.querySelector('#travelerInput')
const durationInput = document.querySelector('#durationInput')
const newTripConfirmation = document.querySelector('.confirmNewTrip')
const newTripBreakdown = document.querySelector('#newTripBreakdown')
const confirmTripBtn = document.querySelector('#confirmBtn')

// Global Variables

let destinationData;
let traveler;
let travelerData;
let trip;
let tripData;
let newVacay;

// API Calls

fetchAllData().then((data) => {
  travelerData = data[0].travelers;
  tripData = data[1].trips;
  destinationData = data[2].destinations;
});

const postTrip = (trip) => {
  let url = 'http://localhost:3001/api/v1/trips'

  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(trip)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .then(() => fetchApiUrl('trips')
  .then(data => tripData = data.trips)
  .then(() => {
    traveler.getTrips(tripData)
    traveler.addDestinationInfo(destinationData)
    showPendingTrips()
  }))
  .catch(err => console.log('Error!', err))
}

// Event Listeners

loginForm.addEventListener('submit', e => {
  e.preventDefault()
  checkPassword()
});

newTripForm.addEventListener('submit', e => {
  e.preventDefault()
  
  newVacay = {
    id: tripData.length + 1,
    userID: Number(traveler.id),
    destinationID: Number(destinationInput.value),
    travelers: Number(travelerInput.value),
    date: dayjs(dateInput.value).format('YYYY/MM/DD'),
    duration: Number(durationInput.value),
    status: "pending",
    suggestedActivities: [ ]
  }

  trip = new Trips(newVacay)
  showConfirmation()
  displayNewTripCost(destinationData)
});

confirmTripBtn.addEventListener('click', function() {
  postTrip(trip)
  newTripForm.reset()
  showConfirmation()
});

// Functions

const greetUser = () => {
  greeting.innerHTML = `
  Hi ${traveler.getFirstName()},
  <br>
  Welcome Back!
  `
};

const displayUserData = () => {
  greetUser()
  showOldTrips(2019)
  showUpcomingTrips(2020)
  showSpending(2020)
  showPendingTrips()
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function showConfirmation() {
  newTripForm.classList.toggle('hidden');
  newTripConfirmation.classList.toggle('hidden');
};

function showDashboard() {
  loginPage.classList.toggle('hidden');
  homescreen.classList.toggle('hidden');
};

const getUserData = () => {
  const returningUserID = 
  Number(usernameField.value.slice(-2))
  const i = travelerData.map(person => person.id).indexOf(returningUserID)

  traveler = new Traveler(travelerData[i])
  traveler.getTrips(tripData)
  traveler.addDestinationInfo(destinationData)
  
  displayUserData();
  addDestinationOptions(destinationData)
};

const checkPassword = () => {
  if(passwordField.value === 'travel') {
    getUserData()
    showDashboard()
  } else {
    alert('Please check your password and try again')
  }
};

// DOM Updates

const tripDisplay = (display, trip) => {
  display.innerHTML += `
  <div>
  <img src="${trip.image}" alt="${trip.alt}"/>
  <div>
  <p><strong>Destination Name:</strong> 
  <br>
  <em>${trip.destinationName}</em></p>
  <p><strong>Departure Date:</strong> 
  <br>
  <em>${trip.date.format('MM/DD/YYYY')}</em></p>
  <p><strong>Duration:</strong> 
  <br>
  <em>${trip.duration} days</em></p>
  <p><strong>Travelers:</strong> 
  <br>
  <em>${trip.travelers}</em></p>
  </div>
  </div>
  `
};

const showUpcomingTrips = (year) => {
  const upcomingArray = traveler.tripHistory.filter(trip => trip.date.year() >= year && trip.status === 'approved')
  upcomingArray.forEach(trip => tripDisplay(upcomingTrips, trip))
};

const showOldTrips = (year) => {
  const oldTripArray = traveler.tripHistory.filter(trip => trip.date.year() <= year && trip.status === 'approved')
  oldTripArray.forEach(trip => tripDisplay(oldTrips, trip))
};

const showPendingTrips = () => {
  const pendingTripArray = traveler.tripHistory.filter(trip => trip.status === 'pending')
  pendingTripArray.forEach(trip => tripDisplay(pendingTrips, trip))
};

const showSpending = (year) => {
  spendingBreakdown.innerHTML += `
  <p id="flightTotal">Airfare: ${formatter.format(traveler.getTotalAirfare(year))}</p>
  <p id="lodgingTotal">Lodging: ${formatter.format(traveler.getTotalLodging(year))}</p>
  <p id="total">Total: ${formatter.format(traveler.getTotalCost(year))}</p>
  <p id="agentFee">Agent Fee: 10%</p>
  <p id="grandTotal">Grand Total: ${formatter.format(traveler.addAgentFee(year))}</p>
  `
};

const addDestinationOptions = (destinationData) => {
  const destinationOptions = destinationData.map(place => place)
  destinationOptions.forEach(option => {
    destinationList.innerHTML += `<option value="${option.id}">${option.destination}</option>`
  })
};

const displayNewTripCost = (destinationData) => {
  newTripBreakdown.innerHTML = ''
  newTripBreakdown.innerHTML += `
  <h2>Summary</h2>
  <p id="newFlightTotal">Airfare: ${formatter.format(trip.getTripFlight(destinationData))}</p>
  <p id="newLodgingTotal">Lodging: ${formatter.format(trip.getTripLodging(destinationData))}</p>
  <p id="newTotal">Total: ${formatter.format(trip.getTripCost(destinationData))}</p>
  <p id="newAgentFee">Agent Fee: 10%</p>
  <p id="newGrandTotal">Grand Total: ${formatter.format(trip.getGrandTotal(destinationData))}</p>
  `
};