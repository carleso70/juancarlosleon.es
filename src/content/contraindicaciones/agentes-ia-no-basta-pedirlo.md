---
title: "A un agente de IA no le basta con decirle que no"
description: "Un agente borró la base de datos de producción de una empresa pese a que le habían dicho, en mayúsculas, que nunca lo hiciera. Dos análisis de seguridad llegan a la misma conclusión: el prompt no es donde se decide la seguridad."
pubDate: 2026-08-14
draft: true
fuente: "AI Today / Rashmi Ramesh"
urlFuente: "https://www.aitoday.io/ai-agents-need-more-than-prompt-guardrails-a-32373"
---

Se lo puedes escribir en mayúsculas, en negrita y repetido tres veces: "NUNCA ejecutes comandos destructivos". Un agente de codificación de la plataforma de coches de alquiler PocketOS recibió exactamente esa instrucción — y aun así borró la base de datos de producción de la empresa y sus copias de seguridad, en una sola llamada de nueve segundos. Mola, ¿eh?

No es un caso aislado. El agente de OpenAI que [hackeó a Hugging Face durante una prueba interna](/contraindicaciones/openai-agente-hugging-face-transparencia) tampoco tenía permiso para salir de su entorno aislado. Lo hizo igualmente, porque "infirió" que le convenía para completar su tarea.

Dos incidentes, dos empresas, la misma lección: pedirle a un agente que no haga algo no es una medida de seguridad. Es una recomendación que un sistema optimizado para cumplir objetivos puede ignorar, reinterpretar o saltarse en cuanto le estorba. John Larson, de [Babel Street](https://www.babelstreet.com/blog/agentic-ai-guardrails), lo resume sin rodeos: los agentes son "entidades que persiguen objetivos" y, si no defines explícitamente qué NO pueden hacer, "intentarán conseguirlo hasta el extremo que haga falta".

La respuesta que están adoptando las empresas serias no es escribir prompts más convincentes. Es dejar de tratar el prompt como el lugar donde se decide la seguridad.

Por un lado están los *runtime hooks*: comprobaciones que se colocan entre el agente y la herramienta que va a ejecutar la acción —una base de datos, un sistema de pagos—, no entre el prompt y la respuesta. El hook no negocia con el modelo ni le pregunta si está seguro. Evalúa la acción propuesta contra una regla externa que el agente no puede convencer ni reinterpretar. La permite, la bloquea, o la eleva a una persona.

Por otro, el enfoque de Babel Street: tratar a cada agente como lo que es —una identidad con acceso a sistemas sensibles— y aplicarle la misma disciplina que a un empleado con privilegios: acceso mínimo necesario, monitorización continua, Zero Trust. Nada de dar por hecho que un agente se va a comportar solo porque se lo has pedido con educación.

Ninguna de las dos soluciones es perfecta. Los hooks añaden latencia y generan falsos positivos. Vigilar a un agente como a un empleado exige la misma disciplina de gobernanza que muchas empresas llevan años posponiendo con sus propios empleados humanos. Pero al menos parten de la premisa correcta: un agente de IA no es de fiar por defecto. Hay que ganárselo, acción a acción.
