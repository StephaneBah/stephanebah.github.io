---
lang: fr
title: "AI4CKD — Diagnostic Assisté pour l'Insuffisance Rénale Chronique"
date: "2024-06-01"
category: "ml"
tags: ["Python", "Scikit-learn", "Flask", "Healthcare", "ML"]
description: "Système de prédiction et diagnostic assisté par IA pour la maladie rénale chronique. Interface web accessible pour les professionnels de santé."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: "https://ai4ckd-frontend.onrender.com"
status: "Déployé"
---

## Aperçu

AI4CKD est un système de diagnostic assisté par IA conçu pour aider les professionnels de santé à identifier la maladie rénale chronique (CKD) à partir de paramètres biologiques courants. L'interface web est accessible depuis n'importe quel navigateur.

## Le Problème

La détection précoce de la CKD est cruciale mais souvent retardée, particulièrement en Afrique subsaharienne où l'accès aux néphrologues est limité. Un outil de screening accessible pourrait changer ce paradigme.

## Approche Technique

Le pipeline complet comprend :

- **Prétraitement** : imputation KNN pour les 38% de valeurs manquantes du dataset UCI
- **Feature engineering** : sélection des 15 variables les plus prédictives (gravité urinaire, hémoglobine, créatinine sérique...)
- **Modélisation** : comparaison Random Forest, SVM, Regression Logistique, KNN
- **Déploiement** : API Flask + frontend React sur Render

## Résultats

- Accuracy : **98.7%** sur le jeu de test
- F1-score : **0.987** (macro-average)
- Interface web fonctionnelle accessible en production
- Temps d'inférence < 200ms

## Stack

Python · Scikit-learn · Pandas · NumPy · Flask · React

## Enseignements Clés

Dans un contexte médical, l'interprétabilité prime sur la performance brute. La logistic regression est la version déployée, malgré un accuracy légèrement inférieur au Random Forest, parce que les médecins ont besoin de comprendre *pourquoi* le modèle décide.
