/*
Make a function that validates if the string provied its an email

validateEmail('test@example.com') // => returns true
validateEmail('test@example') // => returns false
Then, make another for a cellphone with format

(country code) (area code) (number)

validateCellphone('+5492613159290') // => returns true
validateCellphone('2613159290') // => returns false
*/

let email = 'tobiascrescitelli@gmail.com';
let cellphone = '+5492616825529'

function validateEmail(str){

    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regExp.test(str) === true){
        return (console.log("Valid email!"));
    }
    else{
        return (console.log("Invalid email!"));
    }
}

function validatePhone(str){

    let cellRegExp = /[\+][0-9]{1,2}[0-9]{1,3}[0-9]{7,11}/

    if (cellRegExp.test(str) === true){
        return (console.log("Valid phone number!"));
    }
    else{
        return (console.log("Invalid phone number!"));
    }
}

validateEmail(email);
validatePhone(cellphone);