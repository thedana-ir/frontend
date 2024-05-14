$(document).ready(function() {
    // Function to handle window resize
    function handleResize() {
        const windowWidth = $(window).width();

        // If window width is less than 900px, hide the elements
        if (windowWidth < 900) {
            $('.desktop-item').hide();
        } else {
            // Otherwise, show the elements
            $('.desktop-item').show();
        }
    }

    // Initial call to handleResize
    handleResize();

    // Add event listener for window resize
    $(window).resize(handleResize);
});

function confirm_logout() {
    let form = $("#logout-form");
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
          form.submit();
        }
    });
}