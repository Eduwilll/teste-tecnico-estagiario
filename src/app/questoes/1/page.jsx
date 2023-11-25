'use client'
export default function Questao1() {
  // Função a ser executada ao clicar no botão
  const handleButtonClick = () => {
    alert('O botão foi clicado!');
  };

  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>

      {/* Botão vermelho com bordas arredondadas */}
      <button onClick={handleButtonClick}
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '8px',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        Clique-me!
      </button>
    </>
  );
}
