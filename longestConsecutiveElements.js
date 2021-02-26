//I want to know the size of the longest consecutive
//elements of X in Y. You will receive two arguments:
//items and key. Return the length of the longest segment
//of consecutive keys in the given items.

//Notes

//The items and the key will be either an integer or a string
//If the key does not appear in the items, return 0

const number = Math.floor(Math.random() * 255);
console.log(`Your random number is ${number}`);

const phrase = "aaabbsadsaaaafcccasdad"

function findTheLongestString(phrase)
{
    let accumulate = '';
    let longest = '';

    if (phrase.length === 0) // si el string esta vacio, no retorna nada
    {
        return 0;
    } 

    for(let i = 0; i < phrase.length; i++) // iterations to run the string
    {
        if(i === 0) // just to position 0
        {
            if(phrase[i] === phrase [i+1])
            {
                accumulate += phrase[i]; // concatenate to variable if equals
            }
        }
        
        if (i > 0) //for other positions but 0
        {
            if(phrase[i] === phrase[i-1])
            {
                accumulate += phrase[i];
            }
            if (phrase[i] !== phrase[i-1])
            {
                accumulate = phrase[i];
            }
            if (accumulate.length > longest.length)
            {
                longest = accumulate;
            }
        }
    }
    let longestString = longest;
    let longestStringLenght = longest.length;
    let resultJSON = 
    {
        longestString,
        longestStringLenght,
    };
    return resultJSON;
}


