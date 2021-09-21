// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = () => drivers.slice(0, 2)

const  returnLastTwoDrivers = () => drivers.slice(2, 4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }
}

// const fareDoubler = () => {}
const fareDoubler = createFareMultiplier(2)

// const fareTripler = () => {}
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
};
