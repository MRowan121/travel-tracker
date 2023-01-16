// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler';
import Trips from './Trips';
import apiCalls from "./apiCalls";
import dayjs from "dayjs";

// Query Selectors
const greeting = document.querySelector('#greeting');
const oldTrips = document.querySelector('#pastDisplay')
const upcomingTrips = document.querySelector('#upcomingDisplay')
const spendingBreakdown = document.querySelector('#costBreakdown')
const destinationList = document.querySelector('#destinations')
const newTripForm = document.querySelector('#newTripForm')
const destinationInput = document.querySelector('#destinationInput')
const dateInput = document.querySelector('#dateInput')
const travelerInput = document.querySelector('#travelerInput')
const durationInput = document.querySelector('#durationInput')
const newTripConfirmation = document.querySelector('.confirmNewTrip')
const newTripBreakdown = document.querySelector('#newTripBreakdown')
const confirmTripBtn = document.querySelector('#confirmBtn')
const pendingTrips = document.querySelector('#pendingDisplay')


// Global Variables

let travelerData;
let tripData;
let destinationData;
let traveler;
let newVacay;
let trip;

// On-Load Functions

apiCalls.fetchAllData().then((data) => {
    travelerData = data[0].travelers;
    tripData = data[1].trips;
    destinationData = data[2].destinations;
    getRandomUser();
    greetUser();
    showOldTrips(2019);
    showUpcomingTrips(2020);
    showSpending(2020);
    addDestinationOptions(destinationData)
    showPendingTrips();
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

const showOldTrips = (year) => {
  const oldTripArray = traveler.tripHistory.filter(trip => trip.date.year() <= year && trip.status === 'approved')
  oldTripArray.forEach(trip => {
    oldTrips.innerHTML += `
    <img src="${trip.image}" alt="${trip.alt}"/>
    <figcaption>${trip.destinationName}</figcaption>`
  })
}

const showUpcomingTrips = (year) => {
  const upcomingArray = traveler.tripHistory.filter(trip => trip.date.year() === year && trip.status === 'approved')
  upcomingArray.forEach(trip => {
    upcomingTrips.innerHTML += `
    <div id="upcomingTripInfo">
    <img src="${trip.image}" alt="${trip.alt}"/>
    <div id="upcomingDetails">
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
  })
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const showSpending = (year) => {
  spendingBreakdown.innerHTML += `
  <p id="flightTotal">Airfare: ${formatter.format(traveler.getTotalAirfare(year))}</p>
  <p id="lodgingTotal">Lodging: ${formatter.format(traveler.getTotalLodging(year))}</p>
  <p id="total">Total: ${formatter.format(traveler.getTotalCost(year))}</p>
  <p id="agentFee">Agent Fee: 10%</p>
  <p id="grandTotal">Grand Total: ${formatter.format(traveler.addAgentFee(year))}</p>
  `
}

const addDestinationOptions = (destinationData) => {
  const destinationOptions = destinationData.map(place => place)
  destinationOptions.forEach(option => {
    destinationList.innerHTML += `<option value="${option.id}">${option.destination}</option>`
  })
}

newTripForm.addEventListener('submit', e => {
  e.preventDefault()

  newVacay = {
    id: Date.now(),
    userId: Number(`${traveler.id}`),
    destinationID: Number(`${destinationInput.value}`),
    travelers: Number(`${travelerInput.value}`),
    date:dayjs(`${dateInput.value}`).format('YYYY/MM/DD'),
    duration: Number(`${durationInput.value}`),
    status: 'pending',
    suggestedActivities: [ ]
  }
  trip = new Trips(newVacay)
  showConfirmation()
  displayNewTripCost(destinationData)
})

function showConfirmation() {
  newTripForm.classList.toggle('hidden');
  newTripConfirmation.classList.toggle('hidden');
};

const displayNewTripCost = (destinationData) => {
  newTripBreakdown.innerHTML = ''
  newTripBreakdown.innerHTML += `
  <p id="newFlightTotal">Airfare: ${formatter.format(trip.getTripFlight(destinationData))}</p>
  <p id="newLodgingTotal">Lodging: ${formatter.format(trip.getTripLodging(destinationData))}</p>
  <p id="newTotal">Total: ${formatter.format(trip.getTripCost(destinationData))}</p>
  <p id="newAgentFee">Agent Fee: 10%</p>
  <p id="newGrandTotal">Grand Total: ${formatter.format(trip.getGrandTotal(destinationData))}</p>
  `
}

confirmTripBtn.addEventListener('click', e => {
  e.preventDefault()

  showConfirmation()
  tripData.push(trip)
  traveler.getTrips(tripData)
  traveler.addDestinationInfo(destinationData)
})

const showPendingTrips = () => {
  const pendingTripArray = traveler.tripHistory.filter(trip => trip.status === 'pending')
  pendingTripArray.forEach(trip => {
    pendingTrips.innerHTML += `
    <img src="${trip.image}" alt="${trip.alt}"/>
    <figcaption>${trip.destinationName}</figcaption>`
  })
}