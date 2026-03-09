function BDA(){

const name = document.forms["RegForm"]["Name"].value;
const email = document.forms["RegForm"]["EMail"].value;
const phone = document.forms["RegForm"]["Telephone"].value;
const course = document.forms["RegForm"]["Subject"];
const password = document.forms["RegForm"]["Password"].value;
const address = document.forms["RegForm"]["Address"].value;

// Regex for email validation
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Regex for phone number (10 digits)
const regPhone = /^\d{10}$/;

// Regex for name (no numbers allowed)
const regName = /\d+/;

// Name validation
if(name == "" || regName.test(name)){
alert("Please enter your name properly.");
return false;
}

// Address validation
if(address == ""){
alert("Please enter your address.");
return false;
}

// Email validation
if(email == "" || !regEmail.test(email)){
alert("Please enter a valid email address.");
return false;
}

// Password validation
if(password == ""){
alert("Please enter your password");
return false;
}

if(password.length < 6){
alert("Password should be at least 6 characters long");
return false;
}

// Phone validation
if(phone == "" || !regPhone.test(phone)){
alert("Please enter a valid phone number.");
return false;
}

// Course validation
if(course.selectedIndex === 0){
alert("Please select your course.");
return false;
}

return true;

}