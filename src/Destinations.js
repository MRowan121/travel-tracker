class Destinations {
    constructor(destinationDetails) {
        this.id = destinationDetails.id;
        this.destination = destinationDetails.destination;
        this.estimatedLodgingCostPerDay = destinationDetails.estimatedLodgingCostPerDay;
        this.estimatedFlightCostPerPerson = destinationDetails.estimatedFlightCostPerPerson;
    };
};

export default Destinations;