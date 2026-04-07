import { TrendingUp, Vote, Wallet, Lock, Star, ArrowRightLeft, ShoppingCart, Send, Coins, Flame } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Tokenomics = () => {
  const ref = useReveal();

  const utilities = [
    { icon: TrendingUp, title: 'Fee Discounts', description: '25-50% reduction on trading fees when using native token' },
    { icon: Vote, title: 'Governance Rights', description: 'Vote on protocol upgrades, asset listings, and treasury decisions' },
    { icon: Wallet, title: 'Staking Rewards', description: 'Earn share of platform fees by staking tokens' },
    { icon: Lock, title: 'Trading Collateral', description: 'Use as margin for leveraged trading positions' },
    { icon: Star, title: 'Premium Access', description: 'Early access to new asset classes and features' },
  ];

  const distribution = [
    { label: 'Public Sale', percentage: 20, color: '#D4AF37' },
    { label: 'Private Sale', percentage: 25, color: '#00D4FF' },
    { label: 'Team & Advisors', percentage: 15, color: '#10B981' },
    { label: 'Ecosystem', percentage: 20, color: '#8B5CF6' },
    { label: 'Treasury', percentage: 15, color: '#F59E0B' },
    { label: 'Liquidity', percentage: 5, color: '#EC4899' },
  ];

  const feeStructure = [
    { type: 'Token Purchase', fee: '0.5%', burn: '25%', icon: ShoppingCart, color: '#D4AF37', description: 'Buy tokens at competitive rates' },
    { type: 'Token Sale', fee: '0.5%', burn: '25%', icon: Coins, color: '#00D4FF', description: 'Sell with minimal slippage' },
    { type: 'Transfer', fee: '0.1%', burn: '50%', icon: Send, color: '#10B981', description: 'P2P transfers near-zero cost' },
    { type: 'Staking', fee: 'Free', burn: '—', icon: ArrowRightLeft, color: '#8B5CF6', description: 'Stake with zero fees' },
  ];

  return (
    <section id="tokenomics" ref={ref} className="relative py-20 sm:py-28 bg-[#0D1E36] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 -right-32 w-80 h-80 bg-[#D4AF37]/4 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-[#00D4FF]/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse-dot" />
              Token Economy
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Platform <span className="text-[#D4AF37]">Tokenomics</span>
          </h2>
          <p className="reveal-item text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Native utility token powering the Strategic Oil Supply ecosystem
          </p>
        </div>

        {/* Main content - Distribution & Utilities in a boxed card */}
        <div className="reveal-item rounded-2xl border border-[#1E3A5F]/30 bg-[#0A1628]/50 p-5 sm:p-8 md:p-10 mb-10 sm:mb-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Distribution Chart */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-[#D4AF37]" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Token Distribution</h3>
              </div>

              {/* Donut Chart */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-8">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {distribution.reduce((acc, item, index) => {
                    const prevOffset = acc.offset;
                    const dashArray = `${item.percentage} ${100 - item.percentage}`;
                    const circle = (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="10"
                        strokeDasharray={dashArray}
                        strokeDashoffset={-prevOffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    );
                    return { offset: prevOffset + item.percentage, elements: [...acc.elements, circle] };
                  }, { offset: 0, elements: [] as React.ReactElement[] }).elements}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/soslogoimg.jpg"
                    alt="SOS Token"
                    className="w-14 h-14 sm:w-18 sm:h-18 rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
                {distribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 py-1">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-[#94A3B8]">{item.label}</span>
                    <span className="text-sm text-white font-semibold">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utilities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-[#00D4FF]" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Token Utilities</h3>
              </div>
              <div className="space-y-3">
                {utilities.map((utility, index) => (
                  <div
                    key={index}
                    className="reveal-item group flex gap-4 p-4 rounded-xl bg-[#0D1E36]/80 border border-[#1E3A5F]/20 hover:border-[#D4AF37]/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/8 border border-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <utility.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5 group-hover:text-[#D4AF37] transition-colors">{utility.title}</h4>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">{utility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div>
          <div className="text-center mb-8 sm:mb-10">
            <div className="reveal-item">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/20 border border-[#D4AF37]/15 mb-4">
                <Flame className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm text-[#D4AF37] font-medium">Deflationary Model</span>
              </div>
            </div>
            <h3 className="reveal-item text-2xl sm:text-3xl font-bold text-white mb-3">
              Transaction Fee <span className="text-[#D4AF37]">Structure</span>
            </h3>
            <p className="reveal-item text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto">
              Industry-leading low fees with built-in burn mechanism to reduce supply over time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {feeStructure.map((row, index) => (
              <div
                key={index}
                className="reveal-item group relative p-4 sm:p-6 rounded-2xl bg-[#0A1628]/60 border border-[#1E3A5F]/30 hover:border-opacity-60 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: row.color }} />

                {/* Icon */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${row.color}10`, border: `1px solid ${row.color}20` }}
                >
                  <row.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: row.color }} />
                </div>

                {/* Type */}
                <h4 className="text-white font-semibold text-sm sm:text-lg mb-0.5 sm:mb-1">{row.type}</h4>
                <p className="text-[#64748B] text-xs sm:text-sm mb-4 hidden sm:block">{row.description}</p>

                {/* Fee & Burn */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#0D1E36] border border-[#1E3A5F]/20">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#64748B] mb-0.5">Fee</span>
                    <span className="text-base sm:text-xl font-bold" style={{ color: row.color }}>{row.fee}</span>
                  </div>
                  <div className="flex-1 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#0D1E36] border border-[#1E3A5F]/20">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#64748B] mb-0.5">Burn</span>
                    <span className="text-base sm:text-xl font-bold text-white">{row.burn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary bar */}
          <div className="reveal-item mt-5 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-[#0A1628]/40 border border-[#1E3A5F]/20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#94A3B8]">Burned tokens are <span className="text-white font-medium">permanently removed</span> from supply</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#1E3A5F]/40" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm text-[#94A3B8]">Increasing scarcity <span className="text-[#10B981] font-medium">drives value</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
