---
title: "Modèle d'article (à dupliquer)"
description: "Exemple montrant tout ce que tu peux mettre dans un article : titres, images, tableaux, code, citations."
date: 2026-01-01
tags: ["Exemple", "Markdown"]
readingTime: "5 min"
draft: true
---

Ceci est le chapeau de l'article (premier paragraphe). Écris ici en **gras**,
en *italique*, avec des [liens](https://stephanebah.me) ou du `code inline`.

## Une section principale

Un paragraphe normal. La largeur de lecture est limitée pour un confort
optimal, comme dans une vraie publication.

### Une sous-section

- Un point de liste
- Un autre point, avec du **gras**
- Un dernier point

## Mettre une image

![Légende de l'image](/assets/img/MedVoice_Interface.png)

## Mettre un tableau

| Modèle | Métrique | Score |
|---|---|---|
| Baseline | WER | 109,6 % |
| Fine-tuné | WER | **20 %** |

## Mettre du code

```python
from transformers import WhisperForConditionalGeneration

model = WhisperForConditionalGeneration.from_pretrained("whisper-small")
```

## Mettre une citation / un encadré

> Une idée importante à mettre en valeur, ou une note de contexte.

---

Conclusion de l'article.
