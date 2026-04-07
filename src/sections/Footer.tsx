import { Twitter, Github, MessageCircle, Mail, Send } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const TELEGRAM_LINK = 'https://t.me/+UO-ZYQzFXopmNjEx';
const X_LINK = 'https://x.com/strategicoilsup';

const Footer = ({ onOpenModal }: FooterProps) => {
  const footerLinks = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'Asset Classes', href: '#assets' },
      { name: 'Technology', href: '#technology' },
      { name: 'Tokenomics', href: '#tokenomics' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    Company: [
      { name: 'About Us', href: '#', onClick: onOpenModal },
      { name: 'Contact', href: '#', onClick: onOpenModal },
    ],
    Resources: [
      { name: 'Whitepaper', href: '#', onClick: onOpenModal },
      { name: 'Documentation', href: '#', onClick: onOpenModal },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Risk Disclosure', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: X_LINK, label: 'X (Twitter)' },
    { icon: Send, href: TELEGRAM_LINK, label: 'Telegram' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-[#0A1628] border-t border-[#1E3A5F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand - full width on small mobile */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img
                src="/images/soslogoimg.jpg"
                alt="SOS Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-base sm:text-lg leading-tight">STRATEGIC</span>
                <span className="text-[#D4AF37] font-semibold text-xs sm:text-sm leading-tight">OIL SUPPLY</span>
              </div>
            </a>

            <p className="text-sm text-[#94A3B8] mb-5 max-w-xs leading-relaxed">
              The future of energy trading is on-chain. Tokenized commodities,
              institutional security, global liquidity.
            </p>

            {/* Newsletter */}
            <div className="mb-5">
              <p className="text-white font-medium mb-2.5 text-sm">Subscribe to updates</p>
              <div className="flex gap-2 max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-[#0D1E36] border border-[#1E3A5F] text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button className="px-3 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#C4A030] text-[#0A1628] transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#0D1E36] border border-[#1E3A5F]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-3 text-sm">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if ('onClick' in link && link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="text-[#94A3B8] hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-[#1E3A5F]/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#64748B] text-xs sm:text-sm">
            &copy; 2026 Strategic Oil Supply. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[#64748B]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-dot" />
              Platform Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
