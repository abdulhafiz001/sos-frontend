import { useEffect, useRef, useState } from 'react';
import { Building2, Shield, Landmark, Network, MapPin } from 'lucide-react';

const GlobalNetwork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ countries: 0, partners: 0, volume: 0, uptime: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            let step = 0;
            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts({
                countries: Math.floor(15 * ease),
                partners: Math.floor(50 * ease),
                volume: Math.floor(2.5 * ease * 10) / 10,
                uptime: Math.floor(99.99 * ease * 100) / 100,
              });

              if (step >= steps) clearInterval(timer);
            }, interval);

            const items = entry.target.querySelectorAll('.reveal-item');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('visible'), index * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { value: counts.countries, suffix: '+', label: 'Countries', icon: Network, color: '#D4AF37' },
    { value: counts.partners, suffix: '+', label: 'Partners', icon: Building2, color: '#00D4FF' },
    { value: counts.volume, suffix: 'B', prefix: '$', label: 'Volume', icon: Landmark, color: '#10B981' },
    { value: counts.uptime, suffix: '%', label: 'Uptime', icon: Shield, color: '#8B5CF6' },
  ];

  const partnerCategories = [
    { title: 'Custodians', partners: ["Brink's", 'Malca-Amit', "Lloyd's Vault"], color: '#D4AF37' },
    { title: 'Auditors', partners: ['Deloitte', 'PwC', 'EY', 'KPMG'], color: '#00D4FF' },
    { title: 'Exchanges', partners: ['Coinbase', 'Kraken', 'Binance', 'Gemini'], color: '#10B981' },
    { title: 'Infrastructure', partners: ['Chainlink', 'Ethereum', 'Solana', 'Arbitrum'], color: '#8B5CF6' },
  ];

  const tradingHubs = ['Houston', 'London', 'Singapore', 'Dubai', 'Tokyo', 'Geneva', 'New York'];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-[#0A1628] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/global-network.jpg" alt="" className="w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-[#0A1628]/85" />
      </div>
      <div className="absolute top-0 -left-32 w-80 h-80 bg-[#D4AF37]/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-[#00D4FF]/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse-dot" />
              Global Presence
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Global <span className="text-[#D4AF37]">Energy Network</span>
          </h2>
          <p className="reveal-item text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Connecting producers, traders, and investors worldwide through blockchain infrastructure
          </p>
        </div>

        {/* Stats Row - clean horizontal strip */}
        <div className="reveal-item rounded-2xl border border-[#1E3A5F]/30 bg-[#0D1E36]/60 p-4 sm:p-6 mb-10 sm:mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-[#1E3A5F]/30">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center sm:px-4 md:px-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3"
                  style={{ backgroundColor: `${stat.color}10`, border: `1px solid ${stat.color}20` }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
                  {stat.prefix || ''}{stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-[#94A3B8] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-10 sm:mb-14">
          <div className="reveal-item flex items-center gap-3 justify-center mb-6 sm:mb-8">
            <div className="h-px flex-1 max-w-[60px] bg-[#1E3A5F]/40" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Trusted Partners</h3>
            <div className="h-px flex-1 max-w-[60px] bg-[#1E3A5F]/40" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="reveal-item group rounded-2xl overflow-hidden border border-[#1E3A5F]/30 hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                {/* Category header */}
                <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-[#1E3A5F]/20 bg-[#0D1E36]/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
                    <h4 className="text-sm sm:text-base font-semibold text-white">{category.title}</h4>
                  </div>
                </div>
                {/* Partner list */}
                <div className="p-3 sm:p-4 bg-[#0A1628]/40 space-y-1">
                  {category.partners.map((partner, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#CBD5E1] hover:bg-[#1E3A5F]/15 hover:text-[#D4AF37] transition-colors cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F]/60" />
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Hubs */}
        <div className="reveal-item">
          <div className="flex items-center gap-3 justify-center mb-5 sm:mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-[#1E3A5F]/40" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Trading Hubs</h3>
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-[#1E3A5F]/40" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {tradingHubs.map((city, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 px-4 py-2.5 bg-[#0D1E36]/60 border border-[#1E3A5F]/30 rounded-full hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all duration-200 cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse-dot" />
                <span className="text-sm text-[#CBD5E1] group-hover:text-[#D4AF37] transition-colors font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
