---
lang: fr
title: "LLMs pour le Droit OHADA"
date: "2024-09-01"
category: "nlp"
tags: ["Python", "Transformers", "NLP", "LLM", "Africa", "Zindi"]
description: "Application des Large Language Models à l'harmonisation du droit commercial africain. Participation à la compétition Zindi — top résultats sur la classification de textes juridiques OHADA."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: "https://zindi.africa"
status: "Compétition"
---

## Aperçu

Projet de NLP appliqué au droit de l'OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires), regroupant 17 pays africains. Mission : classifier et analyser automatiquement les textes des Actes Uniformes.

## Le Problème

Le droit commercial africain est documenté en français juridique dense. Les juristes passent des heures à naviguer entre les actes uniformes pour retrouver les articles pertinents. Un système de classification automatique permettrait une consultation bien plus rapide.

## Approche Technique

- **Prétraitement** : nettoyage de texte juridique, normalisation des références d'articles, chunking respectant la structure des actes
- **Modélisation** : fine-tuning de CamemBERT sur les textes OHADA avec stratégie de chunking juridique
- **Évaluation** : F1-macro comme métrique principale (compétition Zindi)

```python
# Fine-tuning CamemBERT sur textes juridiques
from transformers import CamembertForSequenceClassification, Trainer

model = CamembertForSequenceClassification.from_pretrained(
    "camembert-base",
    num_labels=num_classes
)
```

## Résultats

- F1-macro : **0.74** sur le jeu de test public Zindi
- Identification des catégories les plus ambiguës pour annotation future
- Pipeline réutilisable pour d'autres corpus juridiques francophones

## Stack

Python · HuggingFace Transformers · CamemBERT · NLTK · spaCy · PyTorch

## Perspective

Le NLP juridique africain reste un domaine quasi-vierge. La prochaine étape est de construire un dataset annoté avec des juristes experts et d'explorer les modèles à contexte long pour les articles complexes.
