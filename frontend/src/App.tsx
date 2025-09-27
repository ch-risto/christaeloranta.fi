import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Maintenance from './pages/Maintenance/Maintenance';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Competence from './pages/Competence/Competence';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/competence" element={<Competence />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
