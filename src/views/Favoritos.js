import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const {fotografias, setFotografias} = useContext(Context);
  const borrarFavorito = (id) => {
    const fotoGaleria = fotografias.findIndex((f) => f.id === id);
    fotografias.splice(fotoGaleria, 1);
    setFotografias([...fotografias]);
  };
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotografias
        .filter((foto) => foto.favorito)
        .map ((foto, i) => (
          <img src={foto.src} alt="" onClick={() => borrarFavorito(foto.id)} key={i} />
        ))}
    
      </div>
    </div>
  );
}
