
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Please enter a valid length between 8 and 128:"));
  }

  const includeLowerCase = confirm("Include lowercase characters?");
  const includeUpperCase = confirm("Include uppercase characters?");
  const includeNumbers = confirm("Include numeric characters?");
  const includeSpecialChars = confirm("Include special characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars) {
    alert("At least one character type should be selected!");
    return null;
  }

  return {
    passwordLength: passwordLength,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars
  };
}