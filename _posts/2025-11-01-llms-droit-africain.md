---
title: "LLMs et Droit Africain : Retour sur la compétition OHADA"
date: "2025-11-01"
tags: ["NLP", "LLM", "Africa", "Legal AI"]
description: "Ce que j'ai appris en appliquant les Large Language Models au droit commercial africain lors de la compétition Zindi."
readTime: 10
---

## Contexte

L'OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires) regroupe 17 pays africains avec un cadre juridique commun. La question posée lors de la compétition Zindi : *peut-on automatiser la classification et l'analyse de textes juridiques OHADA avec des LLMs ?*

## Le défi du juridique francophone

Le droit OHADA est rédigé en français juridique, un dialecte particulier qui mêle :
- Terminologie technique très précise (actes uniformes, AUDCG, etc.)
- Références croisées entre articles
- Nuances d'interprétation que même les juristes débattent

Les modèles pré-entraînés sur du français courant peinent sur ces textes. CamemBERT donnait des résultats décevants sur la classification zero-shot.

## Approche adoptée

```python
# Pipeline de prétraitement juridique
import re
from transformers import AutoTokenizer

def clean_legal_text(text):
    # Normaliser les références d'articles
    text = re.sub(r'Art\.\s*(\d+)', r'Article \1', text)
    # Supprimer les numéros de page
    text = re.sub(r'\n\d+\n', '\n', text)
    return text.strip()
```

J'ai fine-tuné CamemBERT sur les actes uniformes en utilisant une stratégie de **chunking juridique** plutôt que des fenêtres fixes, pour respecter la structure des articles.

## Résultats et enseignements

Le modèle final a atteint un **F1-macro de 0.74** sur le jeu de test public. Les principales difficultés :

1. **Données limitées** — peu de textes OHADA annotés disponibles
2. **Ambiguïté des catégories** — certains articles appartiennent à plusieurs actes uniformes
3. **Contexte long** — les articles complexes dépassent la fenêtre de 512 tokens

## Ce que je retiens

> Le NLP juridique africain est un espace quasi vierge. La vraie valeur n'est pas dans le score de compétition, mais dans la compréhension du pipeline.

La prochaine étape serait d'explorer les modèles à contexte long (Longformer, BigBird) et de construire un dataset annoté correctement avec des juristes.
