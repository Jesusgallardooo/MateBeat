import { generosMusicales, playlists } from './datos.js';
import { pintarListaPlaylists,
    mostrarDetallesPlaylist,
    mostrarError,
    rellenarFormularioEditar,
    pintarUsuarios,
    pintarMensajes,
    actualizarContadorCaracteres
} from './ui.js';
import { obtenerTodos, obtenerPorId, crear, actualizar, borrar } from "./almacen.js";
import { validarCampoRegistro, validarCampoContacto } from "./validacion.js";


// Hito 1
const contenedor = document.querySelector("#listado-musica");
const popUpDetalle = document.querySelector("#modal-detalle");
const contenidoDetalle = document.querySelector("#contenido-detalle");

if (contenedor) {
    pintarListaPlaylists(contenedor, playlists, generosMusicales, (playlistPulsada) => {
        mostrarDetallesPlaylist(popUpDetalle, contenidoDetalle, playlistPulsada, generosMusicales);
    });
}


// Hito 2

    // Formulario registro
const formularioRegistro = document.getElementById("form-registro");

if (formularioRegistro) {
    const inputUsuario = document.getElementById("registro-usuario");
    const inputEmail = document.getElementById("registro-email");
    const inputPassword = document.getElementById("registro-password");
    const inputRepetir = document.getElementById("registro-repetir-password");
    const inputFecha = document.getElementById("registro-fecha");
    const inputCondiciones = document.getElementById("registro-condiciones");

    const campos = [
        inputUsuario,
        inputEmail,
        inputPassword,
        inputRepetir,
        inputFecha,
        inputCondiciones
    ];

    // Campos que hemos cambiado / intentado cambiar
    const camposModificadosReg = {};

    // Compruebo si la url tiene alguna id asignada, si sí editamos un usuario ya existente y si no lo creamso
    const parametros = new URLSearchParams(window.location.search);
    const idEditar = parametros.get("id");
    const editando = idEditar !== null;

    
    if (editando) {
        const usuario = obtenerPorId("usuarios", idEditar);

        if (usuario !== null) {
            rellenarFormularioEditar(usuario);
            inputPassword.required = false; // no vuelvo a pedir la contraseña para editar datos
            inputRepetir.required = false;  
        }
    }

    // valido cada campo al salir de dicho campo 
    for (const campo of campos) {
        campo.addEventListener("blur", function () {
            camposModificadosReg[campo.id] = true;
            const error = validarCampoRegistro(campo, inputPassword.value, editando);
            mostrarError(campo, error);
        });

        campo.addEventListener("input", function () {
            if (camposModificadosReg[campo.id]) {
                const error = validarCampoRegistro(campo, inputPassword.value, editando);
                mostrarError(campo, error);
            }
        });
    }

    // validar formulario
    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let primerError = null;

        // campo a campo
        for (const campo of campos) {
            camposModificadosReg[campo.id] = true;
            const error = validarCampoRegistro(campo, inputPassword.value, editando);
            mostrarError(campo, error);

            if (error !== null && primerError === null) {
                primerError = campo;
            }
        }

        // Si encuentro algún fallo, vamos al primer campo fallido y no enviamos nada.
        if (primerError !== null) {
            primerError.focus();
            return;
        }

        // No guardo la contraseña
        const datosUsuario = {
            usuario: inputUsuario.value.trim(),
            email: inputEmail.value.trim(),
            fechaNacimiento: inputFecha.value,
            condiciones: Boolean(inputCondiciones.checked)
        };

        if (editando) {
            actualizar("usuarios", idEditar, datosUsuario);
        } else {
            crear("usuarios", datosUsuario);
        }

        formularioRegistro.reset();
        window.location.href = "usuarios.html";
    });
}

    //Vista Usuarios

const listaUsuarios = document.getElementById("lista-usuarios");

