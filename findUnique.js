/*
There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'
It’s guaranteed that array contains more than 3 elements. Array may contain anything (including NaN).
*/

const values = [1, 1, 1, 2, 1, 1];

values.sort();

if (values[0] !== values[1]){
    let uniqueNumber = values[0];
    console.log(uniqueNumber);
}
else{
    uniqueNumber = values.slice(-1);
    console.log(uniqueNumber);
}

