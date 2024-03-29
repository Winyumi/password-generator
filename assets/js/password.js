// Get text field for output
var output = document.getElementById("password");

// Set up button events
document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", copyPassword);

// Function to generate a password
function generatePassword() {

    // Set up initial variables
    var password = [];
    var allowedChars = "";

    // Prompt the user for password length and character type options
    var passwordLength = parseInt(prompt("How many characters? (8-128)",16));
    if (!(passwordLength >= 8 && passwordLength <= 128)) {
        alert("Please enter a number from 8 to 128.");
        return;
    }
    if (confirm("Include lowercase characters?")) {
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        allowedChars += lowercase;
    }
    if (confirm("Include uppercase characters?")) {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        allowedChars += uppercase;
    }
    if (confirm("Include numeric characters?")) {
        var numbers = "1234567890";
        allowedChars += numbers;
    }
    if (confirm("Include special characters?")) {
        var symbols = "!#$%&*+-=?@^_|<>(){}[]:;,.";
        allowedChars += symbols;
    }

    // Check if any character types are selected
    if (allowedChars) {
        // Loop each character to be randomized and spliced into the password array at a random position
        for (var i = 0; i < passwordLength; i++) {
            // Include at least one of each selected character types at the first step
            if (i === 0) {
                if (lowercase) {
                    password.splice(Math.round(Math.random()*password.length),0,lowercase[Math.floor(Math.random()*lowercase.length)])
                    i++;
                }
                if (uppercase) {
                    password.splice(Math.round(Math.random()*password.length),0,uppercase[Math.floor(Math.random()*uppercase.length)])
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

            // For debugging purposes
            // console.log(password.join(""), password.length);
        }

        // Output the password array as a combined string
        output.innerText = password.join("");

    } else {

        // Notify user
        alert("Password was not generated.\nPlease confirm at least one character type.");

    }

}

// Function to copy the password to the clipboard
function copyPassword() {

    // Select text
    output.select();
    output.setSelectionRange(0, 99999); // For mobile support

    // Copy text
    document.execCommand("copy");

    // Notify user
    alert("Password has been copied to the clipboard.");

}
