import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLayout from './layouts/AdminLayout';
import Layout from './layouts/Layout';
import About from './pages/About/About';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<AdminLayout />}>
                            <Route path="/admin" element={<AdminDashboard />} />
                        </Route>
                    </Route>
                    {/* Add more routes here as needed */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
