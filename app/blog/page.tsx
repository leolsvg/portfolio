"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "developper-freelance-caen-guide",
    title: "Devenir développeur freelance à Caen : Mon guide complet",
    excerpt:
      "Découvrez comment j'ai démarré mon activité de développeur freelance à Caen, les défis rencontrés et les opportunités du marché local.",
    date: "2026-01-08",
    category: "Freelance",
    readTime: "5 min",
  },
  {
    id: "nextjs-react-avantages",
    title: "Pourquoi j'utilise Next.js et React pour mes projets web",
    excerpt:
      "Les avantages de Next.js et React pour créer des sites web performants et modernes. Retour d'expérience sur mes projets.",
    date: "2026-01-05",
    category: "Développement Web",
    readTime: "7 min",
  },
  {
    id: "seo-site-vitrine",
    title: "SEO pour sites vitrines : Les essentiels à connaître",
    excerpt:
      "Guide pratique pour optimiser le référencement naturel de votre site vitrine. Techniques et bonnes pratiques testées sur mes projets.",
    date: "2025-12-28",
    category: "SEO",
    readTime: "6 min",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#FBF8F5] text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C07B60] hover:underline mb-8"
          >
            <i className="fa-solid fa-arrow-left"></i> Retour à l&apos;accueil
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative inline-block">
            Blog - Développeur Freelance Caen
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#C07B60]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Articles et conseils sur le développement web, le freelancing et les
            technologies modernes
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#E8E3DF]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#C07B60] bg-[#C07B60]/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold mb-3 text-[#1C1C1C] hover:text-[#C07B60] transition">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E3DF]">
                <time className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-semibold text-[#C07B60] hover:underline flex items-center gap-1"
                >
                  Lire plus <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center p-8 bg-[#F7F4F2] rounded-2xl border border-[#E8E3DF]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <i className="fa-solid fa-pen-to-square text-4xl text-[#C07B60] mb-4"></i>
          <h3 className="text-2xl font-bold mb-3">
            Articles en cours de rédaction
          </h3>
          <p className="text-gray-600">
            De nouveaux articles sur le développement web, mes retours
            d&apos;expérience freelance et les technologies modernes arrivent
            bientôt !
          </p>
        </motion.div>
      </section>
    </div>
  );
}
