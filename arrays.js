//formas de criar um array

//pelo construtor
//const array = new array();

//pela notação Literal

const forma2 = [3];

//====================================
//Acessando itens

const frutas = ["maçã", "Banana", "Laranja", "morango", "coco"];

//console.log(frutas[0]);


//===================================
//adicionando itens no array

//adicionar no inicio da lista
//frutas.unshift("Coco");

//adicionando no final da lista
//frutas.push("morango");

//console.log(frutas);


//===================================
//Removendo itens no array

//remove o primeiro elemento da lista
//frutas.shift();

//remove o ultimo elemento da lista
//frutas.pop();


//================================
//Método Splice

//1 argumento -> acessa o indice do array
//2 argumento -> remover a quantidade de elementos passada 
// 3 ou N argumento -> serve para adicionar elementos

//frutas.splice(0, 2)

//console.log(frutas);

//==============================
//Método Find

/* const numeros = [5, 12, 8, 130, 44];

const numero = numeros.find(function (numero){
    console.log(numero);
    return numero === 8;

});

//console.log(numero);

const alunos = [
    {
        nome: 'Daniel',
        Sobrenome: 'Alves'
    },
    {
        nome: 'Ariel',
        Sobrenome: 'Sardinha'
    },
    {
        nome: 'Amauri',
        Sobrenome: 'Blanco'
    }

];

const aluno = alunos.find((aluno) => aluno.nome === "Daniel");

console.log(aluno);

*/


for (let i = 0; i < frutas.length;i++){

    const nomeFruta = frutas[i];
    console.log(nomeFruta);
}


frutas.forEach(function (fruta) {

    console.log(fruta);
})

