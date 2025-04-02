"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function AnimatedTextSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t, language } = useLanguage()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const highlightVariants = {
    hidden: {
      backgroundSize: "0% 100%",
      opacity: 0.7,
    },
    visible: {
      backgroundSize: "100% 100%",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#892cdc]/5 blur-xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#f8c226]/5 blur-xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <motion.div variants={paragraphVariants} initial="hidden" animate={controls} className="space-y-6 relative z-10">
        <motion.p className="text-lg" variants={paragraphVariants}>
          {t("experience.animated.paragraph1.before")}{" "}
          <motion.span
            className="font-bold text-[#f8c226] inline-block"
            variants={highlightVariants}
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(137,44,220,0.2) 0%, rgba(137,44,220,0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
            }}
          >
            {t("experience.animated.paragraph1.highlight")}
          </motion.span>
          {t("experience.animated.paragraph1.after")}
        </motion.p>

        <motion.p className="text-lg" variants={paragraphVariants}>
          {t("experience.animated.paragraph2.before")}{" "}
          <motion.span
            className="font-bold text-[#a453eb] inline-block"
            variants={highlightVariants}
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(164,83,235,0.2) 0%, rgba(164,83,235,0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
            }}
          >
            {t("experience.animated.paragraph2.highlight")}
          </motion.span>
          {t("experience.animated.paragraph2.after")}
        </motion.p>

        <motion.p className="text-lg" variants={paragraphVariants}>
          {t("experience.animated.paragraph3.before")}{" "}
          <motion.span
            className="font-bold text-[#892cdc] inline-block"
            variants={highlightVariants}
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(89,9,149,0.2) 0%, rgba(89,9,149,0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
            }}
          >
            {t("experience.animated.paragraph3.highlight")}
          </motion.span>
          {t("experience.animated.paragraph3.after")}
        </motion.p>
      </motion.div>
    </div>
  )
}

