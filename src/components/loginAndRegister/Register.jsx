import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../../routes/Router";
import { createUser } from "../../services/user";
import swal from "sweetalert";
import "./style.scss";

const Register = () => {
  //const { postUsuario } = useContext(AppContext);
  const navigate = useNavigate();

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
      <form onSubmit={handleSubmit(userCreate)} className="form">
        <label>
          Nombre:
          <input
            type="text"
            {...register("name", { required: true })}
            className={errors.name ? "input--error" : ""}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            {...register("email", { required: true })}
            className={errors.email ? "input--error" : ""}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: true })}
            className={errors.password ? "input--error" : ""}
          />
        </label>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
export default Register;
