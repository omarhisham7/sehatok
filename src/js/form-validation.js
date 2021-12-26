const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('mail');
const age = document.getElementById('age');
const selectYear = document.getElementById('select-year');
const selectRelationship = document.getElementById('select-relationship');
const selectCountry = document.getElementById('select-country');
const selectCountry2 = document.getElementById('select-country2');
const textarea = document.getElementById('textarea');
const error = document.getElementById('error');

// to prevent the user from sumbiting without any data
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// default error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// default success message
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//error message for dropdown select options
function setErrorForDropDown(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "drop-down error";
}

//success message for dropdown select options
function setSuccessForDropDown(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'drop-down success';
    formControl.classList.add('success');
    small.classList.remove('error');
    small.innerText = '';

}

//to to check if the email is valid 
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// this function goal is to validate inputs 
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const selectYearValue = selectYear.value;
    const selectRelationshipValue = selectRelationship.value;
    const selectCountryValue = selectCountry.value;
    const selectCountry2Value = selectCountry2.value;
    const textareaValue = textarea.value;



    // name
    if (nameValue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }

    // email
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    //  age
    if (ageValue >= 1 && ageValue < 100) {
        setSuccess(age);
    } else {
        setError(age, 'age is between 1 and 99');
    }


    // selectYearValue
    if (selectYearValue == "") {
        setErrorForDropDown(selectYear, 'select option');

    } else {
        setSuccessForDropDown(selectYear);

    }

    // selectRelationshipValue
    if (selectRelationshipValue == "") {
        setErrorForDropDown(selectRelationship, 'select option');

    } else {
        setSuccessForDropDown(selectRelationship);

    }

    // selectCountryValue
    if (selectCountryValue == "") {
        setErrorForDropDown(selectCountry, 'select option');

    } else {
        setSuccessForDropDown(selectCountry);

    }

    // selectCountry2Value
    if (selectCountry2Value == "") {
        setErrorForDropDown(selectCountry2, 'select option');

    } else {
        setSuccessForDropDown(selectCountry2Value);

    }

    // text area
    if (textareaValue === '') {
        setError(textarea, 'please add a message');
    } else {
        setSuccess(textarea);
    }

};