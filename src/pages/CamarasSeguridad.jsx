"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/CamarasSeguridad.css"

const CamarasSeguridad = () => {
  const pageRef = useRef(null)

  // useLayoutEffect se ejecuta ANTES del paint, más temprano que useEffect
  useLayoutEffect(() => {
    // Scroll inmediato y múltiple
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Si hay referencia al elemento, scrollear a él
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "auto", block: "start" })
    }
  }, [])

  // useEffect adicional como respaldo
  useEffect(() => {
    // Múltiples intentos de scroll con diferentes delays
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    scrollToTop()

    const timeouts = [0, 10, 50, 100, 200, 500]
    const timeoutIds = timeouts.map((delay) => setTimeout(scrollToTop, delay))

    // Cleanup
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id))
    }
  }, [])

  const installationTypes = [
    { icon: "🏠", title: "Hogares", description: "Protección residencial completa" },
    { icon: "🏢", title: "Oficinas", description: "Seguridad empresarial profesional" },
    { icon: "🏪", title: "Comercios", description: "Vigilancia para tu negocio" },
    { icon: "🏛️", title: "Edificios", description: "Sistemas para consorcios" },
    { icon: "🏭", title: "Industrias", description: "Seguridad industrial avanzada" },
    { icon: "🏫", title: "Instituciones", description: "Protección institucional" },
  ]

  const products = [
    {
      id: 1,
      name: "Cámara Domo HD",
      image: "/camara-domo.png",
      features: ["Resolución 1080p", "Visión nocturna", "Resistente al clima"],
      buttonText: "Más Info",
    },
    {
      id: 2,
      name: "Cámara Bullet 4K",
      image: "/bullet-camera.png",
      features: ["Ultra HD 4K", "Zoom óptico", "Detección de movimiento"],
      buttonText: "Más Info",
    },
    {
      id: 3,
      name: "DVR/NVR Profesional",
      image: "/dvr.png",
      features: ["Grabación continua", "Acceso remoto", "Almacenamiento seguro"],
      buttonText: "Más Info",
    },
    {
      id: 4,
      name: "Cámara Full Color",
      image: "/cam-color.png",
      features: ["Visión nocturna a color", "Full HD", "Led Direccional"],
      buttonText: "Más Info",
    },
    {
      id: 5,
      name: "Cámara 360°",
      image: "/EZVIZ-360.png",
      features: ["Visión nocturna a color", "Seguimiento de personas", "Alarma"],
      buttonText: "Más Info",
    },
    {
      id: 6,
      name: "Kit Seguridad + Instalación",
      image: "/kit-seg.png",
      features: ["Visión nocturna a color", "Monitoreo", "Seguridad"],
      buttonText: "Más Info",
    },
  ]

  const features = [
    {
      title: "Monitoreo 24/7",
      description: "Vigilancia continua desde cualquier dispositivo móvil, tablet o computadora.",
      icon: "📱",
    },
    {
      title: "Instalación Profesional",
      description: "Técnicos certificados realizan la instalación completa con garantía incluida.",
      icon: "🔧",
    },
    {
      title: "Tecnología HD/4K",
      description: "Cámaras de alta definición para capturar cada detalle con claridad excepcional.",
      icon: "📹",
    },
    {
      title: "Almacenamiento Seguro",
      description: "Grabación local y en la nube para mantener tus videos siempre protegidos.",
      icon: "💾",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Cámaras de Seguridad - Instalación Profesional | FULL PC</title>
        <meta
          name="description"
          content="Instalación profesional de cámaras de seguridad HD y 4K. Monitoreo 24/7, tecnología avanzada y garantía completa. Protege tu hogar o negocio con FULL PC."
        />
        <meta
          name="keywords"
          content="cámaras de seguridad, instalación cámaras, videovigilancia, seguridad hogar, seguridad comercial, FULL PC"
        />
        <link rel="canonical" href="https://www.fullpc.com/camaras-seguridad" />
      </Helmet>

      <div className="App cameras-page" ref={pageRef}>
        <Header />
        <main>
          {/* Hero Section - Sin imagen de fondo */}
          <section className="cameras-hero">
            <div className="hero-content">
              <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                Sistemas de Seguridad Profesionales
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Protege lo que más te importa con tecnología de vanguardia
              </motion.p>
              <motion.div
                className="hero-buttons"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="https://wa.me/1234567890"
                  className="btn primary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar Gratis
                </a>
                <a href="#productos" className="btn secondary-btn">
                  Ver Productos
                </a>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="section-inner">
              <div
                className="cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>Hacé tu cotización en 3 simples pasos</h2>
                <p>¡Es gratis y sin compromiso!</p>
                <a href="https://wa.me/1234567890" className="cta-button" target="_blank" rel="noopener noreferrer">
                  Cotizar Online →
                </a>
              </div>
            </div>
          </section>

          {/* Installation Types */}
          <section className="installation-types">
            <div className="section-inner">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Realizamos Instalaciones en:
              </motion.h2>
              <div className="types-grid">
                {installationTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    className="type-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="type-icon">{type.icon}</div>
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="section-inner">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ¿Por qué elegir nuestros sistemas?
              </motion.h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="products-section" id="productos">
            <div className="section-inner">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Productos más elegidos por nuestros clientes
              </motion.h2>
              <div className="products-grid">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="product-image">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    </div>
                    <div className="product-content">
                      <h3>{product.name}</h3>
                      <ul className="product-features">
                        {product.features.map((feature, idx) => (
                          <li key={idx}>✓ {feature}</li>
                        ))}
                      </ul>
                      <a
                        href="https://wa.me/1234567890"
                        className="product-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.buttonText}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <div className="section-inner">
              <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2>¿Listo para proteger tu propiedad?</h2>
                <p>Contactanos para una consulta gratuita y cotización personalizada</p>
                <div className="contact-buttons">
                  <a
                    href="https://wa.me/1234567890"
                    className="contact-btn whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Consultar por WhatsApp
                  </a>
                  <a href="tel:+1234567890" className="contact-btn phone">
                    <i className="fas fa-phone"></i>
                    Llamar Ahora
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />

        {/* WhatsApp Float Button */}
        <motion.a
          href="https://wa.me/1234567890"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-whatsapp"></i>
        </motion.a>
      </div>
    </>
  )
}

export default CamarasSeguridad
