import { useNavigate, Link } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funciones";

const MenuLateral = () => {
  let redireccion = useNavigate();
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alertaRedireccion(redireccion, "cerrando sesión...", "/");
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        Track{" "}
        <span className="aplicacion__menu-lateral-logo--resaltado">X</span>
      </h1>
      <h2>Usuario: {usuarioLogueado.nombre}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src="/logo.jpg"
        alt="Logo"
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home">
          Inicio
        </Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="envios">
          Gestión de envíos
        </Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="">
          Gestión de clientes
        </Link>
        <button
          onClick={cerrarSesion}
          type="button"
          className="aplicacion__menu-lateral-navegacion-item"
        >
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default MenuLateral;