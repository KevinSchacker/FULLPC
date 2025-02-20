import { motion } from "framer-motion"
import "../styles/Testimonials.css"

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    company: "Tech Innovators",
    text: "FULL PC transformó nuestra presencia en línea. Su equipo creó una landing page que aumentó nuestras conversiones en un 50%.",
    image: "https://st.depositphotos.com/2309453/3120/i/380/depositphotos_31203671-stock-photo-friendly-smiling-man.jpg",
  },
  {
    id: 2,
    name: "María González",
    company: "Restaurante El Sabor",
    text: "Gracias a la plataforma de gestión desarrollada por FULL PC, hemos optimizado nuestros procesos y mejorado la experiencia de nuestros clientes.",
    image: "https://st.depositphotos.com/2818715/3601/i/600/depositphotos_36017051-stock-photo-happy-mature-woman.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    company: "Seguridad Total",
    text: "La instalación de cámaras de seguridad realizada por FULL PC ha sido impecable. Su atención al detalle y profesionalismo son excepcionales.",
    image: "https://st5.depositphotos.com/3584053/75104/i/600/depositphotos_751045140-stock-photo-studio-close-portrait-handsome-man.jpg",
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-inner">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-company">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

