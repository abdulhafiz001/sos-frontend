import { Check, Clock, Rocket, Target, TrendingUp, Globe } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Roadmap = () => {
  const ref = useReveal();

  const phases = [
    {
      quarter: 'Q1-Q2 2026',
      title: 'Foundation',
      status: 'upcoming' as const,
      icon: Rocket,
      milestones: [
        'Legal entity setup in Switzerland & Singapore',
        'Smart contract development & audits',
        'Core team hiring & advisory board',
        'Closed beta with select partners',
        'First custody partnerships',
      ],
    },
    {
      quarter: 'Q3-Q4 2026',
      title: 'Platform Launch',
      status: 'upcoming' as const,
      icon: Target,
      milestones: [
        'First asset tokenization (WTI Crude)',
        'Institutional investor onboarding',
        'Exchange partnerships & listings',
        'Public platform launch',
        'Governance token distribution',
      ],
    },
    {
      quarter: '2027',
      title: 'Expansion',
      status: 'planned' as const,
      icon: TrendingUp,
      milestones: [
        'Multi-asset class support',
        'DeFi protocol integrations',
        'Global partnership expansion',
        'Retail investor access',
        'Mobile application launch',
      ],
    },
    {
      quarter: '2028',
      title: 'Global Scale',
      status: 'planned' as const,
      icon: Globe,
      milestones: [
        'Sovereign reserve partnerships',
        'Industry standard protocols',
        'Carbon credit integration',
        'Renewable energy assets',
        'Cross-chain interoperability',
      ],
    },
  ];

  const statusConfig = {
    completed: { icon: Check, color: '#10B981', label: 'Completed' },
    upcoming: { icon: Clock, color: '#00D4FF', label: 'In Progress' },
    planned: { icon: null, color: '#64748B', label: 'Planned' },
  };

  return (
    <section id="roadmap" ref={ref} className="relative py-20 sm:py-28 bg-[#0A1628]">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              Our Journey
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Development <span className="text-[#D4AF37]">Roadmap</span>
          </h2>
          <p className="reveal-item text-base sm:text-lg lg:text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Our strategic path to transform global energy trading
          </p>
        </div>

        {/* Mobile Timeline (vertical left-line) */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1E3A5F]/50" />

          <div className="space-y-6">
            {phases.map((phase, index) => {
              const config = statusConfig[phase.status];
              return (
                <div key={index} className="reveal-item relative pl-14">
                  {/* Timeline node */}
                  <div className="absolute left-[13px] top-6 w-[15px] h-[15px] rounded-full bg-[#D4AF37] border-[3px] border-[#0A1628] z-10" />

                  {/* Card */}
                  <div className="p-5 rounded-2xl bg-[#0D1E36]/80 border border-[#1E3A5F]/40">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="text-[#D4AF37] text-xs font-semibold tracking-wide uppercase">{phase.quarter}</span>
                        <h3 className="text-base font-semibold text-white leading-tight">{phase.title}</h3>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {phase.milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className="flex items-start gap-2 text-[13px] text-[#94A3B8] leading-snug">
                          {config.icon ? (
                            <config.icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: config.color }} />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border flex-shrink-0 mt-0.5" style={{ borderColor: config.color }} />
                          )}
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Timeline (center alternating) */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E3A5F]/50 -translate-x-1/2" />

          <div className="space-y-0">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              const config = statusConfig[phase.status];
              return (
                <div
                  key={index}
                  className={`reveal-item flex items-start mb-16 last:mb-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? 'pr-0' : 'pl-0'}`}>
                    <div className={`p-6 rounded-2xl bg-[#0D1E36]/80 border border-[#1E3A5F]/40 hover:border-[#D4AF37]/20 transition-colors ${isLeft ? 'ml-auto max-w-md' : 'mr-auto max-w-md'}`}>
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'flex-row-reverse text-right' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                          <phase.icon className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <span className="text-[#D4AF37] text-sm font-medium">{phase.quarter}</span>
                          <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {phase.milestones.map((milestone, mIndex) => (
                          <li key={mIndex} className={`flex items-start gap-2.5 text-sm text-[#94A3B8] ${isLeft ? 'flex-row-reverse text-right' : ''}`}>
                            {config.icon ? (
                              <config.icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: config.color }} />
                            ) : (
                              <div className="w-4 h-4 rounded-full border flex-shrink-0 mt-0.5" style={{ borderColor: config.color }} />
                            )}
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-16 flex justify-center pt-6">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] border-4 border-[#0A1628] glow-gold" />
                  </div>

                  <div className="w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="reveal-item mt-10 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0D1E36] border border-[#1E3A5F]/40">
            {Object.values(statusConfig).map((config, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                <div
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                  style={{
                    backgroundColor: config.icon ? config.color : 'transparent',
                    borderColor: config.color,
                    border: config.icon ? 'none' : '1.5px solid',
                  }}
                />
                <span className="text-[10px] sm:text-sm text-[#94A3B8]">{config.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
