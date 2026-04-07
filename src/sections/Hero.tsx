import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '$2.5B+', label: 'Trading Volume', icon: TrendingUp },
    { value: '50+', label: 'Partners', icon: Shield },
    { value: '15+', label: 'Assets', icon: Globe },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero-visual.jpg" alt="" className="w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-[#0A1628]/80" />
      </div>

      {/* Soft ambient light effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-[#00D4FF]/4 rounded-full blur-[100px]" />

      {/* Geometric accents - desktop only */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-[#1E3A5F]/15 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-[#D4AF37]/10 rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Mobile: Logo + content stacked. Desktop: 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
            {/* Mobile logo display */}
            <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 lg:hidden flex justify-center mb-2">
              <img
                src="/images/soslogoimg.jpg"
                alt="Strategic Oil Supply"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-2xl shadow-[#D4AF37]/10"
              />
            </div>

            {/* Badge */}
            <div className="hero-item opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] animate-pulse-dot" />
                Web3 Energy Revolution
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-item opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              The Future of{' '}
              <span className="text-[#D4AF37]">Energy Trading</span>{' '}
              is On-Chain
            </h1>

            {/* Subheadline */}
            <p className="hero-item opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg lg:text-xl text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tokenized oil and energy assets. Institutional-grade security.
              Global liquidity. 24/7 trading on the world's most advanced
              commodity blockchain platform.
            </p>

            {/* CTA Buttons */}
            <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1E3A5F] text-white hover:bg-[#1E3A5F]/40 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#1E3A5F]/30">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                    <stat.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-[10px] sm:text-sm text-[#64748B]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Desktop only */}
          <div className="hero-item opacity-0 translate-y-6 transition-all duration-1000 delay-300 relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer ring */}
              <div className="absolute inset-0 border-2 border-[#1E3A5F]/20 rounded-full animate-spin-slow aspect-square" />

              {/* Middle ring */}
              <div className="absolute inset-10 border border-[#D4AF37]/15 rounded-full animate-spin-slow aspect-square" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Inner ring */}
              <div className="absolute inset-20 border border-[#00D4FF]/10 rounded-full animate-spin-slow aspect-square" style={{ animationDuration: '40s' }} />

              {/* Center logo */}
              <div className="aspect-square flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/images/soslogoimg.jpg"
                    alt="Strategic Oil Supply"
                    className="w-44 h-44 rounded-2xl object-cover shadow-2xl shadow-[#D4AF37]/20 glow-gold"
                  />
                </div>
              </div>

              {/* Floating nodes */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 animate-float">
                <div className="px-3 py-1.5 bg-[#0D1E36] border border-[#1E3A5F] rounded-lg flex items-center gap-2 shadow-lg">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-white text-xs font-medium">Live Trading</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="px-3 py-1.5 bg-[#0D1E36] border border-[#1E3A5F] rounded-lg flex items-center gap-2 shadow-lg">
                  <Globe className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span className="text-white text-xs font-medium">Global</span>
                </div>
              </div>
              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="px-3 py-1.5 bg-[#0D1E36] border border-[#1E3A5F] rounded-lg flex items-center gap-2 shadow-lg">
                  <Shield className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-white text-xs font-medium">Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-visible .hero-item {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Hero;
