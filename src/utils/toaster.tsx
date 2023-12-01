import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  style: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  position: toast.POSITION.TOP_RIGHT,
  closeOnClick: true,
};

export function ErrorToast() {
  return toast.error("User not found. Try again! 😕", {
    ...defaultOptions,
  });
}

export function SuccessToast() {
  return toast.success("You've found it! 😁", {
    ...defaultOptions,
  });
}
