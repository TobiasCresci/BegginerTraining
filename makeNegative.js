//In this simple assignment you are given a number and 
//have to make it negative. But maybe the number is //already negative?

const b = -1, c = 2, d = -3, e = 0;

makeNegative = (number) => 
{
    result = number * (-1);
    return result;
}

console.log(b > 0 ? makeNegative(b) : b);
console.log(c > 0 ? makeNegative(c) : c);
console.log(d > 0 ? makeNegative(d) : d);
console.log(e > 0 ? makeNegative(e) : e);
