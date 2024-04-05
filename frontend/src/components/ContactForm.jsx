import { useState } from "react"

export default function ContactForm(props) {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.manejarEnvio({ name, id: Math.floor(Math.random() * 100) + 1 })
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <button type="submit" className="primary-button">Crear</button>
    </form>
  )
}