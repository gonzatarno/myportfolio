"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isOverLink, setIsOverLink] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    // Cambiar el cursor nativo a "none" solo cuando no está sobre elementos interactivos
    if (!isOverLink) {
      document.body.style.cursor = "none"
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)

      // Restaurar el cursor nativo
      document.body.style.cursor = "auto"
    }
  }, [isVisible, isOverLink])

  // Añadir clases especiales para elementos interactivos
  useEffect(() => {
    const addHoverClass = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          document.body.classList.add("cursor-interactive")
          setIsOverLink(true)
          document.body.style.cursor = "pointer" // Mostrar cursor pointer nativo
        })

        element.addEventListener("mouseleave", () => {
          document.body.classList.remove("cursor-interactive")
          setIsOverLink(false)
          document.body.style.cursor = "none" // Ocultar cursor nativo
        })
      })
    }

    addHoverClass()

    // Reejecutar cuando el DOM cambie
    const observer = new MutationObserver(addHoverClass)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  if (!isVisible || isOverLink) return null

  return (
    <>
      <style jsx global>{`
        /* Estilos globales para el cursor */
        body {
          cursor: none;
        }
        
        /* Permitir que los elementos interactivos muestren el cursor pointer */
        a, button, input, textarea, [role="button"] {
          cursor: pointer !important;
        }
      `}</style>

      {/* Cursor de Figma (tamaño reducido) */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-2px, -2px)", // Ajustado para el tamaño más pequeño
          transition: "transform 0.05s ease-out",
        }}
      >
        <svg
          width="24"
          height="30"
          viewBox="0 0 88 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: isClicking ? "drop-shadow(0 0 3px rgba(164, 83, 235, 0.7))" : "none",
            transform: isClicking ? "scale(0.9)" : "scale(1)",
            transition: "transform 0.15s ease-out, filter 0.15s ease-out",
          }}
        >
          <path
            d="M22.3333 105.779L4 4.22168L84 56.8139L40.6667 69.5086L22.3333 105.779Z"
            fill="#A453EB"
            stroke="white"
            strokeWidth="7.2541"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  )
}

