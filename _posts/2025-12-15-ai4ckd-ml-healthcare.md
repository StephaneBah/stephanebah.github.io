---
title: "Prédire l'insuffisance rénale avec le machine learning : leçons du projet AI4CKD"
date: "2025-12-15"
tags: ["ML", "Healthcare", "Python", "Scikit-learn"]
description: "Comment j'ai construit un système de diagnostic assisté pour la maladie rénale chronique, et les compromis clés entre performance et interprétabilité."
readTime: 12
---

## Pourquoi l'insuffisance rénale ?

La maladie rénale chronique (CKD) touche ~10% de la population mondiale. En Afrique subsaharienne, le diagnostic tardif reste un problème majeur faute de spécialistes. L'idée : un modèle accessible depuis un navigateur web, utilisable même sans néphrologue sur place.

## Architecture du pipeline

```
Données patient → Prétraitement → Feature Selection → Modèle → Probabilité CKD
```

Les features clés (selon l'importance Gini) :
- `sg` — gravité spécifique urinaire
- `hemo` — taux d'hémoglobine
- `sc` — créatinine sérique
- `bu` — urée sanguine

## Prétraitement : le vrai travail

Le dataset UCI CKD avait ~38% de valeurs manquantes. Stratégie :

```python
from sklearn.impute import KNNImputer
from sklearn.preprocessing import LabelEncoder

# Variables catégorielles encodées avant KNN
cat_cols = ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
for col in cat_cols:
    df[col] = LabelEncoder().fit_transform(df[col].astype(str))

# Imputation par les k plus proches voisins
imputer = KNNImputer(n_neighbors=5)
df_imputed = pd.DataFrame(imputer.fit_transform(df), columns=df.columns)
```

## Comparaison des modèles

| Modèle | Accuracy | F1 | Temps |
|--------|----------|-----|-------|
| Random Forest | **98.7%** | **0.987** | 120ms |
| SVM (RBF) | 97.5% | 0.974 | 45ms |
| Logistic Regression | 94.2% | 0.941 | 5ms |
| KNN | 96.3% | 0.962 | 80ms |

Le Random Forest gagne sur les métriques, mais la logistic regression est déployée en production pour son **interprétabilité** — les médecins veulent comprendre pourquoi le modèle dit "risque élevé".

## Déploiement

API Flask hébergée sur Render (free tier) avec un frontend React minimaliste. Le vrai défi : latence à froid du free tier (~30 secondes). Solution : un ping automatique toutes les 14 minutes via GitHub Actions.

## Ce que le projet m'a appris

L'accuracy ne suffit pas en médical. Les métriques qui comptent vraiment sont :
- **Recall (sensibilité)** — ne pas manquer un cas positif
- **Calibration** — les probabilités sont-elles fiables ?
- **Interprétabilité** — pourquoi cette décision ?

> Dans des domaines critiques, un modèle moins performant mais interprétable est souvent préférable à une boîte noire.
