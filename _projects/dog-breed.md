---
lang: fr
title: "Dog Breed Classification — CNN Deep Learning"
date: "2024-03-01"
category: "cv"
tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "Transfer Learning"]
description: "Classificateur de races de chiens par photo utilisant le transfer learning avec ResNet50. 133 races, 90%+ de précision."
image: "assets/img/cold_palmer2.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Terminé"
---

## Aperçu

Modèle de deep learning pour identifier automatiquement la race d'un chien à partir d'une photo. 133 races différentes, entraîné sur 20 000+ images avec augmentation de données intensive.

## Approche

**Transfer learning** depuis ResNet50 pré-entraîné sur ImageNet :

```python
base_model = ResNet50(weights='imagenet', include_top=False)
base_model.trainable = False  # Freeze backbone

x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(512, activation='relu')(x)
outputs = Dense(133, activation='softmax')(x)
```

Deux phases d'entraînement : head seul d'abord, puis fine-tuning des derniers blocs du backbone.

## Résultats

- **Top-1 accuracy : 90.3%** sur 133 races
- **Top-3 accuracy : 97.8%** (bonne race dans les 3 premières suggestions)
- Modèle exporté en TFLite pour déploiement mobile (45MB)
- Inférence GPU : ~30ms

## Stack

Python · TensorFlow/Keras · ResNet50 · Scikit-learn · Matplotlib
