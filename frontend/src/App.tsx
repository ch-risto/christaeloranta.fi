import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLayout from './layouts/AdminLayout';
import Layout from './layouts/Layout';

function App() {
  return (
    console.log('ENV DEBUG:', {
      url: import.meta.env.VITE_SUPABASE_URL,
      hasKey: !!import.meta.env.VITE_SUPABASE_KEY, // Älä tulosta avainta, vain onko se olemassa
    }),
    (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
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
    )
  );
}

export default App;
