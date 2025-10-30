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
      <div className="relative h-[100dvh]">
        <div className="absolute inset-0 -z-10">
          <VantaBackground />
        </div>

        {/* Menu */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 pr-6 md:pr-24 py-6 text-[#F5F5F5] text-sm md:text-base">
          <p>contacter</p>
          <p>projets</p>
          <p>à propos</p>
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

          {/* Bouton responsive */}
          <div
            className="
        mt-8                 
        md:absolute         
        md:left-[65%]       
        md:top-[75%]         
      "
          >
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
      <div className="relative bg-gray-200 h-auto md:h-screen">
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

          <div className="absolute inset-0 md:hidden">
            <img
              src="me.jpg"
              alt="Léo Renouf"
              className="w-full h-full object-cover opacity-40"
            />
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
      <section className="py-12 bg-gray-100">
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

      {/* SECTION PARCOURS */}
      <section className="bg-gray-100 py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Mon Parcours
          </h2>
          <div className="relative border-l-4 border-gray-300 pl-6">
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold">Freelance</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2025 – en cours
              </span>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                En tant que freelance dans le développement web, j’ai conçu et
                réalisé plusieurs sites vitrines et applications, dont le site
                du restaurant Joséphine et le lancement du projet Twodevly.
                Cette expérience m’a permis de renforcer mes compétences
                techniques (Next.js, Tailwind, bases de données, SEO), mais
                aussi d’apprendre à gérer un projet de bout en bout :
                compréhension des besoins clients, gestion des délais,
                communication et suivi. Elle m’a également donné une solide
                autonomie.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold">
                Bachelor of Engineering - Supinfo
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                2024 - en cours
              </span>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Bachelor of Engineering à Supinfo Caen
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold">CDI - McDo</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2024 - en cours
              </span>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Depuis un an, mon expérience au sein de McDonald’s m’a permis de
                développer des compétences essentielles telles que le travail en
                équipe, la gestion du temps, la rigueur et la résistance au
                stress. J’ai appris à être réactif dans un environnement
                dynamique, à assurer un service de qualité et à maintenir une
                bonne communication avec mes collègues comme avec les clients.
                Ces compétences transversales me servent aujourd’hui dans mes
                projets personnels et professionnels.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold">
                CDD - Préparateur de commandes Hopital Pasteur
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                été 2024 / 2025
              </span>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                En tant que préparateur de commandes à l’Hôpital Pasteur, j’ai
                acquis de solides compétences en organisation, rigueur et
                respect des procédures. Ce poste m’a appris à travailler avec
                précision dans un environnement exigeant, à gérer les priorités
                et à assurer la fiabilité des préparations. J’ai également
                renforcé ma capacité à travailler en équipe.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold">
                Baccalauréat STMG - Lycée Alexis de Tocqueville
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                2022 - 2024
              </span>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Baccalauréat STMG, spécialisation Gestion finance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#1E3A61] text-[#F5F5F5] py-10 px-6 z-10">
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
