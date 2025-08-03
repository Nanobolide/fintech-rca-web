import './index.css';
import { Navbar } from "@/components/Navbar";
import FintechLanding from "@/components/FintechLanding";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <FintechLanding />
      </main>
    </div>
  )
}

export default App;