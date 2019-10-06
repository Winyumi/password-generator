// Get text field for output
var output = document.getElementById("password");


function generatePassword() {

    // Set up initial variables
    var password = [];
    var allowedChars = "";

    // Prompt the user for options
    var passwordLength = parseInt(prompt("How many characters? (8-128)",8));
    if (!(passwordLength >= 8 && passwordLength <= 128)) {
        alert("Please enter a number from 8 to 128.");
        return;
    }
    if (confirm("Lowercase?")) {
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        allowedChars += lowerCase;
    }
    if (confirm("Uppercase?")) {
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        allowedChars += upperCase;
    }
    if (confirm("Numbers?")) {
        var numbers = "1234567890";
        allowedChars += numbers;
    }
    if (confirm("Special Characters?")) {
        var symbols = "!#$%&*+-=?@^_|<>(){}[]:;,.";
        allowedChars += symbols;
    }

    // Check if any character types are selected
    if (allowedChars) {
        // Loop each character to be randomized and spliced into the password array at a random position
        for (var i = 0; i < passwordLength; i++) {
            // Include at least one of each selected character types at the first step
            if (i === 0) {
                if (lowerCase) {
                    password.splice(Math.round(Math.random()*password.length),0,lowerCase[Math.floor(Math.random()*lowerCase.length)])
                    i++;
                }
                if (upperCase) {
                    password.splice(Math.round(Math.random()*password.length),0,upperCase[Math.floor(Math.random()*upperCase.length)])
                    i++;
                }
                if (numbers) {
                    password.splice(Math.round(Math.random()*password.length),0,numbers[Math.floor(Math.random()*numbers.length)])
                    i++;
                }
                if (symbols) {
                    password.splice(Math.round(Math.random()*password.length),0,symbols[Math.floor(Math.random()*symbols.length)])
                    i++;
                }
            }
            // Generate the rest of the characters at random
            password.splice(Math.round(Math.random()*password.length),0,allowedChars[Math.floor(Math.random()*allowedChars.length)]);

            console.log(password.join(""), password.length);
        }

        // Output the password array as a combined string
        output.innerText = password.join("");

    } else {

        alert("Password was not generated.\nPlease confirm at least one character type.");

    }

}

function copyPassword() {

    // Select text
    output.select();
    output.setSelectionRange(0, 99999); // For mobile support

    // Copy text
    document.execCommand("copy");

    // Notify user
    alert("Copied password to clipboard.");

}
