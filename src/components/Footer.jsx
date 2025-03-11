"use client"

import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo1.png" alt="FULL PC Logo" />
            </Link>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <nav className="footer-nav">
            <Link
              to="/#services"
              onClick={() => {
                if (window.location.pathname === "/") {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#services"
                }
              }}
            >
              Servicios
            </Link>
            <Link
              to="/#about"
              onClick={() => {
                if (window.location.pathname === "/") {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#about"
                }
              }}
            >
              Nosotros
            </Link>
            <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              Proyectos
            </Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FULL PC. Todos los derechos reservados.</p>
          <p>© Schacker Kevin Leonardo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

