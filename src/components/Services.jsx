"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../styles/Services.css"

const Services = () => {
  const services = [
    {
      title: "Reparación de PCs",
      description:
        "Solucionamos problemas de hardware y software en computadoras de escritorio y laptops con rapidez y eficiencia.",
    },
    {
      title: "Cámaras de Seguridad",
      description: "Diseñamos e instalamos sistemas de vigilancia de última generación para hogares y negocios.",
      showProjectsButton: true,
      buttonText: "Ver Cámaras",
      buttonLink: "/camaras-seguridad",
    },
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados para impulsar tu presencia en línea.",
      showProjectsButton: true,
      buttonText: "Ver proyectos",
      buttonLink: "/portfolio",
    },
  ]

  const handleLinkClick = () => {
    // Scroll al inicio cuando se hace clic en el enlace
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <section className="services" id="services">
      <div className="section-inner">
        <h2>Nuestros Servicios</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.showProjectsButton && (
                <div className="service-buttons">
                  <Link to={service.buttonLink} className="service-link projects-link" onClick={handleLinkClick}>
                    {service.buttonText}
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
