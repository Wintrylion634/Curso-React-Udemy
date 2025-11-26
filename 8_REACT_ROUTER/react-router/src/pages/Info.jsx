import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Mais Informações sobre o produto: {id}</h2>
    </div>
  );
};

export default Info;
