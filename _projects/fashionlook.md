---
lang: fr
title: "FashionLook — Recherche Vestimentaire par Image"
date: "2024-05-01"
category: "cv"
tags: ["Python", "CNN", "TensorFlow", "Computer Vision", "Web"]
description: "Application de recommandation mode utilisant la vision par ordinateur pour identifier des vêtements dans une image et suggérer des articles similaires."
image: "assets/img/fashionlookl1_1.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Prototype"
---

## Aperçu

FashionLook permet aux utilisateurs d'uploader une photo (selfie, screenshot, photo de rue) et de recevoir des recommandations de vêtements similaires. L'idée : supprimer la friction entre "voir un style" et "le trouver en ligne".

## Architecture

```
Image → Détection vêtements (YOLO) → Feature extraction (ResNet50) → Similarity search (FAISS) → Recommandations
```

- **Détection** : YOLOv5 fine-tuné sur DeepFashion2 pour localiser les vêtements
- **Embedding** : ResNet50 pré-entraîné → vecteurs de 2048 dimensions
- **Recherche** : FAISS (Facebook AI Similarity Search) pour k-NN ultra-rapide sur catalogue

## Résultats

- Classification correcte du type de vêtement : **92%** (50 catégories)
- Recherche sur 100k articles en < 50ms
- Interface web fonctionnelle avec drag-and-drop

## Stack

Python · TensorFlow · YOLOv5 · FAISS · Flask · React · DeepFashion2
