# Documentation SEO - Projet Portfolio Léo Renouf

## 🎯 Objectif du Projet
**Mot-clé cible** : `Développeur freelance Caen`  
**Objectif** : Être référencé en première page (position organique "blue link") sur Google.fr pour ce mot-clé

## 📊 Actions SEO Implémentées

### 1. Optimisation On-Page (Complété - 08/01/2026)

#### Meta Tags & SEO Technique
- ✅ **Title optimisé** : "Léo Renouf - Développeur Freelance Caen | Web & Applications"
- ✅ **Meta description** : Contient le mot-clé principal + description engageante
- ✅ **Keywords meta** : Liste de mots-clés secondaires pertinents
- ✅ **Open Graph tags** : Pour le partage sur réseaux sociaux
- ✅ **Twitter Cards** : Optimisation pour Twitter/X
- ✅ **Canonical URL** : Évite le duplicate content
- ✅ **Robots meta** : Configuration pour indexation optimale

**Fichiers modifiés** : [`app/layout.tsx`](app/layout.tsx)

#### Structured Data (Schema.org)
- ✅ **Type** : Person + Professional
- ✅ **Informations** : Nom, job title, localisation (Caen), portfolio
- ✅ **Projets** : workExample avec liens vers Joséphine et Twodevly
- ✅ **Compétences** : knowsAbout avec technologies maîtrisées
- ✅ **Réseaux sociaux** : GitHub, LinkedIn via sameAs

**Impact** : Améliore l'affichage dans les résultats de recherche Google (rich snippets)

#### Optimisation du Contenu
- ✅ **H1** : "Léo Renouf" + sous-titre avec mot-clé
- ✅ **H2** : "Développeur Freelance Caen - Etudiant en Bachelor..."
- ✅ **Densité du mot-clé** : Intégration naturelle dans 3+ sections
  - Hero section (intro)
  - Section "À propos"
  - Alt text de l'image principale
- ✅ **Sémantique** : Mots-clés secondaires (Next.js, React, TypeScript, Caen)

**Fichiers modifiés** : [`app/page.tsx`](app/page.tsx)

#### Images & Accessibilité
- ✅ **Alt attributes** : Tous les `<img>` ont des alt descriptifs avec mot-clé
- ✅ **Image principale** : "Léo Renouf - Développeur freelance Caen spécialisé en développement web"

### 2. Architecture & Infrastructure (Complété - 08/01/2026)

#### Fichiers SEO Essentiels
- ✅ **sitemap.xml** : Générée dynamiquement via Next.js ([`app/sitemap.ts`](app/sitemap.ts))
  - Page d'accueil (priority 1.0)
  - Page blog (priority 0.9)
  - Articles individuels (priority 0.8)
  - Fréquence de mise à jour définie

- ✅ **robots.txt** : Configuration via Next.js ([`app/robots.ts`](app/robots.ts))
  - Autorisation de tous les bots
  - Exclusion des dossiers techniques (/api/, /_next/)
  - Référence au sitemap

#### Section Blog
- ✅ **Page blog créée** : [`app/blog/page.tsx`](app/blog/page.tsx)
- ✅ **3 articles planifiés** :
  1. "Devenir développeur freelance à Caen : Mon guide complet"
  2. "Pourquoi j'utilise Next.js et React pour mes projets web"
  3. "SEO pour sites vitrines : Les essentiels à connaître"
- ✅ **Navigation** : Lien "Blog" ajouté dans le menu et footer

**Impact** : Le contenu frais et régulier est essentiel pour le SEO

## 📈 Prochaines Étapes (TO-DO)

### Actions Techniques Prioritaires

