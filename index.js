// Desafio Classificador de nível de Herói

// 1. Variáveis para armazenar o nome e a quantidade de XP
let nomeHeroi = "Michel Noob";
let xpHeroi = 8500; // Altere este valor para testar diferentes níveis

// 2. Variável para armazenar o nível do herói
let nivelHeroi;

// 3. Estrutura de Decisão para classificar o herói com base na XP
if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else { // Se XP for maior ou igual a 10001
  nivelHeroi = "Radiante";
}

// 4. Laço de repetição (exemplo, opcional para este desafio)
// Este laço pode ser usado para simular um crescimento de XP e nível.
// Foram inseridos comentários para melhor compreensão.

console.log("--- Simulação de Nível do Herói ---");
let xpAtual = 0;
while (xpAtual <= xpHeroi) {
    let nivelSimulado;
    if (xpAtual < 1000) {
      nivelSimulado = "Ferro";
    } else if (xpAtual <= 2000) {
      nivelSimulado = "Bronze";
    } else if (xpAtual <= 5000) {
      nivelSimulado = "Prata";
    } else if (xpAtual <= 7000) {
      nivelSimulado = "Ouro";
    } else if (xpAtual <= 8000) {
      nivelSimulado = "Platina";
    } else if (xpAtual <= 9000) {
      nivelSimulado = "Ascendente";
    } else if (xpAtual <= 10000) {
      nivelSimulado = "Imortal";
    } else {
      nivelSimulado = "Radiante";
    }
    // A cada 1000 de XP, exibe a mensagem de nível atual
    if (xpAtual % 1000 === 0) {
        console.log(`O herói ${nomeHeroi} alcançou ${xpAtual} XP e está no nível de ${nivelSimulado}`);
    }
    xpAtual += 500; // Incrementa a XP para a próxima iteração
}
console.log("-------------------------------------");

// 5. Saída Final do Desafio
// Utiliza uma template string para formatar a mensagem de forma limpa e clara.
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);