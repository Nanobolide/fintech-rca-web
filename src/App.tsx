import React from 'react';
import './index.css';
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div>
          <h1 className="text-3xl font-bold underline">
               Hello world!<Button>Click toi</Button>
               <div className="flex min-h-svh flex-col items-center justify-center">
             <Button>Click me</Button>
    </div>
      </h1>
    </div>
  )
}

export default App