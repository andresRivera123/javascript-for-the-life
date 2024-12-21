/* STOP PROPAGATION: Evita la propagación adicional del evento actual en las fases de captura y bubbling*/

console.log("\n--STOP PROPAGATION--");

const cajas = document.querySelectorAll(".border")
cajas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("Click en caja")
    })
})