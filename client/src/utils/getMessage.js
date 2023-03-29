import Swal from "sweetalert2";

export default function getMessage(values = "", status = "") {
  return Swal.fire({
    text: values,
    icon: status,
  });
}
