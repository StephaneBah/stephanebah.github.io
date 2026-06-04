---
title: "OHADA Law : système de questions-réponses juridique par RAG"
description: "Système de question-réponse juridique sur le droit OHADA, propulsé par retrieval-augmented generation. Vainqueur de la compétition LLMs for OHADA Law Innovation (Force-N · Zindi Africa)."
date: 2025-05-15
category: nlp
tags: ["Python", "LLM", "RAG", "NLP", "LangChain", "Zindi"]
github: "https://github.com/StephaneBah"
status: "Vainqueur"
featured: true
---

## Aperçu

Système de **question-réponse juridique** appliqué au droit OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires), développé lors d'un hackathon à l'issue d'un programme de formation en IA & NLP.

> **Projet vainqueur** de la compétition *LLMs for OHADA Law Innovation* organisée par Force-N (Sénégal) et Zindi Africa, 2025.

## Le problème

Le droit OHADA est dense, technique et difficile d'accès pour les non-spécialistes. Permettre de poser une question en langage naturel et d'obtenir une réponse fiable, ancrée dans les textes officiels, représente un gain de temps majeur pour juristes et entreprises.

## Approche : retrieval-augmented generation

- **Indexation** des textes juridiques OHADA en base vectorielle
- **Retrieval** des passages pertinents à chaque question (recherche sémantique)
- **Génération** de réponses par un LLM, contraint aux sources récupérées pour limiter les hallucinations
- **Citations** des articles sources pour garantir la traçabilité

## Stack

Python · LLMs · RAG · LangChain · Bases vectorielles

## Impact

Le NLP juridique francophone africain reste un domaine quasi-vierge. Ce projet démontre qu'une approche RAG bien conçue peut rendre un corpus juridique complexe réellement consultable.
