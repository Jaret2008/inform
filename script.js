const quienesSomos = document.querySelector('.QuienesSomos');
const register = document.querySelector('.register');
const btnPopup = document.querySelector('.btnforms-popup');
const salir = document.querySelector('.salir');


// Evento para mostrar el formulario de registro
btnPopup.addEventListener('click', () => {
    quienesSomos.classList.remove('active-section');
    register.classList.add('active-section');
});

// Evento para cerrar el formulario y volver a "¿Quiénes somos?"
salir.addEventListener('click', () => {
    register.classList.remove('active-section');
    quienesSomos.classList.add('active-section');
});

document.getElementById('join').addEventListener('click', () => {
    alert('Registro exitoso. Gracias por registrarte.');
});
