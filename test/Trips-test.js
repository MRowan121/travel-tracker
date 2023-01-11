import { expect } from "chai";
const Trips = require("../src/Trips")

describe("trips", () => {
    let trip1;
    let trip2;
    let trip3;
    let tripData;
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
    });

    it.skip("should be a function", () => {
        expect(Trips).to.be.a('function')
    });

    it.skip("should be an instance of traveler", () => {
        expect(trip1).to.be.an.instanceOf(Trips);
        expect(trip2).to.be.an.instanceOf(Trips);
        expect(trip3).to.be.an.instanceOf(Trips);
    });

    it.skip("should have a id", () => {
        expect(trip1.id).to.equal(1)
    });

    it.skip("should have a user id", () => {
        expect(trip1.userID).to.equal(44)
    });

    it.skip("should have a destination id", () => {
        expect(trip1.destinationID).to.equal(49)
    });

    it.skip("should know how many travelers are on the trip", () => {
        expect(trip1.travelers).to.equal(1)
    });

    it.skip("should have a date", () => {
        expect(trip1.date()).to.equal("2022/09/16")
    });

    it.skip("should have a duration", () => {
        expect(trip1.duration).to.equal(8)
    });

    it.skip("should have an approval status", () => {
        expect(trip1.status).to.equal("approved")
    });

    it.skip("should have suggested activities array", () => {
        expect(trip1.suggestedActivities).to.deep.equal([])
    });
});