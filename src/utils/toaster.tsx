import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  style: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  position: toast.POSITION.TOP_CENTER,
  closeOnClick: true,
};

export function ErrorToast() {
  return toast.error("Error notification", { ...defaultOptions });
}
