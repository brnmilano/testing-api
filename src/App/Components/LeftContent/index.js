import Button from "../../../components/Button";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

function LeftContent() {
  const [conselho, setConselho] = useState();

  function getConselho() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
        setConselho(response.data.slip);
      })
      .catch((error) => {
        console.log(error, "oi 2");
      });
  }

  return (
    <div className="container-left">
      <div className="title-subtitle">
        <h1>Olá, seja muito bem vindo!</h1>
        <p>Aqui você irá encontrar o melhor conselho para o seu dia.</p>
      </div>

      <div className="button-container">
        <Button
          backgroundColor="#04C35C"
          padding={17}
          borderRadius={5}
          fontSize={16}
          onClick={getConselho}
        >
          Receba seu conselho
        </Button>
      </div>

      <div className="conselho-content">
        <p>{conselho?.advice}</p>
      </div>
    </div>
  );
}

export default LeftContent;
