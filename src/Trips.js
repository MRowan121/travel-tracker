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
    }
};

export default Trips;