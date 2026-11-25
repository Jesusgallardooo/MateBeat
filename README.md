# MateBeat-DWEC

## Backlog:

### Hito 1: 

#### Funcionalidades:

- **Listado de playlists:** En `js/ui.js` (`pintarListaPlaylists()`), recorremos el array de `playlists` de `datos.js` para ir creando cada tarjeta (`<article>`) desde cero, limpiando antes el contenedor para no duplicar elementos (aunque ahora mismo no sea necesario en esta función, a futuro cuando tenga que implementar el buscador, seguramente me servirá). Para mostrar el nombre del género en la etiqueta de cada tarjeta, uso la función `obtenerGenero()`, que lo encuentra a través del `generoId` de la playlist con el array de `generosMusicales`.

- **Mostrar detalles de cada playlist al clicar:** Al crear cada tarjeta en `pintarListaPlaylists()`, le asigno un `addEventListener('click')` que avisa a `main.js` con la playlist que ha sido pulsada. Desde ahí se llama a `mostrarDetallesPlaylist()`, que vacía el contenedor interior del `<dialog>`, monta toda su estructura HTML en memoria con `crearDetallesPlaylist()` (título, botón de cerrar, género, creador, duración, likes, descripción y la lista de canciones iniciales) y abre un "popup" con `modal.showModal()`.

#### Mapa de pantallas:

- [**bienvenida.html**](/html/bienvenida.html)
- [**registro.html**](/html/registro.html)
- [**inicioDeSesion.html**](/html/inicioDeSesion.html)
- [**perfil.html**](/html/perfil.html)
- [**ayuda.html**](/html/ayuda.html)
- [**index.html**](/index.html) (menú principal y única página implementada con js en este hito)

### Hito 2:

#### Mapa de validaciones:

**1. Formulario de registro y edición (`registro.html`)**

| Campo | ¿Obligatorio? | Qué se comprueba | Cuándo se valida |
| :--- | :--- | :--- | :--- |
| **Usuario** (`registro-usuario`) | Sí | Que no esté vacío (quitando espacios), que tenga entre 3 y 20 caracteres, sin espacios y solo letras, números o guion bajo (`_`). También que no exista ya otro usuario con ese nombre en `localStorage` (salvo si se está editando ese mismo usuario). | Al salir del campo (`blur`), al escribir si ya se ha tocado (`input`) y al enviar (`submit`). |
| **Correo electrónico** (`registro-email`) | Sí | Que no esté vacío, que tenga formato válido (`usuario@dominio.com`) y que no esté ya registrado por otro usuario. | Al salir del campo (`blur`), al escribir si ya se ha tocado (`input`) y al enviar (`submit`). |
| **Contraseña** (`registro-password`) | Sí (al crear) / Opcional (al editar) | Al registrar un usuario nuevo es obligatoria. Al editar, si se deja en blanco se mantiene la contraseña anterior; si se escribe una nueva, tiene que tener mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número. | Al salir del campo (`blur`), al escribir si ya se ha tocado (`input`) y al enviar (`submit`). |
| **Fecha de nacimiento** (`registro-fecha`) | Sí | Que no esté vacía, que no sea una fecha futura y que el usuario sea mayor de edad (mínimo 18 años). | Al salir del campo (`blur`), al cambiar la fecha (`input`) y al enviar (`submit`). |
| **Aceptar condiciones** (`registro-condiciones`) | Sí | Que la casilla esté marcada. | Al cambiar su estado (`change` / `input`) y al enviar (`submit`). |

**2. Formulario de contacto (`ayuda.html`)**

| Campo | ¿Obligatorio? | Qué se comprueba | Cuándo se valida |
| :--- | :--- | :--- | :--- |
| **Nombre** (`contacto-nombre`) | Sí | Que no esté vacío (quitando espacios) y que tenga entre 3 y 40 caracteres. | Al salir del campo (`blur`), al escribir si ya se ha tocado (`input`) y al enviar (`submit`). |
| **Correo electrónico** (`contacto-email`) | Sí | Que no esté vacío y que tenga formato de correo válido (`usuario@dominio.com`). | Al salir del campo (`blur`), al escribir si ya se ha tocado (`input`) y al enviar (`submit`). |
| **Teléfono** (`contacto-telefono`) | Depende | Es opcional por defecto, pero pasa a ser obligatorio si está marcada la casilla de llamada. Si se escribe algo, tiene que tener 9 dígitos empezando por 6, 7, 8 o 9. | Al salir del campo (`blur`), al escribir (`input`), al marcar/desmarcar la casilla de llamada (`change`) y al enviar (`submit`). |
| **Prefiero que me llaméis** (`contacto-llamar`) | No | Casilla que activa o desactiva si el teléfono es obligatorio. | Al cambiar su estado (`change`), vuelve a comprobar el campo del teléfono al momento. |
| **Motivo** (`contacto-motivo`) | Sí | Que se haya elegido una opción válida de la lista desplegable. | Al salir del campo (`blur`), al cambiar opción (`input`) y al enviar (`submit`). |
| **Mensaje** (`contacto-mensaje`) | Sí | Que no esté vacío y que tenga entre 15 y 300 caracteres. También lleva un contador dinámico (`0 / 300`). | Al salir del campo (`blur`), al escribir (`input`, actualizando el contador) y al enviar (`submit`). |

#### Qué he hecho:

- **Páginas HTML (`registro.html`, `usuarios.html`, `ayuda.html` y `mensajes.html`):** He preparado los dos formularios desactivando los avisos por defecto del navegador para mostrar los míos propios debajo de cada campo, junto con el contador de caracteres en el mensaje. Además, he creado las páginas `usuarios.html` y `mensajes.html` para poder consultar todo lo que se va guardando.
- **Guardar datos (`almacen.js`):** He creado las funciones necesarias para guardar, buscar, modificar y borrar tanto usuarios como mensajes en el navegador (`localStorage`), de modo que los datos no se pierdan al recargar la página.
- **Comprobaciones (`validacion.js`):** He añadido todas las reglas para revisar los datos antes de guardarlos (que no se repitan usuarios o correos, que se cumpla la edad mínima y que el teléfono solo sea obligatorio si se marca la casilla de llamada), devolviendo el texto del aviso si algo está mal.
- **Cambios en pantalla (`ui.js`):** He creado las funciones que muestran y quitan los mensajes de error en rojo, rellenan los campos automáticamente cuando vas a editar un usuario, actualizan el contador de letras del mensaje y dibujan las tarjetas en las listas de usuarios y mensajes enviados.
- **Funcionamiento y botones (`main.js`):** He conectado los formularios para que revisen los campos mientras escribes o al salir de ellos, lleven el cursor al primer fallo si intentas enviar algo mal, guarden los datos, te lleven a la página de la lista y permitan editar o borrar cada elemento desde sus botones.
- **Diseño (`styles.css`):** He dado estilo a los avisos de error, a los bordes de los campos incorrectos y a las tarjetas de usuarios y mensajes para que encajen con el aspecto de MateBeat.

#### Qué falta:

- No he añadido las cookies para recordar datos en el formulario de contacto porque todavía no lo hemos visto en clase en profundidad y no me da tiempo a mirarlo por mi cuenta antes de la entrega.