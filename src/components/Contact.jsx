import InstagramFeed from "./InstagramFeed"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        
        <InstagramFeed />
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p>Email: fullpcs@gmail.com</p>
          <p>Teléfono: +5493755262680</p>
          <p>Dirección: Oberá Misiones</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

