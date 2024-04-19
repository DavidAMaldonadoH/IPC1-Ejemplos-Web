import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login')
    } else {
      setUser(user)
    }
  }, [])

  return (
    <main className="container" style={{ justifyContent: 'center'}}>
      <h1>Protected</h1>
      <h2>Welcome {user?.first_name}</h2>

      <button
        className="primary-button"
        onClick={() => {
          localStorage.removeItem('user')
          navigate('/login')
        }}
      >
        Logout
      </button>

    </main>
  )

}