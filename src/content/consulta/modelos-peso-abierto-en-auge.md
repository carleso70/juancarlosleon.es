---
title: Por qué los modelos de peso abierto están ganando terreno
draft: false
description: Volví a correr un modelo de IA en local después de un tiempo, para ver cómo había evolucionado. La tecnología lleva tres años aquí; lo que ha cambiado es la calidad de los modelos.
pubDate: 2026-08-31
updatedDate: ''
heroImage: ''
---

Hace poco volví a instalar Ollama en mi propio portátil —uno sin tarjeta gráfica dedicada, nada especial— para ver cómo había evolucionado esto de correr IA en local. La tecnología no es nueva: `llama.cpp`, la base que hace posible ejecutar estos modelos sin una GPU de centro de datos, nació en marzo de 2023, justo después de que se filtraran los pesos del primer LLaMA, el LLM de Meta —puedes pensar en los pesos del modelo como la "memoria" o el "conocimiento" de la IA; almacenan lo que el sistema ha aprendido de sus datos de entrenamiento— .  Este `llama.cpp` no es más que un motor de inferencia de código abierto. Ollama, la capa que lo simplifica todo, llegó ese mismo verano. Llevamos ya más de tres años con esto funcionando.

Lo que sí ha cambiado es lo que hay dentro. En diez minutos tenía un modelo respondiendo preguntas en la terminal (mis preguntas absurdas), usando mi CPU/GPU y mi RAM, sin pasar por ninguna API de pago ni mandar un solo dato a ningún servidor ajeno y con una calidad que en 2023 ni se acercaba, aunque tampoco esperes que sea el más rápido en desenfundar, todo sea dicho... 

Eso es, en la práctica, lo que significa un **modelo de peso abierto**: los parámetros del modelo —el resultado de todo su entrenamiento— se publican para que cualquiera los descargue y los ejecute donde quiera. No es lo mismo que "código abierto" en sentido estricto —no sabes con qué datos se entrenó ni cómo, solo tienes el resultado final—, pero es más que suficiente para quitarte de encima la dependencia de un proveedor.

De todos modos este post no es para hablar de "mi libro" ni de cómo pruebo yo Ollama ni Qwen ni nada de eso; es para hablar, en general, de la tendencia actual y el crecimiento de los modelos de peso abierto.

**Por qué está pasando ahora**

Cuatro motivos, y ninguno es ideológico:

- **Coste.** Cuantas más consultas haces a una IA, más pesa la factura por token. Un modelo que corres tú mismo elimina ese gasto recurrente, aunque tengas que pagar el servidor.
- **Soberanía del dato.** Sanidad, banca, administración pública — sectores que legalmente no pueden mandar datos sensibles a la nube de un tercero. Ahí el peso abierto no es una opción, es un requisito.
- **Independencia de proveedor.** Nadie quiere construir su negocio sobre una API que puede subir de precio o cambiar de condiciones de un día para otro.
- **Indepenencia de Internet**. Todo está en tu máquina.
- **Geopolítica.** China ha convertido el peso abierto en estrategia: si no puede ganar por delante en capacidad pura, compite regalando algo casi tan bueno mientras Estados Unidos cierra cada vez más sus modelos de frontera. [Kimi K3](/blog/kimi-k3-modelo-abierto), de Moonshot AI, es el ejemplo más reciente que ya contamos aquí: 2,8 billones de parámetros y el modelo abierto más grande jamás publicado.

**El ecosistema ya es real**

Llama (Meta), Mistral, DeepSeek, Qwen (Alibaba), Kimi (Moonshot), se han desprendido de la experimentalidad de los inicios, ahora son alternativas serias que compiten de tú a tú con GPT y Claude en tareas concretas, sobre todo en programación y en agentes.

Y no hace falta ser una empresa con departamento de IT para tocarlo. Se instala en diez minutos, corre en un portátil normal (en mi ASUS Vivobook sin ir más lejos), y no manda ni un dato fuera de tu máquina. Esa combinación —gratis, privado, cada vez más capaz— es la que explica por qué el peso abierto ha dejado de ser una curiosidad técnica y ha pasado a ser una alternativa real. Atrévete a probarlo.
