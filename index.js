// Code your solution in this file!
const hqLoc = 42;
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - hqLoc);
}

function distanceFromHqInFeet(pickUp) {
    let distance = distanceFromHqInBlocks(pickUp);
    return distance * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((end-start) * 264);
}
function calculatesFarePrice (start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000 ) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <2500) {
        return 25;
    } else if (2500 <= distance) {
        return 'cannot travel that far';
    }


}