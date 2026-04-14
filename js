const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");
const cerrar = document.querySelector(".cerrar");

function abrirModal(img){
    modal.style.display = "block";
    imgModal.src = img;
}

cerrar.onclick = () => modal.style.display = "none";

window.onclick = (e)=>{
    if(e.target === modal){
        modal.style.display = "none";
    }
};