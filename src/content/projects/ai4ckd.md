---
title: "AI4CKD : prédiction des stades de la maladie rénale chronique"
description: "Modèle de machine learning prédisant les stades de la maladie rénale chronique à partir de données cliniques et démographiques, en collaboration avec le CNHU-HKM (Bénin)."
date: 2025-05-01
category: ml
tags: ["Python", "Scikit-learn", "Random Forest", "SVM", "Healthcare"]
cover: "/assets/img/capture_AI4CKD_project.png"
github: "https://github.com/StephaneBah"
demo: "https://ai4ckd-frontend.onrender.com"
status: "Déployé"
featured: true
---

## Aperçu

Dans le cadre du hackathon **AI4CKD**, nous avons développé un modèle de machine learning pour prédire les stades de la maladie rénale chronique (CKD) à partir de données cliniques et démographiques recueillies **avant les résultats des examens de laboratoire**. L'objectif : soutenir le diagnostic précoce et améliorer la prise en charge des patients.

## Données

Le jeu de données a été fourni par le **CNHU-HKM (Bénin)** en collaboration avec l'initiative AI4CKD : un contexte réel de données médicales africaines, encore rares dans la recherche.

## Approche technique

- **Prétraitement avancé** des données cliniques (valeurs manquantes, encodage, normalisation)
- **Analyse statistique** pour identifier les variables les plus prédictives
- **Comparaison de modèles** de classification : Random Forest, SVM, KNN
- **Déploiement** d'une interface web pour la prédiction en conditions réelles

## Stack

Python · Scikit-learn · Pandas · NumPy

## Enseignement clé

En contexte médical, la collaboration avec des cliniciens et la qualité des données priment sur la complexité du modèle. L'enjeu principal a été d'extraire un signal fiable à partir de données réelles, hétérogènes et incomplètes.
