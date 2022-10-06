import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Context from "./Context";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  const [fotografias, setFotografias] = useState ([]);

  const endpoint = "/fotos.json";
  const getGaleria = async () => {
  const res = await fetch(endpoint);
  let { photos } = await res.json(); 
  photos = photos.map((photo) => ({
    id: photo.id,
    src: photo.src.tiny,
    desc: photo.alt,
    favorito: false
  }));
  setFotografias(photos);
};

  useEffect(() => {
    getGaleria();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ fotografias, setFotografias }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
