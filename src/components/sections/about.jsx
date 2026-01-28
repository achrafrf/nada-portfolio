import React from "react";

export default function AboutSection() {
  return (
    <section id="About" className="bg-background dark:bg-gray-900 py-[80px]">
      <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
        {/* Images Grid - Idealement dir des screens dial Posts Instagram ola Dashboard Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Social Media</div>
             {/* Replace with actual work image */}
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
              alt="Social Media Strategy"
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden bg-gray-100">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Content Creation</div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
              alt="Content Creation & Analytics"
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden bg-gray-100">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Branding</div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
              alt="Branding and Strategy"
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="mb-20">
          <h6 className="text-[14px] font-semibold uppercase tracking-wider text-[#d4a5d9] mb-4">
            À propos de moi
          </h6>
          <h2 className="text-[48px] font-bold text-[#1a1a1a] dark:text-white leading-[1.2] mb-6">
            Polyvalente & Créative
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#666666] dark:text-gray-300 max-w-3xl">
            Je suis une chargée de marketing passionnée par le digital. Avec une expertise en 
            Community Management, Création de contenu (Canva, Photoshop) et analyse de données, 
            j'aide les marques à atteindre leurs objectifs. Mon approche combine créativité visuelle 
            et rigueur analytique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[32px] font-bold text-[#1a1a1a] dark:text-white">
                Formations
              </h3>
            </div>

            <div className="flex flex-col">
              <ResumeItem
                title="Master Spécialisé en Marketing"
                subtitle="ENCG Kénitra"
                date="2022 - 2024"
              />
              <ResumeItem
                title="Licence Pro en Action Commerciale"
                subtitle="Université Hassan II - Casablanca"
                date="2021 - 2022"
              />
              <ResumeItem
                title="DUT en Gestion et Administration"
                subtitle="EST Casablanca"
                date="2019 - 2021"
                isLast
              />
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[32px] font-bold text-[#1a1a1a] dark:text-white">
                Expériences Pro
              </h3>
            </div>

            <div className="flex flex-col">
              <ResumeItem
                title="Community Manager (Freelance)"
                subtitle="Gestion communautés & Création contenu"
                date="Juin 2025 - Jan 2025" // Dates taken from CV literally, adjust if needed
                icon={<SocialIcon />}
                iconBg="bg-[#fce7f3]"
                iconColor="text-[#ec4899]"
              />
              <ResumeItem
                title="Chargée de contenu (Stage)"
                subtitle="Edgy Brain"
                date="Jan 2025 - Mars 2025"
                icon={<PenIcon />}
                iconBg="bg-[#dbeafe]"
                iconColor="text-[#3b82f6]"
              />
              <ResumeItem
                title="Analyste Marketing (Stage PFE)"
                subtitle="Groupe OCP (OTED)"
                date="Mars 2024 - Juin 2024"
                icon={<ChartIcon />}
                iconBg="bg-[#fef9c3]"
                iconColor="text-[#ca8a04]"
              />
               <ResumeItem
                title="Chargée de marketing digital"
                subtitle="PROGIFTS"
                date="Mars 2023 - Mai 2023"
                icon={<SocialIcon />}
                iconBg="bg-[#e0f2fe]"
                iconColor="text-[#0ea5e9]"
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeItem({
  title,
  subtitle,
  date,
  icon,
  iconBg,
  iconColor,
  isLast = false,
}) {
  return (
    <div
      className={`group flex items-start gap-5 py-8 ${
        !isLast ? "border-b border-[#e5e5e5] dark:border-gray-700" : ""
      }`}
    >
      {icon && (
        <div
          className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      )}

      <div className="flex-grow w-full">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] dark:text-white">{title}</h5>
        </div>
        <div className="flex justify-between items-end flex-wrap gap-y-2">
          <span className="text-[14px] text-[#666666] dark:text-gray-400 font-normal">
            {subtitle}
          </span>
          <span className="text-[14px] text-[#1a1a1a] dark:text-gray-200 font-medium text-right">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

// Icons specific to Marketing
function SocialIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );
}

function PenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
  );
}

function ChartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  );
}