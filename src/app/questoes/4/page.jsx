const produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 10.99,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 19.99,
  },
  {
    id: 3,
    nome: "Saia",
    preco: 19.99,
  },
];
const ProductList = ({ produtos }) => {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <strong>{produto.nome}</strong>: R$ {produto.preco.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};


export default function Questao4() {
  return (
    <>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
      </p>

      {/* Renderiza o componente ProductList e passa a matriz de produtos como propriedade */}
      <ProductList produtos={produtos} />
    </>
  );
}
