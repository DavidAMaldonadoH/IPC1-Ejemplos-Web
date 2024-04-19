import { useState } from "react"

export default function About() {
  const [data, setData] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result)
        setData(data)
      }
      reader.readAsText(file)
    }
  }

  const handleUpload = async () => {
    if (!data) {
      alert('No hay datos para cargar')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/addCustomers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        alert('Datos cargados con éxito')
      } else {
        alert('Error al cargar los datos')
      }

    } catch (error) {
      alert('Error al cargar los datos')
    }
  }

  return (
    <main className="container">
      <div className="about-header">
        <h1>Cargar Datos</h1>
        <label htmlFor="file" className="file-button">
          Selecciona un archivo JSON
          <input type="file" id="file" accept=".json" onChange={handleFileChange} />
        </label>
        <button type="button" className="light-button" onClick={handleUpload}>
          Cargar Datos
        </button>
      </div>
      <div className="about-content">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Tarjeta de Crédito</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.credit_card}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}