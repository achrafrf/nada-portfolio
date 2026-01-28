"use client";

import React from "react";

// Hna dert les outils li 3andek f CV (Canva, Photoshop, Meta, etc.)
// Kol wa7ed b l'icone dialo SVG bach yb9a dakchi n9i
const tools = [
  {
    name: "Canva Pro",
    category: "Design",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#00C4CC" xmlns="http://www.w3.org/2000/svg"><title>Canva</title><path d="M11.6 16.63c-2.31 1.62-2.35 1.62-5.46-1.55-1.92-1.96-.34-6.32 2.38-6.32 2.57 0 4.11 3.29 4.11 3.29s.21-3.69 2.5-3.69c3.21 0 1.25 5.8 5.75 3.39-.41 3.02-3.69 2.53-3.69 2.53s-.36 3.65-3.59 2.35zm-2.06-5.83c-1.28 0-1.28 2.52-1.28 2.52s.06 2.05 1.22 1.34c1.17-.72.63-3.86.06-3.86zm6.39 1.76c-.95 0-1.63 4.11-1.63 4.11s-.11 1.76 1.13.91c1.23-.85.5-5.02.5-5.02z"/></svg>
    ),
  },
  {
    name: "Photoshop",
    category: "Retouche",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#31A8FF" xmlns="http://www.w3.org/2000/svg"><title>Adobe Photoshop</title><path d="M0 0v24h24V0H0zm19.1 19.5h-4.2v-4.6c0-1.7-.8-2.1-1.6-2.1-.8 0-1.6.5-1.8 1.5v5.1H7.3V6.9h3.7v2c.5-1 1.7-2.3 3.6-2.3 2.9 0 4.5 2 4.5 5.6v7.3zm-9.3-.1H4.2V4.5h5.6c3.4 0 5.1 2 5.1 4.7 0 3-2.2 4.6-5.1 4.6v5.6z"/></svg>
    ),
  },
  {
    name: "Meta Suite",
    category: "Social Media",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#0668E1" xmlns="http://www.w3.org/2000/svg"><title>Meta</title><path d="M16.924 5.568c-.96.004-2.028.452-3.136 1.48L12 8.76l-1.788-1.712C9.104 6.02 8.036 5.572 7.076 5.568c-2.456 0-4.66 1.96-4.964 4.808-.224 2.088.756 4.16 2.604 5.312 1.252.78 2.532.796 3.528.232.848-.48 1.408-1.396 1.94-2.3l1.816-3.084 1.82 3.084c.532.904 1.092 1.82 1.94 2.3 1.004.56 2.276.548 3.528-.232 1.848-1.152 2.828-3.224 2.604-5.312-.304-2.848-2.508-4.808-4.964-4.808ZM7.076 13.916c-.22.008-.68-.072-1.2-.396-1.112-.692-1.7-1.936-1.568-3.18.18-1.704 1.5-2.876 2.968-2.876.424 0 .916.16 1.46.664l2.1 2.016-2.188 3.724c-.476.028-.476.048-1.572.048Zm11.296-.396c-.52.324-.98.404-1.2.396-1.096 0-1.096-.02-1.572-.048l-2.192-3.724 2.104-2.016c.544-.504 1.036-.664 1.46-.664 1.468 0 2.788 1.172 2.968 2.876.132 1.244-.456 2.488-1.568 3.18Z"/></svg>
    ),
  },
  {
    name: "Google Analytics",
    category: "Data",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#E37400" xmlns="http://www.w3.org/2000/svg"><title>Google Analytics</title><path d="M20.5 2h-17C1.57 2 0 3.57 0 5.5v13C0 20.43 1.57 22 3.5 22h17c1.93 0 3.5-1.57 3.5-3.5v-13C24 3.57 22.43 2 20.5 2zM7.5 18H5v-5h2.5v5zm6 0h-2.5v-9h2.5v9zm6 0h-2.5v-13h2.5v13z"/></svg>
    ),
  },
  {
    name: "Brevo",
    category: "Emailing",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#009063" xmlns="http://www.w3.org/2000/svg"><title>Brevo</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.25h-9v-1.5h9v1.5zm0-4.5h-9v-1.5h9v1.5zm0-4.5h-9v-1.5h9v1.5z"/></svg>
    ),
  },
  {
    name: "TikTok",
    category: "Video",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#000000" className="dark:fill-white" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-3.92 1.95-6.07 1.57-2.15-.38-4.04-1.92-4.96-3.93-.92-2.02-.65-4.43.7-6.26C4.46 10.33 6.6 9.27 8.8 9.7v4.02c-.79-.34-1.72-.25-2.42.25-.7.51-1.01 1.4-1.01 2.25 0 1.1.86 2.09 1.96 2.24 1.1.15 2.19-.52 2.62-1.54.43-1.02.34-2.31.34-3.46V.02h2.235z"/></svg>
    ),
  },
  {
    name: "HubSpot",
    category: "CRM",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg"><title>HubSpot</title><path d="M10.8 15.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm0-7.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm10.8 7.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm-5.4 1.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zm-5.4-1.8h2.4V24H10.8v-8.4zm5.4-3.6h2.4V24h-2.4V12zm-8.4 3.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm-1.2-3.6h2.4V24H6.6V12z"/></svg>
    ),
  },
  {
    name: "Office 365",
    category: "Admin",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="#D83B01" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Office</title><path d="M12.35 12.35l-1.3-1.3 1.3-1.3 1.3 1.3-1.3 1.3zm0 5.65l-1.3-1.3 1.3-1.3 1.3 1.3-1.3 1.3zm0-11.3l-1.3-1.3 1.3-1.3 1.3 1.3-1.3 1.3zm5.65 5.65l-1.3-1.3 1.3-1.3 1.3 1.3-1.3 1.3zm-11.3 0l-1.3-1.3 1.3-1.3 1.3 1.3-1.3 1.3zM1 1h9v9H1V1zm13 0h9v9h-9V1zm0 13h9v9h-9v-9zM1 14h9v9H1v-9z"/></svg>
    ),
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-10 max-w-[1200px]">
        
        <div className="text-center mb-12">
          <h6 className="text-sm font-semibold uppercase tracking-[0.05em] text-[#EC4899] mb-3">
            Mes Outils
          </h6>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] dark:text-white">
            Stack Technique & Logiciels
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center gap-3 w-full"
            >
              <div className="w-16 h-16 flex items-center justify-center p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="w-8 h-8 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300">
                   {tool.icon}
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500 group-hover:text-[#1a1a1a] dark:text-gray-400 dark:group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}