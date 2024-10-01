/* ## Exercício 5: Tabuada
**Objetivo:** Crie um programa que exiba a tabuada do número 5 (de 1 a 10) utilizando um loop `while`. O programa deve imprimir o resultado de cada multiplicação.
 
**Dica:** Inicie uma variável de controle em 1 e incremente-a até 10, multiplicando pelo número 5 a cada iteração. */


let contador = 1
const numero = 5

while (contador <= 10){
    console.log (` ${numero} x ${contador} = ${numero * contador}`);
    contador +=2;
}

for (let contador = 1; contador <=10; contador++){
    console.log (`${numero} x ${contador} = ${numero * contador}`);
}

