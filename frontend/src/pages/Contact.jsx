import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Contact() {
  const [customers, setCustomers] = useState(null)

  const getCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3000/getCustomers',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
      const data = await response.json()
      setCustomers(data)
    } catch (error) {
      alert('Error fetching customers')
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/deleteCustomer/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      alert(result.message)
      setCustomers(customers.filter((customer) => customer.id !== id))
    } catch (error) {
      alert('Error deleting customer')
      console.error(error)
    }
  }

  const handleSaveToCSV = async () => {
    try {
      const response = await fetch('http://localhost:3000/saveCustomersToCSV',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
      const data = await response.json()
      const blob = new Blob([data.content], { type: 'text/csv' })

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'customers.csv'
      a.click()

      window.URL.revokeObjectURL(url)
    } catch (error) {
      alert('Error saving customers to CSV')
      console.error(error)
    }
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <div className="container">
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Customers</h1>
        <button
          className="primary-button"
          type="button"
          onClick={handleSaveToCSV}
        >
          Save to CSV
        </button>
      </div>
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
                  to={`${customer.id}`}
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