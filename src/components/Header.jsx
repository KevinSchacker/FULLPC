"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "unset"
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo1.png" alt="FULL PC Logo" />
        </Link>
        <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <a href="/#services" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="/#about" onClick={closeMenu}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="https://wa.me/+5493755262680" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
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

