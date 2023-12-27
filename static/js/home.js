function progress_bar() {
    let points = $("#points p span").text()
    points = parseInt(points);

    let needed = $("#points").attr('needed-points');
    needed = parseInt(needed);

    let percent = (points / needed) * 100;

    let value = `radial-gradient(closest-side, var(--primary-color) 77%, transparent 80% 100%), conic-gradient(var(--green) ${percent}%, white ${percent + 10}%)`

    return value;
}

$('#profile-cart #foot h6:first-child').click(function() {
    if ($('#downloads').css('display') == 'none') {
        $('#uploads').fadeOut();
        $('#downloads').fadeIn();
    }
    $('#profile-cart #foot h6').removeClass('selected');
    $(this).addClass('selected');
});

$('#profile-cart #foot h6:last-child').click(function() {
    if ($('#uploads').css('display') == 'none') {
        $('#downloads').fadeOut();
        $('#uploads').fadeIn();
    }
    $('#profile-cart #foot h6').removeClass('selected');
    $(this).addClass('selected');
});

$("#profile-cart #points .progress-bar").css('background', progress_bar());

$("#file").on("change", function (e) {

    var file = e.currentTarget.files[0];
        var filesize = ((file.size/1024)/1024).toFixed(4); // MB
        if (filesize >= 10) { 
            $(this).addClass('has-error');
            $(this).val('');
            $(this).parent().append("<p class='file-error'>حجم فایل باید نهایت 10 مگابایت باشه!</p>");
        }
    }

);


const del_btns = document.querySelectorAll(".ctas a form");

function confirm_del(e) {
    e.preventDefault();
    const form = e.currentTarget;

    swal({
        title: "مطمئنی ؟",
        text: "میخوای این فایل از لیستت پاک بشه ؟",
        icon: "warning",
        dangerMode: true,
        buttons: {
            cancel: "نه!",
            catch: {
                text: "آره پاکش کن.",
                value: true,
            }
        },
    }).then((value) => {
      if (value) {
        form.submit();
      }
    });    
}

for (let i = 0; i < del_btns.length; i++) {
    del_btns[i].addEventListener("submit", e => confirm_del(e));
}

function confirm_logout() {
    swal({
        title: "مطمئنی ؟",
        text: "میخوای از حساب کاربریت خارج بشی؟",
        icon: "error",
        dangerMode: true,
        buttons: {
            cancel: "نه!",
            catch: {
                text: "آره، بیا بیرون!",
                value: true,
            }
        },
    }).then((value) => {
      if (value) {
        window.location.href = '/logout/';
      }
    });
}