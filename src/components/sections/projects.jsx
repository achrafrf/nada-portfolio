"use client";

import React, { useState, useEffect, useRef } from 'react';

// Liste complète basée sur ton screenshot
const ASSETS = {
  projects: [
    // --- SERIE COFFEE ---
    {
      id: 1,
      title: "Morning Brew Strategy",
      category: "Food Photography",
      img: "/projects/COFFEE (1).png", // Assure-toi que les fichiers sont dans public/projects/
      tools: ["Lightroom", "Direction Artistique"]
    },
    {
      id: 2,
      title: "Coffee Shop Vibes",
      category: "Social Media",
      img: "/projects/COFFEE (3).png",
      tools: ["Instagram", "Reels"]
    },
    {
      id: 3,
      title: "Espresso Art",
      category: "Création de Contenu",
      img: "/projects/COFFEE (4).png",
      tools: ["Photography", "Editing"]
    },
    {
      id: 4,
      title: "Dark Roast Branding",
      category: "Branding",
      img: "/projects/COFFEE (9).png",
      tools: ["Photoshop", "Brand Identity"]
    },
    {
      id: 5,
      title: "Coffee Beans Promo",
      category: "Publicité",
      img: "/projects/COFFEE (11).png",
      tools: ["Canva", "Ads"]
    },
    {
      id: 6,
      title: "Café Moodboard",
      category: "Inspiration",
      img: "/projects/COFFEE.png",
      tools: ["Pinterest", "Moodboard"]
    },

    // --- SERIE PIZZA ---
    {
      id: 7,
      title: "Pizza Gusto Campaign",
      category: "Food Marketing",
      img: "/projects/Pizza! (9).png",
      tools: ["Meta Ads", "Copywriting"]
    },
    {
      id: 8,
      title: "Italian Flavor",
      category: "Social Media",
      img: "/projects/Pizza! (10).png",
      tools: ["Photography", "Styling"]
    },
    {
      id: 9,
      title: "Menu Design",
      category: "Print & Web",
      img: "/projects/Pizza! (11).png",
      tools: ["Illustrator", "Menu Design"]
    },

    // --- SERIE IMAGES DIVERSES ---
    {
      id: 10,
      title: "Urban Fashion",
      category: "Mode",
      img: "/projects/4.png",
      tools: ["Direction Artistique"]
    },
    {
      id: 11,
      title: "Lifestyle Shoot",
      category: "Influence",
      img: "/projects/5.png",
      tools: ["Photography"]
    },
    {
      id: 12,
      title: "Minimalist Design",
      category: "Esthétique",
      img: "/projects/6.png",
      tools: ["Photoshop"]
    },
    {
      id: 13,
      title: "Product Launch",
      category: "Marketing",
      img: "/projects/7.png",
      tools: ["Strategy"]
    },
    {
      id: 14,
      title: "Event Coverage",
      category: "Evénementiel",
      img: "/projects/8.png",
      tools: ["Live Storie"]
    },
    {
      id: 15,
      title: "Creative Studio",
      category: "Branding",
      img: "/projects/9.png",
      tools: ["Identity"]
    },
    {
      id: 16,
      title: "Corporate Identity",
      category: "B2B Marketing",
      img: "/projects/im.png",
      tools: ["LinkedIn"]
    },

    // --- SERIE IMAGE GENERIC ---
    {
      id: 17,
      title: "Community Growth",
      category: "Analytics",
      img: "/projects/Image1.png",
      tools: ["Data Analysis"]
    },
    {
      id: 18,
      title: "Viral Content",
      category: "TikTok",
      img: "/projects/Image2.png",
      tools: ["Video Editing"]
    },
    {
      id: 19,
      title: "Digital Strategy",
      category: "Consulting",
      img: "/projects/Image3.png",
      tools: ["Planning"]
    },
    {
      id: 20,
      title: "E-reputation",
      category: "PR",
      img: "/projects/Image4.png",
      tools: ["Monitoring"]
    },
    {
      id: 21,
      title: "Newsletter Design",
      category: "Emailing",
      img: "/projects/Image5.png",
      tools: ["Brevo", "Mailchimp"]
    },
    {
      id: 22,
      title: "Web Banner",
      category: "Web Design",
      img: "/projects/Image6.png",
      tools: ["Figma"]
    },
    {
      id: 23,
      title: "Storytelling",
      category: "Rédaction",
      img: "/projects/Image7.jpg", // Note l'extension .jpg ici
      tools: ["Copywriting"]
    },
    {
      id: 24,
      title: "Audience Target",
      category: "Ads",
      img: "/projects/Image8.png",
      tools: ["Facebook Ads"]
    },
    {
      id: 25,
      title: "Visual Identity",
      category: "Graphisme",
      img: "/projects/Image9.png",
      tools: ["Illustrator"]
    },
    {
      id: 26,
      title: "Engagement Boost",
      category: "Social Media",
      img: "/projects/Image10.png",
      tools: ["Community Mgmt"]
    },
    {
      id: 27,
      title: "Annual Report",
      category: "Corporate",
      img: "/projects/Image12.png",
      tools: ["InDesign"]
    }
  ],
  arrows: {
    left: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584b6f3b7d0fb04e725e_Vector-4-6.svg",
    right: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584a07453d08e05572b5_Vector-3-7.svg",
  }
};

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // Pour arrêter le slide quand on survole
  const containerRef = useRef(null);

  // Gestion du responsive (Nombre de slides visibles)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = ASSETS.projects.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // AUTO SLIDE (Chaque 3 secondes)
  useEffect(() => {
    let interval;
    if (!isPaused && !selectedImage) { // Ne pas slider si une image est ouverte ou si la souris est dessus
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, selectedImage, maxIndex]);

  return (
    <section id="projects" className="bg-background dark:bg-gray-900 py-20 lg:py-24 font-sans overflow-hidden">
      
      {/* HEADER */}
      <div className="container mx-auto px-5 lg:px-10 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0">
          <div className="max-w-2xl">
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
              PORTFOLIO
            </h6>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#1a1a1a] dark:text-white">
              Galerie de projets.
            </h2>
          </div>
          
          {/* Boutons de navigation manuelle */}
          <div className="hidden lg:flex gap-4">
             <button 
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center border border-[#e5e5e5] dark:border-gray-600 rounded-full hover:border-[#1a1a1a] dark:hover:border-white bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <img src={ASSETS.arrows.left} alt="Previous" className="w-4 h-4 group-hover:invert transition-all"/>
            </button>
            <button 
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center border border-[#e5e5e5] dark:border-gray-600 rounded-full hover:border-[#1a1a1a] dark:hover:border-white bg-white dark:bg-gray-800 transition-colors duration-300"
            >
               <img src={ASSETS.arrows.right} alt="Next" className="w-4 h-4 group-hover:invert transition-all"/>
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER CONTAINER */}
      <div 
        className="container mx-auto px-5 lg:px-10 relative"
        onMouseEnter={() => setIsPaused(true)} // Arrêter le slide au survol
        onMouseLeave={() => setIsPaused(false)} // Reprendre le slide
      >
        <div className="overflow-hidden" ref={containerRef}>
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
          >
            {ASSETS.projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0 px-3 box-border"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div 
                  className="group block bg-white dark:bg-gray-800 h-full cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  onClick={() => setSelectedImage(project)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full h-[350px]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10" />
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Icone Zoom au survol */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </div>
                  </div>
                  
                  {/* Info sous l'image */}
                  <div className="p-5 flex flex-col">
                    <h6 className="text-xs font-bold uppercase tracking-wider text-[#EC4899] mb-1">
                      {project.category}
                    </h6>
                    <h5 className="text-lg font-bold text-[#1a1a1a] dark:text-white mb-2">
                      {project.title}
                    </h5>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL / LIGHTBOX CORRIGÉE --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 lg:p-10"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton Fermer (X) - Fixé en haut à droite, gros et visible */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 z-[10000] text-white/80 hover:text-white bg-black/50 hover:bg-[#EC4899] rounded-full p-2 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Conteneur de l'image centrée */}
          <div 
            className="relative w-full max-w-6xl flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title}
              className="w-auto h-auto max-h-[85vh] max-w-full rounded-md shadow-2xl object-contain"
            />

            {/* Légende en bas de l'image */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-[#EC4899] font-medium">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}