function abrirModal(img){
    const modal = document.getElementById("modal");
    const imgModal = document.getElementById("imgModal");

    imgModal.src = img;
    modal.style.display = "block";
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

// cerrar dando click afuera
window.onclick = function(e){
    const modal = document.getElementById("modal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}