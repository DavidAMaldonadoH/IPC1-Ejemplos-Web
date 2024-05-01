import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "../stores/userStore";

function Profile(props) {
  const [name, setName] = useState(props.user.first_name)
  const [lastName, setLastName] = useState(props.user.last_name)
  const [email, setEmail] = useState(props.user.email)
  const [creditCard, setCreditCard] = useState(props.user.credit_card)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: Number(id),
      first_name: name,
      last_name: lastName,
      email: email,
      credit_card: creditCard,
      password
    };
    try {
      const response = await fetch(`http://localhost:3000/updateCustomer`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert('Error updating user');
      console.error(error);
    }
  };

  useEffect(() => {
    if (!props.user) {
      navigate('/')
    }
  }, [])

  return (<div className='container' style={{ justifyContent: 'center' }}>
      <h1>Mi Perfil</h1>
      <form className="register-form" action='PUT' onSubmit={handleSubmit}>
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
        <button type="submit" className="light-button">Actualizar</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);