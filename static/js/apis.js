const BASE_URL = "https://" + window.location.host + "/api/v1/";


function select_suggest(input) {
    input.next('.suggestions').children("li").click(function() {
        input.val($(this).text());
    });
}


function find_suggests(input, url, not_found) {
    input.next('.suggestions').empty();
    let s = input.val();
    if (s.length > 2) {
        $.get(BASE_URL + url, {'s': s}, function (data) {
            input.next('.suggestions').empty();
            if (data.length > 0) {
                data.forEach(element => {
                    input.next('.suggestions').append('<li>' + element.name + '</li>');
                });
                select_suggest(input);
            } else {
                input.next('.suggestions').append('<p>' + not_found + '</p>');
            }
        });
    } else {
        input.next('.suggestions').append('<p>' + 'حداقل 3 حرف رو وارد کن!' + '</p>');
    }    
}


function suggestions(input, url, not_found) {    
    input.keyup(function() {
        find_suggests(input, url, not_found);
    });

    input.focus(function () {
        $(this).next('.suggestions').fadeIn(500);
    });

    input.focusout(function () {
        $(this).next('.suggestions').fadeOut(500);
    });
}


function get_source_info(slug, paste=false) {
    $.get(BASE_URL + 'source/', {'slug': slug}, function (data) {
        if (paste) {
            $(paste).text(data.info)
        }
    });
}
