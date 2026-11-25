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

// Muestra cada error correspondiente
export function mostrarError(input, mensaje) {
        const idSpan = input.getAttribute("aria-describedby");
        const spanError = document.getElementById(idSpan);

        if (mensaje !== null) {
            input.setAttribute("aria-invalid", "true");
            spanError.textContent = mensaje;
        } else {
            input.removeAttribute("aria-invalid");
            spanError.textContent = "";
        }
    }

// Rellena el formulario dentro de la edición de cada usuario
export function rellenarFormularioEditar(usuario) {
    document.getElementById("titulo-registro").textContent = "Editar usuario";
    document.getElementById("btn-registro").textContent = "Guardar cambios";

    document.getElementById("registro-usuario").value = usuario.usuario;
    document.getElementById("registro-email").value = usuario.email;
    document.getElementById("registro-fecha").value = usuario.fechaNacimiento;
    document.getElementById("registro-condiciones").checked = Boolean(usuario.condiciones);
}

// Pinta los usuarios 
export function pintarUsuarios(listaUsuarios, usuarios) {
    if (!listaUsuarios) {
        return;
    }

    // Vaciamos la lista antes de volver a pintarla
    listaUsuarios.textContent = "";

    if (usuarios.length === 0) {
        const liVacio = document.createElement("li");
        liVacio.textContent = "No hay usuarios registrados todavía.";
        listaUsuarios.appendChild(liVacio);
        return;
    }

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const li = document.createElement("li");

        const nombre = document.createElement("h3");
        nombre.textContent = usuario.usuario;

        const correo = document.createElement("p");
        correo.textContent = usuario.email;

        const fecha = document.createElement("p");
        fecha.textContent = usuario.fechaNacimiento;

        const cajaBotones = document.createElement("div");

        const btnEditar = document.createElement("button");
        btnEditar.type = "button";
        btnEditar.textContent = "Editar";
        btnEditar.setAttribute("data-accion", "editar");
        btnEditar.setAttribute("data-id", usuario.id);

        const btnBorrar = document.createElement("button");
        btnBorrar.type = "button";
        btnBorrar.textContent = "Borrar";
        btnBorrar.setAttribute("data-accion", "borrar");
        btnBorrar.setAttribute("data-id", usuario.id);

        cajaBotones.appendChild(btnEditar);
        cajaBotones.appendChild(btnBorrar);

        li.appendChild(nombre);
        li.appendChild(correo);
        li.appendChild(fecha);
        li.appendChild(cajaBotones);
        listaUsuarios.appendChild(li);
    }
}