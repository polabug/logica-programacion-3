function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

const input = document.getElementById("numero");
const boton = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    const texto = input.value.trim();
    const n = Number(texto);

    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
        resultado.textContent = "Error: Ingresa un numero entero";
        return;
    }

    resultado.textContent = `El factorial de ${n} es ${fact(n)}`;
});