---
title: 10 hábitos para no quedarte sin tokens a media tarea con Claude Code
draft: true
description: Si usas Claude Code y notas que se ralentiza o se te "llena" la conversación a media tarea, hay hábitos sencillos que alargan mucho la vida útil de cada sesión.
pubDate: 2026-09-17
updatedDate: ''
heroImage: ../../assets/og-ahorrar-tokens-claude-code.png
---

Si trabajas con Claude Code de forma habitual, seguro que te ha pasado: empiezas una sesión y, un par de horas después, todo va más lento, las respuestas tardan más y en algún momento aparece el aviso de que la conversación se va a "compactar", todo un clásico. Eso pasa porque cada sesión tiene un espacio limitado de contexto (los "tokens"), y hay mecanismos muy simples que hacen que ese espacio te dure mucho más.

Aquí van diez, de más a menos evidentes. Una aclaración antes de empezar: esto está pensado para gente que usa **Claude Code** (la herramienta de terminal para programar con IA), no el chat normal de Claude en la web. Dicho esto, si usas la app de escritorio de Claude en modo chat, dos de los diez consejos —desactivar conectores que no uses y organizar instrucciones en Skills— te sirven igual, porque ambas cosas también consumen contexto en esa modalidad. El resto (los comandos `/context`, `/clear`, `/compact`, los hooks, los subagentes o el modo de planificación) son exclusivos de Claude Code.

**1. Mira dónde se te va el espacio**

El comando `/context` te muestra un desglose: cuánto ocupa el sistema, las herramientas activas, los mensajes de la conversación... Pero antes de optimizar nada, conviene saber dónde está el problema real. En mi caso, por ejemplo, descubrí que un 8% del contexto se lo comían herramientas conectadas (Gmail, Drive, Spotify...) que ni siquiera estaba usando en esa sesión. Ojo ahí.

**2. Limpia entre tareas distintas**

El comando `/clear` borra la conversación y empieza de cero. Si saltas de un proyecto a otro completamente distinto, usarlo evita arrastrar contexto que ya no pinta nada. Cada turno de conversación reenvía todo lo anterior, así que cuanto más larga la historia, más caro (y lento) cada mensaje nuevo.

**3. Compacta con instrucciones claras**

`/compact` resume la conversación para liberar espacio, pero si le dices qué es importante conservar, el resumen es mucho más útil que uno genérico.

**4. Usa el modelo justo para la tarea**

Para la mayoría de tareas de programación del día a día, un modelo estándar (Sonnet) rinde de sobra. Reserva los modelos más potentes (Opus) para decisiones de arquitectura complejas — cuestan más tokens y no siempre hace falta esa potencia.

**5. Desactiva los conectores que no uses**

Aquí está, para mí, el ahorro más grande y menos evidente: cada servidor MCP conectado (Gmail, Google Drive, Spotify, gestores de tareas...) ocupa espacio de contexto **aunque no lo estés usando en esa sesión**. Si trabajas en un proyecto concreto, desactivar temporalmente los que no pintan nada ahí libera bastante sitio de golpe.

**6. Filtra la salida antes de que la vea la IA**

Si un comando genera mucho texto (logs larguísimos, por ejemplo), se puede preprocesar esa salida antes de que llegue a la conversación, para no gastar tokens en ruido que no aporta nada.

**7. Mueve instrucciones a "Skills" en vez de cargarlas siempre**

En lugar de meter toda la configuración de un proyecto en un archivo que se carga al empezar cada sesión, se pueden organizar como módulos que se activan solo cuando hacen falta.

**8. Baja el "esfuerzo de razonamiento" en tareas simples**

Cuando la tarea es sencilla, pedir menos "pensamiento" explícito al modelo (hay un ajuste para esto) ahorra tokens que no aportan nada a una respuesta directa.

**9. Delega las tareas ruidosas**

Ejecutar pruebas, por ejemplo, puede generar muchísimo texto de salida. Delegarlo a un agente auxiliar que solo devuelva el resumen, en vez de que todo ese ruido entre en la conversación principal, mantiene el contexto limpio.

**10. Planifica antes de lanzarte a programar**

Usar un modo de planificación antes de escribir código evita el peor gasto de tokens de todos: hacer algo mal desde el principio y tener que rehacerlo entero.

Ninguno de estos hábitos exige nada técnico complicado — son, sobre todo, cuestión de acordarse de usarlos. Y el primero, `/context`, es el que te dice si merece la pena aplicar los demás o si tu caso concreto va sobrado de espacio.
