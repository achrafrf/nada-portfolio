"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ARROW_ICON = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef58435e05bd67f4a4c972_arrow-down-s-line_201-16.svg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#333333] py-6 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group cursor-pointer text-left bg-transparent p-0 border-none outline-none"
        type="button"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-6 select-none leading-snug">
          {question}
        </h3>
        <div className={`flex-shrink-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <Image 
            src={ARROW_ICON} 
            alt="" 
            width={16} 
            height={16}
            className="w-4 h-4 opacity-100"
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#cccccc] leading-relaxed text-base font-normal">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const leftColumnFAQs = [
    {
      question: "Quels types de services proposez-vous ?",
      answer: "Je propose une gestion complète de votre présence digitale : Community Management, création de contenu (visuels et rédaction), gestion de calendrier éditorial, campagnes Emailing (Brevo) et optimisation SEO."
    },
    {
      question: "Êtes-vous disponible pour des missions freelance ?",
      answer: "Oui, je suis disponible pour des missions en freelance, que ce soit pour une gestion ponctuelle ou un accompagnement mensuel sur le long terme."
    },
    {
      question: "Quels outils maîtrisez-vous ?",
      answer: "J'utilise quotidiennement Canva et Photoshop pour le design, Meta Business Suite pour la gestion des réseaux, Brevo pour l'emailing, et SPSS pour l'analyse de données."
    },
    {
      question: "Comment mesurez-vous le succès d'une campagne ?",
      answer: "Je me base sur des KPI précis : taux d'engagement, portée (reach), clics et conversion. Je fournis des rapports détaillés pour ajuster la stratégie si besoin."
    }
  ];

  const rightColumnFAQs = [
    {
      question: "Pouvez-vous gérer la publicité (Ads) ?",
      answer: "Absolument. Je peux configurer et optimiser vos campagnes publicitaires sur les réseaux sociaux pour maximiser votre retour sur investissement."
    },
    {
      question: "Travaillez-vous à distance ?",
      answer: "Oui, je suis basée à Casablanca mais je travaille efficacement à distance avec des clients de toutes villes, en utilisant des outils collaboratifs."
    },
    {
      question: "Faites-vous du montage vidéo (Reels/TikTok) ?",
      answer: "Oui, la création de contenus engageants type Reels et Stories fait partie intégrante de mes services pour dynamiser votre communauté."
    },
    {
      question: "Comment démarrer une collaboration ?",
      answer: "C'est simple ! Contactez-moi via le formulaire ou par téléphone. Nous discuterons de vos besoins et je vous proposerai une stratégie adaptée."
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-24" id="faq">
      <div className="container mx-auto px-10 max-w-[1200px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <h6 className="text-[#EC4899] text-sm uppercase tracking-[0.05em] font-semibold mb-4 leading-normal">
            FAQ
          </h6>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Questions Fréquentes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-0 gap-x-12 lg:gap-x-16 items-start">
          <div className="flex flex-col w-full">
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={`left-${index}`} {...faq} />
            ))}
          </div>
          <div className="flex flex-col w-full">
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={`right-${index}`} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}