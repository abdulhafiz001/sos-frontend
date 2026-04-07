import { Shield, Globe, PieChart, TrendingUp, FileCheck, Link2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Features = () => {
  const ref = useReveal();

  const features = [
    {
      icon: Shield,
      title: 'Transparent Ownership',
      description: 'Every token is backed 1:1 by verified physical reserves. Real-time audits. Immutable blockchain records.',
      accent: '#D4AF37',
      tag: 'Trust',
    },
    {
      icon: Globe,
      title: 'Global Liquidity',
      description: '24/7 trading across borders. Instant settlement. Deep institutional liquidity pools.',
      accent: '#00D4FF',
      tag: 'Access',
    },
    {
      icon: PieChart,
      title: 'Fractional Access',
      description: 'Invest in energy assets from $100. Democratizing access to commodities previously reserved for institutions.',
      accent: '#10B981',
      tag: 'Inclusive',
    },
    {
      icon: TrendingUp,
      title: 'Automated Yield',
      description: 'Smart contract distributions. Automatic royalty payments. Passive income from energy production.',
      accent: '#D4AF37',
      tag: 'Earn',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliant',
      description: 'Registered securities framework. KYC/AML integrated. Institutional-grade compliance across jurisdictions.',
      accent: '#00D4FF',
      tag: 'Compliant',
    },
    {
      icon: Link2,
      title: 'DeFi Integration',
      description: 'Use energy tokens as collateral. Lending, borrowing, and yield farming with real-world assets.',
      accent: '#8B5CF6',
      tag: 'DeFi',
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-20 sm:py-28 bg-[#0D1E36] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative accent circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D4AF37]/3 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#00D4FF]/3 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse-dot" />
              Platform Features
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Why <span className="text-[#D4AF37]">Tokenized Energy?</span>
          </h2>
          <p className="reveal-item text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Transforming the world's most important commodity market with blockchain technology
          </p>
        </div>

        {/* Featured card - first item gets a larger treatment */}
        <div className="reveal-item mb-5 sm:mb-6">
          <div className="group relative rounded-2xl overflow-hidden border border-[#1E3A5F]/40 hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: features[0].accent }} />
            <div className="p-6 sm:p-8 md:p-10 bg-[#0A1628]/70">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <div className="flex items-center gap-4 md:gap-5 flex-shrink-0">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${features[0].accent}12`, border: `1px solid ${features[0].accent}25` }}
                  >
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: features[0].accent }} />
                  </div>
                  <div className="md:hidden">
                    <span className="text-[10px] uppercase tracking-widest font-semibold mb-1 block" style={{ color: features[0].accent }}>{features[0].tag}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{features[0].title}</h3>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="hidden md:block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: features[0].accent }}>{features[0].tag}</span>
                  <h3 className="hidden md:block text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{features[0].title}</h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">{features[0].description}</p>
                </div>
                <div className="hidden md:flex items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-[#1E3A5F]/40 flex items-center justify-center group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/5 transition-all">
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining feature cards in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className="reveal-item group relative rounded-2xl overflow-hidden border border-[#1E3A5F]/40 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: feature.accent }} />

              <div className="p-5 sm:p-6 bg-[#0A1628]/60 h-full flex flex-col">
                {/* Tag */}
                <span className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: feature.accent }}>{feature.tag}</span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.accent}10`, border: `1px solid ${feature.accent}20` }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: feature.accent }} />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
