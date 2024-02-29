// import Swal from 'sweetalert2'

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
// })



$(".filters button").click(function() {
    let key = $(this).attr("title");
    swal({
        title: `نام ${key} رو سرچ کن:`,
        icon: "info",
        buttons: {
            cancel: "بیخیال!",
            confirm: {
                /*
                 * We need to initialize the value of the button to
                 * an empty string instead of "true":
                 */
                // value: "رضایی",
                text: "تایید",
                className: "bg-green"
              },
        },
        content: {
            element: "input",
            attributes: {
              placeholder: `نام ${key}`,
              type: "text",
            },
          },
    });
    $(".swal-content").append(`
        <ul class="suggestions">
            <li>سیستم های دیجیتال</li>
            <li>طراحی الگوریتم</li>
            <li>سیستم های دیجیتال</li>
            <li>سیستم های دیجیتال</li>
        </ul>
    `)
})