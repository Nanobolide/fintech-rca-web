import React from 'react';
import './index.css';
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import FintechLanding from "@/components/FintechLanding";

const App = () => {
  return (
    <div>
           <Navbar />
         <FintechLanding />;
    </div>
  )
}

export default App