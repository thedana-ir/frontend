function form1_validation() {
    $("#page1 .validation-error").remove();

    let input = $("#page1 .first-name");
    let value = input.val().trim();
    if (value == '') {
        $("<p class='validation-error'>چی صدات کنیم ؟</p>").insertAfter(input);
        return false;
    }
    
    let first_name = value;
    input = $("#page1 .last-name");
    value = input.val().trim();
    if (value == '') {
        $("<p class='validation-error'>کدوم <span>" + first_name + "</span> ؟</p>").insertAfter(input);
        return false;
    }

    if ($("#page1 select").val() == null) {
        $('<p class="validation-error">کدوم دانشگاه درس میخونی ؟</p>').insertAfter($("#page1 select"));
        return false;
    }

    return true;
}


function form2_validation() {
    $("#page2 .validation-error").remove();

    let input = $("#page2 .email");
    let value = input.val().trim();
    if (! validate_email(value)) {
        $('<p class="validation-error">فکر کنم ایمیلت رو اشتباه تایپ کردی!</p>').insertAfter(input);
        return false;
    }
    
    input = $("#page2 .password");
    value = input.val().trim();
    if (value == '') {
        $('<p class="validation-error">برای حسابت یه رمز بزار!</p>').insertAfter(input.parent());
        return false;
    } 

    if (value.length < 8 ) {
        $('<p class="validation-error">برای امنیت بهتره حسابت رمز طولانی تری انتخاب کن<br>حداقل 8 کاراکتر</p>').insertAfter(input.parent());
        return false;
    }

    let password = value;
    input = $("#page2 .confirm-password");
    value = input.val().trim();
    if (value != password) {
        $('<p class="validation-error validate-password">رمزات با هم مطابقت ندارن!</p>').insertAfter(input.parent());
        return false;
    }

    if (! $("#page2 #rules-checkbox").is(":checked")) {
        $('<p class="validation-error">اگه نگرانی، یه نگاهی به <a href="#">قوانین ما</a> بنداز <br> مطمئنم خیالت راحت میشه!</p>').insertAfter($("#page2 #rules-checkbox").parent());
        return false;
    }

    return true;
}

function validate_email(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

$("#page1 button").click(function() {
    if (form1_validation()) {
        $("#page-counter span:nth-child(1)").addClass('selected');
        $("#page-counter span:nth-child(2)").removeClass('selected');
        $("#head h3").text("تنظیمات حساب کاربریت رو هم انجام بدیم...");

        $("#page2").fadeIn();
        $("#page1").fadeOut();

        
    }
});

$("#page-counter span:nth-child(2)").click(function() {
    if ($("#page1").css('display') == 'none') {
        $("#page-counter span:nth-child(1)").removeClass('selected');
        $("#page-counter span:nth-child(2)").addClass('selected');

        $("#head h3").text("کمکمون کن تا همو بیشتر بشناسیم...");
        
        $("#page2").fadeOut();
        $("#page1").fadeIn();
    }
});

$("#page2 button").click(function() { 
    if (form2_validation()) {
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

$("#page2 .confirm-password").keyup(function() {
    if ($(this).val() == $("#page2 .password").val()) {
        $(".validation-error.validate-password").remove();
    }
});