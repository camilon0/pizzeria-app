import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const userLogin = () => {
    console.log('iniciar sesión')
  }

  return (
    <div className="login">
      <img src="https://hungryforhalaal.co.za/wp-content/uploads/2021/05/Pizza-Spots-Cape-Town-Hungry-for-Halaal.jpg" alt="Pizza" />
      <div className="login__title">
        <h1>PizzaApi</h1>
        <h2>Inicia sesión en tu cuenta</h2>
        <p>Disfruta de la mejor pizza creada para las personas amantes del Código.</p>
      </div>
      <form onSubmit={handleSubmit(userLogin)} className="form">
        <div className="input">
          <input type="email" placeholder="Email"
            {...register("email", { required: true })}
            className={errors.email ? "input--error" : ""}
          />
        </div>

        <div className="input">
          <input type="password" placeholder="Contraseña"
            {...register("password", { required: true })}
            className={errors.password ? "input--error" : ""} />
        </div>
        <button>Iniciar sesión</button> 
      </form>
      <div className="linkRegister">
      <span>Restablecer contraseña</span> 
        <h5>¿No tienes una cuenta?</h5>
        <Link to="/register">
          <button className="register">Registrate aquí</button>
        </Link>
        </div>
      
    </div>
  );
};

export default Login;
