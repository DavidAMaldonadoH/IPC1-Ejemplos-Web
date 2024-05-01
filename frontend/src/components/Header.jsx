import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "../stores/userStore";

function Header(props) {
  const [links, setLinks] = useState([])
  const [homeLink, setHomeLink] = useState('/')
  const navigate = useNavigate()

  const rightLinks = [
    { path: 'login', text: 'Login' },
    { path: 'register', text: 'Register' }
  ]
  const loggedInLinks = [
    { path: 'reports', text: 'Reports' },
    { path: `protected/${props.user?.id}`, text: 'Profile' }
  ]

  useEffect(() => {
    if (props.user) {
      setLinks(loggedInLinks)
      setHomeLink('/protected')
    } else {
      setLinks(rightLinks)
      setHomeLink('/')
    }
  }, [props.user])

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={homeLink} className='link'>Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className='link'>About</NavLink>
          </li>
          <li>
            <NavLink to="contact" className='link'>Customers</NavLink>
          </li>
        </ul>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className='link'>{link.text}</NavLink>
            </li>
          ))}
          {(homeLink === '/protected') &&
            <li>
              <button
                className='link'
                onClick={() => {
                  props.logout()
                  localStorage.removeItem('user')
                  navigate('/login')
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);