if (listaUsuarios) {
    pintarUsuarios(listaUsuarios, obtenerTodos("usuarios"));

    listaUsuarios.addEventListener("click", function (evento) {
        const elemento = evento.target;

        if (elemento.tagName !== "BUTTON") {
            return;
        }

        const accion = elemento.getAttribute("data-accion");
        const id = elemento.getAttribute("data-id");

        if (accion === "editar") {
            window.location.href = "registro.html?id=" + id;
        }

        if (accion === "borrar") {
            const seguro = confirm("¿Seguro que quieres borrar este usuario?");
            if (seguro) {
                borrar("usuarios", id);
                pintarUsuarios(listaUsuarios, obtenerTodos("usuarios"));
            }
        }
    });
}

//  Formulario contacto

const formularioContacto = document.getElementById(`form-contacto`);

if (formularioContacto){
    const inputNombre = document.getElementById("contacto-nombre");
    const inputEmail = document.getElementById("contacto-email");
    const inputTelefono = document.getElementById("contacto-telefono");
    const llamarOno = document.getElementById("contacto-llamar");
    const selectMotivo = document.getElementById("contacto-motivo");
    const textareaMensaje = document.getElementById("contacto-mensaje");
    const contadorMensaje = document.getElementById("contador-mensaje");

    const campos = [
        inputNombre,
        inputEmail,
        inputTelefono,
        selectMotivo,
        textareaMensaje
    ];

    const camposModificadosCont = {};

    // Iniciamos el contador en 0 / 300 y lo actualizamos al escribir
    actualizarContadorCaracteres(textareaMensaje, contadorMensaje);
    textareaMensaje.addEventListener("input", function () {
        actualizarContadorCaracteres(textareaMensaje, contadorMensaje);
    });

    // Valida el contenido del telefono en funcion se maruqe el checkbox
    llamarOno.addEventListener("change", function () {
        camposModificadosCont[inputTelefono.id] = true;
        const errorTel = validarCampoContacto(inputTelefono, llamarOno.checked);
        mostrarError(inputTelefono, errorTel);
    });

    for (const campo of campos) {
        campo.addEventListener("blur", function () {
            camposModificadosCont[campo.id] = true;
            const error = validarCampoContacto(campo, llamarOno.checked);
            mostrarError(campo, error);
        });

        campo.addEventListener("input", function () {
            if (camposModificadosCont[campo.id]) {
                const error = validarCampoContacto(campo, llamarOno.checked);
                mostrarError(campo, error);
            }
        });
    }

    formularioContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let primerError = null;

        for (const campo of campos) {
            camposModificadosCont[campo.id] = true;
            const error = validarCampoContacto(campo, llamarOno.checked);
            mostrarError(campo, error);

            if (error !== null && primerError === null) {
                primerError = campo;
            }
        }

        if (primerError !== null) {
            primerError.focus();
            return;
        }

        const datosMensaje = {
            nombre: inputNombre.value.trim(),
            email: inputEmail.value.trim(),
            telefono: inputTelefono.value.trim(),
            prefiereLlamada: Boolean(llamarOno.checked),
            motivo: selectMotivo.value,
            motivoTexto: selectMotivo.options[selectMotivo.selectedIndex].textContent,
            mensaje: textareaMensaje.value.trim(),
            fecha: new Date().toLocaleDateString("es-ES")
        };

        crear("mensajes", datosMensaje);

        formularioContacto.reset();
        window.location.href = "mensajes.html";
    });
}


// Vista de los mensajes enviados 
const listaMensajes = document.getElementById("lista-mensajes");

if (listaMensajes) {
    pintarMensajes(listaMensajes, obtenerTodos("mensajes"));

    listaMensajes.addEventListener("click", function (evento) {
        const elemento = evento.target;

        if (elemento.tagName !== "BUTTON") {
            return;
        }

        const accion = elemento.getAttribute("data-accion");
        const id = elemento.getAttribute("data-id");

        if (accion === "borrar") {
            const seguro = confirm("¿Seguro que quieres borrar este mensaje?");
            if (seguro) {
                borrar("mensajes", id);
                pintarMensajes(listaMensajes, obtenerTodos("mensajes"));
            }
        }
    });
}