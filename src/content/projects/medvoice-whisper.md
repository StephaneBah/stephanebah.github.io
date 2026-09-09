---
title: "MedVoice : Whisper fine-tuné pour le français africain médical"
description: "Adaptation de Whisper Small à l'accent africain du français en radiologie. WER réduit de 109,6 % à 20 % (+75 %), avec la constitution du premier dataset open-source du français africain médical."
date: 2025-09-01
category: speech
tags: ["Python", "Whisper", "ASR", "PyTorch", "Healthcare", "Open Source"]
cover: "/assets/img/MedVoice_Interface.png"
github: "https://github.com/StephaneBah/medvoice_ai"
status: "Déployé"
featured: true
---

## Aperçu

MedVoice est un projet de reconnaissance vocale (ASR) ciblant un angle mort des technologies existantes : **l'accent africain du français dans le domaine médical**. J'ai adapté le modèle **Whisper Small** à des comptes-rendus de radiologie pour en faire un outil de transcription réellement utilisable par les praticiens.

## Une contribution open source

Au-delà du modèle, le projet a permis la constitution du [premier dataset open-source du français africain](https://huggingface.co/datasets/StephaneBah/Africa_Radiology_FR) destiné aux technologies de reconnaissance vocale dans le domaine médical : une ressource quasi inexistante jusqu'alors.

Ce travail constitue également le sujet de mon [Mémoire de Licence](https://www.dropbox.com/scl/fi/1c9ajjst86k4iq3728dkd/M-moire_Licence_St-phane_AHOLOU-BAH_16_04_2026.pdf?rlkey=h6gzq04vl7te97otph4qyqhrq&st=cp1a8v8g&dl=0).

## Résultat clé

| Métrique | Avant | Après |
|---|---|---|
| Word Error Rate (WER) | 109,6 % | **20 %** |

Soit une **amélioration de 75 %** de la précision de transcription sur notre échantillon de test.

## Approche technique

- Constitution et nettoyage d'un corpus audio + transcriptions (radiologie)
- Fine-tuning de `whisper-small` sur le domaine et l'accent cibles
- Évaluation par WER sur un jeu de test représentatif
- Intégration dans une application de transcription médicale (MedVoice)

## Stack

Python · HuggingFace Transformers · Whisper · PyTorch

## Contexte

Projet mené dans la continuité de mon stage d'ingénierie IA chez **AdjibolaTech**, autour de solutions de télémédecine basées sur l'IA.
