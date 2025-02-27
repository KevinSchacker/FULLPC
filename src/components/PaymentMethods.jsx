"use client"

import { motion } from "framer-motion"
import { FaCreditCard, FaMoneyBillWave, FaUniversity } from "react-icons/fa"
import "../styles/PaymentMethods.css"

const PaymentMethods = () => {
  const paymentMethods = [
    { type: "icon", icon: FaCreditCard, name: "Visa" },
    { type: "icon", icon: FaUniversity, name: "Transferencia" },
    { type: "icon", icon: FaMoneyBillWave, name: "Efectivo" },
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
              {method.type === "image" ? (
                <img src={method.icon} alt={method.name} width="40" height="40" />
              ) : (
                <method.icon size={40} />
              )}
              <span>{method.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentMethods
