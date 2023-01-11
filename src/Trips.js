class Trips {
    constructor(tripDetails) {
        this.id = tripDetails.id;
        this.userID = tripDetails.userID;
        this.destinationID = tripDetails.destinationID;
        this.travelers = tripDetails.travelers;
    }
};

module.exports = Trips;