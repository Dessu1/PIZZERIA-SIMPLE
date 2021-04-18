import { auth, firebase, db } from "../firebase";

const dataInicial = {
  loading: false,
  activo: false,
};

// types
const LOADING = "LOADING";
const USUARIO_EXITO = "USUARIO_EXITO";
const USUARIO_ERROR = "USUARIO_ERROR";
const CERRAR_SESION = "CERRAR_SESION";

// reducer
export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIO_EXITO:
      return { ...state, loading: false, user: action.payload, activo: true };
    case USUARIO_ERROR:
      return { ...dataInicial };
    case CERRAR_SESION:
      return { ...dataInicial };

    default:
      return { ...state };
  }
}

// acciones
export const ingresoUsuario = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);

    const usuario = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    /**
     *  BUSCAMOS AL USUARIO EN LA BASE DE DATOS
     */
    const usuarioDB = await db.collection("usuarios").doc(usuario.email).get();

    if (usuarioDB.exists) {
      dispatch({
        type: USUARIO_EXITO,
        payload: usuarioDB.data(),
      });

      localStorage.setItem("usuario", JSON.stringify(usuarioDB.data()));
    } else {
      await db.collection("usuarios").doc(usuario.email).set(usuario);
      dispatch({
        type: USUARIO_EXITO,
        payload: usuario,
      });

      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const usuarioActivo = () => (dispatch) => {
  if (localStorage.getItem("usuario")) {
    dispatch({
      type: USUARIO_EXITO,
      payload: JSON.parse(localStorage.getItem("usuario")),
    });
  }
};

export const cerrarSesion = () => (dispatch) => {
  auth.signOut();
  localStorage.removeItem("usuario");
  dispatch({
    type: CERRAR_SESION,
  });
};
