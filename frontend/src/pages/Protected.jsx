import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../stores/userStore'

function Protected(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!props.user) {
      navigate('/login')
    }
  }, [])

  return (
    <div className="container" style={{ justifyContent: 'center' }}>
      <h1>Protected</h1>
      <h2>Welcome {props.user.first_name}</h2>

      <button
        className='primary-button'
        onClick={() => {
          props.logout()
          localStorage.removeItem('user')
          navigate('/login')
        }}>Logout</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected)