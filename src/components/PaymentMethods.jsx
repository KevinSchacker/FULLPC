"use client"

import { motion } from "framer-motion"
import "../styles/PaymentMethods.css"

const PaymentMethods = () => {
  const paymentMethods = [
    { icon: "./visa.png", name: "Credito" },
    { icon: "./transfer.png", name: "Transferencia" },
    { icon: "./cash.png", name: "Efectivo" },
  ]

  return (
    <section className="payment-methods">
      <div className="section-inner">
        <h2>Medios de Pago</h2>
        <div className="payment-icons">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              className="payment-icon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={method.icon || "/placeholder.svg"} alt={method.name} width="40" height="40" />
              <span>{method.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods

