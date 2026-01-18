import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import CV from './pages/CV/CV';
import Maintenance from './pages/Maintenance/Maintenance';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
