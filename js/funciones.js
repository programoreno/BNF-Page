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
                <h3>${titulo}</h3>
                <p id="${rareza}">${rareza}</p>
                <p>${obtencion}</p>
                <p>${frase}</p>
            </div> 
        </div>`
      });
}

function abrir_dialogo(num){
    /* CIERRO PRIMERO TODOS LOS DIALOG ASI NO SE ACUMULAN */
    var dialogos = document.getElementsByTagName('dialog');
    for (var i = 0; i < dialogos.length; i++) {
        dialogos[i].removeAttribute("open");
        
    }

    /* ABRO EL DIALOG CORRESPONDIENTE */
    for (var i = num-1; i < dialogos.length; i++) {
        dialogos[i].setAttribute("open","true");
        break;
    }
}   

function cerrar_dialogo(num){
    var dialogos = document.getElementsByTagName('dialog');
    for (var i = num-1; i < dialogos.length; i++) {
        dialogos[i].removeAttribute("open");
        break;
    }
}