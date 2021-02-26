/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

const values = [2, 2, 1, 2, 2, 2, 2, 2, 2];

function findTheUnique(number)
{
    return number === 1;
}

var numberFound = values.filter(findTheUnique);

console.log(numberFound);

//SECOND WAY TO DO IT (BETTER WAY)

values.sort();

console.log(values);

if (values[0] !== values[1])
{
    let uniqueNumber = values[0];
    console.log(uniqueNumber);
}
else
{
    uniqueNumber = values.slice(-1)[0];
    console.log(uniqueNumber)
}