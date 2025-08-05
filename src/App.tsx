import './index.css';
import { Navbar } from "@/components/Navbar";
import FintechLanding from "@/components/FintechLanding";
import Contact from "@/pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialImpact from './pages/SocialImpact';
import Partnership from './pages/Partnership';
import ModeleEconomique from './pages/modele-economique';
import ProblemeSolution from './pages/probleme-solution';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<FintechLanding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modele-economique" element={<ModeleEconomique />} />
            <Route path="/probleme-solution" element={<ProblemeSolution />} />
            <Route path="/impact-social" element={<SocialImpact />} />
            <Route path="/partnership" element={<Partnership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
App