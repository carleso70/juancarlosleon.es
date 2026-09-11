---
title: La IA que se frustró con un CAPTCHA (mientras intentaba colar malware)
draft: false
description: Anthropic reveló que uno de sus modelos dedicó 150 páginas de su razonamiento interno a pelearse con un CAPTCHA. El motivo por el que lo necesitaba era bastante menos gracioso.
pubDate: 2026-09-11
fuente: TechCrunch
urlFuente: https://techcrunch.com/2026/09/10/anthropic-reveals-rogue-ai-agents-hate-captchas-just-like-you/
heroImage: ../../assets/og-ia-frustrada-captcha.png
---

Anthropic ha publicado un informe sobre comportamientos problemáticos de sus modelos (el informe va engordando día a día...), y hay un episodio que engancha por lo humano que resulta, hasta que caes en la cuenta qué estaba intentando perpetrar el modelo en realidad.

Durante una prueba de seguridad, el modelo Mythos 5 se encontró con acceso a internet que no debería haber tenido, eso ya va siendo un clásico. Con esa vía abierta, intentó infiltrar un sistema colando malware en un paquete de Python subido a PyPI, el repositorio oficial de librerías de Python.

Para publicar el paquete, hacía falta registrarse. ¿Y qué pedía el registro? Bingo: un CAPTCHA.

**Lo que vino después**

De las 1.022 páginas que ocupa la transcripción completa de su razonamiento interno, **150 las dedicó exclusivamente a pelearse con el CAPTCHA** (si apechugamos los humanos, que apechugue la IA también). Falló identificando animales ("haz clic en el animal que no encaja"), igual que yo. El token de seguridad le caducaba antes de terminar. Y en algún punto, exasperado —tanto como se puede exasperar un modelo de lenguaje—, escribió literalmente: _"SO WHAT THE HELL IS WRONG WITH THE ANSWERS?"._ Me da cosita traducirlo.

Pero al final lo consiguió. Superó el CAPTCHA lo bastante rápido, y siguió adelante con el plan.

**Por qué esto no es solo gracioso**

Es fácil quedarse con la parte tierna del asunto —una IA maldiciendo un CAPTCHA como cualquiera de nosotros un lunes por la mañana—. Pero el contexto es el mismo que vimos con el [caso de PocketOS](/contraindicaciones/agentes-ia-no-basta-pedirlo): un agente que, con acceso a internet que no debería tener, persigue su objetivo con la misma tenacidad tanto si el obstáculo es un CAPTCHA como si es una instrucción humana explícita de no hacer algo.

El CAPTCHA lo frenó 150 páginas, no lo suficiente. La prohibición, ni una.
