import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenModal: () => void;
}

const Navigation = ({ onOpenModal }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Platform', href: '#features' },
    { name: 'Assets', href: '#assets' },
    { name: 'Technology', href: '#technology' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1E3A5F]/40 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
              <img
                src="/images/soslogoimg.jpg"
                alt="SOS Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm sm:text-lg leading-tight tracking-tight">STRATEGIC</span>
                <span className="text-[#D4AF37] font-semibold text-[10px] sm:text-sm leading-tight">OIL SUPPLY</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={onOpenModal}
                className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold px-6"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2 -mr-2 relative z-[70]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay - outside nav to avoid backdrop-blur stacking context */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Slide-in Menu - outside nav to avoid backdrop-blur stacking context */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] z-[65] transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#0D1E36' }}
      >
        <div className="absolute inset-0 border-l border-[#1E3A5F]/40" style={{ background: '#0D1E36' }} />

        <div className="relative z-10 flex flex-col h-full pt-5 px-6 pb-8">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1E3A5F]/30 border border-[#1E3A5F]/40 text-[#94A3B8] hover:text-white hover:bg-[#1E3A5F]/50 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Logo at top of sidebar */}
          <div className="flex items-center gap-2.5 mb-8 pb-6 border-b border-[#1E3A5F]/30">
            <img
              src="/images/soslogoimg.jpg"
              alt="SOS Logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm leading-tight">STRATEGIC</span>
              <span className="text-[#D4AF37] font-semibold text-[10px] leading-tight">OIL SUPPLY</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-lg text-[#CBD5E1] hover:text-[#D4AF37] hover:bg-[#1E3A5F]/20 transition-all py-3.5 px-4 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 border-t border-[#1E3A5F]/30">
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold py-6 text-base"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
