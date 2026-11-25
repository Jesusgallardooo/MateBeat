// archivo validaciones

// Regexs 

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Comprueba que el usuario no esté en blanco y cumpla con el numero de caracteres requerido
export function validarUsuario(valor, min, max){
    const texto = valor.trim();

    if (texto === "") {
        return "El nombre de usuario es obligatorio.";
    }
    if (min > 0 && texto.length < min) {
        return "El nombre de usuario debe tener al menos " + min + " caracteres.";
    }
    if (max > 0 && texto.length > max) {
        return "El nombre de usuario no puede superar los " + max + " caracteres.";
    }
    return null;
}

// Comprueba que el correo no esté vacío y cumpla el REGEX_EMAIL
export function validarCorreo(valor){
    const texto = valor.trim();

    if (texto === "") {
        return "El correo electrónico es obligatorio.";
    }
    if (!REGEX_EMAIL.test(texto)) {
        return "Introduce un correo electrónico válido (tucorreo@dominio.com).";
    }
    return null;
}

// valida la contraseña exigiendo longitud mínima, al menos una mayúscula y un número
export function validarContra(valor, min){
    if (valor === "") {
        return "La contraseña es obligatoria.";
    }
    if (min > 0 && valor.length < min) {
        return "La contraseña debe tener al menos " + min + " caracteres.";
    }
    if (!/[A-Z]/.test(valor)) {
        return "La contraseña debe incluir al menos una letra mayúscula.";
    }
    if (!/[0-9]/.test(valor)) {
        return "La contraseña debe incluir al menos un número.";
    }
    return null;
}

// Verifica que la fecha no sea futura y cumpla la edad mínima marcada en el atributo max del HTML
export function validarRepetirContra(valor, contraElegida){
    if (valor === "") {
        return "Debes repetir la contraseña.";
    }
    if (valor !== contraElegida) {
        return "Las contraseñas no coinciden...";
    }
    return null;
}

// Comprueba la edad > 14 años (definido en el html)
export function validarFechaNac(valor, fechaMax){
    if (valor === "") {
        return "La fecha de nacimiento es obligatoria.";
    }

    const fechaNac = new Date(valor + "T00:00:00");
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaNac > hoy) {
        return "La fecha de nacimiento no puede ser futura.";
    }
    if (fechaMax !== "") {
        const fechaLimite = new Date(fechaMax + "T00:00:00");
        if (fechaNac > fechaLimite) {
            return "Debes tener al menos 14 años para registrarte en MateBeat.";
        }
    }
    return null;
}

// Comprueba que el checkbox de condiciones está marcado
export function validarCondiciones(aceptado){
    if (!aceptado){
        return "Debes aceptar las condiciones de uso.";
    }
    return null;
}

// Valida cada campo concreto 
export function validarCampoRegistro(input, passwordOriginal, editando) {
    if (input.id === "registro-usuario") {
        return validarUsuario(input.value, input.minLength, input.maxLength);
    }

    if (input.id === "registro-email") {
        return validarCorreo(input.value);
    }

    if (input.id === "registro-password") {
        if (editando && input.value === "") {
            return null;
        }
        return validarContra(input.value, input.minLength);
    }

    if (input.id === "registro-repetir-password") {
        if (editando && passwordOriginal === "" && input.value === "") {
            return null;
        }
        return validarRepetirContra(input.value, passwordOriginal);
    }

    if (input.id === "registro-fecha") {
        return validarFechaNac(input.value, input.max);
    }

    if (input.id === "registro-condiciones") {
        return validarCondiciones(input.checked);
    }

    return null;
}