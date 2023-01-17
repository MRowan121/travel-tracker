import { expect } from "chai";
import Trips from '../src/Trips';

describe("trips", () => {
    let trip1;
    let trip2;
    let trip3;
    let tripData;
    let destinationData
    let travelerData
    beforeEach(() => {
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
        ];

        trip1 = new Trips(tripData[0])
        trip2 = new Trips(tripData[1])
        trip3 = new Trips(tripData[2])

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
        ];
    });

    it("should be a function", () => {
        expect(Trips).to.be.a('function')
    });

    it("should be an instance of traveler", () => {
        expect(trip1).to.be.an.instanceOf(Trips);
        expect(trip2).to.be.an.instanceOf(Trips);
        expect(trip3).to.be.an.instanceOf(Trips);
    });

    it("should have a id", () => {
        expect(trip1.id).to.equal(1)
    });

    it("should have a user id", () => {
        expect(trip1.userID).to.equal(44)
    });

    it("should have a destination id", () => {
        expect(trip1.destinationID).to.equal(49)
    });

    it("should know how many travelers are on the trip", () => {
        expect(trip1.travelers).to.equal(1)
    });

    it("should have a date", () => {
        expect(trip1.date).to.equal('2022/09/16')
        expect(trip2.date).to.equal('2022/10/04')
    });

    it("should have a duration", () => {
        expect(trip1.duration).to.equal(8)
    });

    it("should have an approval status", () => {
        expect(trip1.status).to.equal("approved")
    });

    it("should have suggested activities array", () => {
        expect(trip1.suggestedActivities).to.deep.equal([])
    });

    it("should be able to get total flight cost for a trip", () => {
        expect(trip3.getTripFlight(destinationData)).to.equal(2600)
    });

    it("should be able to get total lodging cost for a trip", () => {
        expect(trip3.getTripLodging(destinationData)).to.equal(1530)
    });

    it("should be able to get total cost for a trip", () => {
        expect(trip3.getTripCost(destinationData)).to.equal(4130)
    });

    it("should be able to add 10% to the total cost for a trip", () => {
        expect(trip3.getGrandTotal(destinationData)).to.equal(4543)
    });
});