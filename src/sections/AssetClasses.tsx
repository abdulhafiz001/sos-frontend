import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Flame, Award, TrendingUp, Building2 } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

interface AssetClassesProps {
  onOpenModal: () => void;
  onOpenBuyModal: () => void;
}

const AssetClasses = ({ onOpenModal, onOpenBuyModal }: AssetClassesProps) => {
  const ref = useReveal();

  const assets = [
    {
      icon: Droplet,
      name: 'WTI Crude Oil',
      symbol: 'OILW',
      ratio: '1 Token = 1 Barrel',
      minimum: '$10,000',
      backing: 'Cushing Reserves',
      accent: '#D4AF37',
    },
    {
      icon: Droplet,
      name: 'Brent Crude',
      symbol: 'OILB',
      ratio: '1 Token = 1 Barrel',
      minimum: '$10,000',
      backing: 'North Sea Certified',
      accent: '#00D4FF',
    },
    {
      icon: Flame,
      name: 'Natural Gas',
      symbol: 'NGT',
      ratio: '1 Token = 1 MMBtu',
      minimum: '$5,000',
      backing: 'Henry Hub Linked',
      accent: '#10B981',
    },
    {
      icon: TrendingUp,
      name: 'Oil Well Royalties',
      symbol: 'ROYL',
      ratio: '8-12% APY',
      minimum: 'Monthly Distributions',
      backing: 'Production Verified',
      accent: '#D4AF37',
    },
    {
      icon: Award,
      name: 'Strategic Reserve Notes',
      symbol: 'SRV',
      ratio: 'Sovereign Grade',
      minimum: 'Institutional Only',
      backing: 'DAO Governance',
      accent: '#8B5CF6',
    },
    {
      icon: Building2,
      name: 'Production Sharing',
      symbol: 'PSCT',
      ratio: 'Variable Yield',
      minimum: '24 Month Lock',
      backing: 'Exploration Rights',
      accent: '#F59E0B',
    },
  ];

  return (
    <section id="assets" ref={ref} className="relative py-20 sm:py-28 bg-[#0A1628]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/oil-assets.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-[#0A1628]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="reveal-item">
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              Investment Options
            </span>
          </div>
          <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Tokenized <span className="text-[#D4AF37]">Asset Classes</span>
          </h2>
          <p className="reveal-item text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto">
            From physical crude to production rights — diverse energy investment opportunities
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="reveal-item group relative overflow-hidden rounded-2xl border border-[#1E3A5F]/40 bg-[#0D1E36]/60 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${asset.accent}10`, border: `1px solid ${asset.accent}15` }}
                  >
                    <asset.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: asset.accent }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                    style={{ backgroundColor: `${asset.accent}12`, color: asset.accent }}
                  >
                    {asset.symbol}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  {asset.name}
                </h3>

                <div className="space-y-2.5 mb-5">
                  {[
                    { label: 'Ratio', value: asset.ratio },
                    { label: 'Minimum', value: asset.minimum },
                    { label: 'Backing', value: asset.backing },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-[#64748B]">{row.label}</span>
                      <span className="text-[#CBD5E1] font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  onClick={onOpenModal}
                  className="w-full justify-between text-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/8 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Now CTA */}
        <div className="reveal-item mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#0D1E36]/80 border border-[#D4AF37]/20 text-center">
          <p className="text-white font-semibold text-lg sm:text-xl mb-1">
            Don't wait — prices won't stay this low
          </p>
          <p className="text-[#94A3B8] text-sm mb-4">
            Early buyers get the best entry. Secure your $SOS tokens now before the next wave.
          </p>
          <Button
            onClick={onOpenBuyModal}
            className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold px-8 py-5 text-base group"
          >
            Buy $SOS Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssetClasses;
