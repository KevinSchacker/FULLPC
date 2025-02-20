import { motion } from "framer-motion"
import "../styles/InstagramFeed.css"

const InstagramFeed = () => {
  // Publicaciones predefinidas
  const posts = [
    {
      id: 1,
      imageUrl: "./fullpc5.jpg",
      likes: 1,
      comments: 0,
      caption: "Dale nueva vida a tu PC! 💻 Con nuestro servicio de mantenimiento y limpieza, mejora su rendimiento y alarga su vida útil.",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 2,
      imageUrl: "./fullpc4.jpg",
      likes: 3,
      comments: 0,
      caption: "¡No dejes que el calor del verano afecte tu PC! 🌞 Mantene tu equipo en óptimas condiciones con FullPc: limpieza completa y revisión de pasta térmica para un rendimiento sin problemas. ¡Protegé tu tecnología!",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 3,
      imageUrl: "./fullpc3.jpg",
      likes: 1,
      comments: 1,
      caption: "Protección las 24 horas Cuida lo que más importa: tu hogar y tu familia.",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 4,
      imageUrl: "./fullpc2.jpg",
      likes: 1,
      comments: 0,
      caption: "¿Tu computadora no está rindiendo al máximo?",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 5,
      imageUrl: "./fullpc1.jpg",
      likes: 3,
      comments: 0,
      caption: "💻🖱Protege y optimiza tu mundo digital con FullPc: especialistas en informática y seguridad. ¡Confía en nosotros para soluciones integrales!",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    
  ]

  return (
    <div className="instagram-feed">
      <h2>Síguenos en Instagram</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="post-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={post.imageUrl || "/placeholder.svg"} alt={post.caption.slice(0, 100)} loading="lazy" />
            <div className="post-overlay">
              <span className="likes">
                <i className="fas fa-heart"></i> {post.likes}
              </span>
              <span className="comments">
                <i className="fas fa-comment"></i> {post.comments}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
      <a
        href="https://www.instagram.com/full_pcs/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn instagram-btn"
      >
        Ver más en Instagram
      </a>
    </div>
  )
}

export default InstagramFeed

