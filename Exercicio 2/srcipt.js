/*

## Exercício 2: Contagem Reversa
**Objetivo:** Modifique o exercício anterior para contar de 5 a 1 e imprimir cada número no console.
 
**Dica:** Inicie a variável de controle com o valor 5 e decremente-a a cada iteração.

*/

// let contador = 5;

// while ( contador >= 1) {
//     console.log (contador)
//     contador --;
// }

// do 

//2. Do While
// Iremos inicializar a variável contador com o valor 5 

let contador = 5 
do{
    //imprimir o valor no contador
    console.log (contador);
    //definimos o valor de contagem "--" pois será uma contagem decrescente 
    contador--;
} while (contador >=1)


/* 3 - Apenas com For */
for (let contador = 5; 
    contador >=1; 
    contador --){
    console.log(contador);
}
    