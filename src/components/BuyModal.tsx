import { useEffect, useState } from 'react';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOKEN_CA = '9LMfcg5BN2DP8QBM6p1jX3bdjh4ttfnjA8og6AVHpump';
const JUPITER_URL = `https://jup.ag/swap/SOL-${TOKEN_CA}`;
const PHANTOM_URL = `https://phantom.app/tokens/solana/${TOKEN_CA}`;

const BuyModal = ({ isOpen, onClose }: BuyModalProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = TOKEN_CA;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#0A1628]/90 animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-[#0D1E36] border border-[#1E3A5F] rounded-2xl p-6 animate-scale-in shadow-2xl shadow-black/50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg text-[#64748B] hover:text-white hover:bg-[#1E3A5F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/images/soslogoimg.jpg"
            alt="SOS Token"
            className="w-12 h-12 rounded-xl object-cover shadow-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-lg font-bold text-white">Buy $SOS Token</h3>
            <p className="text-xs text-[#D4AF37] font-medium">Limited early access — don't miss out</p>
          </div>
        </div>

        <p className="text-sm text-[#94A3B8] mb-5 leading-relaxed">
          Get in before the masses. Select your platform to swap SOL for $SOS now.
        </p>

        {/* Buy options */}
        <div className="space-y-3 mb-5">
          <a
            href={JUPITER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full justify-between bg-[#1E3A5F]/40 hover:bg-[#1E3A5F]/60 border border-[#1E3A5F]/50 hover:border-[#D4AF37]/40 text-white font-semibold py-5 text-sm group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A1628] border border-[#1E3A5F]/40 flex items-center justify-center">
                  <span className="text-lg">🪐</span>
                </div>
                <div className="text-left">
                  <span className="block text-white font-semibold text-sm">Jupiter</span>
                  <span className="block text-[#64748B] text-[11px] font-normal">Swap on Solana's top DEX</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#D4AF37] transition-colors" />
            </Button>
          </a>

          <a
            href={PHANTOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full justify-between bg-[#1E3A5F]/40 hover:bg-[#1E3A5F]/60 border border-[#1E3A5F]/50 hover:border-[#8B5CF6]/40 text-white font-semibold py-5 text-sm group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A1628] border border-[#1E3A5F]/40 flex items-center justify-center">
                  <span className="text-lg">👻</span>
                </div>
                <div className="text-left">
                  <span className="block text-white font-semibold text-sm">Phantom</span>
                  <span className="block text-[#64748B] text-[11px] font-normal">Buy directly in Phantom wallet</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#8B5CF6] transition-colors" />
            </Button>
          </a>
        </div>

        {/* CA display with copy */}
        <button
          onClick={handleCopy}
          className="w-full p-3 rounded-xl bg-[#0A1628]/60 border border-[#1E3A5F]/30 hover:border-[#D4AF37]/30 transition-colors text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-wider text-[#64748B]">Contract Address</span>
            <span className="flex items-center gap-1 text-[10px] text-[#64748B] group-hover:text-[#D4AF37] transition-colors">
              {copied ? (
                <><Check className="w-3 h-3 text-[#10B981]" /><span className="text-[#10B981]">Copied!</span></>
              ) : (
                <><Copy className="w-3 h-3" /><span>Click to copy</span></>
              )}
            </span>
          </div>
          <span className="block text-[11px] text-[#94A3B8] font-mono break-all select-all">{TOKEN_CA}</span>
        </button>
      </div>
    </div>
  );
};

export default BuyModal;
