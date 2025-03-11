"use client"

import { motion } from "framer-motion"
import "../styles/WhyUs.css"

const WhyUs = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Garantía de Calidad",
      description: "Todos nuestros servicios cuentan con garantía y respaldo profesional.",
    },
    {
      icon: "⏰",
      title: "Respuesta Rápida",
      description: "Atendemos tus necesidades con la urgencia que mereces.",
    },
    {
      icon: "🏆",
      title: "Experiencia Comprobada",
      description: "Más de 6 años brindando soluciones tecnológicas.",
    },
    {
      icon: "👥",
      title: "Equipo Profesional",
      description: "Técnicos certificados y en constante capacitación.",
    },
  ]

  return (
    <section className="why-us" id="why-us">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por Qué Elegirnos?
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-emoji">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="stat-item">
            <h4>+100</h4>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat-item">
            <h4>+50</h4>
            <p>Proyectos Completados</p>
          </div>
          <div className="stat-item">
            <h4>+6</h4>
            <p>Años de Experiencia</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs

