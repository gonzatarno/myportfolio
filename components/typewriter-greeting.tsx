"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function TypewriterGreeting({ audience = "designers" }) {
  const { language } = useLanguage()
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // Definir saludos según el idioma
  const greetings = {
    es: ["Hola", "Hello", "Ciao"],
    en: ["Hello", "Hola", "Ciao"],
  }

  useEffect(() => {
    const currentGreetings = greetings[language]
    const handleTyping = () => {
      const i = loopNum % currentGreetings.length
      const fullText = currentGreetings[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      // Velocidad de escritura/borrado
      if (isDeleting) {
        setTypingSpeed(80) // Más rápido al borrar
      } else {
        setTypingSpeed(150) // Normal al escribir
      }

      // Si terminó de escribir, comenzar a borrar después de una pausa
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      }
      // Si terminó de borrar, pasar al siguiente texto
      else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500) // Pausa antes de comenzar el siguiente
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, language])

  return (
    <div className="flex flex-col">
      {/* Primera línea: solo el saludo */}
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        <span className="inline-block min-w-32">{text}</span>
      </h1>

      {/* Segunda línea: "soy gonza" + emoji */}
      <div className="flex items-center mt-1 md:mt-2">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{language === "es" ? "soy Gonza" : "I'm Gonza"}</h1>
        <span className="ml-2 text-4xl md:text-5xl">{audience === "recruiters" ? "🚀" : "😃"}</span>
      </div>
    </div>
  )
}

