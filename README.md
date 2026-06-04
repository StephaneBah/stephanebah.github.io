# stephanebah.me

Portfolio personnel de Stéphane AHOLOU-BAH, construit avec [Astro](https://astro.build).

## Lancer en local

```bash
npm install      # une seule fois
npm run dev      # http://localhost:4321
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Écrire un projet

Crée un fichier `src/content/projects/mon-projet.md`. L'URL sera `/projects/mon-projet`.

```markdown
---
title: "Titre du projet"
description: "Résumé en une phrase (affiché dans la liste et le SEO)."
date: 2025-09-01
category: "nlp"        # nlp | ml | cv | speech | opt | ds | web | other
tags: ["Python", "PyTorch"]
cover: "/assets/img/mon-image.png"   # optionnel ; sinon une icône de catégorie
github: "https://github.com/StephaneBah/mon-repo"   # optionnel
demo: "https://exemple.com"                          # optionnel
status: "Déployé"      # Déployé | Vainqueur | Compétition | Terminé… (libre)
featured: true         # apparaît dans « Projets en avant » sur l'accueil
draft: false           # true = caché du site
---

## Aperçu
Ton contenu : titres, sous-titres, **gras**, listes, images, tableaux, code…
```

Tu contrôles tout le corps : sections (`##`), sous-sections (`###`), images
`![légende](/assets/img/...)`, tableaux Markdown, blocs de code, citations `>`.

## Écrire un article

Même principe dans `src/content/blog/mon-article.md` (voir le modèle
`src/content/blog/exemple-modele.md`, en `draft: true`).

## Images

Dépose tes images dans `public/assets/img/` et référence-les par
`/assets/img/nom.png` (dans le frontmatter `cover` ou dans le corps Markdown).

## Déploiement (GitHub Pages)

Le déploiement est automatique à chaque `push` sur `main`, via GitHub Actions
(`.github/workflows/deploy.yml`).

> ⚠️ Réglage à faire **une seule fois** : dans le dépôt GitHub →
> **Settings → Pages → Build and deployment → Source : GitHub Actions**.

Le domaine `stephanebah.me` est conservé via `public/CNAME`.

## Structure

```
public/assets/      images + CV (servis tels quels)
src/content/        projets et articles en Markdown/MDX
src/pages/          pages du site
src/layouts/        gabarit de base (SEO, nav, footer)
src/components/     composants réutilisables
src/styles/         design system (global.css)
src/site.ts         infos du site (nom, liens, navigation)
```
