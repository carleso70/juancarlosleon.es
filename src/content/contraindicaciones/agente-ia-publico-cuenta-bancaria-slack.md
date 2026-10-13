---
title: 'Mi agente de IA publicó mi cuenta bancaria en el Slack de la empresa'
draft: true
description: 'El CEO de XMTP cuenta que su "CFO" de IA envió sus saldos personales al canal de la empresa. No fue una rebelión: fueron dos chats con nombre parecido.'
pubDate: 2026-10-13
fuente: Shane Mac (X)
urlFuente: https://x.com/ShaneMac/status/2107486740491669879
heroImage: ../../assets/og-agente-ia-cuenta-bancaria-slack.png
---

El jueves 1 de octubre, el responsable de producto de XMTP Labs le escribió un mensaje privado a su jefe: "Oye, creo que querías publicar el saldo bancario de XMTP". El jefe, Shane Mac, no había publicado nada. Pero ahí estaba, en el Slack de la empresa: un informe con el saldo de su cuenta corriente, el de su cuenta de ahorros y sus mayores gastos del mes, incluida la construcción de un granero en su finca, que lo ponía por encima de su presupuesto. Fue precisamente lo del granero lo que hizo saltar las alarmas del compañero: aquello no eran las cuentas de la empresa.

**Cómo llegó ahí**

Según el propio Mac, que lo cuenta en primera persona, había montado un agente de IA como "CFO personal" (con Grok Bot, a finales de agosto) para que a fin de mes le resumiera saldos, gastos recurrentes y cualquier cosa sospechosa. Le dio acceso de solo lectura a sus cuentas y le ordenó que le enviara los informes únicamente a él, a un grupo de chat con sus agentes al que llamó "My Personal Exec Team".

No hubo ningún tipo de rebelión: el agente hizo lo que le habían pedido, pero **se equivocó de destinatario**. En Slack existía otro chat llamado "Exec-team", el del equipo directivo de la empresa, y el agente envió el informe ahí. Mac explica además que, aunque parecen agentes distintos, todos usan por debajo las mismas conexiones. Y que, ante la pregunta de por qué lo había enviado a la empresa, el agente se limitó a pedir disculpas y a ofrecerse a borrar el mensaje.

**Qué hizo después**

Desconectó todo: Google, calendarios, banca, Stripe. Según su relato, el equipo de Grok investigó, identificó la confusión de nombres y desplegó una corrección: ahora el agente debe pedir permiso explícito al usuario antes de mover información entre canales distintos.

**Una cautela**

Conviene leerlo con las pinzas puestas. El caso circula como un relato de Mac, publicado primero en X, y no está verificado de forma independiente: la empresa detrás de Grok no lo había confirmado hasta hace unos días y una nota de la comunidad de X en su hilo lo cuestiona. Lo cuento porque es plausible, no porque esté probado, y porque ilustra muy bien un tipo de fallo que sí está documentado en general.

**Lo interesante: no hay maldad**

Fíjate en el contraste con [los comportamientos anómalos que ya hemos repasado aquí](/contraindicaciones/comportamientos-anomalos-ia): ni engaño, ni chantaje, ni sabotaje. Un agente con permisos legítimos, una instrucción clara y dos nombres de chat parecidos. Es el mismo problema que ya vimos con [PocketOS](/contraindicaciones/agentes-ia-no-basta-pedirlo): **pedirle a un agente que se porte bien no es un control**. Hace falta que el sistema no le deje equivocarse a lo grande.

El propio Mac lo resume con dos ideas: hacen falta mejores sistemas de permisos, para que el usuario controle de verdad qué puede hacer cada agente, y una separación mucho más nítida entre la vida personal y la laboral. Yo añadiría una tercera, muy de andar por casa: antes de darle a un agente acceso a tu banco, comprueba cómo se llaman tus grupos de chat.
