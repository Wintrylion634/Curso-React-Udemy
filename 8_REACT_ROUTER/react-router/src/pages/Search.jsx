import { useFetch } from "../hooks/useFetch";
import { useSearchParams, Link } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p className="loading-text"> Carregando produtos...</p>}
      {error && <p className="error-text">Erro ao buscar os Produtos</p>}
      {!loading && !error && (
        <div>
          <h1>Resultados disponíveis: </h1>
          <ul className="product-list">
            {items &&
              items.map((item) => (
                <li key={item.id} className="product-item">
                  <h2>{item.name}</h2>
                  <p>R$: {item.price}</p>
                  <Link to={`products/${item.id}`}>Detalhes</Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
