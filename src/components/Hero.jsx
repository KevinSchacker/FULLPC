"use client"

import { motion } from "framer-motion"
import "../styles/Hero.css"

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Soluciones Tecnológicas Integrales
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Expertos en reparación de PCs, instalación de cámaras de seguridad y desarrollo web de vanguardia
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="https://wa.me/+5493755262680" className="btn primary-btn" target="_blank" rel="noopener noreferrer">
            Contáctanos
          </a>
          <a href="#why-us" className="btn secondary-btn">
            ¿Por qué elegirnos?
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

