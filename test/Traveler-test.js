import { expect } from "chai";
import Traveler from "../src/Traveler";

describe("traveler", () => {
    let traveler1;
    let traveler2;
    let traveler3;
    let travelerData;
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
})