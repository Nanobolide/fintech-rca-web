import './index.css';
import { Navbar } from "@/components/Navbar";
import FintechLanding from "@/components/FintechLanding";
import Contact from "@/pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<FintechLanding />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
App