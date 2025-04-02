"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Linkedin, Briefcase, GraduationCap, Mail } from "lucide-react"
import SiteHeader from "@/components/site-header"
import AnimatedTextSection from "@/components/animated-text-section"
import { useLanguage } from "@/contexts/language-context"
import BehanceIcon from "@/components/behance-icon"

export default function ExperienciaPage() {
  // Referencias para animaciones de scroll
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const { t } = useLanguage()

  // Experiencia laboral
  const workExperience = [
    {
      title: t("experience.work.position1"),
      company: "BOTMAKER",
      period: t("experience.work.period1"),
      color: "bg-purple",
      description: t("experience.work.desc1"),
    },
    {
      title: t("experience.work.position2"),
      company: "PONCENOT TECH STUDIO",
      period: t("experience.work.period2"),
      color: "bg-purple-light",
      description: t("experience.work.desc2"),
    },
    {
      title: t("experience.work.position3"),
      company: "PARADIGMA SOCIEDAD DE SOLUCIONES",
      period: t("experience.work.period3"),
      color: "bg-purple-dark",
      description: t("experience.work.desc3"),
    },
    {
      title: t("experience.work.position4"),
      company: "INFINIDAD MARKETING",
      period: t("experience.work.period4"),
      color: "bg-purple",
      description: t("experience.work.desc4"),
    },
    {
      title: t("experience.work.position5"),
      company: "MACABI",
      period: t("experience.work.period5"),
      color: "bg-purple-darker",
      description: t("experience.work.desc5"),
    },
  ]

  // Educación
  const education = [
    {
      title: t("experience.education.degree1"),
      institution: t("experience.education.institution1"),
      period: t("experience.education.period1"),
      color: "bg-[#a453eb]",
    },
    {
      title: t("experience.education.degree2"),
      institution: t("experience.education.institution2"),
      period: t("experience.education.period2"),
      color: "bg-[#af1cbb]",
    },
    {
      title: t("experience.education.degree3"),
      institution: t("experience.education.institution3"),
      period: t("experience.education.period3"),
      color: "bg-[#892cdc]",
    },
    {
      title: t("experience.education.degree4"),
      institution: t("experience.education.institution4"),
      period: t("experience.education.period4"),
      color: "bg-[#a453eb]",
    },
    {
      title: t("experience.education.degree5"),
      institution: t("experience.education.institution5"),
      period: t("experience.education.period5"),
      color: "bg-[#590995]",
    },
    {
      title: t("experience.education.degree6"),
      institution: t("experience.education.institution6"),
      period: t("experience.education.period6"),
      color: "bg-[#af1cbb]",
    },
  ]

  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      {/* Banner Image - Full width */}
      <div className="container mx-auto mt-8">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BI7ZMCqn2O88bnlQFUA7PqHfb0Crv4.png"
            alt="Foto en la nieve"
            width={1200}
            height={600}
            className="w-full object-cover h-80 md:h-96 lg:h-[500px]"
            priority
          />
        </div>
      </div>

      {/* Main Content - Limited to 1000px */}
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8 py-12">
        {/* Greeting with animated line */}
        <div className="relative mb-8 inline-block">
          <h1 className="text-4xl md:text-5xl font-bold">{t("experience.greeting")}</h1>
          <div className="underline-animation"></div>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg mb-6">
            {t("experience.intro.with")} <span className="font-bold">{t("experience.intro.years")}</span>{" "}
            {t("experience.intro.as")} <span className="font-bold">{t("experience.intro.role")}</span>,{" "}
            {t("experience.intro.text1")}
          </p>
          <p className="text-lg">{t("experience.intro.text2")}</p>
        </div>

        {/* About Projects - Texto animado */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t("experience.projects.title")}</h2>
          <AnimatedTextSection />
        </div>

        {/* Timeline Container - NUEVO DISEÑO */}
        <div ref={containerRef} className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold inline-block relative">
              {t("experience.timeline.title")}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple via-purple-light to-[#a453eb]"></span>
            </h2>
          </div>

          {/* Experiencia Laboral - Nuevo diseño */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-purple" />
              <h3 className="text-2xl font-bold">{t("experience.work.title")}</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-gradient-to-b from-purple to-purple-light"
                >
                  <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${job.color} -translate-x-1.5`}></div>
                  <div className="mb-1">
                    <span className="text-sm text-gray-400">{job.period}</span>
                  </div>
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <p className="text-purple-light font-medium">{job.company}</p>
                  {job.description && <p className="text-gray-300 mt-2 text-sm">{job.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educación - Nuevo diseño */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-[#a453eb]" />
              <h3 className="text-2xl font-bold">{t("experience.education.title")}</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-gradient-to-b from-[#a453eb] to-[#af1cbb]"
                >
                  <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${edu.color} -translate-x-1.5`}></div>
                  <div className="mb-1">
                    <span className="text-sm text-gray-400">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold">{edu.title}</h4>
                  <p className="text-purple-light font-medium">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Limitado a 1000px */}
      <div className="w-full px-5 sm:px-6 md:px-8">
        <footer className="mx-auto max-w-[1000px] py-8 border-t border-purple/20 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="font-bold text-xl hover:text-purple-light transition-colors">
              GONZA<span className="text-purple">TARNO</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-purple transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/experiencia" className="text-white hover:text-purple transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/proyectos" className="text-white hover:text-purple transition-colors">
                {t("nav.projects")}
              </Link>
              <Link href="/contacto" className="text-white hover:text-purple transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Link href="mailto:gonzalotarnofsky@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://linkedin.com/in/gonzalotarnofsky" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://behance.net/gonzatarno" aria-label="Behance">
                <BehanceIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

