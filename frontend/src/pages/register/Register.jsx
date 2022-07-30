import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Email</label>
            <input type="text" className='registerInput' placeholder="Enter your email..." id="" />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder="Enter your password..." id="" />
        </form>
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
