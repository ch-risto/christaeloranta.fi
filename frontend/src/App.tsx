import chLogo from './assets/ch_logoNimellä_valkoin.png'
import './App.css'
import FaviconManager from './components/FaviconManager'

function App() {

  return (
    <>
      <FaviconManager/>
      <div>
        <img src={chLogo} className="logo ch" alt="ch-logo christa eloranta" />
      </div>
      <h1>Sivustoa päivitetään</h1>
      <p className="read-the-docs">
        Tervetuloa pian takaisin!
      </p>
    </>
  )
}

export default App
