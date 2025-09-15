import chLogo from './assets/ch_logoNimellä_valkoin.png'
import './App.css'
import FaviconManager from './components/FaviconManager'

function App() {

  return (
    <>
      <FaviconManager />
      <div>
        <a target='blank' href='https://www.instagram.com/christaeloranta/'>
          <img src={chLogo} className="logo ch" alt="ch-logo christa eloranta" />
        </a>
      </div>
      <h1>Sivustoa päivitetään</h1>
      <p className="read-the-docs">
        Tervetuloa pian takaisin!
      </p>
      <p className='read-the-docs'>
        eloranta.christa@gmail.com<br />
        <a target='blank' href='https://www.instagram.com/christaeloranta/'>@christaeloranta</a>
      </p>
    </>
  )
}

export default App
