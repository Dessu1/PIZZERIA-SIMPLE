import React, { useState } from "react";
import ContentHome from "../components/ContentHome";
import ContentMenu from "../components/ContentMenu";
import ContentPerfil from "../components/ContentPerfil";

const Home = () => {
  const [showContent, setContentShow] = useState(1);

  const content = (i) => {
    setContentShow(i);
  };

  return (
    <div id='container-home'>
      <div id='container-navbar'>
        <nav className='navbar'>
          <ul>
            <li>
              <p onClick={() => content(1)}>Home</p>
            </li>
            <li>
              <p onClick={() => content(2)}>Menu</p>
            </li>
            <li>
              <p onClick={() => content(3)}>Perfil</p>
            </li>
          </ul>
        </nav>
      </div>

      {showContent === 1 && <ContentHome />}
      {showContent === 2 && <ContentMenu />}
      {showContent === 3 && <ContentPerfil />}
    </div>
  );
};

export default Home;
