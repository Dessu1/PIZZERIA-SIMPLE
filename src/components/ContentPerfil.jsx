import React from "react";
import { useSelector } from "react-redux";

const ContentPerfil = () => {
  const usuario = useSelector((store) => store.usuario.user);

  return (
    <div id='container-perfil'>
      <div className='content'>
        <img src={usuario.photoURL} alt='phoro-perfil' />
        <h3>{usuario.displayName}</h3>
        <p>{usuario.email}</p>
      </div>
    </div>
  );
};

export default ContentPerfil;
