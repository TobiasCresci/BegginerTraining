/*
You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String,
which must take in input array, containing the names of people who like an item.
It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

//POSSIBLE SOLUTION #1
/*
let names = ['Tobias', 'Nicolas', 'Lautaro', 'Francisco', 'Guadalupe'];

function likes (names){
  console.log(names, names.length);
  switch(names.length){

    case 0:
    return (console.log("No one likes this."));
    break;

    case 1:
    return (console.log(names[0]+" likes this."));
    break;

    case 2:
    return (console.log(names[0]+" and "+names[1]+ " likes this."));
    break;

    case 3:
    return (console.log(names[0]+", "+names[1]+" and "+names[2]+" likes this."));
    break;

    case 4:
    return (console.log(names[0]+", "+names[1]+" and 2 others like this."));
    break;

    default:
    return(console.log(names[0]+", "+names[1]+" and "+(names.length-2)+ " others like this."));
  }
}

likes(names);
*/

//POSSIBLE SOLUTION #2


function likes(names){

  if (names.length === 0){
    return (console.log("No one likes this."));
  }

  if (names.length === 1){
    return console.log((names[0]+"Likes this."));
  }

  if (names.length === 2){
    return (console.log(names[0]+" and "+names[1]+" likes this."));
  }

  if (names.length === 3){
    return (console.log(names[0]+", "+names[1]+" and "+names[2]+" likes this."))
  }

  if (names.length === 4){
    return (console.log(names[0]+ ", "+names[1]+"and 2 more likes this."));
  }

  if (names.length >= 4){
    return (console.log(names[0]+", "+names[1]+" and "+(names.length-2)+ " others like this."))
  }
}

//POSSIBLE SOLUTION #3 //WORST SOLUTION EVER

/*
function likes(a, b, c, d){

  if (a == null){
  return('No one likes this.');
  }
  if (a !== '' && b == null){
  return(a+" likes this.");
  }
  if (a !== '' && b !== '' && c == null){
  return(a+" and "+b+ " likes this.");
  }
  if (a !== '' && b !== '' && c !== '' && d == null){
  return(a+", "+b+" and "+c+" likes this.");
  }
  if (a !== '' && b !== '' && c !== '' && d!== ''){
  return(a+", "+b+" and 2 others likes this.");
  }
}

likes(['Peter', 'Tobias', 'franco']);
*/

// WORKING SOLUTION #4
/*
const names =  ['Tobias', 'Nicolas', 'Lautaro', 'Francisco'];

function likes(names){
  const namesLenght = Object.keys(names).length;
  const likeThis = ' likes this';
  const responses = [
    `No one${likeThis}.`,
    `${names[0]}${likeThis}` ,
    `${names[0]} and ${names[1]}${likeThis}`,
    `${names[0]}, ${names[1]} and ${names[2]}${likeThis}`,
    `${names[0]}, ${names[1]} and ${namesLenght-2} others likes this.`,
  ];

  return console.log(responses[namesLenght])
}

likes(names);
*/


