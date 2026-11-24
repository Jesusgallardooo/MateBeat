export function obtenerGenero(generos, generoId){
    for (const genero of generos){
        if (genero.id === generoId){
            return genero.nombre;
        }
    }
    return 'Género desconocido';
}

export function limpiar(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

export function pintarListaPlaylists(contenedor, playlists, generos, playlistPulsada) {
    limpiar(contenedor);

    for (const playlist of playlists) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta-playlist';

        const info = document.createElement('div');

        const titulo = document.createElement('h3');
        titulo.textContent = playlist.titulo;

        const detalle = document.createElement('p');

        const autor = document.createElement('strong');
        autor.textContent = playlist.creador;

        detalle.append(
                'Por ', autor,` - ${playlist.numCanciones} canciones (${playlist.duracion})`
            );

        info.appendChild(titulo);
        info.appendChild(detalle);

        const genero = document.createElement('span');
        genero.className = 'badge-genero';
        genero.textContent = obtenerGenero(generos, playlist.generoId);

        tarjeta.appendChild(info);
        tarjeta.appendChild(genero);

        tarjeta.addEventListener('click', () => {
            if (playlistPulsada) {
                playlistPulsada(playlist);
            }
        });

        contenedor.appendChild(tarjeta);
    }
}

export function crearDetallesPlaylist(modal, playlist, generos){

    const contenedorDetalles = document.createElement(`div`)
    const genero = obtenerGenero(generos, playlist.generoId);

    const cabecera = document.createElement(`div`);
    cabecera.className = `detalle-cabecera`;

    const btnCerrar = document.createElement('button');
    btnCerrar.type = 'button';
    btnCerrar.className = 'btn-cerrar-modal';
    btnCerrar.textContent = '✕';
    btnCerrar.addEventListener('click', () => modal.close());

    const titulo = document.createElement(`h2`);
    titulo.textContent = playlist.titulo;

    cabecera.append(titulo, btnCerrar);

    const infoPlaylist = document.createElement('div');
    infoPlaylist.className = 'detalle-meta';

    const etiquetaGenero = document.createElement(`span`);
    etiquetaGenero.className = `badge-genero`;
    etiquetaGenero.textContent = genero;

    const autor = document.createElement(`strong`);
    autor.textContent = playlist.creador;

    const duracion = document.createElement(`span`);
    duracion.textContent = playlist.duracion

    const likes = document.createElement(`p`);
    likes.textContent = `${playlist.likes} me gusta <3`;

    infoPlaylist.appendChild(autor);
    infoPlaylist.appendChild(duracion);
    infoPlaylist.appendChild(likes);

    const detalles = document.createElement(`div`);
    detalles.className = `detalle-resena`;

    const descripcion = document.createElement(`strong`);
    descripcion.textContent = playlist.descripcion

    const listaCancionesIniciales = document.createElement(`ul`);

    for (const cancion of playlist.cancionesIniciales){
        const elemento = document.createElement(`li`);
        elemento.textContent = cancion
        listaCancionesIniciales.appendChild(elemento)
    }

    /*
const cancion1 = document.createElement(`li`);
    cancion1.textContent = playlist.cancionesIniciales[0];

    const cancion2 = document.createElement(`li`);
    cancion2.textContent = playlist.cancionesIniciales[1];

    const cancion3 = document.createElement(`li`);
    cancion3.textContent = playlist.cancionesIniciales[2];
    
    listaCancionesIniciales.appendChild(cancion1);
    listaCancionesIniciales.appendChild(cancion2);
    listaCancionesIniciales.appendChild(cancion3);
        */

    detalles.appendChild(descripcion);
    detalles.appendChild(listaCancionesIniciales)

    contenedorDetalles.appendChild(cabecera);
    contenedorDetalles.appendChild(etiquetaGenero);
    contenedorDetalles.appendChild(infoPlaylist);
    contenedorDetalles.appendChild(detalles);

    return contenedorDetalles;
}

export function mostrarDetallesPlaylist(modal, contenedor, playlist, generos) {
    limpiar(contenedor);
    const detalleDOM = crearDetallesPlaylist(modal, playlist, generos);
    contenedor.appendChild(detalleDOM);
    modal.showModal();
}