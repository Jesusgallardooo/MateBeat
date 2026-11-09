# Órbita 2: sistema visual de MateBeat

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | [MockUp](https://www.figma.com/design/7y6X9U4vnDRssik44cXqaz/Mockup-MateBeat?node-id=19-2&p=f&t=vv956EcWm74eLtMn-0) |
| Prototipo (enlace que empieza por `figma.com/proto/`) | [Pendiente de finalizar navegación] |
| Proyecto de Google Stitch (solo si lo has usado) | [Solo usado para inspiración puntual] |

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Página: Tokens de diseño (incompleto / en proceso de unificación) |
| Wireframes rediseñados con sus notas | Página: Wireframes base (sin rediseño formal anotado) |
| Componentes | Pendiente de estructurar en biblioteca |
| Mockups del happy path | Pendiente |
| Pantalla principal en el segundo ancho | Página: Móvil (Mockup adaptado a móvil) |
| Pantallas en modo oscuro | Aplicado en todos los Mockups principales |
| Guía de estilo | En proceso (definidos los tokens de variables) |

## Lista de comprobación de Figma

- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [ ] Estilos de texto, efecto y retícula vinculados a las variables.
- [ ] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
- [x] Modo oscuro aplicado con el selector de modo.
- [ ] Prototipo que recorre el happy path completo.
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
Por falta de tiempo no he podido realizar un rediseño completo ni formalizado de los wireframes. Utilicé herramientas como Stitch únicamente para ver ideas y buscar inspiración de layouts modernos para aplicaciones musicales. A partir de esa inspiración y de mis propios wireframes iniciales, pasé directamente a diseñar la estructura en Figma.

### Color
* **Color principal (`primary`):** `purple/500` (`#8F3985`). Lo elegí porque el violeta sugiere creatividad, ambiente nocturno y musicalidad, encajando a la perfección con una app de música y conexiones entre amigos.
* **Color secundario y tonos de superficie:** `indigo/900` (`#25283D`) y `indigo/800` (`#191D35`) para fondos oscuros y tarjetas, junto con toques suaves de `purple/300` (`#A675A1`) y `pink/200` (`#CEA2AC`) para bordes finos y futuras interacciones.
* **Contraste y accesibilidad:** La pareja con el contraste más bajo es el texto secundario/etiquetas en `purple/300` sobre el fondo de las tarjetas `purple/500 + 30% opacidad`. En modo oscuro mantiene una lectura cómoda sin ser un blanco agresivo, y en modo claro se apoya en el tono claro `snow/50` (`#FDF7FA`) para asegurar que el texto sea perfectamente legible sobre fondos oscuros sin perderse.

### Tipografía
Utilizo una tipografía sans-serif moderna, de trazo limpio y directo. Se han empleado pesos **Bold (Negrita)** para jerarquizar los títulos principales (`¡Hola, [Usuario]!`, títulos de secciones y encabezados de tarjetas) y pesos **Regular / Medium** para los textos secundarios, placeholders de búsqueda y menús. Esta elección busca que los usuarios jóvenes de MateBeat puedan escanear rápidamente la pantalla sin fatiga visual.

### Espaciado y retícula
* **Base de la escala:** Basada en una escala de **4/8 píxeles** (con pasos de `2px`,`4px`,`8px`, `16px`, `24px`, `32px`, `48px` y `64px`) para mantener la coherencia espacial en paddings y márgenes.
* **Retícula:** Para la versión de escritorio, el layout principal se organiza en 2 columnas principales fijando un **Sidebar lateral** y un área de contenido derecha flexible (`rellenar contenedor`). Los elementos internos usan Auto Layout con espaciados definidos.

### Componentes
* **Estado actual:** Debido al ajuste de tiempos, las pantallas se han maquetado utilizando estructuras de Auto Layout y marcos reutilizables directamente sobre los mockups. La creación de una biblioteca centralizada de componentes con sus variantes de estado (hover, pressed...) queda como tarea pendiente para completar el sistema visual.

### Responsive y modo oscuro
* **Responsive (Segundo ancho):** Al trasladar la pantalla principal al tamaño móvil, tuve que reorganizar la disposición horizontal del escritorio en un flujo único vertical. Los bloques como la cabecera y el grid de accesos rápidos pasan a apilarse de uno en uno para adaptarse al ancho estrecho de la pantalla del teléfono. El responsive está planteado e intentado, aunque por tiempo aún tiene detalles por pulir para que sea 100% fluido.
* **Modo oscuro:** Al aplicar las variables de modo oscuro, tuve que ajustar el tono de los bordes finos (`purple/300`) y las tarjetas internas (`indigo/900`) para asegurarme de que el contraste fuera el adecuado y ninguna caja se disolviera contra el fondo azul/violeta principal (`#18192A`).

## Uso de IA

Durante el trabajo en la Órbita 2 he utilizado la IA como una herramienta de soporte y aprendizaje continuo en varios puntos del proceso:

1. **Inspiración con Stitch:** Utilicé Stitch en una actividad de clase donde me generó una interfaz muy pulida y profesional. Me sirvió de inspiración para coger ideas visuales y de distribución, aunque no copié el diseño tal cual en mi mockup.
2. **Creación de tokens de diseño:** Al no dominar Figma del todo, me apoyé en la IA para estructurar y plasmar mis ideas de tokens. Una vez creadas las variables, usé la propia IA de Figma para generar un resumen claro de los tokens creados.
3. **Psicología del color:** Consulté a Gemini para fundamentar con un argumento sólido la elección de la paleta de colores (`purple`, `indigo`, `pink`) según la personalidad de la app.
4. **Asistencia con Auto Layout:** Resolví dudas puntuales con Gemini cuando me quedaba atascado ajustando jerarquías de contenedores, alturas y comportamientos (`rellenar contenedor` / `ajustar contenido`) en el mockup de escritorio.
5. **MockUp para móvil:** Por falta de tiempo y para no entregar esa parte en blanco, utilicé la IA de Figma para generar una propuesta inicial del mockup móvil a partir de mi wireframe y del diseño de escritorio. La idea es tomarla como base e inspiración para rediseñarla a mano más adelante.
6. **Refinamiento del logo:** Utilicé Stitch y Gemini para terminar de aterrizar y pulir el logo de MateBeat hasta conseguir la idea exacta que tenía en mente.
7. **Maquetación del documento:** Me ayudó a estructurar y maquetar este documento `ORBITA2.md` en formato Markdown de forma limpia y rápida.

## Lo que ha quedado pendiente

Por motivos personales de fuerza mayor y por ende, falta de tiempo en estas semanas, no he podido dejar el proyecto al 100% como me habría gustado. En concreto, ha quedado pendiente:

* **Componentes y variantes de estado:** No he tenido tiempo de convertir los elementos (botones, inputs, tarjetas) en componentes oficiales de Figma con sus variantes de estado interactivo.
* **Prototipado interactivo:** La navegación en prototipo entre las distintas pantallas (Menú, Perfil, Ayuda) no está conectada por falta de tiempo.
* **Rediseño anotado de wireframes e inventario de decisiones:** Falta unificar en un único archivo formal la guía de estilo final con los mockups y los wireframes anotados.
* **Ajuste fino del responsive móvil:** El mockup de móvil se ha dejado planteado mediante ayuda de IA como base de partida, pero requiere volver a diseñarlo a mano para que encaje perfectamente con la estructura del escritorio y con la idea que tengo en mente.
