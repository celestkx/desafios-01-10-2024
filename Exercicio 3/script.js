// ## Exercício 3: Soma dos Números
// **Objetivo:** Crie um programa que some os números de 1 a 10. Utilize um loop `while` para iterar e imprima a soma final no console.
 
// **Dica:** Utilize uma variável para armazenar a soma e outra para controlar a contagem.


// let contador = 1 
// let soma = 0 

// while (contador <= 10 ){
//     soma += contador;
// contador++;
// }
// console.log("A soma dos números de 1 a 10 é:", soma);


// let soma = 0; 

// let contador =1; 

// do{

//     soma += contador; //adicionar o valor atual do contador com a soma

//     contador++; // definimos que a contagem será crescente e de 1 em 1  
// } while (contador <=10) // o loop continua até o contador for menor ou igual a 10

// console.log ("a soma dos números de 1 a 10 é:", soma);

let soma = 0 

for (let contador = 1; contador <= 10;  contador++){
soma += contador;
}

console.log("A soma dos números de 1 a 10 é:", soma);