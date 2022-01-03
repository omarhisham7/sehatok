jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
var validator = $("#form").validate({

    rules: {
        required: true,
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


// method 1:

$(document).ready(function() {

    if ($('input.required').val() == '') {
        $('.form-submit').prop('disabled', 'disabled');
    }
    $("input.required , select ,textarea").on('blur keyup change', function() {
        if ($("[name='name']").valid() && $("[name='mail']").valid() && $("[name='age']").valid() &&
            $("[name='selectYear']").valid() && $("[name='selectRelationship']").valid() && $("[name='selectCountry']").valid() &&
            $("[name='selectCountry2']").valid() && $("[name='textarea']").valid()



        ) {
            $('.form-submit').prop('disabled', false);
        } else {

            $('.form-submit').prop('disabled', 'disabled');
        }


    });


});

