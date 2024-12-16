// Función para mostrar el popup con los datos correspondientes
function showPopup(title, description) {
    // Cambiar el contenido del título y la descripción en el popup
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDesc").textContent = description;
    
    // Hacer visible el popup
    document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
