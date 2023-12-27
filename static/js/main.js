let message_fade = setTimeout(
    function () {
        $("#messages .message").fadeOut(600);
    }, 3000
);

$("#messages .message").hover(function () {
        clearTimeout(message_fade);
    }, function () {
        message_fade = setTimeout(
            function () {
                $("#messages .message").fadeOut(1000);
            }, 2000
        );
    }
);

$(".modal header .icon, .modal .ctas .cancel").click(function () {
    $(this).closest(".modal").fadeOut();
})

function page_back() {
    window.location.href = "../";
}

function open_modal(selector) {
    window.scrollTo(0, 0);
    $(".modal" + selector).fadeIn();
}

$("button.vote-modal").click(function() {
    let pk = $(this).attr('pk-data');
    $("#vote_modal form").attr("action", "/hub/sources/" + pk + "/vote/");
    get_source_info(pk, paste="#vote_modal .content > p");
    window.scrollTo(0, 0);
    $("#vote_modal").show();
});

$("#vote_modal .stars label").click(function () {
    $("#vote_modal .stars label").removeClass('active');
    $(this).addClass('active');
    $(this).parent().prevAll().find('label').addClass('active');
})