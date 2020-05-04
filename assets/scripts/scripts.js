// making a function that will be invoked from HTML
function RPG() {

    // limiter
    let pwdlength = parseInt(prompt("How long do you want your password to be? Min 8 - Max 128"));

    // validation for user input
    while (pwdlength > 129 || pwdlength < 8 || isNaN(pwdlength)) {
        
        pwdlength=parseInt(prompt("Please choose password length from 8 to 128"));

    } 
    // initializing variables
    let lowerCase, upperCase, numbers, specials; 

    do {
    lowerCase = confirm("Do you want lower case?");
    upperCase = confirm("Do you want Upper case?");
    numbers = confirm("Do you want numbers?");
    specials = confirm("Do you want special characters?");
    } while (lowerCase == false && upperCase == false && numbers == false && specials == false)

    // do {
        
    //     do {
    //         lowerCase = parseInt(prompt("Do you want lower case? Yes: 1  No: 2"));
    //         // validation for user input
    //     } while (lowerCase != 1 && lowerCase != 2 || isNaN(lowerCase))



    //     do {
    //         upperCase = parseInt(prompt("Do you want upper case? Yes: 1  No: 2"));
    //         // validation for user input
    //     } while (upperCase != 1 && upperCase != 2 || isNaN(upperCase))


    //     do {
    //         numbers = parseInt(prompt("Do you want numbers? Yes: 1  No: 2"));
    //         // validation for user input
    //     } while (numbers != 1 && numbers != 2 || isNaN(numbers))

    //     do {
    //         specials = parseInt(prompt("Do you want special characters? Yes: 1  No: 2"));
    //         // validation for user input
    //     } while (specials != 1 && specials != 2 || isNaN(specials))

    // if (lowerCase === 2 && upperCase === 2 && numbers === 2 && specials === 2) {
        
    //     // user needs to choose at least one category
    //     alert ("Please choose at least one category.")
    // }

    // } while (lowerCase ===2 && upperCase === 2 && numbers === 2 && specials === 2)
    // // validation for user input

    

    let arrayStorage=[];
    let arrayDisplay=[];
    let char;
    let pwdnum;
    let specialChar;
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < pwdlength ; i++) {

    // Random alphabet selection
        let j = 0;

    if (lowerCase === true || upperCase === true) {
        char = alphabet[Math.floor(Math.random()*alphabet.length)];
        
        

        if (lowerCase === 2) {
            char = char.toUpperCase();
        }

        if (lowerCase === true && upperCase === true) {
            let decision = Math.floor(Math.random()*2);

            if (decision === 1) {
                char = char.toUpperCase();
            }

            
        }

        // alert("This is the letter: " + char);
        
        // alert("This is alphabet count: " + j);

        arrayStorage[j] = char;
        j++;
        
        
        
    }
    // random number
    if (numbers === true) {

        pwdnum = Math.floor(Math.random()*10);
        // alert("number is: " + pwdnum);

        // alert("This is number count: " + j);

            arrayStorage[j] = pwdnum;
            j++;
       

        
        // alert("This is number count after +1: " + j);

        

    }

    // Random Special Character 

    if (specials === true) {

        let specialCharacter = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";

        specialChar = specialCharacter[Math.floor(Math.random()*specialCharacter.length)] ;

        // alert("Special Character: " + specialChar);

        // alert("This is specialChar count: " + j);


        
           
            arrayStorage[j] = specialChar;
            j++;


        //  alert("This is specialChar count +1: " + j);
        

    }
    if (j<=1) {
        j--;
        arrayDisplay[i] = arrayStorage[j];
    } else {
        arrayDisplay[i] = arrayStorage[Math.floor(Math.random()*j)];
    }

    // alert("character at: " + i + " is " + arrayDisplay[i]);
    // alert("End Count: " + j);

}


// returning string to HTML
document.getElementById("Password").innerHTML = "This is your password: " + arrayDisplay.join("");



    
}