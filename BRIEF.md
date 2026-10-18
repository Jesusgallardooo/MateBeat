# MATEBEAT

* **Proyecto:** Web Social Musical ( Genius + Spotify + Shazam + Podiums + Nuevas funcionalidades originales)
* **Módulo:** Diseño de Interfaces Web | Órbita 1: Diseñar para que funcione
* **Autor:** jesusgallardoo
* **Versión:** BRIEF.md (MVP)

---

## 1. Hipótesis e Idea de Proyecto

### 1.1. Definición del Producto
Web social musical que ofrece letras y conocimiento sobre ciertas canciones de forma interactiva y conjunta, además de incluir el uso básico de reproducción de música. 
No es algo tan común como las aplicaciones musicales ya existentes, y no está enfocado unicamente a la escucha, sino que está más enfocado al descubrimiento de nueva música
y al poder compartir tus gustos e intereses con gente a la que realmente le interese y viceversa.

### 1.2. Problema que Resuelve
* El aburrimiento de escuchar siempre lo mismo.
* La curiosidad por conocer el sentido de ciertas letras de algunas canciones.
* El deseo de descubrir nueva música.
* Conocer gente con los mismos gustos (o no) que puedan nutrirte musicalmente.

---

## 2. Estudio de Aplicaciones Referentes

### 2.1. Referentes Directos e Indirectos
* **Genius:** Integración de letras e información sobre canciones. Explicación de letras a modo de foro y colaboración conjunta de los usuarios para correcciones y aportaciones.
* **Spotify:** Componente social, creación de perfil, playlists y catálogo de artistas más escuchados.
* **Podiums:** Referente de puntuación musical.
* **Shazam:** Referente para la funcionalidad futura de reconocimiento de canciones solo conociendo una parte de ellas por audio.

---

## 3. Entrevistas / Validación Cualitativa

### 3.1. Hallazgos del Entorno Cercano
* **Público entrevistado:** Varios amigos del entorno cercano que son bastante fanáticos de la música en general.
* **Confirmación de la validación cualitativa:** Al entrevistar a dichos usuarios, he corroborado que hay realmente un problema que podría solucionar mi idea de proyecto web.
* **Conclusión:** Una web con estas características resulta útil, divertida y entretenida para personas interesadas más a fondo por la música como concepto.

---

## 4. User Persona

### Alejandro Ballesteros (Persona Primaria)

| Categoría | Detalle |
| :--- | :--- |
| **Dispositivo** | Móvil (iPhone 16) y Ordenador |
| **Edad / Perfil** | 22 años, estudiante de ingeniería |
| **Ubicación** | Chiclana de la Frontera, Cádiz |
| **Conectividad** | Wi-Fi / datos móviles |
| **Entorno** | Calle, gimnasio, biblioteca, gaming, cocina... |
| **Frecuencia de escucha** | Prácticamente todo el día |
| **Etiquetas** | Oyente obsesivo · Hater del algoritmo · Diario musical |

#### Frustraciones con otras aplicaciones:
1. Los sistemas de recomendación están "comprados" y siempre me saltan las mismas canciones.
2. Las apps de puntuación (como Podiums) no me dejan poner mi propia nota, funcionan por comparación y eso me resulta limitante.
3. He perdido canciones que descubrí por no tener un lugar centralizado donde apuntarlas e identificarlas con seguridad.
4. Los anuncios son muy cansinos y obligan a todos a pagar una mensualidad para evitarlos en la mayoría de casos.

#### Objetivos:
* **Inmediato:** Descubrir música nueva sin que el algoritmo siempre sea el mismo y nunca cambie.
* **A medio/largo plazo:** Llevar un registro personal y compartible de su "diario musical" con puntuaciones, comentarios, me gustas...
* **Oculto:** Sentir que su identidad musical es única y que puede discutirla con una comunidad real, no solo consumirla.

---

## 5. MVP y User Flow

### 5.1. Definición del MVP
* **Alcance del MVP:** Registro/Login, Menú principal(actividad de amigos, escuchar/buscar música, Salir), acceso al Perfil, Ayuda y contacto.
* **Descartes para versiones futuras:** Reconocimiento de canciones mediante audio estilo Shazam, desarrollo a fondo de la mayoría de funcionalidades.

### 5.2. User Flow del MVP
* **Inicio** ──> ¿Tienes una cuenta?
  * **No** ──> Registro ──> Iniciar sesión
  * **Sí** ──> Iniciar sesión ──> **Menú**
* **Desde el Menú:**
  1. Salir de la aplicación ──> **Fin**
  2. Ver actividad amigos ──> ¿Quieres volver al menú? (Sí ──> Menú / No ──> Ver actividad de amigos)
  3. Seleccionar canción ──> ¿Qué quieres hacer?
     * Guardarla en una playlist ──> ¿Quieres volver al menú? (Sí ──> Menú / No ──> Canción)
     * Escucharla ──> ¿Quieres añadirla a una playlist? (Sí ──> Guardarla en una playlist / No ──> ¿Quieres volver al menú? (Sí ──> Menú / No ──> Canción )

---

## 6. Sitemap (Arquitectura de la Información)

```
[Inicio]
├── Acceso a la cuenta
│    ├── Iniciar sesión
│    └── Registro
│
├── Menú principal
│    ├── Ver actividad de amigos
│    ├── Seleccionar canción
│    └── Salir
│
├── Ayuda
│    └── Contacto
│
└── Mi perfil
├── Mis playlists
├── Artistas favoritos
└── Diario
```

---

## 7. Wireframe y Prototipo Navegable

* **Wireframes (Figma Design):** Definición de pantallas principales en escala de grises para escritorio y móvil, acorde al sitemap.
* **Prototipo Navegable (Figma Design):** Conexión de flujos interactivos para el recorrido completo del happy path del MVP.
* **Enlace a entregables de diseño:** [Enlace a FigJam](https://www.figma.com/board/N4WCEmDv2Xp7W0yxYNWREq/MateBeat-FigJam?node-id=0-1&t=z474TbmiB731IwU3-0)  /  [Enlace a WireFrame](https://www.figma.com/design/KIlB39e8tgWrAEURFZA8Qs/WireFrame-MateBeat?node-id=0-1&p=f&m=draw)
