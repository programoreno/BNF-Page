if(document.addEventListener){
	window.addEventListener("load",comienzo);
}else if(document.attachEvent){
	window.attachEvent("onload",comienzo);
}

function comienzo(){
    
    let cerrar = document.getElementById("cerrar");

    if(document.addEventListener){
        cerrar.addEventListener("click",cerrar_dialogo);
       
    }else if (document.attachEvent){
        cerrar.attachEvent("onclick",cerrar_dialogo);
    }
}

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