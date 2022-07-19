// Create the User constructor function
// function User(fname, lname, email, password, payment, color){
//     this.fname = fname;
//     this.lname = lname;
//     this.email = email; 
//     this.password = password; 
//     this.payment = payment;
//     this.color = color;
// }
class User{
    constructor(fname, lname, email, password,age, address, phone, payment, color){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}
function isValid(aUsers){
    console.log(aUsers)
    // return true if the user is a valid user
    // return false if the user is not a valid user
    let valid = true;

    if(aUsers.fname.length < 3){
        valid = false;
        $(textFirstName).addClass('error-input')
        $(textFirstName).prop( "placeholder", "Please, enter a first name with more than 3 letters" )
        console.error("Please, enter a first name with more than 3 letters");
    }
    else{
        $(textFirstName).removeClass('error-input')
    }

    if(aUsers.lname.length < 3){
        valid = false;
        $(textLastName).addClass('error-input')
        $(textLastName).prop( "placeholder", 'Please, enter a last name with more than 3 letters')
        console.error("Please, enter a last name with more than 3 letters");
    }
    else{
        $(textLastName).removeClass('error-input')
    }

    if(aUsers.email.length == 0){
        valid = false;
        $(textEmail).addClass('error-input')
        $(textEmail).prop( "placeholder", 'Please, enter a valid email address')
        console.error("Please, enter a valid email address");
    }
    else{
        $(textEmail).removeClass('error-input')
    }

    if(aUsers.password.length < 8){
        valid = false;
        $(textPassword).addClass('error-input')
        $(textPassword).prop( "placeholder", 'Please, enter a valid password that has at least 8 characters')
        console.error("Please, enter a valid password that has at least 8 characters");
    }
    else {
        $(textPassword).removeClass('error-input')
    }

    if(Number(aUsers.age) < 21 && Number(aUsers.age) !== NaN ){
        console.log(aUsers.age)
        valid = false;
        $(textAge).addClass('error-input')
        $(textAge).prop( "placeholder", 'You must be at least 21 years old')
        console.error("Please, enter a number");
    }
    else{
        $(textAge).removeClass('error-input')
    }

    if(aUsers.address.length === 0){
        valid = false;
        $(textAddress).addClass('error-input')
        $(textAddress).prop( "placeholder", 'Please, enter a valid address')
        console.error("Please, enter a valid address");
    }
    else{
        $(textAddress).removeClass('error-input')
    }

    if(aUsers.phone.length !== 10){
        valid = false;
        $(textPhone).addClass('error-input')
        $(textPhone).prop( "placeholder", 'Please, enter a valid 10-digit phone number')
        console.error("Please, enter a valid 10-digit phone number");
    }
    else{
        $(textPhone).removeClass('error-input')
    }

    if(aUsers.payment.length === 0){
        valid = false;
        $(textPayment).addClass('error-input')
        $(textPayment).prop( "placeholder", 'Please, enter a valid payment method')
        console.error("Please, enter a valid payment method");
    }
    else{
        $(textPayment).removeClass('error-input')
    }
    return valid
}
function validatePassword(){
    console.log("Validating Password");
    let txtPass = $("#textPassword");
    let password = txtPass.val();

    if (password.length < 8) {
        txtPass.css("background-color", "red"); //jQuery call for CSS 
    }
    else{
        txtPass.css("background-color", "white"); //jQuery call for CSS 
    }
}
function confirmPassword(){
    console.log("Confirming Password");
    let txtPass = $("#textPassword");
    let password = txtPass.val();

    let txtPassConf = $("#confirmPassword");
    let confirmPassword = txtPassConf.val();
     
    if (confirmPassword !== password) {
        txtPassConf.css("background-color", "red"); //jQuery call for CSS 
    }
    else{
        txtPassConf.css("background-color", "white"); //jQuery call for CSS 
    }
}

function clearInputs(){
    $(forReset)[0].reset()
}
//  Create the register function
function register(){
    // Get the values from the form fields
    let userFname = $("#textFirstName").val();
    let userLname = $("#textLastName").val();
    let userEmail = $("#textEmail").val();
    let userPassword = $("#textPassword").val();
    let userAge = $("#textAge").val();
    let userAddress = $("#textAddress").val();
    let userPhone = $("#textPhone").val();
    let userPayment = $("#textPayment").val();
    let userColor = $("#txtColor").val();

    // Create the object
    let newUser = new User(userFname, userLname, userEmail, userPassword, userAge, userAddress, userPhone, userPayment, userColor);
    console.log(newUser)

    if(isValid(newUser)){
        saveUser(newUser);
        clearInputs();
    }
}

// jQuery vs JavaScript 
// document.getElementById("txtFirstName").value;
// $("#txtFirstName").val();

// document.getElementById("txtLastName").style.display = "none";
// $("#txtLastName").hide();

function init(){
    //hide the userForm
    $("#userForm").hide();

    // hook events 
    $("#hideForm").on("click", function(){
        $("#userForm").slideUp(400); //millisec
    }); //millisec
    // show the userForm
    $("#newUser").on("click", function(){
        $("#userForm").slideDown(400); //millisec
    });
    // validate password 
    $("#textPassword").keyup(validatePassword);
    $("#confirmPassword").keyup(confirmPassword);
}
window.onload = init;




