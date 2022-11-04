import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
//import { AppContext } from "../../routes/Router";
import { createUser, redirectUser } from "../../services/user";
import swal from "sweetalert";
import "./style.scss";

const Register = () => {
  //const { postUsuario } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    //aqui
    //redirect if not session
    redirectUser(navigate);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userCreate = async (user) => {
    //if (user.length !== "" && password.length !== "" && name.length !== "") {
    const response = await createUser(user);
    if (response?.id) {
      swal("Excelente!", "Usuario creado con éxito!", "success");
      navigate("/");
    }
  };
  return (
    <div className="login">
      <img
        src="https://hungryforhalaal.co.za/wp-content/uploads/2021/05/Pizza-Spots-Cape-Town-Hungry-for-Halaal.jpg"
        alt="Pizza"
      />
      <div className="formRegister"></div>
      <form onSubmit={handleSubmit(userCreate)} className="form">
        <div className="input">
          <input
            type="text"
            {...register("name", { required: true })}
            className={errors.name ? "input--error" : ""}
            placeholder="Nombre"
          />
        </div>

        <div className="input">
          <input
            type="email"
            {...register("email", { required: true })}
            className={errors.email ? "input--error" : ""}
            placeholder="Email"
          />
        </div>
        <div className="input">
          <input
            type="password"
            {...register("password", { required: true })}
            className={errors.password ? "input--error" : ""}
            placeholder="Contraseña"
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
export default Register;
