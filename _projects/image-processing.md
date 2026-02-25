---
lang: fr
title: "Traitement d'Images avec OpenCV"
date: "2023-09-01"
category: "cv"
tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"]
description: "Pipeline complet de traitement d'images : débruitage, détection de contours, segmentation morphologique, extraction de features."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Terminé"
---

## Aperçu

Exploration approfondie des techniques de traitement d'images avec OpenCV, depuis le prétraitement de base jusqu'aux pipelines complexes de segmentation. Projet pédagogique devenu base de référence réutilisée dans d'autres projets.

## Techniques Implémentées

**Filtrage & débruitage :**
- Gaussian Blur, Median Filter
- Bilateral Filter (préserve les bords)
- Non-Local Means

**Détection de contours :**
- Opérateurs Sobel/Scharr
- Détecteur Canny avec optimisation des seuils
- Transformée de Hough pour lignes et cercles

**Segmentation :**
- Thresholding adaptatif (Otsu)
- Opérations morphologiques (érosion, dilation, ouverture, fermeture)
- Watershed algorithm

## Application

Pipeline appliqué à des images médicales de faible résolution pour améliorer la qualité avant analyse ML — utilité directe pour le projet AI4CKD.

## Stack

Python · OpenCV · NumPy · SciPy · Matplotlib · Pillow
