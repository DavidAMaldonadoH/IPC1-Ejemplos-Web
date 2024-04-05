import { useState } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

function ContactManager() {
  const [contacts, setContacts] = useState([])

  const manejarEnvio = (contact) => {
    setContacts([...contacts, contact])
  };

  return (
    <div>
      <ContactForm manejarEnvio={manejarEnvio} />
      <ContactList contacts={contacts} />
    </div>
  )

}

export default ContactManager