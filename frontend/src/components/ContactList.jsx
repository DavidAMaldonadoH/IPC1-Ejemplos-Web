import { Link } from "react-router-dom"

function ContactList(props) {
  return (
    <ul className="contact-list">
      {props.contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`contacts/${contact.id}`} className="contact">
          {contact.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}


export default ContactList