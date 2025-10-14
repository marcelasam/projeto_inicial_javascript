//Desafios 02

//dia da semana
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

//positivo ou negativo
 numero = prompt('Digite um positivo ou negativo');
 if (numero > 0) {
    alert('Número positivo!');

 }else {
    alert('Número negativo!');
 }

 //sistema de pontuação para jogo
 pontuacao = 105;
 if (pontuacao >= 100) {
    console.log('Parabéns você venceu!');
 } else {
    console.log('Tente novamente para ganhar');
 }

 //saldo da conta
 let saldoConta = 500; //exemplo de saldo
 alert(`Seu saldo é de R$${saldoConta}.`);

 //boas vindas
 let nome = prompt('Digite seu nome:');
 alert(`Boas vindas ${nome}.`);