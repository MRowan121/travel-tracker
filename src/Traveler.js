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
};

export default Traveler;