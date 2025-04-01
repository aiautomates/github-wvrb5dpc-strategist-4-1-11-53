import { Brain, Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [hoverText, setHoverText] = useState('');
  
  const funnyTexts = [
    "Calculating alternate reality...",
    "Searching parallel universes...",
    "Consulting digital oracle...",
    "Debugging space-time continuum...",
    "Reticulating AI splines...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBrainClick = () => {
    setRotation(rotation + 360);
    setScale(0.8);
    setTimeout(() => setScale(1), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Interactive Brain Graphic */}
        <div 
          className="relative mb-12 group cursor-pointer"
          onClick={handleBrainClick}
          style={{
            transform: `rotate(${rotation}deg) scale(${scale})`,
            transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          {/* Decorative Circuit Lines */}
          <div className="absolute inset-0 -m-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent transform -translate-x-1/2" />
          </div>
          
          {/* Pulsing Background */}
          <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 animate-ping" />
          
          {/* Main Brain Icon */}
          <div className="relative">
            <Brain className="w-32 h-32 mx-auto text-blue-600 transform hover:scale-110 transition-transform" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                404
              </div>
            </div>
          </div>

          {/* Rotating Gear Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <RefreshCw 
              className="w-12 h-12 absolute top-0 right-0 text-blue-300 animate-spin"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-6 mb-6 text-blue-500 font-mono">
          {hoverText}
        </div>
        
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Oops! Our AI Had a Brain Freeze
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Even the most advanced AI sometimes needs a moment to reboot! This page seems to have wandered into the digital void, but don't worry - our algorithms are already mapping new neural pathways.
        </p>
        
        <div className="space-y-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
          </Link>
          
          <div className="text-gray-500 text-sm font-mono animate-pulse">
            Error Code: NEURAL_NETWORK_NEEDS_COFFEE_v2.0
          </div>
        </div>
      </div>
    </div>
  );
}