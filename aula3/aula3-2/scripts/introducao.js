// Variaveis ----

let professor = "João";
professor = "Carlos";

//--------------

let texto = "Texto";
let numero = -0.2;
let booleano = true;
let vazio = null;
let indefinido;

// ------------------

let hora = 14;

if (hora < 12) {
    console.log("Bom dia!")
}
else if (hora < 18) {
    console.log("Boa tarde!")
}
else {
    console.log('Boa noite!')
}

for (let i = 0; i < 5; i++) {
    console.log(`Indice do loop: ${i}`);
}

// ----------------


function teste(texto) {
    return texto;
}

let resultado = teste("Olá!");

// Arrow functions
const multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(10, 2))

// Objetos e Arrays --------
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    buzinar: function () {
        console.log("BIBI");
    }
}