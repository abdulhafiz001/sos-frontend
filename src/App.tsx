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
import BuyModal from './components/BuyModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openBuyModal = () => setIsBuyModalOpen(true);
  const closeBuyModal = () => setIsBuyModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation onOpenModal={openModal} onOpenBuyModal={openBuyModal} />
      <main>
        <Hero onOpenModal={openModal} onOpenBuyModal={openBuyModal} />
        <Features />
        <AssetClasses onOpenModal={openModal} onOpenBuyModal={openBuyModal} />
        <Technology />
        <GlobalNetwork />
        <Tokenomics onOpenBuyModal={openBuyModal} />
        <Roadmap />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer onOpenModal={openModal} onOpenBuyModal={openBuyModal} />
      <TelegramModal isOpen={isModalOpen} onClose={closeModal} />
      <BuyModal isOpen={isBuyModalOpen} onClose={closeBuyModal} />
    </div>
  );
}

export default App;
