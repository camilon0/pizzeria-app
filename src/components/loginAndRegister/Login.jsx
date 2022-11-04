import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../../routes/Router";
import { userFind } from "../../services/user";
import swal from "sweetalert";
import "./style.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const { setUsuario } = useContext(AppContext);
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/register");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async ({ email, password }) => {
    const user = await userFind(email, password);
    if (user.length && !user.error) {
      swal("Bienvendio a la PizzeriApi, Que JSON desea llevar?");
      setUsuario(...user);
      console.log(...user);
      navigate("/home");
    }
  };

  return (
    <div className="loginBackground">

      {/* Encabezado */}
      <div className="content">
        {/* Formulario de login */}
        <Form onSubmit={handleSubmit(userLogin)}>
          <h2 className = "mainText" > PizzaApi </h2>
          <h4 className = "secondText"> Inicia sesión en tu cuenta </h4>
          <p className = "secondText">Disfruta de la mejor pizza creada para las personas amantes del Código.</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="tirtText" > E-mail: </p>
            <Form.Control required type="email" placeholder="ejemplo@correo.com" {...register("email", { required: true })}/>
            {/* <Form.Text className="text-muted">
              El e-mail es obligatorio.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <p className="tirtText" > Contraseña: </p>
            <Form.Control required type="password" placeholder="Ingrese la contraseña" {...register("password", { required: true })}/>
            {/* <Form.Text className="text-muted">
              La contraseña es obligatoria.
            </Form.Text> */}
          </Form.Group>

          <div class="row justify-content-center">
            <Button type="submit" variant="primary"> Iniciar sesión </Button>
          </div>
        </Form>
  

      {/* Registro de clientes nuevos */}
      <div className="registerSection">
        <p className="registerText1">Restablecer contraseña</p>
        <p className="registerText2">¿No tienes una cuenta?</p>
        <div class="col-md-12 text-center">
          <button type="button" onClick={changePage} class="btn btn-link">Regístrate aquí</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
