import { expect } from "chai";
import Traveler from "../src/Traveler";

describe("traveler", () => {
    let traveler1;
    let traveler2;
    let traveler3;
    let travelerData;
    let tripData;
    let destinationData;
    beforeEach(() => {
        travelerData = [
            {
                id: 1,
                name: "Ham Leadbeater",
                travelerType: "relaxer"
            },
            {
                id: 2,
                name: "Rachael Vaughten",
                travelerType: "thrill-seeker"
            },
            {
                id: 3,
                name: "Sibby Dawidowit.skipsch",
                travelerType: "shopper"
            },
        ];

        traveler1 = new Traveler(travelerData[0])
        traveler2 = new Traveler(travelerData[1])
        traveler3 = new Traveler(travelerData[2])

        tripData = [
            {
              id: 1,
              userID: 44,
              destinationID: 49,
              travelers: 1,
              date: "2022/09/16",
              duration: 8,
              status: "approved",
              suggestedActivities: [ ]
            },
            {
              id: 2,
              userID: 35,
              destinationID: 25,
              travelers: 5,
              date: "2022/10/04",
              duration: 18,
              status: "approved",
              suggestedActivities: [ ]
            },
            {
              id: 3,
              userID: 3,
              destinationID: 22,
              travelers: 4,
              date: "2022/05/22",
              duration: 17,
              status: "approved",
              suggestedActivities: [ ]
            },
            {
                id: 41,
                userID: 3,
                destinationID: 25,
                travelers: 3,
                date: "2020/08/30",
                duration: 11,
                status: "approved",
                suggestedActivities: [ ]
            },
        ];

        destinationData = [
            {
                id: 1,
                destination: "Lima, Peru",
                estimatedLodgingCostPerDay: 70,
                estimatedFlightCostPerPerson: 400,
                image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
                alt: "overview of city buildings with a clear sky"
            },
            {
                id: 2,
                destination: "Stockholm, Sweden",
                estimatedLodgingCostPerDay: 100,
                estimatedFlightCostPerPerson: 780,
                image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "city with boats on the water during the day time"
            },
            {
                id: 3,
                destination: "Sydney, Austrailia",
                estimatedLodgingCostPerDay: 130,
                estimatedFlightCostPerPerson: 950,
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "opera house and city buildings on the water with boats"
            },
            {
                id: 22,
                destination: "Rome, Italy",
                estimatedLodgingCostPerDay: 90,
                estimatedFlightCostPerPerson: 650,
                image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "people standing inside a colosseum during the day"
            },
            {
                id: 25,
                destination: "New York, New York",
                estimatedLodgingCostPerDay: 175,
                estimatedFlightCostPerPerson: 200,
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "people crossing the street during the day surrounded by tall buildings and advertisements"
            },
        ];
    });

    it("should be a function", () => {
        expect(Traveler).to.be.a('function')
    });

    it("should be an instance of traveler", () => {
        expect(traveler1).to.be.an.instanceOf(Traveler);
        expect(traveler2).to.be.an.instanceOf(Traveler);
        expect(traveler3).to.be.an.instanceOf(Traveler);
    });

    it("should have an id", () => {
        expect(traveler1.id).to.equal(1)
    });

    it("should have a name", () => {
        expect(traveler1.name).to.equal('Ham Leadbeater')
    });

    it("should have a type", () => {
        expect(traveler1.travelerType).to.equal('relaxer')
    });

    it("should have a method to return the travelers first name only", () => {
        expect(traveler1.getFirstName()).to.equal('Ham')
    });

    it("should have a method that returns all of a users trips", () => {
        traveler3.getTrips(tripData)
        expect(traveler3.tripHistory.length).to.equal(2)
        expect(traveler3.tripHistory[0].date.date()).to.equal(30)
    });

    it("should be able to add destination details to each trip" ,() => {
        traveler3.getTrips(tripData)
        traveler3.addDestinationInfo(destinationData)
        expect(traveler3.tripHistory[0].destinationName).to.equal('New York, New York')
        expect(traveler3.tripHistory[1].estimatedFlightCostPerPerson).to.equal(650)
    });

    it("should be able to calc total lodging", () => {
        traveler3.getTrips(tripData)
        traveler3.addDestinationInfo(destinationData)
        expect(traveler3.getTotalLodging()).to.equal(0)
        expect(traveler3.getTotalLodging(2022)).to.equal(1530)
    });

    it("should be able to calc total airfare", () => {
        traveler3.getTrips(tripData)
        traveler3.addDestinationInfo(destinationData)
        expect(traveler3.getTotalAirfare()).to.equal(0)
        expect(traveler3.getTotalAirfare(2022)).to.equal(2600)
    });

    it("should be able to calc total cost", () => {
        traveler3.getTrips(tripData)
        traveler3.addDestinationInfo(destinationData)
        expect(traveler3.getTotalCost()).to.equal(0)
        expect(traveler3.getTotalCost(2022)).to.equal(4130)
    });

    it("should be able to add a 10% fee to total cost", () => {
        traveler3.getTrips(tripData)
        traveler3.addDestinationInfo(destinationData)
        expect(traveler3.addAgentFee()).to.equal(0)
        expect(traveler3.addAgentFee(2022)).to.equal(4543)
    })
})