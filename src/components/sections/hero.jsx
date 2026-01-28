import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full font-sans text-[#1a1a1a] dark:text-white">
      <div className="container mx-auto px-10 max-w-[1200px] pt-[70px] pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 max-w-[715px]">
            <h1 className="text-[48px] md:text-[64px] lg:text-[75px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
                Je booste votre
              </span>
              <br />
              visibilité digitale.
            </h1>

            <p className="mt-8 text-[18px] md:text-[22px] leading-[1.6] text-[#666666] max-w-[540px]">
              Bonjour ! Je suis <span className="font-bold text-black dark:text-white">Nada Bayoussef</span>. 
              Chargée de marketing et Community Manager basée à Casablanca. Je crée des contenus engageants et des stratégies performantes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold text-base overflow-hidden min-w-[160px]"
              >
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[150%]">
                  Discutons de votre projet
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center text-white translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                  Contactez-moi !
                </div>
                <div className="absolute inset-0 bg-[#F97316] translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></div>
              </Link>

             <Link
  href="/cv.pdf"
  download
  className="inline-flex items-center gap-2 text-base font-semibold text-[#1a1a1a] hover:opacity-80 transition-opacity"
>
  <span>Télécharger mon CV</span>
  <div className="w-[13px] h-[13px] relative">
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5ff019fc559a4200eda62273_Vector-2.svg"
      alt=""
      width={13}
      height={13}
      className="object-contain"
    />
  </div>
</Link>

            </div>
          </div>

          <div className="relative w-full max-w-[400px] flex-shrink-0">
            {/* Hna khassek tbedel l'image b tswira dial Nada */}
            <Image
              src="/marketing.jpg" 
              alt="Nada Bayoussef - Marketing Manager"
              width={400}
              height={500}
              quality={90}
              priority
              className="w-full h-auto rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}