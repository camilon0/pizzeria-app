import React, { useContext, useEffect } from "react";
import { AppContext } from "../../routes/Router";

const Footer = ({ handleCloseSession }) => {
  const { usuario, setUsuario } = useContext(AppContext);
  useEffect(() => {
    //aqui
    const userSession = JSON.parse(sessionStorage.getItem("user"));
    setUsuario(userSession);
  }, []);
  return (
    <footer className="footer">
      <span>Home</span>
      <button onClick={handleCloseSession}>Cerrar sesión</button>
    </footer>
  );
};

export default Footer;
