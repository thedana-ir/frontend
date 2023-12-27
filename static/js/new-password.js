function form1_validation() {
    $("#page1 .validation-error").remove();

    let input = $("#page1 .password1");
    value = input.val().trim();
    if (value.length < 8 ) {
        $('<p class="validation-error">رمزت حداقل 8 رقمه!</p>').insertAfter(input.parent());
        return false;
    } 

    input = $("#page1 .password2");
    value = input.val().trim();
    if (value.length < 8 ) {
        $('<p class="validation-error">رمزت حداقل 8 رقمه!</p>').insertAfter(input.parent());
        return false;
    } else if ($("#page1 .password1").val() !== input.val()) {
        $('<p class="validation-error">رمز هات مطابقت ندارن!</p>').insertAfter(input.parent());
        return false;    
    }

    return true;
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