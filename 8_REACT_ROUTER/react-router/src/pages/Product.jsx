import "./Product.css";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <div>
      <p>Id do produto: {id}</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando Detalhes....</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$: {product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
