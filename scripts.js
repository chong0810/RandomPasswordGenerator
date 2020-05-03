function RPG() {

    let pwdlength = parseInt(prompt("How long do you want your password to be? Min 8 - Max 128"));

    while (pwdlength > 129 || pwdlength < 8) {
        
        pwdlength=parseInt(prompt("Please choose password length from 8 to 128"));

    } 

    let alphabet = "abcdefghijklmnopqrstuvwxyz" ;

    let lowerCase = praseInt(prompt("Do you want lower case? Yes: 1  No: 2"));

    let upperCase = praseInt(prompt("Do you want upper case? Yes: 1  No: 2"));

    let numbers = praseInt(prompt("Do you want numbers? Yes: 1  No: 2"));

    let specials = praseInt(prompt("Do you want special characters? Yes: 1  No: 2"));









    
}