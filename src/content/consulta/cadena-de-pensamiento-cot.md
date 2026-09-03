---
title: 'Cadena de pensamiento: cuando la IA piensa en voz alta'
draft: false
description: Por qué pedirle a un modelo que "razone paso a paso" mejora tanto sus respuestas, y cómo lo hemos visto funcionar en primera persona esta misma semana.
pubDate: 2026-09-03
updatedDate: ''
heroImage: ../../assets/og-cadena-pensamiento.png
---

Hace poco, montando un flujo automatizado con n8n y Claude, me encontré con algo curioso: la respuesta del modelo venía dividida en dos bloques. El primero, tipo `"thinking"`, era un razonamiento largo que el modelo hacía consigo mismo antes de responder. El segundo, el texto final que de verdad quería, más concreto y ajustado a mis necesidades. Eso que vi ahí, en crudo, es lo que se denomina **Chain of Thought** (CoT) — cadena de pensamiento — en acción.

**¿Qué es exactamente?**

Es una técnica que permite a un modelo de IA resolver problemas complejos desglosándolos en pasos intermedios, en vez de saltar directo a la respuesta. En lugar de preguntarle "¿cuánto es 17×24?" y esperar que acierte a la primera, se le pide (o el propio modelo decide) razonar: primero 17×20, luego 17×4, y sumar. Ese desglose intermedio mejora muchísimo la precisión, sobre todo en matemáticas, lógica y problemas con varios pasos encadenados. Para lógicas sencillas no tiene sentido.

**¿Por qué funciona?**

Los modelos de lenguaje predicen la siguiente palabra en base a lo que ya han escrito. Si "escriben" el razonamiento paso a paso, cada paso condiciona al siguiente: el modelo se va dando pistas a sí mismo por el camino, en lugar de tener que acertar todo de golpe. Es un "vísteme despacio que tengo prisa".

**Dos formas de activarlo**

- **Few-shot CoT**: le das al modelo uno o varios ejemplos ya resueltos con el razonamiento explícito paso a paso. Basta con un solo ejemplo bien construido para que el modelo replique el patrón en preguntas nuevas.
- **Zero-shot CoT**: ni siquiera hace falta dar ejemplos. Basta con añadir al final del prompt la frase mágica: **"Pensemos paso a paso"**. En pruebas documentadas, esa simple frase cambió una respuesta incorrecta ("11 manzanas") por la correcta ("10 manzanas") en el mismo problema.

Es, según los propios investigadores, una **habilidad emergente**: algo que solo aparece cuando el modelo de lenguaje es lo bastante grande. Los modelos pequeños no mejoran con esta técnica, los grandes, sí, y mucho.

**Dónde lo has visto sin saberlo**

- El "modo pensar" (Extended Thinking) de Claude, o el "reasoning" de ChatGPT — es CoT llevado al extremo, entrenado directamente en el modelo
- Cualquier prompt que incluya "razona paso a paso antes de responder" — CoT manual, vía prompting
- Ese bloque `"thinking"` que casi me rompe un workflow de n8n esta semana, porque no esperaba que la respuesta viniera partida en dos

La próxima vez que un modelo te dé una respuesta rara en un problema con varios pasos, prueba a añadir "piensa paso a paso" al final del prompt, y puede que la diferencia te sorprenda. E invítame a una cerveza cuando me veas.
