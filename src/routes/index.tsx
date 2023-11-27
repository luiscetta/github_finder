import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Search from "../Pages/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
