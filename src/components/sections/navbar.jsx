"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun, Phone, Mail, MapPin, Copy, Check } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // State pour le Modal
  const [copied, setCopied] = useState(false); // Pour l'effet "Copied"
  const { theme, setTheme } = useTheme();

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/6078ab3cfa1bca879adb93d1_Group_2070-1.svg";
  const arrowUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5ff019fc559a4200eda62273_Vector-2.svg";

  // Fonction pour copier l'email
  const copyEmail = () => {
    navigator.clipboard.writeText("nada.bayoussef01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="w-full bg-transparent z-[1000] relative font-sans">
        <div 
          role="banner" 
          className="block fixed top-0 left-0 right-0 w-full h-[81px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-[1000] border-b border-[#e5e5e5] dark:border-gray-700"
        >
          <div className="container mx-auto h-full flex items-center justify-between px-6 lg:px-10 max-w-[1200px]">
            {/* LOGO */}
            <Link 
              href="/" 
              className="relative block w-[180px] md:w-[203px] h-[28px] shrink-0"
              aria-label="home"
            >
             <Image
                src={logoUrl}
                alt="Logo"
                width={203}
                height={28}
                className="object-contain w-full h-full dark:invert"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav role="navigation" className="hidden md:flex items-center h-full gap-6">
              <Link 
                href="#About" 
                className="text-base text-black dark:text-white font-medium hover:text-[#EC4899] transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="#Services" 
                className="text-base text-black dark:text-white font-medium hover:text-[#EC4899] transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#projects" 
                className="text-base text-black dark:text-white font-medium hover:text-[#EC4899] transition-colors"
              >
                Réalisations
              </Link>

              {/* BOUTON CONTACT (Ouvre le Modal) */}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center group cursor-pointer"
              >
                <div className="flex items-center bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full hover:bg-[#EC4899] dark:hover:bg-[#EC4899] dark:hover:text-white transition-all duration-300">
                  <span className="text-sm font-bold mr-2">
                    Me contacter
                  </span>
                  <div className="flex items-center w-[12px] h-[12px]">
                    <Image 
                      src={arrowUrl} 
                      alt="" 
                      width={12} 
                      height={12}
                      className="block w-full h-full invert dark:invert-0 group-hover:invert-0" 
                    />
                  </div>
                </div>
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </nav>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              
              <div 
                className="p-2 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                   <X className="w-7 h-7 text-[#333] dark:text-white" />
                ) : (
                   <Menu className="w-7 h-7 text-[#333] dark:text-white" />
                )}
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="absolute top-[81px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-[#e5e5e5] dark:border-gray-700 px-6 py-6 flex flex-col gap-4 md:hidden shadow-2xl animate-in slide-in-from-top-5">
              <Link 
                href="#About" 
                className="text-lg text-black dark:text-white font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="#Services" 
                className="text-lg text-black dark:text-white font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#projects" 
                className="text-lg text-black dark:text-white font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réalisations
              </Link>
              <button 
                className="text-lg text-[#EC4899] font-bold py-2 flex items-center gap-2 mt-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                Me contacter
                <Image 
                  src={arrowUrl} 
                  alt="" 
                  width={13} 
                  height={13}
                  className="w-[13px] h-[13px]" 
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- CONTACT MODAL --- */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] p-6 text-white text-center relative">
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-1">Discutons !</h3>
              <p className="text-white/90 text-sm">Prêt à booster votre marketing ?</p>
            </div>

            {/* Body Modal */}
            <div className="p-6 flex flex-col gap-4">
              
              {/* Phone */}
              <a 
                href="tel:+212649117430" 
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Téléphone</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">+212 6 49 11 74 30</p>
                </div>
                <div className="text-gray-400 group-hover:text-green-500">
                  <span className="text-xs font-medium">Appeler</span>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group relative">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white truncate">nada.bayoussef01@gmail.com</p>
                </div>
                <button 
                  onClick={copyEmail}
                  className="p-2 text-gray-400 hover:text-blue-500"
                  title="Copier l'email"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Localisation</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">Casablanca, Maroc</p>
                </div>
              </div>

            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-center">
              <p className="text-xs text-gray-500">Disponible pour Freelance & CDI</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}