import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t border-[#333333]">
      <div className="w-full max-w-[1200px] mx-auto px-10">
        
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[48px] font-bold leading-[1.2] mb-2 font-display text-white">
            Prêt à booster votre projet ?
          </h2>
          <Link
            href="mailto:nada.bayoussef01@gmail.com"
            className="text-[32px] md:text-[48px] font-bold leading-[1.2] font-display inline-block bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Contactez-moi maintenant.
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-2xl font-bold">NADA BAYOUSSEF</h3>
            
            <div className="flex items-center gap-3">
               <MapPin size={20} className="text-[#666666]" />
               <address className="not-italic text-[#666666] text-[14px] leading-relaxed">
                Casablanca, Maroc
              </address>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center text-white shrink-0">
                <Mail size={16} strokeWidth={2} />
              </div>
              <a
                href="mailto:nada.bayoussef01@gmail.com"
                className="text-[#666666] text-[14px] font-medium hover:text-white transition-colors"
              >
                nada.bayoussef01@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center text-white shrink-0">
                <Phone size={16} strokeWidth={2} />
              </div>
              <a
                href="tel:+212649117430"
                className="text-[#666666] text-[14px] font-medium hover:text-white transition-colors"
              >
                06 49 11 74 30
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col gap-4">
              <FooterLink href="#About">À propos</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
            </div>
            <div className="flex flex-col gap-4">
              <FooterLink href="#Services">Services</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
            </div>
            <div className="flex flex-col gap-4">
              <FooterLink href="#About">Expérience</FooterLink>
              <FooterLink href="#">Certificats</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-0 border-t border-transparent text-[#666666] text-[14px] gap-6">
          <div className="leading-relaxed">
            <span>© {new Date().getFullYear()} Nada Bayoussef. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#EC4899] transition-colors text-[14px] font-normal"
    >
      {children}
    </Link>
  );
}