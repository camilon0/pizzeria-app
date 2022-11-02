import React, { useContext } from 'react'
import { AppContext } from "../../routes/Router";


const Header = () => {
    const { theme, usuario } = useContext(AppContext);

  return (
    <header className='header'>
    <div className='perfil'>
    <h2>Home</h2>
    <h5>
    {Object.entries(usuario).length === 0
      ? "App Context"
      : `¡Qué bueno verte ${usuario.name}`}
  </h5>
  </div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56WA-IDRwyiTeEae_UBc4fMB2i87RjPQ5NSI_Gi4QqgVBA1cPpZyKdAJx8t975zNaDEs&usqp=CAU" alt="imagen" />
  </header>
  )
}

export default Header