import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  return (
    <main className="container">
      <h1>User: {id}</h1>
      <p>Manage your account</p>
    </main>
  )
}