/* DELEGACIÓN DE EVENTOS: Patrón para manejar eventos de manera eficiente.*/
//En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo en particular utilizando la propiedad .target del objeto de evento.

const contenedor = document.querySelector(".contenedor")

contenedor.addEventListener("click", (e) => {
    console.log(e.target) 
    /* ID: Por medio del ID del elemento HTML */
    if(e.target.id === "padre"){
        console.log("Imprimir con ID, padre")
    }
    //DATASET: Por medio de las propiedades del HTML podemos seleccionar el elemento 
    //tambien puede ser: console.log(e.target.dataset["div"]);
    if(e.target.dataset.div === "divHijo"){
        console.log("Imprimir con Dataset, hijo")
    }
    //MATCHES(): Comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
    if(e.target.matches(".border-danger")){
        console.log("Imprimir con matches, nieto")
    }
})