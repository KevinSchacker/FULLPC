import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>FULL PC</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100063469631719" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/full_pcs/" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <nav className="footer-nav">
            <Link to="/">Inicio</Link>
            <Link to="/#services">Servicios</Link>
            <Link to="/#about">Nosotros</Link>
            <Link to="/#contact">Contacto</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FULL PC. Todos los derechos reservados.</p>
          <p>&copy; Schacker Kevin Leonardo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

