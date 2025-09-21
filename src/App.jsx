import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/proiecte/:id" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
