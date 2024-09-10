import './Login.css'

function Login() {


  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <form className="login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Entrar</button>
            <h1 className='ntemconta'>Não tem conta? <a href="#"> Cadastre-se</a> </h1>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
