// QUESTION 1
// let firstname=prompt("Write you name");
// let lastname=prompt("Write your last name");
// let fullName = firstname + lastname;
// document.write(" h2" +  "Welcome " + fullName);correct h2

// QUESTION 2
// let favMobile = prompt("Enter your favourite mobile model:");
// let len = favMobile.length;
// document.write("The length of your Mobile is: " + len);

// QUESTION 3
// let word = "Pakistani";
// let index = word.indexOf("n");
// document.write("String: " + word + "<br>Index of 'n': " + index);

// QUESTION  4
// let word = "Hello World";
// let index = word.lastIndexOf("l");
// document.write("String: " + word + "<br>Last index of 'l': " + index);

// QUESTION 5
// let word = "Pakistani";
// let charAt = word[3]; 
// document.write("String: " + word + "<br>Character at index 3: " + charAt);


// QUESTION 6
// let firstName = prompt("Write your first name");
// let lastName = prompt("Write your last name");
// let fullName = firstName.concat(lastName);
// document.write("<h2>" + "Welcome " + fullName + "</h2>");

// QUESTION 7
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>After Replacement: " + newCity);

// QUESTION 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and", "&");
// document.write("Original message: " + message + "<br>Updated message: " + newMessage);

// QUESTION 9
// let str = "472";
// document.write(("Value: " + str + "<br>"));
// document.write("Type: " + typeof str + "<br>");
// let num = Number(str);
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>");

// QUESTION 10
// let letter = prompt("Enter a letter");
// let newLetter = letter.toUpperCase();
// document.write("User input: " + letter + "<br>");
// document.write("Upper Case: " + newLetter);

// QUESTION 11
// let userinput = prompt("Write Any name");
// let TitleCase = userinput.toLowerCase().split(' ');
// for (let i = 0; i < TitleCase.length; i++) {
//     TitleCase[i] = TitleCase[i].charAt(0).toUpperCase() + TitleCase[i].slice(1);
// }
// document.write("User input: " + userinput + "<br>");
// document.write("TitleCase: " + TitleCase.join(' '));

// QUESTION 12
// var num = 35.36;
// var strNum = num.toString().replace('.', '');
// document.write("Number:" + num + "<br>");
// document.write("Result: " + strNum);  


// QUESTION 13
// let username = prompt("Enter your username:");

// for (let i = 0; i < username.length; i++) {
//     let charCode = username.charCodeAt(i);
//     if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
//         alert("Please enter a valid username without special characters (@, ., , , !).");
//     }
// }

// document.write("Username is valid: " + username);

// QUEWSTION 14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// let index = A.indexOf(userInput);
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         index = i; 
//     }
// }
// if (index >= 0) {
//     document.write(userInput + " is <b>available</b> at index " + index + " in our bakery.");
// } else {
//     document.write("We are sorry, " + userInput + " is <b>not available</b> in our bakery.");
// }


// QUESTION 15
// let password = prompt("Enter password:");
// if (password.length < 6) {
//    document.write("Password must be at least 6 characters long.");
// } else if (!isNaN(password[0])) {
//     document.write("Password cannot begin with a number.");
// } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
//     document.write("Password must contain both letters and numbers.");
// } else {
//     document.write("Password is valid!");
// }





// QUESTION 16
// var uni= "University of Karachi";
// var arr = uni.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }

// QUESTION 17
// var userInput = prompt("Enter a Name:");
// let lastChar = userInput.slice(-1);
// document.write("User input: " + userInput + "<br>")
// document.write("The last character is: " + lastChar);

// QUESTION 18
// var text = "The quick brown fox jumps over the lazy dog";
// var lowerCaseText = text.toLowerCase();
// var wordsArray = lowerCaseText.split(" ");
// var count = 0;
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === "the") {
//         count++;
//     }
// }
// document.write("Text: " + text + "<br>")
// document.write("There are " +  count  +  "occurrence(s) of the word 'the'  " );