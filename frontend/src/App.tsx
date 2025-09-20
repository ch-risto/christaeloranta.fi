import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './pages/Maintenance/Maintenance';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Maintenance />} />
          </Routes>
          {/* <Footer /> */}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
