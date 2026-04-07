import { Layers, Link2, Shield, FileCheck, Cpu, Globe, Lock, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Technology = () => {
  const ref = useReveal();

  const technologies = [
    {
      icon: Layers,
      title: 'Multi-Chain Architecture',
      description: 'Ethereum + Layer 2 scaling. Solana for high-frequency trading. Cross-chain bridges for maximum flexibility.',
    },
    {
      icon: Link2,
      title: 'Chainlink Oracles',
      description: 'Proof of Reserve verification. Real-time price feeds. Tamper-proof data delivery from trusted sources.',
    },
    {
      icon: Shield,
      title: 'Institutional Custody',
      description: 'Cold storage for 95% of assets. $100M+ insurance coverage. SOC 2 Type II certified facilities.',
    },
    {
      icon: Lock,
      title: 'Smart Contract Security',
      description: 'Audited by CertiK, OpenZeppelin, and Trail of Bits. Formal verification. Multi-sig administration.',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Registered in Switzerland and Singapore. KYC/AML integrated. Full audit trails for regulators.',
    },
    {
      icon: Cpu,
      title: 'High-Performance Trading',
      description: 'Sub-second transaction finality. 10,000+ TPS capacity. 99.99% uptime SLA guarantee.',
    },
  ];

  const partners = [
    { name: 'Ethereum', icon: Globe },
    { name: 'Solana', icon: Zap },
    { name: 'Chainlink', icon: Link2 },
    { name: 'CertiK', icon: Shield },
  ];

  const stats = [
    { value: '5+', label: 'Security Audits' },
    { value: '$100M+', label: 'Insurance Coverage' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '10K+', label: 'TPS Capacity' },
  ];

  return (
    <section id="technology" ref={ref} className="relative py-20 sm:py-28 bg-[#0D1E36]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/technology-stack.jpg" alt="" className="w-full h-full object-cover opacity-8" />
        <div className="absolute inset-0 bg-[#0D1E36]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              Infrastructure
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Built for <span className="text-[#D4AF37]">Institutions</span>
          </h2>
          <p className="reveal-item text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Enterprise-grade infrastructure powering the future of energy trading
          </p>
        </div>

        {/* Tech list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="reveal-item group flex gap-4 p-5 sm:p-6 rounded-xl bg-[#0A1628]/50 border border-[#1E3A5F]/30 hover:border-[#D4AF37]/25 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/8 border border-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/15 transition-colors">
                <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {tech.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="reveal-item mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0A1628] border border-[#1E3A5F]/50 rounded-full hover:border-[#D4AF37]/30 transition-colors"
            >
              <partner.icon className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal-item text-center p-5 sm:p-6 rounded-xl bg-[#0A1628]/50 border border-[#1E3A5F]/30"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
