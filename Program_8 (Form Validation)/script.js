function XYZ() {

const name = document.forms["RegForm"]["Name"].value;
const email = document.forms["RegForm"]["EMail"].value;
const course = document.forms["RegForm"]["Subject"];
const password = document.forms["RegForm"]["Password"].value;
const address = document.forms["RegForm"]["Address"].value;

console.log(name, email, course.value, password, address);

// Name validation
if (name === "" ||
name.includes('0') || name.includes('1') ||
name.includes('2') || name.includes('3') ||
name.includes('4') || name.includes('5') ||
name.includes('6') || name.includes('7') ||
name.includes('8') || name.includes('9')) {

alert("Please enter your name properly.");
return false;
}

// Address validation
if (address === "") {
alert("Please enter your address.");
return false;
}

// Email validation
if (email === "" || !email.includes('@')) {
alert("Please enter a valid email address.");
return false;
}

// Password validation
if (password === "") {
alert("Please enter your password");
return false;
}

if (password.length < 6) {
alert("Password should be at least 6 characters long");
return false;
}

// Course selection validation
if (course.selectedIndex === 0) {
alert("Please select your course.");
return false;
}

return true;
}