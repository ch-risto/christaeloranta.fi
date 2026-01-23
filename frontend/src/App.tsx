import './App.css'
import chLogoSvg from './assets/ch_.svg'
import christaPhoto from './assets/ChristaEloranta.jpg'
import christaHeadline from './assets/christaeloranta.png'
import ElorantaCV from './assets/Eloranta_CV.pdf'

function App() {
  return (
    <main className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              <img src={christaHeadline} alt="Hei, olen Christa Eloranta" className="headline-image" />
            </h1>
            <h2 className="hero-subheading">
              Tuotelähtöinen kehittäjä
            </h2>
            <p className="hero-intro">
              Utelias ja ratkaisukeskeinen tekijä, joka yhdistää teknisen osaamisen ja luovan ongelmanratkaisun merkityksellisiksi kokonaisuuksiksi.
            </p>
            {/* <p>
              Olen ohjelmistokehittäjä, jolla on käsityöläisen sielu. Taustani puuseppänä ja palvelualalla on opettanut, että laatu syntyy yksityiskohdista ja lopputuloksen täytyy paitsi toimia, myös tuntua oikealta. Nyt rakennan kestäviä ratkaisuja koodilla – samalla ammattiylpeydellä.
            </p> */}
            <p className="hero-tagline">
              Solekko tehä. Ite kun tekee, saa just mitä tekee.
            </p>
          </div>
          <div className="hero-photo">
            <img src={christaPhoto} alt="Christa Eloranta" className="photo" />
          </div>
        </div>
      </section>

      {/* Links / Contact Section */}
      <section className="links">
        <a 
          href="https://github.com/ch-risto" 
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-icon">↗</span>
          <span className="link-text">GitHub</span>
        </a>
        <a 
          href="https://linkedin.com/in/christa-eloranta" 
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-icon">↗</span>
          <span className="link-text">LinkedIn</span>
        </a>
        <a 
          href="mailto:eloranta.christa@gmail.com" 
          className="link-item"
        >
          <span className="link-icon">↗</span>
          <span className="link-text">Email</span>
        </a>

        <a 
          href={ElorantaCV} 
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
        <span className="link-icon">↗</span>
        <span className="link-text">CV</span>
      </a>
      </section>

      {/* Archive / Legacy Section */}
      <section className="archive">
        <div className="archive-content">
          <div className="archive-logo">
            <img src={chLogoSvg} alt="Christa Eloranta logo" className="logo" />
          </div>
          <div className="archive-text-content">
            <h2 className="archive-headline">Portfolio uudistuu</h2>
            <p className="archive-text">
              Uudistan parhaillaan portfoliotani. Sillä välin voit tutustua aiempiin töihini arkistosivullani.
            </p>
            <a 
              href="https://archive.christaeloranta.fi" 
              className="archive-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siirry arkistosivulle →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          Christa Eloranta {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}

export default App
