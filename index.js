// Desafio nível de Herói

// Variáveis nome e a quantidade de XP
let nomeHeroi = "Michel Noob";
let xpHeroi = 6500; 


// Variável nível do herói
let nivelHeroi;


// Decisão herói com base na XP
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

// Nivel 
console.log("*** Simulação de Nível ***");
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
    
    if (xpAtual % 1000 === 0) {
        console.log(`O herói ${nomeHeroi} alcançou ${xpAtual} XP e está no nível de ${nivelSimulado}`);
    }
    xpAtual += 500; // Incrementa a XP para a próxima iteração
}
console.log("*****************************************************************************************");

// Saída 
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);