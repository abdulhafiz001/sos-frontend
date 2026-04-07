import { useEffect } from 'react';
import { X, ArrowRight, Users, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TELEGRAM_LINK = 'https://t.me/+UO-ZYQzFXopmNjEx';

const TelegramModal = ({ isOpen, onClose }: TelegramModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0A1628]/90 modal-overlay animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-[#0D1E36] border border-[#1E3A5F] rounded-2xl p-6 animate-scale-in shadow-2xl shadow-black/50">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg text-[#64748B] hover:text-white hover:bg-[#1E3A5F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo + Title row */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/images/soslogoimg.jpg"
            alt="Strategic Oil Supply"
            className="w-12 h-12 rounded-xl object-cover shadow-lg flex-shrink-0"
          />
          <div>
            <h3 className="text-lg font-bold text-white">Welcome Aboard!</h3>
            <p className="text-xs text-[#94A3B8]">Join our Telegram community</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-2 mb-5">
          {[
            { icon: Zap, text: 'Early access to platform features' },
            { icon: Users, text: 'Direct access to the founding team' },
            { icon: MessageCircle, text: 'Market insights & updates' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0A1628]/60 border border-[#1E3A5F]/30">
              <item.icon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="text-sm text-[#CBD5E1]">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] font-semibold py-5 text-sm group">
            Join Telegram Community
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>

        <p className="text-[11px] text-[#64748B] text-center mt-3">
          Free to join. No spam, ever.
        </p>
      </div>
    </div>
  );
};

export default TelegramModal;
