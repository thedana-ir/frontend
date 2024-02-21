// import Swal from 'sweetalert2'

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
// })

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
})