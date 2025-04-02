"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Tipos para los proyectos
type ProjectCategory = "product" | "graphic" | "all"
type Project = {
  id: number
  title: string
  category: "product" | "graphic"
  tags: string[]
  description: string
  image: string
  color: string
  link: string
}

export default function ProjectsSection() {
  const { t } = useLanguage()
  // Estado para el filtro de categorías
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  // Datos de proyectos (estos serían reemplazados por tus proyectos reales)
  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.tickets.title"),
      category: "product",
      tags: ["UX/UI", "Software"],
      description: t("projects.tickets.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Tickets-mvIX3rYcmRZ8lkJb7IlJSS5vO7SEUU.png",
      color: "bg-[#892cdc]",
      link: "/proyectos/tickets",
    },
    {
      id: 2,
      title: t("projects.bots.title"),
      category: "product",
      tags: ["IA", "UX/UI"],
      description: t("projects.bots.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_IA-z8o8mT6hl1blpHkWxKykUrJD4rk8yM.png",
      color: "bg-[#a453eb]",
      link: "/proyectos/bots-ia",
    },
    {
      id: 3,
      title: t("projects.callbots.title"),
      category: "product",
      tags: ["Voice", "UX/UI"],
      description: t("projects.callbots.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Calls-aBKMaHS1PqfdyH9KnfmXBRmpABD6ti.svg",
      color: "bg-[#590995]",
      link: "/proyectos/callbots",
    },
    {
      id: 4,
      title: t("projects.contacts.title"),
      category: "product",
      tags: ["CRM", "UX/UI"],
      description: t("projects.contacts.description"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Contacts-JE5VZOsKlYpXjnirzjPiSOmOrkFdta.svg",
      color: "bg-[#6247aa]", // Cambiado de #231955
      link: "/proyectos/contactos",
    },
    {
      id: 5,
      title: t("projects.philipdick.title"),
      category: "graphic",
      tags: ["Diseño Editorial", "Ilustración"],
      description: t("projects.philipdick.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_dick-VuilMsLOnH4UKzdUJU4HHEyJv3UdXz.png",
      color: "bg-[#892cdc]",
      link: "/proyectos/philip-dick",
    },
    {
      id: 6,
      title: t("projects.amistades.title"),
      category: "graphic",
      tags: ["Diseño Gráfico", "Conceptual"],
      description: t("projects.amistades.description"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_amistades-EIymm8u55escRozi6YOX6AhXAaB0VK.png",
      color: "bg-[#a453eb]",
      link: "/proyectos/descifrando-amistades",
    },
    {
      id: 7,
      title: t("projects.friends.title"),
      category: "graphic",
      tags: ["Eventos", "Diseño Gráfico"],
      description: t("projects.friends.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_friends-ihXUAc2yUMYCwdbqqad8v6DsaY05Vn.png",
      color: "bg-[#590995]",
      link: "/proyectos/friends",
    },
    {
      id: 8,
      title: t("projects.vinilos.title"),
      category: "graphic",
      tags: ["Diseño Gráfico", "Ilustración"],
      description: t("projects.vinilos.description"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Vinilo-8Qi3esSdjVoI4gzAFtyPs0OjHDrH1v.png",
      color: "bg-[#5038a1]", // Cambiado de #231955
      link: "/proyectos/vinilos",
    },
  ]

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-white">{t("projects.title")}</h2>
        <p className="text-gray text-white mb-8">{t("projects.subtitle")}</p>

        {/* Filtros de categoría */}
        <div className="flex justify-center gap-4 mb-12">
          <CategoryButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
            {t("projects.filter.all")}
          </CategoryButton>
          <CategoryButton active={activeCategory === "product"} onClick={() => setActiveCategory("product")}>
            {t("projects.filter.product")}
          </CategoryButton>
          <CategoryButton active={activeCategory === "graphic"} onClick={() => setActiveCategory("graphic")}>
            {t("projects.filter.graphic")}
          </CategoryButton>
        </div>
      </div>

      {/* Grid de proyectos con animación */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

// Componente para los botones de categoría
function CategoryButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${
        active ? "bg-[#892cdc] text-white font-medium" : "bg-[#231955] text-white/70 hover:bg-[#892cdc]/30"
      }`}
    >
      {children}
    </button>
  )
}

// Componente para las tarjetas de proyecto
function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()

  return (
    <Link href={project.link} className="block">
      <motion.div
        className={`rounded-xl overflow-hidden ${project.color} hover:shadow-lg transition-all duration-300`}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Versión móvil: estructura lineal */}
        <div className="block md:hidden">
          <div className="p-6">
            {/* Título */}
            <h3 className="text-xl font-bold text-white">{project.title}</h3>

            {/* Descripción */}
            <p className="text-white/80 mt-2 text-sm">{project.description}</p>

            {/* Chip de categoría */}
            <div className="flex gap-2 mt-3">
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                {project.category === "product" ? t("projects.filter.product") : t("projects.filter.graphic")}
              </span>
            </div>

            {/* Botón Ver proyecto */}
            <div className="mt-4 mb-4">
              <div className="flex items-center text-white font-medium group">
                {t("projects.viewProject")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Imagen cuadrada simple */}
          <div className="w-full aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Versión desktop: mantener el diseño original */}
        <div className="hidden md:block">
          <div className="p-6">
            {/* Título */}
            <h3 className="text-xl font-bold text-white">{project.title}</h3>

            {/* Descripción */}
            <p className="text-white/80 mt-2 text-sm">{project.description}</p>

            {/* Chip de categoría */}
            <div className="flex gap-2 mt-3">
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                {project.category === "product" ? t("projects.filter.product") : t("projects.filter.graphic")}
              </span>
            </div>
          </div>

          {/* Imagen con altura de 300px y recorte */}
          <div className="px-4">
            <div className="rounded-lg overflow-hidden h-[300px]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Botón Ver proyecto debajo de la imagen */}
          <div className="p-4 pt-2">
            <div className="flex items-center text-white font-medium group">
              {t("projects.viewProject")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

