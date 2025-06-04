//sintaxe

function myFunction(){
    console.log("Executou");

    for(i = 0; i <=10; i++){
        console.log(i + "\n");

    }
}

function soma(valor)
{
    console.log(valor + 5);

}

function multiplicador(mult)
 {
        for(i= 1; i <= 10; i++)
        {
            console.log(i +" x "+ mult + " = "+ i*mult)
            
        }
     
 }


 function primo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }


console.log(primo(3));
//multiplicador(7)

//soma(5);

//myFunction()
