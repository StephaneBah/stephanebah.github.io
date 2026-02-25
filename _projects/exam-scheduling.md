---
lang: fr
title: "Planification d'Examens Intelligente"
date: "2023-12-01"
category: "opt"
tags: ["Python", "Optimisation", "Algorithmes", "Recherche Opérationnelle"]
description: "Algorithme d'optimisation combinatoire pour la génération automatique de calendriers d'examen universitaires sans conflits, minimisant les contraintes."
image: "assets/img/prep_img_project.png"
github: "https://github.com/StephaneBah"
demo: ""
status: "Terminé"
---

## Aperçu

Système automatique de planification d'examens universitaires tenant compte de multiples contraintes : disponibilité des salles, des professeurs, absence de conflits pour les étudiants, et préférences horaires.

## Le Problème

Générer un calendrier d'examens manuellement prend plusieurs jours à l'administration d'une université. Les conflits (deux examens simultanés pour le même étudiant) sont fréquents et nécessitent des replanifications coûteuses.

## Approche Technique

Modélisation comme un problème de **coloration de graphe** avec contraintes dures et molles :

- **Contraintes dures** : pas de conflit étudiant, capacité salle respectée
- **Contraintes molles** : éviter les examens consécutifs, respecter les préférences professeurs

Algorithmes implémentés et comparés :

1. **Algorithme glouton** : solution initiale rapide, base de départ
2. **Recherche locale (hill-climbing)** : amélioration itérative de la solution
3. **Programmation par contraintes** : solution optimale sur petites instances
4. **Méta-heuristiques** : simulated annealing pour les grandes instances

## Résultats

- Génération d'un calendrier valide en **< 1 seconde** pour 200 examens
- **0 conflit** sur toutes les instances testées
- Réduction de **25%** du nombre de jours d'examen vs planification manuelle
- Score de satisfaction des contraintes molles : 87%

## Stack

Python · NumPy · Pandas · NetworkX · Matplotlib · OR-Tools

## Impact

Ce type d'outil est directement applicable à l'IFRI-UAC et d'autres institutions béninoises. La prochaine version intégrerait une interface web permettant à l'administration d'importer les contraintes via Excel.
