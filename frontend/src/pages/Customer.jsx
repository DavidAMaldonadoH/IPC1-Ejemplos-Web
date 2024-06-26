import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Customer() {
  const { id } = useParams();
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [password, setPassword] = useState('')


  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/getCustomer/${id}`);
      const data = await response.json();
      setName(data.first_name)
      setLastName(data.last_name)
      setEmail(data.email)
      setCreditCard(data.credit_card)
      setPassword(data.password)
    } catch (error) {
      alert('Error fetching user');
      console.error(error);
    }
  };

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
    getUser();
  }, []);

  return (
    <div className='container' style={{ justifyContent: 'center' }}>
      <h1>Cliente No. {id}</h1>
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
  );
}

export default Customer;