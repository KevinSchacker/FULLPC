"use client"

import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"
import About from "../components/About"
import PaymentMethods from "../components/PaymentMethods"
import Footer from "../components/Footer"
import "../styles/Home.css"

const LazyTestimonials = lazy(() => import("../components/Testimonials"))
const LazyInstagramFeed = lazy(() => import("../components/InstagramFeed"))

const Home = () => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "FULL PC",
    url: "https://www.fullpc.com",
    logo: "https://www.fullpc.com/logo.png",
    description:
      "FULL PC ofrece soluciones tecnológicas integrales, incluyendo reparación de PCs, instalación de cámaras de seguridad y desarrollo web profesional.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oberá",
      addressRegion: "Misiones",
      postalCode: "3360",
      addressCountry: "Argentina",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5493755262680",
    },
    sameAs: [
      "https://www.facebook.com/fullpc",
      "https://www.instagram.com/fullpc",
      "https://www.linkedin.com/company/fullpc",
    ],
  }

  return (
    <>
      <Helmet>
        <title>
          FULL PC - Soluciones Tecnológicas Integrales | Reparación de PCs, Cámaras de Seguridad y Desarrollo Web
        </title>
        <meta
          name="description"
          content="FULL PC ofrece servicios profesionales de reparación de computadoras, instalación de sistemas de seguridad y desarrollo web de vanguardia. Soluciones tecnológicas personalizadas para impulsar su negocio."
        />
        <meta
          name="keywords"
          content="reparación de PCs, cámaras de seguridad, desarrollo web, soluciones tecnológicas, FULL PC, servicios informáticos"
        />
        <link rel="canonical" href="https://www.fullpc.com" />
        <meta property="og:title" content="FULL PC - Soluciones Tecnológicas Integrales" />
        <meta
          property="og:description"
          content="Expertos en reparación de PCs, instalación de cámaras de seguridad y desarrollo web profesional. Impulsa tu negocio con nuestras soluciones tecnológicas."
        />
        <meta property="og:image" content="https://www.fullpc.com/og-image-home.jpg" />
        <meta property="og:url" content="https://www.fullpc.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="App home-container">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <About />
          <Suspense fallback={<div>Cargando testimonios...</div>}>
            <LazyTestimonials />
          </Suspense>
          <Suspense fallback={<div>Cargando feed de Instagram...</div>}>
            <LazyInstagramFeed />
          </Suspense>
          <PaymentMethods />
        </main>
        <Footer />
        <motion.a
          href="https://wa.me/+5493755262680"
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

export default Home

