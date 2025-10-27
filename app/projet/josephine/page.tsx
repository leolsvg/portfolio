export default function JosephinePage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projet Joséphine</h1>

      <p className="text-lg mb-6">
        Joséphine est un restaurant de bistronomie situé à Cherbourg. Mon
        objectif était de créer un site vitrine moderne et élégant, incluant un
        système de réservation en ligne et une optimisation SEO.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Stack technique</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Next.js 15 (App Router)</li>
        <li>React 19 + Tailwind CSS</li>
        <li>Supabase (base de données + auth)</li>
        <li>Resend API (confirmation e-mail)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Aperçu</h2>
      <img
        src="/images/josephine.png"
        alt="Site Joséphine"
        className="rounded-lg shadow mb-6"
      />

      <div className="flex gap-4">
        <a
          href="https://josephine-restaurant.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          Voir le site en ligne
        </a>
      </div>
    </div>
  );
}
