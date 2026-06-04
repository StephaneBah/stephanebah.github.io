---
title: "Zindi ARC Challenge : raisonnement abstrait par LLMs"
description: "Compétition de recherche IA sur l'Abstraction and Reasoning Corpus (ARC). Inférence transductive via LLMs générant et exécutant du code par instance. Score de 0,30 sur le test privé."
date: 2025-03-01
category: nlp
tags: ["Python", "LLMs", "Reasoning", "Code Generation", "Zindi"]
github: "https://github.com/StephaneBah"
demo: "https://zindi.africa"
status: "Compétition"
---

## Aperçu

Participation au **Hackathon Zindi – ARC Challenge Africa**, une compétition de recherche en IA centrée sur l'**Abstraction and Reasoning Corpus (ARC)** : un benchmark notoirement difficile, conçu pour mesurer le raisonnement abstrait plutôt que la mémorisation.

## Le problème ARC

Chaque tâche présente des exemples d'entrée/sortie sous forme de grilles colorées. Le système doit **inférer la règle de transformation** et l'appliquer à une nouvelle entrée. Les règles changent à chaque tâche : il faut raisonner, pas mémoriser.

## Approche

Exploration de méthodes d'**inférence transductive** en s'appuyant sur des **LLMs** pour générer et exécuter des solutions sous forme de **code exact**, propres à chaque instance de problème :

- Représentation des grilles et injection des exemples dans le contexte
- Génération de code Python candidat par le LLM
- Exécution et validation des solutions sur les exemples d'entraînement

## Résultat

Score de **0,30** d'accuracy sur le jeu de test privé Zindi.

## Stack

Python · LLMs · Génération de code

## Enseignement

Le challenge a mis en lumière les limites des LLMs sur le raisonnement symbolique pur, et l'intérêt des approches hybrides « génération + exécution de code » pour les contourner.
