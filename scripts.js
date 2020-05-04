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

    let char;
    let pwdnum;
    // Random alphabet selection

    if (lowercase === 1 || upperCase === 1) {
        char = alphabet[Math.floor(Math.random()*alphabet.length)];
    
        if (lowerCase === 2) {
            char = char.upperCase;
        }

        if (lowerCase === 1 && upperCase === 1) {
            let decision = Math.floor(Math.random());

            if (decision === 1) {
                char = char.upperCase
            }

            
        }

    }
    // random number
    if (numbers === 1) {

        pwdnum = Math.floor(Math.random()*10);
    }








    
}