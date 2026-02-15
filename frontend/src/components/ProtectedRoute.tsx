import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Tulevaisuuden varalle: Tässä voisi tarkistaa myös onko user.email === 'sinun@email.com'
  // jos haluat, että muut voivat kirjautua, mutta eivät pääse tähän reittiin.
  /*
    if (user.email !== 'christa@eloranta.fi') {
        return <Navigate to="/" replace />
    }
    */

  return <Outlet />;
}
