import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortofolioPage from "./pages/PortofolioPage";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
      </Routes>
    </Router>
  );
}
