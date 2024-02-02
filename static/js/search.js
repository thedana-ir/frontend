import Swal from 'sweetalert2'

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
})

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully"
  });