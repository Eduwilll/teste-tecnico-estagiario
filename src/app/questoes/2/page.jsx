'use client'

import React, { useState, useEffect } from 'react';

export default function Questao2() {
  // Estado inicial do contador
  const [contador, setContador] = useState(0);

  // Efeito para inicializar o contador com 10 ao carregar a tela
  useEffect(() => {
    setContador(10);
  }, []);

  // Função para incrementar o contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  // Função para decrementar o contador
  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>

      {/* Exibe o contador */}
      <p>Contador: {contador}</p>

      {/* Botões de incremento e decremento */}
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </>
  );
}
