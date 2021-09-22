// Code your solution in this file!
//create const variable returnFirstTwoDrivers
//set to annonymos function
//accepts argument of array of drivers
//return first 2 drivers

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

// const returnFirstTwoDrivers = () => drivers.slice(0, 2)

const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2)
}

// const  returnLastTwoDrivers = () => drivers.slice(2, 4)

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = i => {
//     return function(fare) {
//         return fare * i;
//     }
// }

// function called createFareMultiplier
// takes in an argument of an interger(some kind of number)
// It should return a function that takes in an argument of fare
// multiply fare by interger that createFareMultiplier took

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}


// const fareDoubler = (theFare) => createFareMultiplier(2)(theFare);
const fareDoubler = createFareMultiplier(2)

// const fareTripler = (theFare) => createFareMultiplier(3)(theFare);
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
};

