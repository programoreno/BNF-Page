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

function abrir_dialogo(num){
    var dialogos = document.getElementsByTagName('dialog');
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