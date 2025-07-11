"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import CamarasSeguridad from "./pages/CamarasSeguridad"
import "./styles/App.css"

// Componente para manejar el scroll en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Deshabilitar el scroll restoration automático del navegador
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    // Scroll inmediato y forzado al cambiar de ruta
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Scroll adicional con timeout para asegurar
    const timeouts = [0, 50, 100, 200]
    timeouts.forEach((delay) => {
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, delay)
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/camaras-seguridad" element={<CamarasSeguridad />} />
      </Routes>
    </Router>
  )
}

export default App
