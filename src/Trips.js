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

    getTravelerInfo(travelerData) {
        travelerData.find(traveler => {
            if(traveler.id === this.userID) {
                this.travelerName = traveler.name
            };
        });
    };

    getDestinationInfo(destinationData) {
        destinationData.find(destination => {
            if(destination.id === this.destinationID) {
                this.destinationName = destination.destination;
                this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
                this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
            };
        });
    };

    getTotalLodging() {
        return this.estimatedLodgingCostPerDay * this.duration
    }
};

export default Trips;