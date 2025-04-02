"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Sparkles, Rocket, Gem } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Configuración de los elementos del menú con sus colores y iconos
  const menuItems = [
    {
      name: t("nav.home"),
      href: "/",
      color: "bg-[#FFE15D]",
      textColor: "text-[#2D1674]",
      icon: <Home className="w-6 h-6 transition-all duration-150 group-hover:rotate-12 group-hover:scale-125" />,
    },
    {
      name: t("nav.projects"),
      href: "/proyectos",
      color: "bg-[#9DE09D]",
      textColor: "text-[#0A5C36]",
      icon: <Sparkles className="w-6 h-6 transition-all duration-150 group-hover:-rotate-12 group-hover:scale-125" />,
    },
    {
      name: t("nav.about"),
      href: "/experiencia",
      color: "bg-[#FFCCE5]",
      textColor: "text-[#9C1458]",
      icon: (
        <Rocket className="w-6 h-6 transition-all duration-150 group-hover:translate-y-[-2px] group-hover:scale-125" />
      ),
    },
    {
      name: t("nav.contact"),
      href: "/contacto",
      color: "bg-[#C9A9FF]",
      textColor: "text-[#3A1E6D]",
      icon: <Gem className="w-6 h-6 transition-all duration-150 group-hover:rotate-45 group-hover:scale-125" />,
    },
  ]

  // Añadir el elemento de CV como último elemento
  const cvItem = {
    name: t("nav.downloadCV"),
    href: "/cv-gonzalo-tarnofsky.pdf",
    color: "bg-[#A9C9FF]",
    textColor: "text-[#1E3A6D]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 transition-all duration-150 group-hover:translate-y-[2px] group-hover:scale-125"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    ),
    download: true,
  }

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none z-50 relative"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Menú desplegable con animación */}
      <div
        className={`fixed inset-0 bg-[#231955] z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Removed duplicate close button here */}

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Círculos decorativos */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-dark/20 animate-pulse delay-300"></div>

          <nav className="flex flex-col items-center space-y-4 z-10 w-full max-w-xs">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`${item.color} ${item.textColor} w-full py-5 px-8 rounded-full font-bold text-xl flex items-center justify-center gap-4 transform transition-all duration-150 hover:scale-110 hover:shadow-lg group ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animation: `bounce 0.5s ${index * 100 + 300}ms`,
                }}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="transform transition-all duration-150 group-hover:scale-110 group-hover:font-extrabold">
                  {item.name}
                </span>
              </Link>
            ))}

            <a
              href={cvItem.href}
              download={cvItem.download}
              onClick={() => {
                closeMenu()
              }}
              className={`${cvItem.color} ${cvItem.textColor} w-full py-5 px-8 rounded-full font-bold text-xl flex items-center justify-center gap-4 transform transition-all duration-150 hover:scale-110 hover:shadow-lg group ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${menuItems.length * 100}ms`,
                animation: `bounce 0.5s ${menuItems.length * 100 + 300}ms`,
              }}
            >
              <div className="text-xl">{cvItem.icon}</div>
              <span className="transform transition-all duration-150 group-hover:scale-110 group-hover:font-extrabold">
                {cvItem.name}
              </span>
            </a>
          </nav>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}

