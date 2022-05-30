//Menú hamburguesa abrir-cerrar

const menu = document.querySelector(".menubar");
const btn_menuNav = document.querySelector(".btn-opencloseMenu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

btn_menuNav.addEventListener("click",toggleMenu);

// FORMULARIO
const formulario = document.getElementById('idFormulario');
const inputs = document.querySelectorAll('#idFormulario input');

const campos = {
    nombre: false,
    apellido: false,
    telefono: false,
    email: false
}

const expresiones = {
    nombre: /^[A-Z]+$/i,
    apellido: /^[A-Z]+$/i,
    telefono: /^\d+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
           validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo_${campo} .input-error`).classList.remove('input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo_${campo} .input-error`).classList.add('input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.apellido && campos.telefono && campos.email){
        document.getElementById('msj-exito').classList.add('msj-exito-active');
    } else {
        document.getElementById('msj-error').classList.add('msj-error-active');
        setTimeout (() => {
            document.getElementById('msj-error').classList.remove('msj-error-active')
        },5000);
    }
})