# Travel Tracker
-------
## Overview

Travel Tracker is an interactive webpage that allows a user to track their past, current, and pending trips and renders it on a dashboard. My goal is to present a useful application for a user to keep track of their vacations. 

This app is built using JavaScript, HTML, CSS, and utilizes Test Driven Development with Mocha and Chai. This application also involves the use of a API server.

- First the user logs in with their username and password
  - Because the API holds 50 users, the username is traveler 1-50; i.e. 'traveler38'
  - The password for all users is 'travel'
- After logging in, the user can see all of their upcoming, past, and pending trips
- The user can also view the total amount spent on trips in the current year, which is calculated based on flights, lodging, and a 10% agent fee
- The user is able to make a request for a new trip, which will display in the 'Pending Trips' box
- When requesting a new trip, the user will fill out a form that consists of choosing a location, dates, number of travelers, and the duration of the trip
- The user will then be prompted to confirm the new trip after reviewing a cost summary of the trip
---------
## GIFs
![loginGif](https://user-images.githubusercontent.com/110955503/212969029-c5e9d0b3-a3c5-4bbf-838e-957bd8e4e3d8.gif)
![addTripGif](https://user-images.githubusercontent.com/110955503/212968547-9c82549e-31d5-4426-b201-b0d8c41c79b5.gif)
![scrollingPageGif](https://user-images.githubusercontent.com/110955503/212968562-32ee8500-810e-4def-a04e-8ebc61eb5a17.gif)

---------
## Installation Instructions
 - Fork and Clone [this](https://github.com/MRowan121/travel-tracker) repository
 - `CD` into the directory
 - Run `npm install` 
 - Run `npm start`

 - Fork and Clone [this API](https://github.com/turingschool-examples/travel-tracker-api) repository
 - `CD` into the directory
 - Run `npm install` 
 - Run `npm start`

 - In your browser, go to [this link](http://localhost:8080/)

-----------
## Future Features

 - Agent Interaction: ability for a travel again to login and review any pending trips so that their status can be updated from "pending" to "approved"
 - Implementation of chartjs to display various cost breakdowns in a clean/concise way

---------
## Contributors

Matt Rowan | [GitHub](https://github.com/MRowan121) | [LinkedIn](https://www.linkedin.com/in/matt-rowan-a88444129/)

--------
## Links

- Deployable Link: [✈️](https://mrowan121.github.io/travel-tracker/)
- Repository Link: [✈️](https://github.com/MRowan121/travel-tracker)


------------
## Architecture & Technologies Used

This application was built using JavaScript, CSS, and HTML and utilizes Test Driven Development with Mocha and Chai.

This application uses a local API server to fetch and post data.

This application consists of a series of class files and their corresponding test files, as well as the scripts, css, and HTML files. Lastly, there is the apiCalls file which holds the fetch calls for retrieving the data & delete calls to remove a booked trip based on the trip id.

------------
## Wins & Challenges

#### Wins
- Implementation of a login page which displays the correct data based on username input 
- Successfully implement APIs and Fetch/Post Calls
- Freedom of creativity in terms of how the page looks

#### Challenges
- Webpack poses an added layer of abstraction in web development that, while extremely useful, decentralizes the structure of the user data and requires a higher level view to understand
