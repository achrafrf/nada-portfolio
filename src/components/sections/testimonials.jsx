"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Grâce à la stratégie digitale mise en place par Nada, notre taux d'engagement sur Instagram a triplé en seulement deux mois. Une créativité débordante et un professionnalisme rare !",
    name: "Karim Tazi",
    title: "Fondateur, BioMarket Maroc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Les visuels pour notre nouvelle carte 'Gusto Coffee' sont magnifiques. Nada a su capturer l'essence de notre marque. Les clients adorent la nouvelle direction artistique !",
    name: "Sofia Bennani",
    title: "Gérante, Gusto Coffee",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "J'ai apprécié la rigueur de l'analyse des données. Les rapports mensuels sont clairs et nous ont permis d'optimiser notre budget publicitaire Facebook Ads efficacement.",
    name: "Mehdi El Fassi",
    title: "Directeur Marketing, TechSolutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-background dark:bg-gray-900 py-20 lg:py-32 w-full font-sans">
      <div className="container mx-auto px-6 md:px-10 max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h6 className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#EC4899] mb-4">
            Témoignages
          </h6>
          <h2 className="text-4xl md:text-[48px] font-bold leading-[1.2] text-[#1a1a1a] dark:text-white">
            Ce que disent <br /> mes clients.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:h-[500px] lg:w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-xl">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            {/* Petit badge deco */}
            <div className="absolute bottom-0 left-0 bg-white dark:bg-black px-6 py-4 rounded-tr-xl">
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (
                   <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F97316" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                 ))}
               </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-6 lg:mb-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#EC4899] w-10 h-10 md:w-12 md:h-12 opacity-80"
              >
                <path 
                   d="M9.12 6.4C6.336 8.704 4.56 12.064 4.08 16.48H9.6V25.6H0V16C0 10.72 2.784 6.208 7.392 3.2L9.12 6.4ZM24.48 6.4C21.696 8.704 19.92 12.064 19.44 16.48H24.96V25.6H15.36V16C15.36 10.72 18.144 6.208 22.752 3.2L24.48 6.4Z" 
                   fill="currentColor" 
                />
              </svg>
            </div>

            <div className="mb-10 lg:mb-12 min-h-[160px] flex items-center">
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[1.4] md:leading-[1.5] text-[#1a1a1a] dark:text-white italic">
                "{currentTestimonial.quote}"
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0 mt-auto">
              <div className="flex flex-col">
                <h5 className="text-[18px] font-bold text-[#1a1a1a] dark:text-white mb-1">
                  {currentTestimonial.name}
                </h5>
                <span className="text-[14px] text-[#666666] dark:text-gray-400 font-medium tracking-wide">
                  {currentTestimonial.title}
                </span>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-0">
                <button
                  onClick={handlePrev}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black dark:bg-white border-r border-white/10 hover:bg-[#F97316] hover:border-[#F97316] text-white dark:text-black hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black dark:bg-white hover:bg-[#F97316] text-white dark:text-black hover:text-white transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}