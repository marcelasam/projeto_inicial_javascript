//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

//Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}
// Crie um programa de contagem regressiva. 
//Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para contagem regressiva:");
while(numeroMaximo >= 0) {
  console.log(numeroMaximo);
  numeroMaximo--;
}

// Crie um programa de contagem progressiva. 
// Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMaximo2 = prompt("Digite um número para contagem progressiva:");
let contador3 = 0;

while (contador3 <= numeroMaximo2) {
  console.log(contador3);
  contador3++;
}