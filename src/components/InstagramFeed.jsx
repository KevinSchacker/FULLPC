import { motion } from "framer-motion"
import "../styles/InstagramFeed.css"

const InstagramFeed = () => {
  // Publicaciones predefinidas
  const posts = [
    {
      id: 1,
      imageUrl: "https://scontent.fsra4-1.fna.fbcdn.net/v/t39.30808-6/471212758_1140930901365887_3955903790677219228_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B9rwiKgBIToQ7kNvgHAqXCV&_nc_oc=AdjOuF4jjgbNYvwv7Y4zKUkcGGNPX2itTyyyDZrHN7UG67246E8jF-mRB3dE5R2hjwo&_nc_zt=23&_nc_ht=scontent.fsra4-1.fna&_nc_gid=Abuz0SkTbEMBIn2zf_hL0K_&oh=00_AYBE3cPc1UuXd6nJQQr-yk_WArNTkTUA8i2MgWtXfKyl0A&oe=67B6EFAB",
      likes: 1,
      comments: 0,
      caption: "Dale nueva vida a tu PC! 💻 Con nuestro servicio de mantenimiento y limpieza, mejora su rendimiento y alarga su vida útil.",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 2,
      imageUrl: "https://scontent.fsra4-1.fna.fbcdn.net/v/t39.30808-6/470215515_1138316728293971_9216720726270092110_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U0ARgp6II9AQ7kNvgERIt8J&_nc_oc=Adir-uudSww87Oc74TzlJnT_MhY9BJImGrKpZBnlFa9fVjNL8FZbzrEpsW2jLPujxOo&_nc_zt=23&_nc_ht=scontent.fsra4-1.fna&_nc_gid=AEWot2g61SEcWaMmVKXv91o&oh=00_AYAQPBKp_7_e5bcnUuq4QwgAG1t-sbvfYwZA4vY-ZUx5Zg&oe=67B6F19E",
      likes: 3,
      comments: 0,
      caption: "¡No dejes que el calor del verano afecte tu PC! 🌞 Mantene tu equipo en óptimas condiciones con FullPc: limpieza completa y revisión de pasta térmica para un rendimiento sin problemas. ¡Protegé tu tecnología!",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 3,
      imageUrl: "https://scontent.fsra4-1.fna.fbcdn.net/v/t39.30808-6/469555422_1129349335857377_972907065305521843_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=R_9TDCE_jeAQ7kNvgHZmzzq&_nc_oc=AdjchOwiLLY5DFNAkSwKIRmYZ9OH0F9IKqtEHKuZIXuaKpN69AbBGsUq-7tguYGTRd4&_nc_zt=23&_nc_ht=scontent.fsra4-1.fna&_nc_gid=AcrR49t4jKskT_5z9u7AjCr&oh=00_AYBp3GtieSSVcZru4M106rrVOxHyCUil-HqOGf5LJ_Zt5w&oe=67B6E242",
      likes: 1,
      comments: 1,
      caption: "Protección las 24 horas Cuida lo que más importa: tu hogar y tu familia.",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 4,
      imageUrl: "https://scontent.fsra4-1.fna.fbcdn.net/v/t39.30808-6/469365828_1128599842598993_6732724578086723055_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6z2141Bitk8Q7kNvgH323_Z&_nc_oc=AdgIyKHOVOUY5C8H5vfyHC_obwK3YDYU4H2F_CPAhdI1yHZA4uxsN_WXaRiviMEr7v8&_nc_zt=23&_nc_ht=scontent.fsra4-1.fna&_nc_gid=A-Zdbax7gUZk4plmugL-Fri&oh=00_AYBzyCbBWg82Q9w2oLn-PbBV4QLaM4KBs8KWLhw8nxB2Lw&oe=67B6DFA9",
      likes: 1,
      comments: 0,
      caption: "¿Tu computadora no está rindiendo al máximo?",
      permalink: "https://www.instagram.com/full_pcs/",
    },
    {
      id: 5,
      imageUrl: "https://scontent.fsra4-1.fna.fbcdn.net/v/t39.30808-6/469141584_1127746999350944_7686651817279894966_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qnOBLWzdEOsQ7kNvgGjWeAY&_nc_oc=AdiYSA8oqGrHR_zKOH2jlNi8cbO5yv1-W8jU7LsSIYeVOSImDk6VkSoX0nbUJM3sgjI&_nc_zt=23&_nc_ht=scontent.fsra4-1.fna&_nc_gid=A1HkSTzyHuG5TYnoxsFlknf&oh=00_AYCcLj-UXGTLcUyZGmG1Y_ibRUXM-uotRyn4AVbiLhX1ig&oe=67B70002",
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

