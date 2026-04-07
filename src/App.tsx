import { useState } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import AssetClasses from './sections/AssetClasses';
import Technology from './sections/Technology';
import GlobalNetwork from './sections/GlobalNetwork';
import Tokenomics from './sections/Tokenomics';
import Roadmap from './sections/Roadmap';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import TelegramModal from './components/TelegramModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <AssetClasses onOpenModal={openModal} />
        <Technology />
        <GlobalNetwork />
        <Tokenomics />
        <Roadmap />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer onOpenModal={openModal} />
      <TelegramModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
