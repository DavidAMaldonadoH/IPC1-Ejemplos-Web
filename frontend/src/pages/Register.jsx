import { useState } from 'react'

export default function Register() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      first_name: name,
      last_name: lastName,
      email: email,
      credit_card: creditCard,
      password
    }
    console.log(data)
    try {
      const response = await fetch('http://localhost:3000/addCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      alert(result.message)
      setName('')
      setLastName('')
      setEmail('')
      setCreditCard('')
      setPassword('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="container" style={{ justifyContent: "center" }}>
      <h1>Register</h1>
      <form className="register-form" action='POST' onSubmit={handleSubmit}>
        <div className="form-group-2">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => { setName(e.target.value) }}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              onChange={(e) => { setLastName(e.target.value) }}
              value={lastName}
            />
          </div>
        </div>
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
          <label htmlFor="credit_card">Tarjeta de Crédito</label>
          <input
            type="text"
            id="credit_card"
            name="credit_card"
            required
            onChange={(e) => { setCreditCard(e.target.value) }}
            value={creditCard}
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
        <button type="submit" className="light-button">Register</button>
      </form>
    </div>
  )
}
