import { generosMusicales, playlists } from './datos.js';
import { pintarListaPlaylists, mostrarDetallesPlaylist } from './ui.js';

const contenedor = document.querySelector("#listado-musica");
const popUpDetalle = document.querySelector("#modal-detalle");
const contenidoDetalle = document.querySelector("#contenido-detalle");

if (contenedor) {
    pintarListaPlaylists(contenedor, playlists, generosMusicales, (playlistPulsada) => {
        mostrarDetallesPlaylist(popUpDetalle, contenidoDetalle, playlistPulsada, generosMusicales);
    });
}