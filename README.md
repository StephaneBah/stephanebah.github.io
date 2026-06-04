# stephanebah.me

Portfolio personnel de Stéphane AHOLOU-BAH, construit avec [Astro](https://astro.build).

## Lancer en local

```bash
npm install      # une seule fois
npm run dev      # http://localhost:4321
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

# 📝 Mode d'emploi : ajouter un projet ou un article

> Pas besoin de toucher au code. On crée juste un fichier texte (`.md`).

## Anatomie d'un fichier

Chaque projet / article est un fichier Markdown en **deux parties** :

```markdown
---
   ← (1) le « frontmatter » : les infos de la fiche, entre les deux ---
---

   ← (2) le corps : ton texte libre (titres, images, tableaux…)
```

---

## A. Ajouter un projet (pas à pas)

1. **Crée le fichier** `src/content/projects/mon-projet.md`
   (le nom du fichier = l'URL → `stephanebah.me/projects/mon-projet`).
2. **Colle ce gabarit** en haut et remplis-le :

```markdown
---
title: "Titre du projet"
description: "Résumé en une phrase (affiché dans la liste et pour Google)."
date: 2025-09-01
category: "nlp"
tags: ["Python", "PyTorch"]
cover: "/assets/img/mon-image.png"
github: "https://github.com/StephaneBah/mon-repo"
demo: "https://mon-demo.com"
status: "Déployé"
featured: true
draft: false
---

## Aperçu

Écris ici ton contenu librement.
```

3. **Écris le corps** sous le second `---` (voir l'aide-mémoire Markdown plus bas).
4. **Enregistre.** En local (`npm run dev`), la page se met à jour toute seule.

### Les champs du frontmatter (projet)

| Champ | Obligatoire | Rôle |
|---|---|---|
| `title` | ✅ | Titre affiché |
| `description` | ✅ | Phrase de résumé (liste + SEO) |
| `date` | ✅ | Format `AAAA-MM-JJ`. Sert au tri (plus récent en premier) |
| `category` | – | `nlp`, `ml`, `cv`, `speech`, `opt`, `ds`, `web` ou `other`. Définit l'icône et le filtre |
| `tags` | – | Liste de mots-clés : `["Python", "RAG"]` |
| `cover` | – | Image d'en-tête. Sans elle → jolie icône de catégorie |
| `github` | – | Lien « Code source » |
| `demo` | – | Lien « Démo » |
| `status` | – | Pastille : `Déployé` (verte), `Vainqueur` (or), ou autre (grise) |
| `featured` | – | `true` = mis en avant sur l'accueil |
| `draft` | – | `true` = caché du site (brouillon) |

---

## B. Ajouter un article (pas à pas)

1. **Crée le fichier** `src/content/blog/mon-article.md` (URL → `/blog/mon-article`).
2. **Le plus simple :** copie le modèle déjà fourni
   `src/content/blog/exemple-modele.md`, renomme-le, mets `draft: false`, et écris.

### Les champs du frontmatter (article)

| Champ | Obligatoire | Rôle |
|---|---|---|
| `title` | ✅ | Titre de l'article |
| `description` | ✅ | Résumé (liste + SEO) |
| `date` | ✅ | `AAAA-MM-JJ` |
| `tags` | – | `["IA", "NLP"]` |
| `cover` | – | Image d'en-tête |
| `readingTime` | – | Ex. `"6 min"` |
| `draft` | – | `true` = caché |

---

## C. Aide-mémoire Markdown (le corps)

~~~markdown
## Titre de section
### Sous-section

Un paragraphe normal, avec du **gras**, de l'*italique*,
un [lien](https://exemple.com) et du `code` au milieu du texte.

- Élément de liste
- Autre élément

1. Liste numérotée
2. Deuxième point

![Légende de l'image](/assets/img/mon-image.png)

| Colonne A | Colonne B |
|---|---|
| valeur 1 | valeur 2 |

> Une citation ou un encadré à mettre en valeur.

```python
# un bloc de code (coloré automatiquement)
print("Bonjour")
```
~~~

---

## D. Ajouter une image

1. Dépose le fichier dans `public/assets/img/` (ex. `mon-image.png`).
2. Référence-le par `/assets/img/mon-image.png` :
   - dans le frontmatter (`cover:`),
   - ou dans le corps : `![légende](/assets/img/mon-image.png)`.

---

## E. Publier

```bash
git add .
git commit -m "Ajout du projet X"
git push
```

Le site se reconstruit et se met en ligne automatiquement (voir Déploiement).

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
