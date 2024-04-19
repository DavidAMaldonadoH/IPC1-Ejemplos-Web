import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Contact() {
  const [customers, setCustomers] = useState(null)

  const getCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3000/getCustomers',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      setCustomers(data)
    } catch (error) {
      alert('Error al solicitar los clientes')
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/deleteCustomer/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json()
      alert(result.message)
      if (response.ok) {
        setCustomers(customers.filter((customer) => customer.id !== id))
      }
    } catch (error) {
      alert('Error al momento de eliminar el cliente!')
    }
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <div className="container">
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Credit Card</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.credit_card}</td>
              <td>
                <Link
                  to={`/customers/${customer.id}`}
                  className="light-button"
                  style={{ textDecoration: 'none' }}
                >
                  Update
                </Link>
              </td>
              <td>
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}