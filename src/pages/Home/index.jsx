import Image from "../../assets/image.png";
import { Main } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();

  return (
    <Main>
      <div className="div__text">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura.</p>
        <button onClick={() => navigate("/dashboard")}>Iniciar</button>
      </div>
      <div className="div__img">
        <img src={Image} alt="dsadas" />
      </div>
    </Main>
  );
};
