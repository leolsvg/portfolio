"use client";

import "swiper/css";
import "swiper/css/pagination";
import VantaBackground from "./component/bg";
import Button from "./component/button";
import Card from "./component/card";

export default function Home() {
  return (
    <div>
      {/* HEADER avec Vanta derrière */}
      {/* Fond animé */}
      <div className="absolute inset-0 -z-10 h-full w-full ">
        <VantaBackground />
      </div>

      {/* Menu en haut à droite */}
      <div className="flex justify-end gap-8 pr-24 py-6 text-[#F5F5F5]">
        <p>contacter</p>
        <p>projets</p>
        <p>à propos</p>
      </div>

      {/* Bloc principal avec le nom et le bouton */}
      <div className="flex items-center gap-12 pl-24 pt-40">
        {/* Texte */}
        <div>
          <p className="text-[120px] font-bold text-[#F5F5F5] drop-shadow-lg">
            Renouf
          </p>
          <p className="text-[120px] font-bold text-[#F5F5F5] drop-shadow-lg">
            Léo
          </p>
        </div>

        {/* Bouton */}
        <div className="pl-90">
          <Button></Button>
        </div>
      </div>

      {/* SECTION ABOUT */}
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 h-screen">
          {/* Colonne gauche - Texte */}
          <div className="flex flex-col justify-center p-12">
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <p className="leading-[35px] text-[16px]">
              Actuellement étudiant en 2ᵉ année de Bachelor of Engineering à
              Supinfo, je suis à la recherche d’une alternance pour mes 3
              prochaines années dans le domaine du développement web et des
              technologies numériques. Mon parcours se poursuivra naturellement
              vers un Master, afin de renforcer mes compétences technique. Je
              souhaite m’investir sur le long terme afin de développer mes
              compétences, apporter de la valeur à l’entreprise et contribuer à
              des projets ambitieux et innovants.
            </p>
          </div>

          {/* Colonne droite - Image */}
          <div className="w-full h-screen">
            <img
              src="me.jpg"
              alt="Léo Renouf"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION LANGUAGES – Infinite Scroll */}
      <section className="bg-white py-10">
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="animate-scroll flex gap-8">
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
                className="inline-block px-6 py-3 rounded-full bg-gray-100 border text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
            {/* duplication */}
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
                className="inline-block px-6 py-3 rounded-full bg-gray-100 border text-sm font-medium shadow-sm"
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
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="flex justify-center gap-8">
          <Card
            title="Joséphine"
            description="site sur-mesure, système de reservation, "
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
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>

          <div className="relative border-l-4 border-gray-300">
            {/* Expériences */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">Freelance</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2025 – en cours
              </span>
              <p className="text-gray-700 leading-relaxed">
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

            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">
                Bachelor of Engineering - Supinfo
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                2024 - en cours
              </span>
              <p className="text-gray-700 leading-relaxed">
                Bachelor of Engineering à Supinfo Caen
              </p>
            </div>

            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">CDI - McDo</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2024 - en cours
              </span>
              <p className="text-gray-700 leading-relaxed">
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

            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">
                CDD - Préparateur de commandes Hopital pasteur
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                été 2024 /2025
              </span>
              <p className="text-gray-700 leading-relaxed">
                En tant que préparateur de commandes à l’Hôpital Pasteur, j’ai
                acquis de solides compétences en organisation, rigueur et
                respect des procédures. Ce poste m’a appris à travailler avec
                précision dans un environnement exigeant, à gérer les priorités
                et à assurer la fiabilité des préparations. J’ai également
                renforcé ma capacité à travailler en équipe.
              </p>
            </div>

            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">
                Baccalauréat STMG - Lycée Alexis de Tocqueville
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                2022 - 2024
              </span>
              <p className="text-gray-700 leading-relaxed">
                Baccalauréat STMG, spécialisation Gestion finance
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION CONTACT */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Me Contacter</h2>
          <p className="text-gray-700 mb-8">
            Vous souhaitez discuter d’un projet, d’une collaboration ou
            simplement échanger ? N’hésitez pas à m’envoyer un message !
          </p>

          {/* Formulaire */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Votre message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-[#1E3A61] text-[#F5F5F5] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 2 : Navigation */}
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

          {/* Colonne 3 : Réseaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Me retrouver</h4>
            <div className="flex gap-4">
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

        {/* Bas du footer */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Renouf Léo. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
