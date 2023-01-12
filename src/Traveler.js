import dayjs from "dayjs";

class Traveler {
    constructor(travelerInfo) {
        this.id = travelerInfo.id;
        this.name = travelerInfo.name;
        this.travelerType = travelerInfo.travelerType;
    };

    getFirstName() {
        return this.name.split(" ")[0];
    };

    getTrips(tripData) {
        this.tripHistory = tripData.filter(trip => trip.userID === this.id).map(trip => {
            return {... trip, date: dayjs(trip.date)}
        })
    };

    addDestinationInfo(destinationData) {
        this.tripHistory.forEach(trip => {
            destinationData.find(destination => {
                if(destination.id === trip.destinationID) {
                    trip.destinationName = destination.destination;
                    trip.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
                    trip.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
                    trip.image = destination.image;
                    trip.alt = destination.alt;
                }
            })
        })
    };

    getTotalLodging() {
        const totalLodging = this.tripHistory.reduce((total, trip) => {
            total += (trip.duration * trip.estimatedLodgingCostPerDay)
            return total
        }, 0)
        return totalLodging
    };

    getTotalAirfare() {
        const totalAirfare = this.tripHistory.reduce((total, trip) => {
            total += trip.estimatedFlightCostPerPerson
            return total
        }, 0)
        return totalAirfare
    };
};

export default Traveler;