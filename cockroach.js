/*
The cockroach is one of the fastest insects.
Write a function which takes its speed in
km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
*/

const cockroachSpeed = 1.5;

function calculateSpeed(speed){

    let newSpeed = (speed * 100000) / 3600;
    return Math.floor(newSpeed);
}

calculateSpeed(cockroachSpeed);

