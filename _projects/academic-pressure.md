---
lang: fr
title: "Impact de la Pression Académique — Étude Data Science"
date: "2024-01-01"
category: "ds"
tags: ["Data Science", "Statistiques", "R", "Python", "Recherche"]
description: "Analyse empirique de la corrélation entre pression académique, habitudes de sommeil et performance scolaire chez les étudiants universitaires."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Terminé"
---

## Aperçu

Étude quantitative sur 500+ étudiants de l'UAC analysant la relation entre la pression académique perçue, les habitudes de sommeil, les activités parascolaires et les résultats académiques.

## Méthodologie

**Collecte :** Questionnaire Likert (50 items) + données académiques anonymisées

**Analyse :**
- Tests statistiques : ANOVA, corrélations de Pearson/Spearman
- Régression multiple pour identifier les prédicteurs significatifs
- Clustering K-means pour identifier des profils d'étudiants

```python
# Analyse factorielle exploratoire
from sklearn.decomposition import PCA
from factor_analyzer import FactorAnalyzer

fa = FactorAnalyzer(n_factors=5, rotation='varimax')
fa.fit(df_standardized)
loadings = fa.loadings_
```

## Résultats Clés

- **r = -0.62** (p < 0.001) entre pression académique et satisfaction de vie
- Identification de 3 profils : "en équilibre", "surchargé", "déconnecté"
- La qualité du sommeil est le médiateur le plus fort entre pression et performance
- Recommandations : pause de 10min toutes les 90 minutes, plages de déconnexion

## Stack

Python · R · Pandas · Scikit-learn · Seaborn · Statsmodels · factor_analyzer
