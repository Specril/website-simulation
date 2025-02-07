import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Cards from "./pages/Cards";
import Wedding from "./pages/Wedding";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/wedding" element={<Wedding />} />
      </Routes>
    </Router>
  );
};

export default App;
