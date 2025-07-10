"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset"
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    document.body.style.overflow = "unset"

    if (location.pathname !== "/") {
      window.location.href = `/${sectionId ? "#" + sectionId : ""}`
      return
    }

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo" onClick={(e) => handleNavClick(e)}>
          <img src="/logo1.png" alt="FULL PC Logo" />
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/" onClick={(e) => handleNavClick(e)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/#services" onClick={(e) => handleNavClick(e, "services")}>
                Servicios
              </a>
            </li>
            <li>
              <a href="/#about" onClick={(e) => handleNavClick(e, "about")}>
                Nosotros
              </a>
            </li>
           
            <li>
              <a
                href="https://wa.me/+5493755262680"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.body.style.overflow = "unset"
                }}
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

