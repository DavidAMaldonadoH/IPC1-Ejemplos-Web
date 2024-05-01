import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../stores/userStore";

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (result) {
        props.login(result)
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/protected')
      } else {
        alert('User not found')
      }
      setEmail('')
      setPassword('')
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div className="container" style={{ justifyContent: 'center' }}>
      <h1>Login</h1>
      <form className="register-form" action='POST' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
          />
        </div>
        <button type="submit" className="light-button">Login</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Login);