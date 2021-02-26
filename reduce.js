
const array = [1, 2, 3, 4, 5];
const names = ['Andres', 'Tobias', 'Francisco', 'Antonio', 'Lautaro'];
const myObj =
[
{
  char_id: 1,
  name: 'Walter White',
  birthday: '09-07-1958',
  occupation: [ 'High School Chemistry Teacher', 'Meth King Pin' ],
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
  status: 'Presumed dead',
  nickname: 'Heisenberg',
  appearance: [ 1, 2, 3, 4, 5 ],
  portrayed: 'Bryan Cranston',
  category: 'Breaking Bad',
  better_call_saul_appearance: []
},
{
  char_id: 2,
  name: 'Jesse Pinkman',
  birthday: '09-24-1984',
  occupation: [ 'Meth Dealer' ],
  img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
  status: 'Alive',
  nickname: "Cap n' Cook",
  appearance: [ 1, 2, 3, 4, 5 ],
  portrayed: 'Aaron Paul',
  category: 'Breaking Bad',
  better_call_saul_appearance: []
},
{
  char_id: 3,
  name: 'Skyler White',
  birthday: '08-11-1970',
  occupation: [
    'House wife',
    'Book Keeper',
    'Car Wash Manager',
    'Taxi Dispatcher'
  ],
  img: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
  status: 'Alive',
  nickname: 'Sky',
  appearance: [ 1, 2, 3, 4, 5 ],
  portrayed: 'Anna Gunn',
  category: 'Breaking Bad',
  better_call_saul_appearance: []
}
];


console.log('WORKING WITH NUMBERS ONLY');
const result = array.reduce(function(acc, cur, index, arr){

  return acc + cur;
}, 0);

console.log('The result is: ', result);

console.log('WORKING WITH NUMBERS AND RETURNING ARRAY');
const result2 = array.reduce((acc, cur) => {

  acc.push(cur * 3);
  return acc;
}, []);

console.log('The result is: ', result2);

console.log('WORKING ON AN ARRAY OF STRINGS');
//POSSIBLE SOLUTION #1
const result3 = names.reduce((acc, cur) => {

  if (cur[0] === 'A' || cur[0] === 'a') acc.push(cur);

  return acc;
}, []);

console.log('The result is: ', result3);

//POSSIBLE SOLUTION #2 (BETTER WAY)
/*
const result3 = names.reduce((prev, cur) => ['a', 'A'].includes(cur[0]) ? [...prev, cur] : prev, []);

console.log('The result is: ', result3);
*/

console.log('WORKING WITH ARRAY OF JSONS');

const result4 = myObj.reduce((acc, cur, index) => {
  
  if (cur.status === 'Alive') acc.push(cur.name);
  return acc;

}, []);

console.log('The result is: ', result4);



