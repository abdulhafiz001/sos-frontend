import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

interface CTAProps {
  onOpenModal: () => void;
}

const CTA = ({ onOpenModal }: CTAProps) => {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden bg-[#0D1E36]">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#D4AF37]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#00D4FF]/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="reveal-item">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A5F]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Early Access Available</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="reveal-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Ready to Transform{' '}
          <span className="text-[#D4AF37]">Energy Trading?</span>
        </h2>

        {/* Subheadline */}
        <p className="reveal-item text-lg sm:text-xl text-[#94A3B8] mb-8 sm:mb-10 max-w-2xl mx-auto">
          Join the institutions already building the future of commodity markets.
          Get early access to tokenized energy assets.
        </p>

        {/* Buttons */}
        <div className="reveal-item flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
          <Button
            size="lg"
            onClick={onOpenModal}
            className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold px-8 py-6 text-base sm:text-lg group"
          >
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onOpenModal}
            className="border-[#1E3A5F] text-white hover:bg-[#1E3A5F]/40 px-8 py-6 text-base sm:text-lg"
          >
            <Mail className="mr-2 w-5 h-5" />
            Contact Sales
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="reveal-item flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-[#64748B]">
          {['Regulatory Compliant', 'Institutional Grade', '24/7 Support'].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
