import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className="link">About</NavLink>
          </li>
          <li>
            <NavLink to="contact" className="link">Contact</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="login" className="link">Login</NavLink>
          </li>
          <li>
            <NavLink to="register" className="link">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;