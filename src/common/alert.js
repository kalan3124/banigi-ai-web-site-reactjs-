import Swal from "sweetalert2";

export const errorMsg = (msg) => {
    Swal.fire({
      title: "",
      text: msg,
      icon: "error",
      confirmButtonText: "OK",
      color: "red",
      width: "20rem",
      heightAuto: true,
      confirmButtonColor: "red",
      background: "antiquewhite",
    });
  };

  export const successMsg = (title,msg) => {
    Swal.fire({
      title: title,
      text: msg,
      icon: "success",
      confirmButtonText: "OK",
      color: "green",
      width: "20rem",
      heightAuto: true,
      confirmButtonColor: "green",
      background: "antiquewhite",
    });
  };