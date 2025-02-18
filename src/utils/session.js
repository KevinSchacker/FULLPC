import { encrypt, decrypt } from "./encryption"

export const createSession = async (userId) => {
  const sessionId = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 horas

  const sessionData = {
    id: sessionId,
    userId,
    expiresAt: expiresAt.toISOString(),
  }

  // Encriptar datos de sesión
  const encryptedSession = await encrypt(JSON.stringify(sessionData))

  // Guardar en almacenamiento seguro (ejemplo con localStorage)
  localStorage.setItem("session", encryptedSession)

  return sessionId
}

export const validateSession = async () => {
  try {
    const encryptedSession = localStorage.getItem("session")
    if (!encryptedSession) return null

    const sessionData = JSON.parse(await decrypt(encryptedSession))

    if (new Date(sessionData.expiresAt) < new Date()) {
      localStorage.removeItem("session")
      return null
    }

    return sessionData
  } catch (error) {
    console.error("Error validating session:", error)
    return null
  }
}

export const destroySession = () => {
  localStorage.removeItem("session")
}

