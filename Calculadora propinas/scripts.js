const montoCuenta = document.getElementById("cuenta");
const porcPropina = document.getElementById("propina");
const personaMesa = document.getElementById("personas");
const boton = document.getElementById("btn");
const propinaFinal = document.getElementById("totalPropina");
const propina=document.getElementById("soloPropina");

boton.addEventListener("click", () => {
    const n1 = parseFloat(montoCuenta.value);
    const n2 = parseFloat(porcPropina.value);
    const n3 = parseInt(personaMesa.value);
    
    const propina = (n1 * n2) / 100;
    const total = n1 + propina;
    
    totalPropina.textContent = total.toFixed(2);
    soloPropina.textContent = propina.toFixed(2);
});
