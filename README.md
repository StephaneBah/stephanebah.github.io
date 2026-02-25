# stephanebah.github.io — Portfolio

> 🇫🇷 [Version française ci-dessous](#version-française) · 🇬🇧 [English version below](#english-version)

---

## English version

### How the site works

This portfolio is a **static multi-page site** with a **dynamic content engine**: no build step, no Jekyll. Content is stored as Markdown files in `_posts/` and `_projects/`, fetched live from GitHub via the public API and rendered in the browser.

**File structure:**
```
_posts/          ← Blog articles (one .md per article)
_projects/       ← Project pages  (one .md per project)
assets/img/      ← Images
i18n.js          ← FR/EN translation engine
content-loader.js← Fetches & renders Markdown content
styles.css       ← Design system
```

---

### Adding a blog article

1. Create a file in `_posts/` named: `YYYY-MM-DD-your-slug.en.md` (English) or `YYYY-MM-DD-your-slug.md` (French)
2. Add YAML front matter at the top:

```markdown
---
title: "Your Article Title"
date: 2026-03-01
lang: en
tags: ["machine-learning", "nlp"]
description: "One sentence describing the article."
readTime: 8
---

## Introduction

Your article content here in Markdown...
```

**Front matter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Article title |
| `date` | ✅ | `YYYY-MM-DD` |
| `lang` | ✅ | `fr` or `en` |
| `tags` | ✅ | Array of lowercase tags e.g. `["nlp", "python"]` |
| `description` | ✅ | Short description shown on card (~150 chars) |
| `readTime` | optional | Estimated read time in minutes (default 8) |

3. Commit and push → the article appears automatically on the blog.

---

### Adding a project

1. Create a file in `_projects/` named: `your-slug.md`
2. Add YAML front matter:

```markdown
---
title: "Project Title"
date: 2026-02-01
lang: fr
category: ml
tags: ["Python", "Scikit-learn", "Healthcare"]
description: "One sentence describing the project."
image: assets/img/your-image.png
github: https://github.com/StephaneBah/your-repo
demo: https://your-demo-url.com
status: Terminé
---

## Context

Project content in Markdown...
```

**Front matter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Project title |
| `date` | ✅ | `YYYY-MM-DD` |
| `lang` | ✅ | `fr` or `en` |
| `category` | ✅ | One of: `nlp`, `ml`, `cv`, `ds`, `opt` |
| `tags` | ✅ | Array of tech tags |
| `description` | ✅ | Short description shown on card |
| `image` | optional | Path to project image (`assets/img/...`) |
| `github` | optional | GitHub repo URL |
| `demo` | optional | Live demo URL |
| `status` | optional | `Déployé` (shows green) or `Terminé` |

---

### Updating the profile (About page)

**Editable content in `about.html`** — find and edit the elements with `data-i18n` attributes:

- The interest chips: `<span class="interest-chip">...</span>` blocks
- To add or remove an education/experience entry: add a `.timeline-item` block and add a new key in `i18n.js`

**Editable translations in `i18n.js`** — all UI labels and profile bio:

- `about.bio1` / `about.bio2` — biography paragraphs
- `about.role` — role title
- `edu.ifri.degree`, `edu.ifri.desc` — education details
- `xp.*.title`, `xp.*.desc` — experience entries
- `award.*.title` — awards

---

### Updating the language switcher content

All static text (nav, headings, buttons) is stored in `i18n.js` under `fr:{}` and `en:{}` objects. To change a label:

```js
// i18n.js
fr: {
  'hero.role': 'Aspirant Chercheur · ...',    // ← edit this
},
en: {
  'hero.role': 'Aspiring Researcher · ...',   // ← and this
}
```

---

### Adding an image

1. Copy the image to `assets/img/`
2. Reference it in the project front matter: `image: assets/img/your-image.png`
3. For the profile photo: replace `assets/img/image.jpeg`

---

### Publish workflow

```bash
git add -A
git commit -m "feat: add article / add project / update profile"
git push
```

GitHub Pages rebuilds automatically. Content appears within ~1 minute.

---

---

## Version française

### Comment fonctionne le site

Ce portfolio est un **site statique multi-pages** avec un **moteur de contenu dynamique** : pas de build, pas de Jekyll. Le contenu est stocké sous forme de fichiers Markdown dans `_posts/` et `_projects/`, récupéré en direct depuis GitHub via l'API publique et rendu dans le navigateur.

**Structure des fichiers :**
```
_posts/          ← Articles de blog (un .md par article)
_projects/       ← Pages projet    (un .md par projet)
assets/img/      ← Images
i18n.js          ← Moteur de traduction FR/EN
content-loader.js← Récupère et affiche le contenu Markdown
styles.css       ← Système de design
```

---

### Ajouter un article de blog

1. Créer un fichier dans `_posts/` nommé : `AAAA-MM-JJ-ton-slug.md` (français) ou `AAAA-MM-JJ-ton-slug.en.md` (anglais)
2. Ajouter l'entête YAML au début du fichier :

```markdown
---
title: "Titre de l'article"
date: 2026-03-01
lang: fr
tags: ["machine-learning", "nlp"]
description: "Une phrase décrivant l'article."
readTime: 8
---

## Introduction

Contenu de l'article en Markdown...
```

**Champs de l'entête :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| `title` | ✅ | Titre de l'article |
| `date` | ✅ | Format `AAAA-MM-JJ` |
| `lang` | ✅ | `fr` ou `en` |
| `tags` | ✅ | Tableau de tags en minuscules, ex : `["nlp", "python"]` |
| `description` | ✅ | Description courte affichée sur la carte (~150 caractères) |
| `readTime` | optionnel | Temps de lecture estimé en minutes (défaut : 8) |

3. Committer et pusher → l'article apparaît automatiquement sur le blog.

---

### Ajouter un projet

1. Créer un fichier dans `_projects/` nommé : `ton-slug.md`
2. Ajouter l'entête YAML :

```markdown
---
title: "Titre du projet"
date: 2026-02-01
lang: fr
category: ml
tags: ["Python", "Scikit-learn", "Healthcare"]
description: "Une phrase décrivant le projet."
image: assets/img/ton-image.png
github: https://github.com/StephaneBah/ton-repo
demo: https://ton-demo.com
status: Terminé
---

## Contexte

Contenu du projet en Markdown...
```

**Champs de l'entête :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| `title` | ✅ | Titre du projet |
| `date` | ✅ | Format `AAAA-MM-JJ` |
| `lang` | ✅ | `fr` ou `en` |
| `category` | ✅ | Une valeur parmi : `nlp`, `ml`, `cv`, `ds`, `opt` |
| `tags` | ✅ | Tableau des technologies utilisées |
| `description` | ✅ | Courte description affichée sur la carte |
| `image` | optionnel | Chemin vers l'image (`assets/img/...`) |
| `github` | optionnel | URL du dépôt GitHub |
| `demo` | optionnel | URL de la démo en ligne |
| `status` | optionnel | `Déployé` (badge vert) ou `Terminé` |

---

### Mettre à jour le profil (page À propos)

**Dans `about.html`** — éditer les éléments avec attribut `data-i18n` :

- Les chips d'intérêts : blocs `<span class="interest-chip">...</span>`
- Pour ajouter/supprimer une entrée de formation ou d'expérience : ajouter un bloc `.timeline-item` et une nouvelle clé dans `i18n.js`

**Dans `i18n.js`** — toutes les étiquettes et la bio :

- `about.bio1` / `about.bio2` — paragraphes de biographie
- `about.role` — titre du rôle
- `edu.ifri.degree`, `edu.ifri.desc` — détails de formation
- `xp.*.title`, `xp.*.desc` — entrées d'expérience
- `award.*.title` — distinctions

---

### Changer une traduction existante

Toutes les chaînes statiques (nav, titres, boutons) sont dans `i18n.js` sous `fr:{}` et `en:{}` :

```js
// i18n.js
fr: {
  'hero.role': 'Aspirant Chercheur · ...',  // ← modifier ici
},
en: {
  'hero.role': 'Aspiring Researcher · ...',  // ← et ici
}
```

---

### Publier les modifications

```bash
git add -A
git commit -m "feat: ajout article / ajout projet / mise à jour profil"
git push
```

GitHub Pages reconstruit automatiquement. Le contenu apparaît en ~1 minute.
