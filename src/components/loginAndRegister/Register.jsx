import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './style.scss'

const Register = () => {

const { register, handleSubmit, formState: { errors } } = useForm();
 
const userLogin = () =>{
    console.log('iniciar sesión')
}

  return (
    <div className="login">
      <img src="https://hungryforhalaal.co.za/wp-content/uploads/2021/05/Pizza-Spots-Cape-Town-Hungry-for-Halaal.jpg" alt="Pizza" />
       <form onSubmit={handleSubmit(userLogin)} className="form">
       <label>
            Nombre:
            <input type="text" 
            {...register("name", { required: true})}
            className={errors.name ? "input--error" : ""}
             />
        </label>
        <label>
            Email:
            <input type="email" 
            {...register("email", { required: true})}
            className={errors.email ? "input--error" : ""}
             />
        </label>
        <label>
            Password:
            <input type="password" 
            {...register("password", { required: true })}
            className={errors.password ? "input--error" : ""}/>
        </label>
        <Link to="/">
        <button>Registrarse</button>
      </Link>
    </form>
     
    </div>
  );
};

export default Register;
