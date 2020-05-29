const Validator = require ('validator');
const isEmpty = require('is-empty');


// this function will take in data as a parameter (which is being sent from the front end registration form)
module.exports = function validateRegisterInput(data){
    let errors = {}

    // Convert empty fields to an empty string so we can use validator
    Object.keys(data).forEach(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : "";
    });

    // Checks for Name
    if(Validator.isEmpty(data.name)) errors.name = "Name field is required";

    // Check if email is inputted as well as validates correct format
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    
    // Check if password is inputted as well as validates that the password is more then 6 characters but less then 40
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }else if(!Validator.isLength(data.password, { min: 6, max: 40 })){
        errors.password = "Password must be at least 6 characters";
    }

    // check to make sure the 2nd password field is filled out and matches the passwowrd from the first field (code above)
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field is required";
    }else if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }



 return {
    errors,
    isValid: isEmpty(errors)
 }
}