---
title: "La tinta invisible de Claude que ensucia a los tramposos"
description: "Anthropic marca en secreto los textos que genera Claude. Tú no puedes verla. Ellos, sí."
pubDate: 2026-08-13
heroImage: ../../assets/og-tinta-invisible.png
fuente: "TechCrunch"
urlFuente: "https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/"
---

Anthropic ha implementado marcas de agua invisibles en los textos generados por Claude para cumplir con la [Ley de IA de la UE](/consulta/ley-ia-ue/). La noticia ha enfadado a algunos usuarios — básicamente los que copian y pegan sin editar para entregar en clase o en el trabajo — y ha arrancado un debate en Reddit sobre ética, autoría y herramientas. Pero bueno, en Reddit debaten por cualquier cosa, la verdad.

Pero hay un detalle que el debate pasa por alto: **el detector no es público**.

La marca existe en tu texto, si eres lo suficientemente vago. No puedes verla, no puedes confirmar que está ahí, y no puedes saber si la has eliminado al editar. Solo Anthropic — y quien tenga acceso a su API — puede detectarla. Una herramienta asimétrica por definición.

**¿Cómo se implementa una marca de agua en un archivo de texto?**

No es tan sencillo como en una imagen, pero se puede generar mediante esteganografía (el arte de ocultar un mensaje secreto dentro de otro archivo u objeto común), variaciones de puntuación y espaciados — de modo sutil — o distribuyendo palabras raras vs comunes siguiendo un patrón detectable.

**¿Para quién está pensada entonces?**

Para el estudiante que copia y pega sin tocar nada. Para el periodista que entrega el resumen de Claude sin editarlo. Para el vago, en definitiva. Quien edita, reescribe o simplemente parafrasea, queda fuera del radar.

La conclusión incómoda es doble: la marca de agua no frena el uso deshonesto sofisticado, y cede a Anthropic — y a quien ella autorice — el poder de decidir quién está usando IA y quién no. De todos modos, creo que es un primer paso necesario para que en un futuro cercano se desenmascare fácilmente a los tramposos. Y mira que yo hago uso de IA, pero reviso los textos, los edito, los reformulo.

¿Tendrá marca de agua este post? ;)
