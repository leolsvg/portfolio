"use client";

import "swiper/css";
import "swiper/css/pagination";
import Card from "./component/card";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <div>
        <p className="text-[120px] pl-[15px] pt-[50px] font-bold">Renouf</p>
        <p className="text-[120px] pl-[15px] pt-1 font-bold">Léo</p>
      </div>

      {/* SECTION ABOUT */}
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 h-screen">
          {/* Colonne gauche - Texte */}
          <div className="flex flex-col justify-center p-12">
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <p className="leading-[35px] text-[16px]">
              Actuellement étudiant en 2ᵉ année de Bachelor of Engineering à
              Supinfo, je suis à la recherche d’une alternance pour mes 3ᵉ, 4ᵉ
              et 5ᵉ années (2025-2028) dans le domaine du développement web et
              des technologies numériques. Je souhaite m’investir sur le long
              terme afin de développer mes compétences, apporter de la valeur à
              l’entreprise et contribuer à des projets ambitieux et innovants.
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
              "C++",
              "PHP",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React",
              "Next.js",
              "Node.js",
              "MySQL",
              "PostgreSQL",
              "Supabase",
              "Docker",
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
              "C++",
              "PHP",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "React",
              "Next.js",
              "MySQL",
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

      {/* SECTION PROJETS – en dernier */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="flex justify-center gap-8">
          <Card
            title="Joséphine"
            rotation={-15}
            image="josephine.png"
            link="projet/josephine"
          />

          <Card
            title="Twodevly"
            rotation={5}
            image="twodevly.png"
            link="https://twodevly.com"
          />

          <Card
            title="Cinélabs"
            rotation={25}
            image="/images/cinelabs.png"
            link="https://github.com/leo/cinelabs"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>

          <div className="relative border-l-4 border-gray-300">
            {/* Expérience 1 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">Freelance</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2025 – en cours
              </span>
              <p className="text-gray-700 leading-relaxed">
                Création du site internet de Joséphine, création de Twodevly
                avec un ami
              </p>
            </div>

            {/* Expérience 2 */}
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

            {/* Expérience 3 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">CDI - McDo</h3>
              <span className="block text-sm text-gray-500 mb-2">
                2024 - en cours
              </span>
              <p className="text-gray-700 leading-relaxed">
                Co-fondateur de Twodevly, micro-entreprise spécialisée dans la
                création de sites internet (vitrine, e-commerce, SEO).
                Réalisation de sites pour des clients locaux (dont le restaurant
                Joséphine).
              </p>
            </div>

            {/* Expérience 4 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-black rounded-full -left-3 top-1"></div>
              <h3 className="text-xl font-semibold">
                CDD - Préparateur de commandes Hopital pasteur
              </h3>
              <span className="block text-sm text-gray-500 mb-2">
                été 2024 et 2025
              </span>
              <p className="text-gray-700 leading-relaxed">
                Bachelor of Engineering, spécialisation en développement web et
                infrastructures. Participation à divers projets : Pasta Scaduta,
                GLPI PoC, LIAL Matrix, etc.
              </p>
            </div>

            {/* Expérience 5 */}
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
    </div>
  );
}
