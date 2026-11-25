// archivo almacén

// Calcula el siguiente id libre mirando el más alto que ya exista
function generarId(listaIds){
    if (listaIds.length === 0){
        return 1;
    }

    let idMaximo = 0;

    for (const elemento of listaIds){
        if (elemento.id > idMaximo){
            idMaximo = elemento.id
        }
    }
    return idMaximo + 1; 
}

// Saca la colección de localStorage y la pasa de texto a array (si no existe, devuelve [])
export function obtenerTodos(coleccion){
    const datos = localStorage.getItem(coleccion);
    return datos ? JSON.parse(datos) : [];
}

// Busca un elemento concreto por su id (paso antes la id a number)
export function obtenerPorId(coleccion, id){
    const lista = obtenerTodos(coleccion) 
    const idEspecifico = Number(id);
    return lista.find((elemento) => elemento.id === idEspecifico) || null;
}

// Le pone un id nuevo al dato, lo mete en el array y guarda todo en el localStorage
export function crear(coleccion, dato){
    const lista = obtenerTodos(coleccion);

    dato.id = generarId(lista);
    lista.push(dato);

    localStorage.setItem(coleccion, JSON.stringify(lista));
    return dato;
}

// Busca el elemento por id, lo cambia por el nuevo manteniendo su id y lo guarda
export function actualizar(coleccion, id, dato){
    const lista = obtenerTodos(coleccion);
    const idNumerico = Number(id);

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idNumerico) {
            dato.id = idNumerico;
            lista[i] = dato;

            localStorage.setItem(coleccion, JSON.stringify(lista));
            return lista[i];
        }
    }
    return null;
}

// Crea una lista nueva dejando fuera el elemento con ese id y sobrescribe localStorage para "borrar"
export function borrar(coleccion, id){
    const lista = obtenerTodos(coleccion);
    const idNumerico = Number(id);
    const nuevaLista = [];

    for (const elemento of lista) {
        if (elemento.id !== idNumerico) {
            nuevaLista.push(elemento);
        }
    }

    if (nuevaLista.length === lista.length) {
        return false;
    }

    localStorage.setItem(coleccion, JSON.stringify(nuevaLista));
    return true;
}