import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    };

    fetchUser();
  }, []);

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));

      if (usuarioStorage.uid === user.uid) {
        return <Route component={component} path={path} {...rest} />;
      } else {
        return <Redirect to='/login' {...rest} />;
      }
    } else {
      return <Redirect to='/login' {...rest} />;
    }
  };

  return user !== false ? (
    <>
      <Switch>
        <RutaPrivada component={Home} exact path='/home' />
        <Route component={Login} exact path='/login' />
        <Route component={Login} exact path='/' />
      </Switch>
    </>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
