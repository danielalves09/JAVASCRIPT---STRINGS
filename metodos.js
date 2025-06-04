const animais = ['bufalo','camelo','pato','elefante'];
const frutas = ["maçã", "Banana", "Laranja", "morango", "coco"];
//const novoArrayAnimais = animais.slice(1);


//cortar array
//console.log(animais.slice(0,3));

//CONCAT

const array = [].concat(animais).concat(frutas);

//console.log(array);


//FILTER
//verifica a condição e se for true, ele cria um novo array e adiciona o elemento encontrado


const ff = frutas.filter(function (fruta) {
    return fruta.length <= 4;
})

console.log(ff);


//NUMEROS PRIMOS USANDO FILTER
const numeros = [51, 52, 74, 46, 20, 82, 59, 39, 77, 23];

function ePrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  function encontrarNumerosPrimos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => ePrimo(numero));
  }
  const primos = encontrarNumerosPrimos(numeros);
  console.log(primos);



