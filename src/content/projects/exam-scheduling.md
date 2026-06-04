---
title: "Système automatisé de planification d'examens"
description: "Génération automatique de calendriers d'examens universitaires par programmation par contraintes, avec assignation optimale des salles sous contraintes de capacité et d'emploi du temps."
date: 2024-12-01
category: opt
tags: ["Python", "Constraint Programming", "Optimisation", "Recherche Opérationnelle"]
github: "https://github.com/StephaneBah"
status: "Terminé"
---

## Aperçu

Système automatisé de planification d'examens universitaires reposant sur la **programmation par contraintes**, conçu pour optimiser les calendriers d'examens d'une université.

## Le problème

Établir un calendrier d'examens manuellement est long et source d'erreurs : conflits d'horaires pour les étudiants, salles surchargées, examens trop rapprochés. L'enjeu est de produire automatiquement un planning **valide et optimisé**.

## Approche : programmation par contraintes

La solution assigne efficacement les examens aux salles disponibles tout en respectant les contraintes clés :

- **Capacité des salles** : ne jamais dépasser le nombre de places
- **Emplois du temps des étudiants** : aucun conflit (deux examens simultanés)
- **Temps entre examens** : espacement suffisant pour les étudiants

## Stack

Python · Programmation par contraintes · Recherche opérationnelle

## Impact

Ce type d'outil est directement applicable à l'IFRI-UAC et à d'autres institutions, en remplaçant un processus manuel de plusieurs jours par une génération automatique en quelques instants.
