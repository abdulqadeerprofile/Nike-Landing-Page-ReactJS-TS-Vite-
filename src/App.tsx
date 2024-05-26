
import React from 'react';
import './App.css';
import Navigation from './Componenets/Navigation';
import HeroSection from './Componenets/Hero';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App;