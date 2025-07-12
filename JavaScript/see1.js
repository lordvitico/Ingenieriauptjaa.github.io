document.addEventListener("DOMContentLoaded", function(){
    const articleElement=document.getElementById("est");
        const textContentElement=document.getElementById("txt");
        const readMoreButton=document.getElementById("btn");
        if (!textContentElement || !readMoreButton){
            console.warn("Advertencia no se encontraron los elementos");
            return;
        }
        if (textContentElement && readMoreButton){
        function toggleText1(){
            textContentElement.classList.toggle("expandido");
            if (textContentElement.classList.contains("expandido")){
                readMoreButton.textContent="Leer Menos";
            }else{
                readMoreButton.textContent="Leer Mas";
            }
        }
        }
        readMoreButton.addEventListener("click", toggleText1);
        setTimeout(() => {
            if (textContentElement.scrollHeight<=textContentElement.clientHeight) {
                readMoreButton.style.display="none";
                textContentElement.style.maxHeight="none";
            }
        }, 50);
});