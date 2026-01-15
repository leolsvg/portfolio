"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

// Card Component avec animations
interface CardProps {
  title: string;
  description: string;
  rotation: number;
  image: string;
  link: string;
}

function Card({ title, description, rotation, image, link }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block relative w-72 h-96 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white"
        style={{ rotate: rotation }}
        whileHover={{
          rotate: 0,
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="relative w-full h-full">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-white/90 text-sm"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="bg-[#FBF8F5] text-[#1C1C1C] relative overflow-hidden">
      {/* Wireframe décoratif - Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#C07B60"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* HEADER */}
      <div className="relative min-h-screen">
        {/* Menu avec wireframe */}
        <motion.div
          className="relative flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 pr-6 md:pr-24 py-8 text-[#1C1C1C] text-sm md:text-base uppercase font-medium"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ligne décorative wireframe */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C07B60]/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {[
            { label: "à propos", id: "apropos" },
            { label: "projets", id: "projets" },
            { label: "parcours", id: "parcours" },
          ].map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-[#C07B60] transition relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C07B60] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 py-20 relative">
          {/* Éléments wireframe décoratifs */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-[#C07B60]/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#C07B60]/20"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Bloc texte */}
          <div className="flex-1 max-w-xl space-y-6 relative z-10">
            <motion.p
              className="text-lg text-gray-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Léo Renouf
              {/* Ligne wireframe sous le nom */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#C07B60] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-[#C07B60]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Etudiant en Bachelor of Engineering à Supinfo Caen.
            </motion.h2>

            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              En quête d’une alternance pour septembre 2026, je suis motivé à
              découvrir de nouveaux environnements, apprendre chaque jour et
              participer activement à la réussite d’une équipe.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="cv.pdf"
                className="bg-[#C07B60] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b36e55] transition flex items-center gap-2 relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(192, 123, 96, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Télécharger mon CV <i className="fa-solid fa-download"></i>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-6 pt-6 text-2xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                {
                  icon: "fa-brands fa-github",
                  link: "https://github.com/leolsvg",
                },
                {
                  icon: "fa-brands fa-linkedin",
                  link: "https://linkedin.com/in/leo-renouf",
                },
                {
                  icon: "fa-regular fa-envelope",
                  link: "mailto:leo@example.com",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C07B60] transition relative"
                  whileHover={{ y: -5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <i className={social.icon}></i>
                  {/* Cercle wireframe au hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#C07B60]/30 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image ronde avec wireframe */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Cercles wireframe décoratifs */}
            <motion.div
              className="absolute inset-0 border-2 border-[#C07B60]/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-[#C07B60]/20 rounded-full"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_-10px_rgba(192,123,96,0.4)] z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="me.jpg"
                alt="Léo Renouf"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full bg-[#C07B60]/20 blur-3xl scale-110"
              animate={{
                scale: [1.1, 1.2, 1.1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </section>
      </div>

      {/* SECTION À PROPOS */}
      <section
        id="apropos"
        className="bg-[#FBF8F5] text-center py-24 px-6 md:px-0 flex flex-col items-center justify-center relative"
      >
        {/* Lignes wireframe décoratives */}
        <motion.div
          className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-[#C07B60]/20 via-[#C07B60]/5 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-[#C07B60]/20 via-[#C07B60]/5 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1C1C1C] relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            À propos de moi
            {/* Soulignement wireframe */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C07B60]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Actuellement étudiant en 2ᵉ année de Bachelor of Engineering à
            Supinfo, je suis à la recherche d&apos;une alternance pour mes 3
            prochaines années dans le domaine du développement web et des
            technologies numériques. Mon parcours se poursuivra naturellement
            vers un Master, afin de renforcer mes compétences techniques. Je
            souhaite m&apos;investir sur le long terme afin de développer mes
            compétences, apporter de la valeur à l&apos;entreprise et contribuer
            à des projets ambitieux et innovants.
          </motion.p>
        </div>
      </section>

      {/* SECTION SKILLS */}
      <section className="bg-[#F7F4F2] py-6 md:py-10 border-y border-[#E8E3DF] relative overflow-hidden">
        {/* Grille wireframe en fond */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="skills-grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="15" cy="15" r="1" fill="#C07B60" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#skills-grid)" />
          </svg>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative">
          <motion.div
            className="flex gap-4 md:gap-8"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, setIndex) =>
              [
                "TypeScript",
                "JavaScript",
                "Python",
                "Java",
                "Spring Boot",
                "SQL",
                "Github",
                "Tailwind CSS",
                "React",
                "Next.js",
                "Supabase",
              ].map((item, i) => (
                <motion.span
                  key={`${setIndex}-${i}`}
                  className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-white border-2 border-[#E8E3DF] text-xs md:text-sm font-medium text-gray-700 shadow-sm relative"
                >
                  {item}
                </motion.span>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-16 bg-[#FBF8F5] relative">
        {/* Points wireframe décoratifs */}
        <motion.div
          className="absolute top-10 right-10 w-3 h-3 bg-[#C07B60]/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-3 h-3 bg-[#C07B60]/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5,
          }}
        />

        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#1C1C1C] relative inline-block left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C07B60] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
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
        </div>
      </section>

      {/* SECTION PARCOURS */}
      <section
        id="parcours"
        className="bg-[#F7F4F2] py-20 px-4 md:px-0 border-t border-[#E8E3DF] relative overflow-hidden"
      >
        {/* Lignes wireframe décoratives */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C07B60]/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-5xl mx-auto relative">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#1C1C1C]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mon Parcours
          </motion.h2>
          <div className="relative border-l-4 border-[#C07B60] pl-6">
            {[
              {
                title: "Freelance",
                date: "2025 – en cours",
                text: "En tant que freelance dans le développement web, j'ai conçu et réalisé plusieurs sites vitrines et applications, dont le site du restaurant Joséphine et le lancement du projet Twodevly...",
              },
              {
                title: "Bachelor of Engineering - Supinfo",
                date: "2024 - en cours",
                text: "Bachelor of Engineering à Supinfo Caen.",
              },
              {
                title: "CDI - McDo",
                date: "2024 - en cours",
                text: "Depuis un an, mon expérience au sein de McDonald's m'a permis de développer des compétences essentielles telles que le travail en équipe, la rigueur et la gestion du temps...",
              },
              {
                title: "CDD - Préparateur de commandes Hopital Pasteur",
                date: "Été 2024 / 2025",
                text: "En tant que préparateur de commandes à l'Hôpital Pasteur, j'ai acquis de solides compétences en organisation, rigueur et respect des procédures.",
              },
              {
                title: "Baccalauréat STMG - Lycée Alexis de Tocqueville",
                date: "2022 - 2024",
                text: "Baccalauréat STMG, spécialisation Gestion finance.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Point de la timeline avec effet */}
                <motion.div
                  className="absolute left-[-33px] w-4 h-4 bg-[#C07B60] rounded-full border-4 border-[#F7F4F2]"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
                {/* Ligne connectrice wireframe */}
                {i < 4 && (
                  <motion.div
                    className="absolute left-[-27px] top-8 w-[2px] h-full bg-gradient-to-b from-[#C07B60]/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  />
                )}

                <motion.h3
                  className="text-lg md:text-xl font-semibold text-[#C07B60]"
                  whileHover={{ x: 5 }}
                >
                  {exp.title}
                </motion.h3>
                <span className="block text-sm text-gray-500 mb-2">
                  {exp.date}
                </span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {exp.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FBF8F5] text-[#1C1C1C] py-16 px-8 border-t border-[#E8E3DF] relative">
        {/* Grille wireframe en fond */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="footer-grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="#C07B60"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-[#C07B60] mb-4">
              Renouf Léo
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Etudiant en Bachelor of Engineering à Supinfo
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-700">
              {["À propos", "Projets", "Parcours"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="hover:text-[#C07B60] transition relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#C07B60] group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Mes Contacts</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                {
                  icon: "fa-brands fa-github",
                  link: "https://github.com/leolsvg",
                },
                {
                  icon: "fa-brands fa-linkedin-in",
                  link: "https://linkedin.com/in/leo-renouf",
                },
                {
                  icon: "fa-regular fa-envelope",
                  link: "mailto:leorenoufc@gmail.com",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#F2EDE9] p-3 rounded-full hover:bg-[#E8E3DF] transition relative overflow-hidden group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-[#C07B60]/0 rounded-full group-hover:border-[#C07B60]/30"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <i className={`${social.icon} text-xl relative z-10`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-[#E8E3DF] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm relative z-10">
          <p>© {new Date().getFullYear()} Renouf Léo. Tous droits réservés.</p>
          <motion.p
            className="mt-4 md:mt-0 flex items-center gap-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.p>
        </div>
      </footer>
    </div>
  );
}
