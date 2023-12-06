import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "../../routes";

export default function Layout() {
  return (
    <>
      <Router>
        <ToastContainer theme="dark"/>
        <AppRoutes />
      </Router>
    </>
  );
}
