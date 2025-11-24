import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  // 1 criação de link com a API e fetch do data (getproducts)

  const [products, setProducts] = useState([]);

  const url = "http://localhost:3000/products";

  //4 - custom hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []); */

  //2 - Add products

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const deleteProduct = async (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <div className="app">
        <h1>Lista de Produtos</h1>
        {/*render condicional loading*/}
        {loading && <p className="loading-text"> Carregando Produtos....</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && (
          <div className="container-produtos">
            <ul>
              {items &&
                items.map((product) => (
                  <li className="product" key={product.id}>
                    {product.name} - R$ {product.price}
                    <button
                      className="btn-delete-produto"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Excluir
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Preço:</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            {/* 7- Loading para o post*/}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
