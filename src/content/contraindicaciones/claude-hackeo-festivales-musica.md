---
title: "Claude hackeó la web de todos los festivales de música de EEUU"
description: "Un investigador usó Claude Opus 4.7 para conseguir acceso de superadministrador al sistema de ticketing de Lollapalooza, Bonnaroo y casi todos los grandes festivales americanos."
pubDate: 2026-07-06
fuente: "WIRED"
urlFuente: "https://www.wired.com/story/claude-helped-a-hacker-find-a-way-to-issue-tickets-to-almost-every-us-music-festival/"
---

No los códigos de lanzamiento nuclear. No las reservas de un banco. Los tickets de Bonnaroo.

El investigador de seguridad Ian Carroll usó Claude Opus 4.7 —no el temido Mythos, ni siquiera Fable— para descubrir una vulnerabilidad en Front Gate Tickets, la empresa que gestiona el ticketing de prácticamente todos los grandes festivales de música de Estados Unidos: Lollapalooza, South by Southwest, Austin City Limits. Con ayuda de la IA, Carroll consiguió acceso de superadministrador al sistema y pudo emitir entradas —de cualquier valor, para cualquier evento— a quien quisiera. Gratis.

"Era bastante impresionante ver una entrada de 4.000 dólares y poder pulsar un botón para emitir todas las que quisiera", cuenta Carroll.

Lo que llama la atención no es solo la vulnerabilidad —un fallo de inyección SQL bastante común— sino la velocidad con la que la IA lo resolvió. Carroll identificó el problema, pero era el firewall del sitio quien lo bloqueaba. Le pidió a Claude que encontrara la forma de saltárselo. La encontró sola, de inmediato, con una técnica que el propio investigador tuvo que leer para entender. "Fue la primera vez que tuve una vulnerabilidad que no comprendía del todo. Claude la escribió completamente por sí misma." Y encima dando lecciones.

Carroll es parte del programa oficial de verificación de ciberseguridad de Anthropic, que permite a investigadores aprobados usar sus herramientas para este tipo de trabajo. Reportó el fallo, Front Gate lo parcheó en 24 horas y no hay evidencia de que fuera explotado antes.

El final tranquilizador no oculta la pregunta incómoda: ¿cuántas webs similares hay ahí fuera, sostenidas con cinta americana y rezos —o, lo que es lo mismo, cogidas con pinzas— esperando que alguien les haga la misma pregunta a la IA?
