import React from 'react';

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para calcular a soma dos números pares
const calcularSomaNumerosPares = (numeros) => {
  return numeros.reduce((soma, numero) => {
    // Verifica se o número é par
    if (numero % 2 === 0) {
      return soma + numero;
    }
    return soma;
  }, 0);
};

export default function Questao3() {
  // Calcula a soma dos números pares
  const somaNumerosPares = calcularSomaNumerosPares(numerosInteiros);

  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      {/* Exibe a soma dos números pares */}
      <p>Soma: {somaNumerosPares}</p>
    </>
  );
}
