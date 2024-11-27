import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Data from "./pages/data";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
