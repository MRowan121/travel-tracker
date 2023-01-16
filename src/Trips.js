import dayjs from 'dayjs'

class Trips {
    constructor(tripDetails) {
        this.id = tripDetails.id;
        this.userID = tripDetails.userID;
        this.destinationID = tripDetails.destinationID;
        this.travelers = tripDetails.travelers;
        this.date = dayjs(tripDetails.date);
        this.duration = tripDetails.duration;
        this.status = tripDetails.status;
        this.suggestedActivities = tripDetails.suggestedActivities;
    };

    getTripFlight(destinationData) {
        let flightCost = destinationData.find(destination => destination.id === this.destinationID)
        let totalFlightCost = flightCost.estimatedFlightCostPerPerson * this.travelers
        return totalFlightCost
    }

    getTripLodging(destinationData) {
        let lodgingCost = destinationData.find(destination => destination.id === this.destinationID)
        let totalLodgingCost = lodgingCost.estimatedLodgingCostPerDay * this.duration
        return totalLodgingCost
    }

    getTripCost(destinationData) {
        let totalCost = this.getTripFlight(destinationData) + this.getTripLodging(destinationData)
        return totalCost
    }

    getGrandTotal(destinationData) {
        let totalCost = this.getTripCost(destinationData);
        let grandTotalCost = totalCost * 1.10;
        return grandTotalCost;
    };
};

export default Trips;