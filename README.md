# Tribuna · Práctica de oratoria

App para el teléfono que sirve para practicar cómo armar y dar discursos en público. Tiene ejercicios guiados y mide tu progreso.

Es una app web instalable (PWA): no necesita servidor, base de datos ni compilación. Funciona sin conexión y guarda todo solo en el teléfono.

## Qué incluye

- **Sesión diaria guiada**: un calentamiento, el ejercicio principal de tu etapa y uno de agilidad.
- **23 ejercicios en 6 etapas**: voz y respiración, claridad y ritmo, estructura, improvisación, storytelling y presencia escénica.
- **Constructor de discursos**: gancho, mensaje central, ideas, historia, cierre y llamada a la acción. Lo ensayás leyendo, con tarjetas o sin ayuda.
- **Medición**: graba audio o video, calcula palabras por minuto y muletillas por minuto, y te pide una autoevaluación. Muestra gráficos de evolución, racha, nivel y una comparación con tu diagnóstico inicial.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Toda la app: contenido, lógica y estilos |
| `manifest.webmanifest` | Nombre, colores e íconos para instalarla |
| `sw.js` | Hace que funcione sin conexión |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Íconos |

Todas las rutas son relativas, así que la app funciona en cualquier dirección: en la raíz de un dominio o en una subcarpeta.

## Publicarla con GitHub Pages

1. En el repositorio, entrá a **Settings → Pages**.
2. En **Source** elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y tocá **Save**.
3. En uno o dos minutos queda publicada en `https://<usuario>.github.io/tribuna/`.

En la cuenta gratuita de GitHub, Pages solo funciona con repositorios públicos. La app no contiene datos personales: lo que cargás queda en tu teléfono.

## Instalarla en el teléfono

- **iPhone (Safari)**: Compartir → «Agregar a pantalla de inicio».
- **Android (Chrome)**: menú ⋮ → «Instalar app».

El micrófono y la cámara solo funcionan con `https`, y GitHub Pages ya lo usa.

## Probarla en la computadora

```bash
python3 -m http.server 8000
# abrí http://localhost:8000
```

## Actualizar la app

Si cambiás `index.html`, la próxima vez que abras la app con conexión se descarga la versión nueva. Si cambiás otros archivos, subí la versión de `CACHE` en `sw.js` (por ejemplo, de `tribuna-v2` a `tribuna-v3`).
