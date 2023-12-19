# password-generator

This project contains a simple password generator implemented in JavaScript. The generator prompts the user for password criteria such as length and character types and generates a random password based on the selected options.

## How it works

The password generator functions as follows:

1. **getPasswordOptions()** function prompts the user to input the desired length of the password and select the character types (lowercase, uppercase, numeric, special characters). It validates the user inputs to ensure a valid password length (between 8 and 128 characters) and that at least one character type is selected.

2. **generatePassword()** function generates a password based on the selected options. It uses arrays of lowercase, uppercase, numeric, and special characters to construct the character set for generating the password.

3. **writePassword()** function writes the generated password to the browser by setting the value of an HTML input field with the id `password`.

The user can click the "Generate Password" button to trigger the password generation process. The generated password will be displayed in the designated input field.

## How to Use

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Generate Password" button to generate a new password.

## credit
1. https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc
2. Codeacademy