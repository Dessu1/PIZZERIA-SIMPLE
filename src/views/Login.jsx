import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { ingresoUsuario } from "../redux/usuarioDucks";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);

  useEffect(() => {
    if (activo) {
      props.history.push("/home");
    }
  }, [activo, props.history]);

  return (
    <div id='container-login'>
      <div className='left-content'></div>
      <div className='right-content'>
        <div className='content'>
          <div className='tittle'>
            <h2>Ingresar</h2>
          </div>

          <button
            className='btn-login'
            onClick={() => dispatch(ingresoUsuario())}
            disabled={loading}
          >
            <AiOutlineGoogle /> <span>Ingresar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
