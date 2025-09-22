import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer/Footer';
import Maintenance from './pages/Maintenance/Maintenance';
import NavBar from './components/NavBar/navBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
