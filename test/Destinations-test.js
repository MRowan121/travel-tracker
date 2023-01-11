import { expect } from "chai";
import Destinations from '../src/Destinations'

describe("destinations", () => {
    let destination1;
    let destination2;
    let destination3;
    let destination4;
    let destinationData;
    beforeEach(() => {
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

        destination1 = new Destinations(destinationData[0])
        destination2 = new Destinations(destinationData[1])
        destination3 = new Destinations(destinationData[2])
        destination4 = new Destinations(destinationData[3])
    });

    it("should be a function", () => {
        expect(Destinations).to.be.a('function')
    });

    it("should be an instance of destinations", () => {
        expect(destination1).to.be.an.instanceOf(Destinations)
        expect(destination2).to.be.an.instanceOf(Destinations)
        expect(destination3).to.be.an.instanceOf(Destinations)
        expect(destination4).to.be.an.instanceOf(Destinations)
    });

    it("should have an id", () => {
        expect(destination4.id).to.equal(22)
    });

    it("should have a destination", () => {
        expect(destination4.destination).to.equal('Rome, Italy')
    });

    it("should have estimated loding per day", () => {
        expect(destination4.estimatedLodgingCostPerDay).to.equal(90)
    });

    it("should have estimated flight cost per person", () => {
        expect(destination4.estimatedFlightCostPerPerson).to.equal(650)
    });

    it("should have an image of the desitnation", () => {
        expect(destination4.image).to.equal('https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')
    });

    it("should have alt text for the image", () => {
        expect(destination4.alt).to.equal('people standing inside a colosseum during the day')
    });
});