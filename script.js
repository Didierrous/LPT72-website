function abrirModal(img){
    document.getElementById("modal").style.display = "block";
    document.getElementById("imgModal").src = img;
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e){
    if(e.target.id === "modal"){
        cerrarModal();
    }
}