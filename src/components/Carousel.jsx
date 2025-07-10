"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/Carousel.css"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      title: "Reparación de PCs",
      subtitle: "Servicio Técnico Especializado",
      description: "Diagnóstico • Reparación express • Instalacion Remota • Garantía ",
      image: "/prueba-carrusel.png",
      buttonText: "Solicitar Servicio",
      buttonLink: "https://wa.me/1234567890",
    },
    {
      id: 2,
      title: "Cámaras de Seguridad",
      subtitle: "Protege lo que más Importa",
      description: "Instalación profesional • Monitoreo 24/7 • Tecnología FHD • Garantía",
      image: "/prueba-carrusel2.png",
      buttonText: "Cotizar Instalación",
      buttonLink: "https://wa.me/+5493755262680",
    },
    {
      id: 3,
      title: "Desarrollo Web",
      subtitle: "Tu Presencia Digital",
      description: "Diseño moderno • SEO optimizado • Responsive design",
      image: "/prueba-carrusel1.png",
      buttonText: "Ver Proyectos",
      buttonLink: "/portfolio",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="carousel-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    {banners[currentSlide].title}
                  </motion.h2>
                  <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    {banners[currentSlide].subtitle}
                  </motion.h3>
                  <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                    {banners[currentSlide].description}
                  </motion.p>
                  <motion.div
                    className="slide-button-container"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {banners[currentSlide].buttonLink.startsWith("http") ? (
                      <a
                        href={banners[currentSlide].buttonLink}
                        className="slide-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {banners[currentSlide].buttonText}
                      </a>
                    ) : (
                      <a href={banners[currentSlide].buttonLink} className="slide-button">
                        {banners[currentSlide].buttonText}
                      </a>
                    )}
                  </motion.div>
                </div>
                <div className="slide-image">
                  <img
                    src={banners[currentSlide].image || "/placeholder.svg"}
                    alt={banners[currentSlide].title}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          <button className="carousel-nav prev" onClick={prevSlide} aria-label="Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-nav next" onClick={nextSlide} aria-label="Siguiente">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
