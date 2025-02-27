"use client"

import { lazy, Suspense, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Portfolio.css"

const LazyTestimonials = lazy(() => import("../components/Testimonials"))

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`Proyecto ${project.title} - ${project.description}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <motion.a href={project.link} className="project-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Ver Proyecto
        </motion.a>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const location = useLocation()
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollToTop = () => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Scroll al inicio cuando el componente se monta o la ruta cambia
    scrollToTop()

    // También intentamos scrollear después de un pequeño retraso
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Landing page turística",
      description:
        "Diseño y desarrollo de una landing page atractiva para una empresa de turismo, optimizada para conversiones.",
      image: "../web-turismo.png",
      tags: ["React", "Next.js", "Tailwind"],
      link: "https://traslados-turism.netlify.app/",
    },
    {
      id: 2,
      
      title: "Landing Page Servicios de Odontologia",
      description:
        "plataforma dedicada a la salud bucal, ofreciendo información y recursos para el cuidado dental. ",
      image: "../web-odontologo.png",
      tags: ["React Native", "css" , "Vite"],
      link: "https://odontologico.netlify.app/",
    },
    {
      id: 3,
      title: "E-commerce de productos tecnológicos",
      description:
        "Tienda en línea moderna y segura para la venta de productos tecnológicos.",
      image: "../web-pcservice.png",
      tags: ["React", "Next.js", "FireBase"],
      link: "https://pc-service-react.netlify.app/",
    },
    {
      id: 4,
      title: "Landing Page con Sistema de Captación de Leads",
      description:
        "Sitio web moderno para un centro de estética y bienestar, desarrollado con React y Vite. La página presenta un diseño elegante, incluye un popup estratégico que ofrece un descuento del 20% a los visitantes.",
      image: "../web-estetica.png",
      tags: ["React", "CSS", "API" , "responsive"],
      link: "https://centro-belleza.netlify.app/",
    },
    {
      id: 5,
      title: "Web para restaurantes",
      description:
        "Plataforma de restaurantes, con servicio de menú. *WEB EN DESARROLLO*",
      image: "../web-restaurante.png",
      tags: ["React", "Node.js", "API"],
      
    },
    {
      id: 6,
      title: "Blog Interactiva",
      description:
        "Plataforma de contenido sobre tecnología y programación, con funciones de newsletter. *WEB EN DESARROLLO*",
      image: "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg",
      tags: ["React",],
     
    },
  ]

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        url: `https://www.fullpc.com${project.link}`,
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>Portfolio de Proyectos Web | Desarrollo Web Profesional | FULL PC</title>
        <meta
          name="description"
          content="Explora nuestro portfolio de proyectos web profesionales. Desde landing pages y e-commerce hasta aplicaciones móviles y dashboards analíticos. Soluciones tecnológicas integrales por FULL PC."
        />
        <meta
          name="keywords"
          content="desarrollo web, landing page, e-commerce, aplicaciones web, FULL PC, proyectos tecnológicos, diseño web, programación, SEO"
        />
        <link rel="canonical" href="https://www.fullpc.com/portfolio" />
        <meta property="og:title" content="Portfolio de Proyectos Web Profesionales | FULL PC" />
        <meta
          property="og:description"
          content="Descubre nuestros proyectos de desarrollo web innovadores y de alta calidad. Soluciones personalizadas para impulsar tu negocio en línea."
        />
        <meta property="og:image" content="https://www.fullpc.com/og-image-portfolio.jpg" />
        <meta property="og:url" content="https://www.fullpc.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="App portfolio-page" ref={scrollRef}>
        <Header />
        <main>
          <motion.section
            className="portfolio-hero"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-inner">
              <h1>Nuestro Portfolio de Proyectos Web</h1>
              <p>
                Descubre cómo hemos ayudado a empresas a transformar su presencia digital con soluciones web innovadoras
                y personalizadas.
              </p>
            </div>
          </motion.section>
          <section className="portfolio-grid">
            <div className="section-inner">
              <h2>Proyectos Destacados</h2>
              <div className="projects-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
          <Suspense fallback={<div>Cargando testimonios...</div>}>
            <LazyTestimonials />
          </Suspense>
        </main>
        <Footer />
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

export default Portfolio

