function abrir_info(titulo, rareza,obtencion,frase) {
    Swal.fire({
        html:
        `<div id="dialogo">
            <div>
                <h2>${titulo}</h2>
                <p id="${rareza}">${rareza}</p>
                <p>${obtencion}</p>
                <p>${frase}</p>
            </div> 
        </div>`,
        showCloseButton: true,
        showConfirmButton: false,
        didOpen: () => {
            document.activeElement.blur();
        }
    });
}

function scroll_sets() {
    // Obtenemos la posición vertical del inicio del contenido adicional
    const additionalContent = document.getElementById("skins")
    const additionalContentTop = additionalContent.offsetTop;
  
    // Hacemos scroll suave hacia la posición del contenido adicional
    window.scrollTo({
      top: additionalContentTop,
      behavior: 'smooth'
    });
}