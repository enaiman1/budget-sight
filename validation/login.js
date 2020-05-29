const Validator = require('validator');
const isEmpty = require('is-empty');

// this function will take in data as a parameter (which is being sent from the front end login form)
module.exports = function validateLoginInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator
    Object.keys(data).forEach(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : "";
    });

     // Check if email is inputted
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    // Check if password is inputted
    if(Validator.isEmpty(data.password)) errors.password = "Password field is required";

    return {
        errors,
        isValid: isEmpty(errors)
    };
}