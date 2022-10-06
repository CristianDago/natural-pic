import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";

import Heart from "./Heart";

export default function Home() {
  
  const { fotografias, setFotografias}  = useContext(Context);

  const setFavorito = (id) => {
    const fotoGaleria = fotografias.findIndex((f) => f.id === id) ; 
    fotografias[fotoGaleria].favorito = !fotografias[fotoGaleria].favorito;
    setFotografias([...fotografias]);
  }; 


  return (

    <div className="galeria grid-columns-5 p-3">
      {fotografias.map((foto, i) => (
        <div
          onClick={() => setFavorito(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={i}
        >
          <Heart filled={foto.favorito} />

          <p>{foto.desc}</p>
        </div>
      ))}
    </div>

  );
}
