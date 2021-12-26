jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
var validator = $("#form").validate({
    rules: {
        name: "required",
        mail: {
            required: true,
            email: true
        },
        age: {
            required: true,
            number: true
        },
        selectYear: "required",
        selectRelationship: "required",
        selectCountry: "required",
        selectCountry2: "required",
        textarea: {
            required: true,
            maxlength: 50
        }


    },
    messages: {
        name: "Please Enter your name !",
        selectYear: "Please enter your year !",
        selectRelationship: "Please select aRelationship ",
        selectCountry: "Please select a country",
        selectCountry2: "Please select a country",


    }
});