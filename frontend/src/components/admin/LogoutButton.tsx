import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LogoutButton() {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleLogout = async () => {
        try {
            setLoading(true);
            await signOut();
            navigate('/login', { replace: true });
        } catch (error) {
            console.error('Logout failed:', error);
            setMessage('Logout failed. Please try again.');
            setLoading(false);
        }
    };

    return (
        <button onClick={handleLogout} disabled={loading}>
            {loading ? 'Logging out...' : 'Logout'}
            {message && <span>{message}</span>}
        </button>
    );
}
