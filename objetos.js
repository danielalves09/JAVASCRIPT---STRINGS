//Objeto javascript
//{Chave: valor}

//Criando pelo construtor
const forma1 = new Object();

//Criando pela notação Literal
const forma2 = {};


//=============métodos e Propriedades ===================

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: '2023',
    ligar (){
        console.log("O carro ligou");
    }

}


// =========== Criar propriedades e Métodos ===============
const carro2 = {
    marca: 'Toyota',
    modelo: 'Corolla'

}

//adicionando uma função ao objeto
carro2.ligar = () => {
    console.log('O carro ligou');
}

const objeto = {
        nome: 'Treinaweb'
    
}
console.log(objeto);


// =========== Modificar propriedades e Métodos ===============

carro.ano = 2025;

console.log(carro);

// =========== Objeto dentro de objeto ===============

const usuario = {
    nome : 'Daniel',
    tipo : 'admin',
    idade: '33',
    residencia: {
        rua: 'rua teste',
        numero : 123,
        bairro: 'bairro teste'

    },
    telefone: '1234-1234'

}

console.log(usuario.residencia.rua);

// =========== Excluir propriedades e Métodos ===============

delete usuario.residencia.numero;

console.log(usuario);



//iterando sobre as propriedades do objeto
const usuarios = {"nome":"Ariel","sobrenome":"Sardinha","idade":29,"cpf":"999.999.999-11"}

const keys = Object.keys(usuarios);

 for (let i = 0; i < keys.length; i++){
        const chave = keys[i];
        console.log(usuarios[chave]);
        
    }