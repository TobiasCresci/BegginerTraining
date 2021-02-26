/*
Given two integers a and b, which can be positive or negative,
find the sum of all the integers between including them too and return it.
If the two numbers are equal return a or b.
Note: a and b are not ordered!

Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function createRange(start, end){
    let array = [];

    for(let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}

let array = createRange(-1,1);

const reducer = (accum, current) => accum + current;
let sum = array.reduce(reducer);

console.log(sum);
