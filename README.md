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

#### Qué he hecho:

#### Qué falta:
