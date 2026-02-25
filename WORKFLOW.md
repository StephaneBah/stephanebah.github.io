# 🚀 Workflow de Publication - stephanebah.github.io

## 📝 Workflow Simplifié

### Pour ajouter un article de blog :

1. **Créez un fichier markdown** dans `_posts/` avec le format : `YYYY-MM-DD-slug.md`
   ```markdown
   ---
   title: "Votre titre"
   date: "2025-01-15"
   tags: ["ML", "Python"]
   description: "Description courte"
   readTime: 8
   ---
   
   ## Votre contenu ici
   ```

2. **Commit & Push** sur GitHub
   ```bash
   git add _posts/2025-01-15-mon-article.md
   git commit -m "Nouvel article: Mon article"
   git push
   ```

3. **C'est tout !** 🎉
   - Le GitHub Action génère automatiquement `_posts/index.json`
   - Votre article apparaît immédiatement sur le site

### Pour ajouter un projet :

1. **Créez un fichier markdown** dans `_projects/` : `slug-du-projet.md`
   ```markdown
   ---
   title: "Nom du projet"
   date: "2024-06-01"
   category: "ml"
   tags: ["Python", "ML"]
   description: "Description"
   image: "assets/img/projet.png"
   github: "https://github.com/..."
   demo: "https://..."
   status: "Déployé"
   ---
   
   ## Contenu du projet
   ```

2. **Commit & Push**
   ```bash
   git add _projects/mon-projet.md
   git commit -m "Nouveau projet: Mon projet"
   git push
   ```

3. **Automatique !** ✨
   - `_projects/index.json` est auto-généré
   - Le projet s'affiche avec les nouvelles cartes stylées

## 🎨 Améliorations Visuelles

### Nouveautés CSS :
- ✨ **Glassmorphism** : Navigation et éléments avec effet verre
- 🎨 **Gradients modernes** : Titres et cartes avec dégradés dynamiques
- 🌊 **Animations fluides** : Transitions smooth et hover effects
- 📏 **Typographie améliorée** : Hiérarchie claire, meilleure lisibilité
- 🎯 **Cartes de projets** : Design moderne avec effets de profondeur

### Effets interactifs :
- Hover sur les cartes : translation, ombres, bordures animées
- Gradients sur les titres (text gradient)
- Barre de progression sur hover (blog cards)
- Images avec zoom et overlay au hover

## 🤖 GitHub Action

Le workflow `.github/workflows/generate-indexes.yml` :
- ⚡ **Trigger automatique** : À chaque push dans `_posts/` ou `_projects/`
- 📋 **Génération des index** : Crée/met à jour les `index.json`
- 🔄 **Commit automatique** : Push les changements directement

## 🛠️ Développement Local

Pour générer les index localement :
```bash
python generate_index.py
```

Pour démarrer le serveur local :
```bash
python -m http.server 3000
```

Ou utilisez la tâche VS Code : **Local Dev Server**

## 📦 Structure

```
stephanebah.github.io/
├── _posts/                # Articles de blog
│   ├── 2025-MM-DD-slug.md
│   └── index.json         # Auto-généré
├── _projects/             # Projets
│   ├── projet-slug.md
│   └── index.json         # Auto-généré
├── assets/
│   ├── css/
│   └── img/              # Images des projets
├── .github/
│   └── workflows/
│       └── generate-indexes.yml  # Automation
├── styles.css            # CSS modernisé
├── content-loader.js     # Chargement dynamique
└── index.html
```

## 🎯 Front Matter Requis

### Posts (_posts/)
```yaml
---
title: "Titre de l'article"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
description: "Description courte"
readTime: 8              # En minutes
---
```

### Projects (_projects/)
```yaml
---
title: "Nom du projet"
date: "YYYY-MM-DD"
category: "ml"           # ml, nlp, cv, ds, opt, web, speech
tags: ["Python", "ML"]
description: "Description"
image: "assets/img/projet.png"  # Optionnel
github: "https://..."    # Optionnel
demo: "https://..."      # Optionnel
status: "Déployé"        # ou "Terminé"
---
```

## 💡 Catégories de Projets

- `ml` - Machine Learning
- `nlp` - Natural Language Processing
- `cv` - Computer Vision
- `ds` - Data Science
- `opt` - Optimisation
- `web` - Développement Web
- `speech` - Speech Processing

## 🚨 Notes Importantes

1. **Format des dates** : Toujours `YYYY-MM-DD`
2. **Noms de fichiers posts** : `YYYY-MM-DD-slug.md`
3. **Images** : Placez-les dans `assets/img/`
4. **Tags** : Utilisez des tableaux JSON `["tag1", "tag2"]`
5. **GitHub Action** : Peut prendre 30-60 secondes après le push

---

**Fait avec ❤️ par Stéphane AHOLOU-BAH**
