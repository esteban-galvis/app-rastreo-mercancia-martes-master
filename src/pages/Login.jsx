import { useEffect, useState } from 'react'
import { usuarios } from '../services/database'
import './Login.css'
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones'
import { useNavigate } from 'react-router-dom'
let apiUsuario = "https://back-json-server-martes.onrender.com/usuarios"

function Login() {
  const [getUser, setUser] = useState("")
  const [getPassword, setPassword] = useState("")
  const [getName, setName] = useState("")
  const [getEmail, setEmail] = useState("")
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate()

  function getUsuarios(){
    fetch(apiUsuario)
    .then((Response) => Response.json())
    .then((data) => setUsuarios(data))
    .catch((error) => console.log(error));
  }

  useEffect(()=>{
    getUsuarios()
  }, [])

  getUsuarios();

  function buscarUsuario() {
    let usuarioEncontrado = usuarios.find((item) => getUser == item.usuario && getPassword == item.contrasena)
    return usuarioEncontrado
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      let token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(redireccion, "Bienvenido al sistema", "/home")
    } else {
      alertaError()
    }
  }

  function registrarUsuario(){
    let auth = usuarios.some((item)=>item.correo == getEmail || item.usuario == getUser)
    if(auth){
      alertaError()
    }else{
      let usuario = {
        nombre: getName,
        correo: getEmail,
        usuario: getUser,
        contrasena: getPassword,
      }
      fetch(apiUsuario, {
        method: "POST",
        body: JSON.stringify(usuario)
      })
    }
  }

  return (
    <div class="container">
      <input id="signup_toggle" type="checkbox" />
      <form class="form">
        <div class="form_front">
          <div class="form_details">Login</div>
          <input onChange={(e) => setUser(e.target.value)} type="text" class="input" placeholder="Username" />
          <input onChange={(e) => setPassword(e.target.value)} type="text" class="input" placeholder="Password" />
          <button type="button" onClick={iniciarSesion} class="btn">Login</button>
          <span class="switch">Don't have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div class="form_back">
          <div class="form_details">SignUp</div>
          <input onChange={(e) => setName(e.target.value)} type="text" class="input" placeholder="Firstname" />
          <input onChange={(e) => setUser(e.target.value)} type="text" class="input" placeholder="Username" />
          <input onChange={(e) => setPassword(e.target.value)} type="text" class="input" placeholder="Password" />
          <input onChange={(e) => setEmail(e.target.value)} type="text" class="input" placeholder="Email" />
          <button type='button' onAuxClick={registrarUsuario} class="btn">Signup</button>
          <span class="switch">Already have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login