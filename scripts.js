function RPG() {

    let pwdlength = parseInt(prompt("How long do you want your password to be? Min 8 - Max 128"));

    while (pwdlength > 129 || pwdlength < 8) {
        
        pwdlength=parseInt(prompt("Please choose password length from 8 to 128"));

    } 

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let lowerCase = parseInt(prompt("Do you want lower case? Yes: 1  No: 2"));

    let upperCase = parseInt(prompt("Do you want upper case? Yes: 1  No: 2"));

    let numbers = parseInt(prompt("Do you want numbers? Yes: 1  No: 2"));

    let specials = parseInt(prompt("Do you want special characters? Yes: 1  No: 2"));


    let arrayStorage=[];
    let arrayDisplay=[];
    let char;
    let pwdnum;
    let specialChar;

    for (let i = 0; i < pwdlength ; i++) {

    // Random alphabet selection
        let j = 0;

    if (lowerCase === 1 || upperCase === 1) {
        char = alphabet[Math.floor(Math.random()*alphabet.length)];
        
        

        if (lowerCase === 2) {
            char = char.toUpperCase();
        }

        if (lowerCase === 1 && upperCase === 1) {
            let decision = Math.floor(Math.random());

            if (decision === 1) {
                char = char.toUpperCase();
            }

            
        }

        alert("This is the letter: " + char);
        
        alert("This is alphabet count: " + j);

        arrayStorage[j] = char;
        j++;
        
        
        
    }
    // random number
    if (numbers === 1) {

        pwdnum = Math.floor(Math.random()*10);
        alert("number is: " + pwdnum);

        alert("This is number count: " + j);

            arrayStorage[j] = pwdnum;
            j++;
       

        
        alert("This is number count after +1: " + j);

        

    }

    // Random Special Character 

    if (specials === 1) {

        let specialCharacter = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";

        specialChar = specialCharacter[Math.floor(Math.random()*specialCharacter.length)] ;

        alert("Special Character: " + specialChar);

        alert("This is specialChar count: " + j);


        
           
            arrayStorage[j] = specialChar;
            j++;


         alert("This is specialChar count +1: " + j);
        

    }
    if (j=0) {
        arrayDisplay[i] = arrayStorage[j];
    } else {
        arrayDisplay[i] = arrayStorage[Math.floor(Math.random()*j)];
    }

    alert("character at: " + i + " is " + arrayDisplay[i]);
    alert("End Count: " + j);

}


alert("This is your Password: " + arrayDisplay);



    
}