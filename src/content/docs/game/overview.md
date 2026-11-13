---
title: Overview
description: What Project Vita is and how it plays.
sidebar:
  order: 1
---

Project Vita is a **sandbox life simulation** viewed through an isometric camera. You are an
*architect and observer*: you build houses, furnish them, move people (agents) in and watch what
happens. You never command an agent directly. Everything they do comes from their needs,
personality, schedule, relationships and the objects around them.

## Design pillars

- **Smart objects, simple agents.** Agents know nothing hardcoded about the world. Objects
  *advertise* what they offer ("I satisfy Hunger, up to 80"), and agents pick the most
  attractive advertisement.
- **Emergence over scripting.** There are no cutscenes and no scripted storylines.
- **Legible minds.** Intent bubbles, need arrows, alerts and a notification feed show what
  agents want and feel. If a behaviour can't be read on screen, it isn't finished.
- **Simulation first.** The simulation runs on a fixed, deterministic tick independent of
  rendering, so you can pause or speed up time without changing the outcome.
- **Data-driven content.** Objects, interactions, jobs and social actions are defined in data
  files, so new content doesn't need code changes.

## Tech

- Godot 4.7, GDScript
- 3D world with an orthographic isometric camera
- A pure, deterministic simulation layer kept separate from the presentation
