"use client";

import "swiper/css";
import "swiper/css/pagination";
import VantaBackground from "./component/bg";
import Button from "./component/button";
import Card from "./component/card";

export default function Home() {
  return (
    <div>
      {/* HEADER avec Vanta */}
      <div className="relative h-[100dvh]" id="home">
        <div className="absolute inset-0 -z-10">
          <VantaBackground />
        </div>

        {/* Menu */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 pr-6 md:pr-24 py-6 text-[#F5F5F5] text-sm md:text-base">
          <a href="#contact" className="hover:underline">
            contacter
          </a>
          <a href="#projects" className="hover:underline">
            projets
          </a>
          <a href="#about" className="hover:underline">
            à propos
          </a>
        </div>

        {/* Bloc principal */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pl-6 md:pl-24 pt-20 md:pt-40">
          <div className="text-center md:text-left">
            <p className="text-5xl md:text-[120px] font-bold text-[#F5F5F5] drop-shadow-lg">
              Renouf
            </p>
            <p className="text-5xl md:text-[120px] font-bold text-[#F5F5F5] drop-shadow-lg">
              Léo
            </p>
          </div>

          <div className="mt-8 md:absolute md:left-[65%] md:top-[75%]">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <Button />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION À PROPOS */}
      <div className="relative bg-gray-200 h-auto md:h-screen" id="about">
        <div className="absolute inset-0 block md:hidden">
          <img
            src="me.jpg"
            alt="Léo Renouf"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
          <div className="flex flex-col justify-center p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              À propos de moi
            </h2>
            <p className="leading-7 md:leading-[35px] text-sm md:text-[16px]">
              Actuellement étudiant en 2ᵉ année de Bachelor of Engineering à
              Supinfo, je suis à la recherche d’une alternance pour mes 3
              prochaines années dans le domaine du développement web et des
              technologies numériques. Mon parcours se poursuivra naturellement
              vers un Master, afin de renforcer mes compétences techniques. Je
              souhaite m’investir sur le long terme afin de développer mes
              compétences, apporter de la valeur à l’entreprise et contribuer à
              des projets ambitieux et innovants.
            </p>
          </div>

          <div className="hidden md:block w-full h-screen">
            <img
              src="me.jpg"
              alt="Léo Renouf"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION SKILLS */}
      <section className="bg-white py-6 md:py-10">
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="animate-scroll flex gap-4 md:gap-8">
            {[
              "TypeScript",
              "JavaScript",
              "Python",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React",
              "Next.js",
              "Supabase",
            ].map((item, i) => (
              <span
                key={i}
                className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-gray-100 border text-xs md:text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
            {[
              "TypeScript",
              "JavaScript",
              "Python",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React",
              "Next.js",
              "Supabase",
            ].map((item, i) => (
              <span
                key={`dup-${i}`}
                className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-gray-100 border text-xs md:text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: inline-flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* SECTION PROJETS */}
      <section className="py-12 bg-gray-100" id="projects">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Mes Projets
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          <Card
            title="Joséphine"
            description="site sur-mesure, système de réservation"
            rotation={-15}
            image="josephine.png"
            link="projet/josephine"
          />
          <Card
            title="Twodevly"
            description="site vitrine"
            rotation={5}
            image="twodevly.png"
            link="https://twodevly.com"
          />
          <Card
            title="Cinélabs"
            description="site vitrine, projet de cours"
            rotation={25}
            image="/images/cinelabs.png"
            link="https://github.com/leo/cinelabs"
          />
        </div>
      </section>

      {/* SECTION CONTACT (pied de page) */}
      <footer
        className="relative bg-[#1E3A61] text-[#F5F5F5] py-10 px-6 z-10"
        id="contact"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Me retrouver</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/leolsvg"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/leo-renouf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a href="mailto:leo@example.com" className="hover:text-white">
                Mail
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Renouf Léo. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
