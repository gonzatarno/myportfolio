"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    // Alternar entre 'es' y 'en'
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-purple/20 hover:bg-purple/30 px-3 py-2 rounded-full transition-colors duration-300"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
      <span className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
        {language === "es" ? (
          <img
            src="https://flagcdn.com/w20/es.png"
            width="20"
            height="15"
            alt="Bandera de España"
            className="object-cover"
          />
        ) : (
          <img
            src="https://flagcdn.com/w20/gb.png"
            width="20"
            height="15"
            alt="Bandera de Reino Unido"
            className="object-cover"
          />
        )}
      </span>
    </motion.button>
  )
}

