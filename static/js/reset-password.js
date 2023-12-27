function form1_validation() {
    $("#page1 .validation-error").remove();

    let input = $("#page1 .email");
    let value = input.val().trim();
    if (! validate_email(value)) {
        $('<p class="validation-error">فکر کنم ایمیلت رو اشتباه تایپ کردی!</p>').insertAfter(input);
        return false;
    }

    return true;
}

function validate_email(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

$("#page1 button").click(function() {
    if (form1_validation()) {
        $("#form-container form").submit();     
    }
});
