import React from 'react';
import { Construction } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1600"
            alt="Construction site with sunset"
            className="w-full h-64 object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <Construction className="w-12 h-12 text-yellow-400 mr-3" />
          <h1 className="text-4xl font-bold text-white">We're Preparing Our Website</h1>
        </div>
        
        <p className="text-gray-300 text-lg">
          Something amazing is in the works. We'll be back soon with a brand new experience.
        </p>
      </div>
    </div>
  );
}

export default App;