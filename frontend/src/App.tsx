import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Maintenance from './pages/Maintenance/Maintenance';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