1. **Google Search Console**
   - [ ] Créer un compte Google Search Console
   - [ ] Ajouter et vérifier le site (méthode HTML tag recommandée)
   - [ ] Remplacer `verification_token` dans [`app/layout.tsx`](app/layout.tsx#L34) par le vrai token
   - [ ] Soumettre le sitemap manuellement
   - [ ] Surveiller l'indexation et les performances

2. **Performance Web (Core Web Vitals)**
   - [ ] Optimiser les images (WebP, compression, lazy loading)
   - [ ] Créer `/public/og-image.jpg` (1200x630px) pour Open Graph
   - [ ] Analyser avec PageSpeed Insights
   - [ ] Viser score >90 sur mobile et desktop

3. **Nom de Domaine**
   - [ ] Acheter un nom de domaine personnalisé (ex: leorenouf.fr)
   - [ ] Utiliser le GitHub Student Pack pour domaine gratuit (.me, .tech, .live)
   - [ ] Configurer DNS et HTTPS
   - [ ] Mettre à jour `metadataBase` dans layout.tsx

4. **Hébergement**
   - [ ] Déployer sur Vercel (recommandé pour Next.js) OU
   - [ ] Utiliser DigitalOcean avec crédits GitHub Student Pack
   - [ ] Configurer le domaine personnalisé
   - [ ] Activer HTTPS et CDN

### Content Marketing (Articles de Blog)

**Fréquence recommandée** : 1-2 articles par semaine minimum

5. **Article 1 : Guide Freelance Caen** (Priorité 1)
   - [ ] Rédiger article complet (1500+ mots)
   - [ ] Créer page [`app/blog/developper-freelance-caen-guide/page.tsx`](app/blog/developper-freelance-caen-guide/page.tsx)
   - [ ] Inclure mot-clé dans title, H1, H2, contenu
   - [ ] Ajouter images pertinentes avec alt text
   - [ ] Partager sur LinkedIn et réseaux sociaux

6. **Article 2 : Next.js & React** (Priorité 2)
   - [ ] Créer [`app/blog/nextjs-react-avantages/page.tsx`](app/blog/nextjs-react-avantages/page.tsx)
   - [ ] Démonstration d'expertise technique
   - [ ] Exemples de code et retour d'expérience

7. **Article 3 : SEO Sites Vitrines** (Priorité 2)
   - [ ] Créer [`app/blog/seo-site-vitrine/page.tsx`](app/blog/seo-site-vitrine/page.tsx)
   - [ ] Partager connaissances SEO
   - [ ] Étude de cas : Joséphine, Twodevly

### Netlinking & Promotion

8. **Backlinks Locaux**
   - [ ] Créer profil Google My Business (si activité pro déclarée)
   - [ ] S'inscrire sur annuaires locaux Caen (Pages Jaunes, Yelp, etc.)
   - [ ] Contacter CCI Caen Normandie
   - [ ] Rejoindre communautés locales de développeurs

9. **Réseaux Sociaux & Visibilité**
   - [ ] Optimiser profil LinkedIn avec mot-clé "Développeur freelance Caen"
   - [ ] Publier régulièrement (1-2x/semaine)
   - [ ] Rejoindre groupes Facebook/Discord de développeurs Normandie
   - [ ] Partager articles de blog sur Twitter, LinkedIn, Dev.to

10. **Portfolios & Communautés**
    - [ ] Créer profil sur Malt.fr (marketplace freelance)
    - [ ] Publier sur Dev.to avec lien vers le site
    - [ ] Contribuer à des forums (Stack Overflow, Reddit r/webdev)
    - [ ] Ajouter site sur Behance/Dribbble

### Monitoring & Analyse

11. **Analytics**
    - [ ] Installer Google Analytics 4
    - [ ] Configurer objectifs et conversions
    - [ ] Suivre trafic organique pour mot-clé cible

12. **Suivi du Ranking**
    - [ ] Vérifier position Google.fr pour "développeur freelance Caen" (hebdomadaire)
    - [ ] Utiliser outils : Google Search Console, Ahrefs, SEMrush (versions gratuites)
    - [ ] Documenter évolution dans un tableau

## 🔧 Optimisations Techniques Avancées

### À Implémenter si Besoin

13. **Breadcrumbs** (si site multi-pages)
    - Ajouter fil d'Ariane avec structured data

14. **FAQ Schema**
    - Créer section FAQ avec markup schema.org/FAQPage

15. **LocalBusiness Schema**
    - Si activité officielle déclarée à Caen

16. **Vitesse de Chargement**
    - Lazy load pour Vanta.js (actuellement beforeInteractive)
    - Bundle analysis avec @next/bundle-analyzer
    - Optimiser Three.js (chargement différé)

## 📝 Template de Suivi Hebdomadaire

```markdown
### Semaine du [DATE]

**Ranking Google.fr "développeur freelance Caen"** :
- Position : [XX] (ou "Non classé")
- Évolution : +/- [X] positions

**Actions réalisées** :
- [ ] Article publié : [titre]
- [ ] Backlinks créés : [nombre + sources]
- [ ] Partages sociaux : [plateformes]

**Métriques** :
- Visites organiques : [nombre]
- Taux de rebond : [%]
- Temps moyen : [secondes]

**Prochaines actions** :
1. [Action prioritaire]
2. [Action secondaire]
```

## 🎓 Ressources & Outils

### Outils SEO Gratuits
- **Google Search Console** : Indexation et performance
- **Google Analytics 4** : Analyse du trafic
- **PageSpeed Insights** : Performance web
- **Ubersuggest** : Recherche mots-clés (version limitée gratuite)
- **Ahrefs Webmaster Tools** : Backlinks et SEO (gratuit)

### GitHub Student Pack (Gratuit)
- **DigitalOcean** : 200$ de crédits (1 an)
- **Namecheap** : Domaine .me gratuit (1 an)
- **.TECH Domains** : Domaine .tech gratuit (1 an)
- **Name.com** : Domaine .live gratuit (1 an)

### Hébergement Recommandé
1. **Vercel** (Recommandé) : Déploiement automatique Next.js, CDN global, HTTPS gratuit
2. **GitHub Pages** : Gratuit mais limité pour Next.js
3. **DigitalOcean** : VPS avec crédits Student Pack

## 📚 Documentation de Référence

- Next.js SEO : https://nextjs.org/learn/seo/introduction-to-seo
- Google SEO Starter Guide : https://developers.google.com/search/docs/beginner/seo-starter-guide
- Schema.org Markup : https://schema.org/Person

---

**Dernière mise à jour** : 08/01/2026  
**Prochaine révision** : 15/01/2026 (après déploiement et soumission Search Console)
