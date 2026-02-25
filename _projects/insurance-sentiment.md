---
lang: fr
title: "Travel Insurance — Analyse de Sentiments"
date: "2024-02-01"
category: "ds"
tags: ["Python", "NLP", "Data Science", "Pandas", "Scikit-learn"]
description: "Pipeline NLP complet pour analyser les avis clients d'assurance voyage et extraire des insights exploitables sur la satisfaction."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Terminé"
---

## Aperçu

Analyse des avis clients d'une compagnie d'assurance voyage pour identifier les points de friction, mesurer le sentiment global, et prioriser les améliorations produit.

## Pipeline

1. **Collecte** : scraping d'avis clients publics (Trustpilot, Google)
2. **Prétraitement** : nettoyage, lemmatisation, suppression stop words
3. **Classification sentiments** : positif / négatif / neutre
4. **Aspect-based SA** : identifier le sentiment sur des aspects spécifiques (prix, remboursement, service client)
5. **Topic modeling** : LDA pour découvrir les thèmes récurrents

## Résultats

- Precision/Recall > **85%** sur classification ternaire
- Identification de 5 thèmes principaux de mécontentement
- Dashboard Plotly pour visualisation des tendances temporelles

## Stack

Python · spaCy · NLTK · Scikit-learn · Gensim · Plotly · Pandas
