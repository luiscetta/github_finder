import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "../../routes";

export default function Layout() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}
