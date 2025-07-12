document.addEventListener("DOMContentLoaded", function(){
    const articleElement=document.getElementById("esy");
        const textContentElement=document.getElementById("txy");
        const readMoreButton=document.getElementById("bty");
        if (!textContentElement || !readMoreButton){
            console.warn("Advertencia no se encontraron los elementos");
            return;
        }
        if (textContentElement && readMoreButton){
        function toggleText2(){
            textContentElement.classList.toggle("expandido");
            if (textContentElement.classList.contains("expandido")){
                readMoreButton.textContent="Leer Menos";
            }else{
                readMoreButton.textContent="Leer Mas";
            }
        }
        }
        readMoreButton.addEventListener("click", toggleText2);
        setTimeout(() => {
            if (textContentElement.scrollHeight<=textContentElement.clientHeight) {
                readMoreButton.style.display="none";
                textContentElement.style.maxHeight="none";
            }
        }, 50);
});