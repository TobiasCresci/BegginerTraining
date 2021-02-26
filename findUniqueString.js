/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant,
only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
It’s guaranteed that array contains more than 3 strings.
*/

const stringValues = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];

Array.prototype.toLowerCase = function()
{
    for (let i = 0; i < this.length; i++)
    {
        this[i] = this[i].toString().toLowerCase();
    }
}
//THIS IS WRONG BECAUSE YOU ARE CHANGING SENSITIVE DATA THAT MAY NEED THE CAPS TO BE IDENTIFIED
//BUT IT WORKS FOR THIS EXERCISE

stringValues.sort();

function findUnique(str)
{
    for (let i = 0; i < str.length -1; i++)
    {
        if (str[i].length === str[i+1].length)
        {
            if (str[i] !== str[i+1])
            {
                let uniqueString = str[i];
                return uniqueString;
            }
        }
    }
}

findUnique(stringValues);
console.log(uniqueString);






