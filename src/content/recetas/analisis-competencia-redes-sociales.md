---
title: 'Análisis de competencia en redes sociales: automatizado, no manual'
draft: true
description: Dejar de copiar métricas a mano de Instagram. Con un scraper, un flujo automatizado y una IA que interpreta los datos, el análisis se repite solo cada semana.
pubDate: 2026-09-02
etiqueta: Automatización
---

Mirar las cuentas de Instagram de la competencia a mano —contar likes, apuntar horarios, copiar hashtags en un Excel— es un trabajo que nadie disfruta y que además caduca en cuanto lo terminas, eso ya suena a otra época. La alternativa: automatizarlo entero, y que solo tengas que leer las conclusiones.

## Los ingredientes

- Una cuenta en [Apify](https://apify.com) (el plan gratuito da para empezar)
- Un actor de scraping de Instagram (hay varios en el Apify Store, ya probados)
- n8n, para encadenar los pasos sin escribir código
- Claude o cualquier modelo con buen razonamiento, para interpretar los datos en bruto

## El flujo

**1. Trigger programado** — un nodo Schedule en n8n dispara el proceso cada semana, el día y hora que elijas.

**2. Petición al scraper** — un nodo HTTP Request llama al actor de Apify vía su API, pasándole la URL de la cuenta a analizar y cuántos posts quieres traer:

```json
{
  "directUrls": ["https://www.instagram.com/CUENTA/"],
  "resultsType": "posts",
  "resultsLimit": 15
}
```

**3. Los datos que importan** — de la respuesta, lo que de verdad cuenta no es la publicación en sí, es el patrón: `likesCount` y `commentsCount` (engagement), `timestamp` (frecuencia y horario de publicación), `type` (foto, carrusel o vídeo), `hashtags`. El resto —comentarios, avatares, URLs de imágenes— es ruido para este propósito.

**4. La IA interpreta** — un nodo de Claude recibe ese resumen y responde a lo que de verdad importa: ¿qué formato les funciona mejor? ¿A qué hora publican? ¿Qué engagement rate mueven de media? ¿Hay algún patrón de hashtags que se repita en sus posts más exitosos?

**5. El informe llega solo** — un email semanal, sin que tengas que abrir Instagram ni una vez.

## El prompt de interpretación

```plain
Eres un analista de redes sociales. Te paso los datos en 
bruto de los últimos 15 posts de una cuenta de Instagram.

Identifica:
- Frecuencia de publicación y horario habitual
- Formato que genera más engagement (foto/carrusel/vídeo)
- Engagement rate medio (likes+comentarios / total de posts)
- Patrones de hashtags en los posts más exitosos

Datos: [JSON de los posts]
```

***

Esto convierte una tarea tediosa en un informe que llega solo cada lunes por la mañana. Si quieres montarlo para tu propio caso, puedes consultarme [aquí](/contacto).
