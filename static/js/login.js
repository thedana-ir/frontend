function form1_validation() {
    $("#page1 .validation-error").remove();

    let input = $("#page1 .email");
    let value = input.val().trim();
    if (! validate_email(value)) {
        $('<p class="validation-error">فکر کنم ایمیلت رو اشتباه تایپ کردی!</p>').insertAfter(input);
        return false;
    }
    
    input = $("#page1 .password");
    value = input.val().trim();
    if (value.length < 8 ) {
        $('<p class="validation-error">رمزت حداقل 8 رقمه!</p>').insertAfter(input.parent());
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

$(".password-container img").click(function() {
    let src = $(this).attr("src");
    if ($(this).prev().attr('type') == 'password') {
        $(this).prev().attr('type', 'text');
        $(this).attr("src", src.replace("visible", "invisible"));
    } else {
        $(this).prev().attr('type', 'password');
        $(this).attr("src", src.replace("invisible", "visible"));
    }
});

$("#page1 .password").keyup(function() {
    if ($(this).val().length >= 8) {
        $(".validation-error").remove();
    }
});