import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';
import LoginForm from '../../components/admin/LoginForm';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (email: string) => {
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
        shouldCreateUser: false,
      },
    });

    if (error) {
      setMessage('Failed to send login link. Please try again.');
    } else {
      setMessage('Login link sent! Please check your email.');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <LoginForm onSubmit={handleLogin} loading={loading} />
      {message && <p className="message">{message}</p>}
    </div>
  );
}
