import { useAuth } from '../context/AuthContext';
import AdminDashboard from '../pages/admin/AdminDashboard';
import LogoutButton from '../components/admin/LogoutButton';

export default function AdminLayout() {
    const { user } = useAuth();

    return (
        <div className="admin-layout">
            <header className="admin-header">
                <h1>Admin Header</h1>
                <p>Welcome, {user?.email}!</p>
                <LogoutButton />
            </header>
            <main className="admin-content">
                <AdminDashboard />
            </main>
        </div>
    );
}
