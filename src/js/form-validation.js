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
        name: "الرجاء ادخال الاسم",
        mail: {
            required: "هذا الحقل مطلوب",
            email: "الرجاء ادخال بريد الكتروني صحيح"
        },
        age: "هذا الحقل مطلوب",
        selectYear: "هذا الحقل مطلوب",
        selectRelationship: "هذا الحقل مطلوب ",
        selectCountry: "هذا الحقل مطلوب",
        selectCountry2: "هذا الحقل مطلوب",
        textarea: 'هذا الحقل مطلوب'



    }
});