"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Diccionarios de traducción
const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.downloadCV": "Descargar CV",

    // Home
    "home.greeting": "Hola, soy Gonza",
    "home.intro":
      "Licenciado en Diseño Multimedia e Interacción con 4 años de experiencia como Product Designer. ¡Me encanta crear experiencias humanas y amigables!",
    "home.cta": "Conoceme",
    "home.tagline": "Convierto ideas complejas en experiencias intuitivas.",

    // Cards
    "card.product.title": "PRODUCT DESIGNER",
    "card.product.desc": "Diseño experiencias que los usuarios van a amar.",
    "card.graphic.title": "GRAPHIC DESIGNER",
    "card.graphic.desc": "Creo piezas visuales que conectan.",
    "card.systems.title": "DESIGN SYSTEMS EXPERT",
    "card.systems.desc": "Construyo sistemas de diseño escalables.",
    "card.viewProjects": "Ver proyectos",

    // Projects
    "projects.title": "Algunos de mis proyectos",
    "projects.subtitle": "Soluciones creativas para problemas complejos",
    "projects.filter.all": "Todos",
    "projects.filter.product": "Product Design",
    "projects.filter.graphic": "Graphic Design",
    "projects.viewProject": "Ver proyecto",
    "projects.backToProjects": "Volver a proyectos",

    // Contact
    "contact.title": "Conectémonos",
    "contact.subtitle": "Exploremos nuevos horizontes juntos.",
    "contact.lastName": "Apellido",
    "contact.firstName": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.phone": "Número de teléfono",
    "contact.message": "Mensaje",
    "contact.submit": "Conectar",
    "contact.messagePlaceholder": "Cuéntame sobre tu proyecto o consulta...",
    "contact.namePlaceholder": "Tu nombre",
    "contact.emailPlaceholder": "tu@correo.com",
    "contact.subjectPlaceholder": "¿De qué quieres hablar?",
    "contact.success": "¡Mensaje enviado!",
    "contact.successMessage": "Gracias por contactarme. Te responderé lo antes posible.",

    // Experiencia
    "experience.greeting": "¡Buenas!",
    "experience.intro.with": "Con",
    "experience.intro.years": "4 años de experiencia profesional",
    "experience.intro.role": "Product Designer",
    "experience.projects.title": "Sobre mis proyectos",
    "experience.timeline.title": "Mi Trayectoria",
    "experience.work.title": "Experiencia Laboral",
    "experience.education.title": "Educación",
    "experience.intro.as": "como",
    "experience.intro.text1":
      "he evolucionado hacia la creación de soluciones digitales centradas en el usuario. Mi trayectoria incluye proyectos innovadores en diferentes empresas, donde aplico inteligencia artificial para mejorar la experiencia de usuario.",
    "experience.intro.text2":
      "Mi enfoque se basa en la investigación, el análisis y la iteración constante, siempre buscando entender y satisfacer las necesidades del usuario y del negocio.",

    // Experiencia laboral
    "experience.work.position1": "Product Designer",
    "experience.work.period1": "May 2023 - Presente",
    "experience.work.desc1":
      "Diseño de experiencias de usuario para plataforma de chatbots y automatización de conversaciones.",
    "experience.work.position2": "Ssr. UX/UI Designer",
    "experience.work.period2": "Feb 2022 - May 2023",
    "experience.work.desc2":
      "Diseño de interfaces y experiencias para aplicaciones web y móviles en diversos sectores.",
    "experience.work.position3": "Diseñador Gráfico Jr",
    "experience.work.period3": "Ene 2021 - Feb 2022",
    "experience.work.desc3":
      "Creación de identidades visuales, materiales promocionales y contenido para redes sociales.",
    "experience.work.position4": "Diseñador Digital",
    "experience.work.period4": "JUL 2020 - DIC 2020",
    "experience.work.desc4": "Diseño de piezas digitales para campañas de marketing y redes sociales.",
    "experience.work.position5": "Líder de grupo",
    "experience.work.period5": "MAR 2017 - MAR 2021",
    "experience.work.desc5": "Coordinación de actividades y liderazgo de equipos en entorno educativo y recreativo.",

    // Educación
    "experience.education.degree1": "Máster de Experiencia de Usuario + PSU de IA",
    "experience.education.institution1": "UNIVERSIDAD INTERNACIONAL DE LA RIOJA (UNIR)",
    "experience.education.period1": "Mar 2025 - Mar 2026",
    "experience.education.degree2": "Licenciado en Diseño Multimedia e Interacción",
    "experience.education.institution2": "UNIVERSAD ARGENTINA DE LA EMPRESA (UADE)",
    "experience.education.period2": "Ago 2018 - Dic 2024",
    "experience.education.degree3": "Curso Diseñador UX / UI Avanzado",
    "experience.education.institution3": "CODER HOUSE",
    "experience.education.period3": "Enero 2023",
    "experience.education.degree4": "Curso Desarrollo Front end (HTML, CSS y Javascript)",
    "experience.education.institution4": "CODER HOUSE",
    "experience.education.period4": "Jul 2021",
    "experience.education.degree5": "Curso Diseñador UX / UI",
    "experience.education.institution5": "CODER HOUSE",
    "experience.education.period5": "Mar 2021",
    "experience.education.degree6": "Bachiller técnico en Diseño Industrial",
    "experience.education.institution6": "SECUNDARIO ESCUELAS TÉCNICAS ORT",
    "experience.education.period6": "Mar 2011 - Dic 2017",

    // Proyectos
    "projects.myProjects": "Mis proyectos",
    "projects.categories.product": "Product Design",
    "projects.categories.graphic": "Graphic Design",
    "projects.viewProject": "Ver proyecto",

    // Contacto adicional
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.submit": "Enviar mensaje",

    // AnimatedTextSection
    "experience.animated.paragraph1.before": "A lo largo de mi carrera, he tenido la oportunidad de",
    "experience.animated.paragraph1.highlight": "liderar proyectos de diseño UX/UI completos",
    "experience.animated.paragraph1.after":
      ", desde la investigación inicial hasta la creación de interfaces intuitivas y la optimización de la experiencia del usuario.",

    "experience.animated.paragraph2.before": "Me centro en comprender a fondo las",
    "experience.animated.paragraph2.highlight": "necesidades del usuario y del negocio",
    "experience.animated.paragraph2.after":
      ", lo que me ha permitido guiar el desarrollo de productos, alineando objetivos estratégicos con las expectativas del usuario a través de la colaboración multifuncional y la planificación estratégica.",

    "experience.animated.paragraph3.before": "Además, he liderado la creación y mantenimiento de",
    "experience.animated.paragraph3.highlight": "sistemas de diseño robustos y escalables",
    "experience.animated.paragraph3.after":
      ", asegurando la coherencia visual y funcional en diversos proyectos, y facilitando la colaboración entre equipos de diseño y desarrollo.",

    // Descripciones de proyectos específicos
    "projects.tickets.title": "Gestión de Tickets",
    "projects.tickets.description":
      "Diseñé un sistema para gestionar tickets multicanal en Botmaker, optimizando el soporte.",

    "projects.bots.title": "Generador de Bots Inteligentes con IA generativa",
    "projects.bots.description":
      "Creamos una herramienta que usa IA generativa para crear bots desde prompts, agilizando tiempos de los usuarios.",

    "projects.callbots.title": "Callbots y atención de llamadas",
    "projects.callbots.description":
      "Desarrollamos callbots integrados y atención de llamadas en la plataforma, facilitando la comunicación con clientes.",

    "projects.contacts.title": "Agenda de contactos y compañías",
    "projects.contacts.description":
      "Desarrollamos una agenda de contactos integrada para guardar y gestionar contactos y compañías en un solo lugar.",

    "projects.btrader.title": "Rediseño de Btrader: Experiencia de Inversión Moderna",
    "projects.btrader.description":
      "Modernicé la aplicación de inversiones Btrader, incorporando las últimas tendencias de diseño y mejorando la usabilidad. Creé una nueva pantalla de inicio con accesos directos y añadí funcionalidades clave para optimizar la experiencia del usuario.",

    "projects.dondevamos.title": "DONDE VAMOS: Explora y Conecta con tu Ciudad",
    "projects.dondevamos.description":
      "Una aplicación para descubrir y disfrutar los mejores lugares con amigos. Permite explorar nuevas opciones, realizar reservas y acceder a opiniones de la comunidad, todo en un solo lugar.",

    "projects.fastapp.title": "FAST APP: Navegación Asistida con Realidad Aumentada",
    "projects.fastapp.description":
      "Desarrollé FAST APP, una aplicación de realidad aumentada para dispositivos móviles, diseñada para mejorar la movilidad de personas con movilidad reducida.",

    "projects.tierraiberica.title": "Rediseño del sitio sin fines de lucro Tierra Ibérica",
    "projects.tierraiberica.description":
      "Realicé un rediseño completo del sitio web de Tierra Ibérica, incluyendo la adición de una plataforma de comercio electrónico.",

    "projects.vinilos.title": "VINILOS",
    "projects.vinilos.description":
      "Proyecto académico de diseño de vinilos con temática synthwave, explorando la estética retrofuturista y la creación de piezas visuales y conceptuales.",

    "projects.arco.title": 'Cartas Creativas: Inspiración desde "ARCO"',
    "projects.arco.description":
      "Creé una serie de cartas personalizadas utilizando la palabra 'ARCO' como hilo conductor, explorando la conexión con personajes y conceptos como Juana de Arco y el Arco de Triunfo.",

    "projects.videofono.title": "Videofono 3D",
    "projects.videofono.description":
      "Trabajo realizado de la materia Innovación y Diseño 3D de UADE. Trata sobre el aprendizaje de el Diseño 3D basado sobre el estilo Cyberpunk.",

    "projects.philipdick.title": "Libros PHILIP K. DICK",
    "projects.philipdick.description":
      "Diseño de portadas para obras de Philip K. Dick, interpretando visualmente sus mundos de ciencia ficción.",

    "projects.amistades.title": "Desifrando amistades",
    "projects.amistades.description": "Proyecto académico sobre las redes que uno crea, con una temática Hacker.",

    "projects.friends.title": "Proyecto Aniversario FRIENDS",
    "projects.friends.description":
      "Proyecto sobre el 25° aniversario de la mítica serie FRIENDS, sobre la realización de un evento. Diseño de cronograma y materiales gráficos para la celebración.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",

    // Home
    "home.greeting": "Hello, I'm Gonza",
    "home.intro":
      "Multimedia and Interaction Design graduate with 4 years of experience as a Product Designer. I love creating human and friendly experiences!",
    "home.cta": "Get to know me",
    "home.tagline": "I turn complex ideas into intuitive experiences.",

    // Cards
    "card.product.title": "PRODUCT DESIGNER",
    "card.product.desc": "I design experiences users will love.",
    "card.graphic.title": "GRAPHIC DESIGNER",
    "card.graphic.desc": "I create visual pieces that connect.",
    "card.systems.title": "DESIGN SYSTEMS EXPERT",
    "card.systems.desc": "I build scalable design systems.",
    "card.viewProjects": "View projects",

    // Projects
    "projects.title": "Some of my projects",
    "projects.subtitle": "Creative solutions for complex problems",
    "projects.filter.all": "All",
    "projects.filter.product": "Product Design",
    "projects.filter.graphic": "Graphic Design",
    "projects.viewProject": "View project",
    "projects.backToProjects": "Back to projects",

    // Contact
    "contact.title": "Let's connect",
    "contact.subtitle": "Let's explore new horizons together.",
    "contact.lastName": "Last Name",
    "contact.firstName": "First Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.submit": "Connect",
    "contact.messagePlaceholder": "Tell me about your project or inquiry...",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.subjectPlaceholder": "What do you want to talk about?",
    "contact.success": "Message sent!",
    "contact.successMessage": "Thank you for contacting me. I will get back to you as soon as possible.",

    // Experience
    "experience.greeting": "Hello!",
    "experience.intro.with": "With",
    "experience.intro.years": "4 years of professional experience",
    "experience.intro.role": "Product Designer",
    "experience.projects.title": "About my projects",
    "experience.timeline.title": "My Career Path",
    "experience.work.title": "Work Experience",
    "experience.education.title": "Education",
    "experience.intro.as": "as a",
    "experience.intro.text1":
      "I have evolved towards creating user-centered digital solutions. My career includes innovative projects in different companies, where I apply artificial intelligence to enhance the user experience.",
    "experience.intro.text2":
      "My approach is based on research, analysis, and constant iteration, always seeking to understand and meet the needs of both users and businesses.",

    // Work experience
    "experience.work.position1": "Product Designer",
    "experience.work.period1": "May 2023 - Present",
    "experience.work.desc1": "Designing user experiences for chatbot platform and conversation automation.",
    "experience.work.position2": "Senior UX/UI Designer",
    "experience.work.period2": "Feb 2022 - May 2023",
    "experience.work.desc2":
      "Designing interfaces and experiences for web and mobile applications across various sectors.",
    "experience.work.position3": "Junior Graphic Designer",
    "experience.work.period3": "Jan 2021 - Feb 2022",
    "experience.work.desc3": "Creating visual identities, promotional materials, and content for social media.",
    "experience.work.position4": "Digital Designer",
    "experience.work.period4": "JUL 2020 - DEC 2020",
    "experience.work.desc4": "Designing digital pieces for marketing campaigns and social media.",
    "experience.work.position5": "Group Leader",
    "experience.work.period5": "MAR 2017 - MAR 2021",
    "experience.work.desc5": "Coordinating activities and leading teams in educational and recreational environments.",

    // Education
    "experience.education.degree1": "Master's in User Experience + AI PSU",
    "experience.education.institution1": "UNIVERSIDAD INTERNACIONAL DE LA RIOJA (UNIR)",
    "experience.education.period1": "Mar 2025 - Mar 2026",
    "experience.education.degree2": "Bachelor's in Multimedia and Interaction Design",
    "experience.education.institution2": "UNIVERSIDAD ARGENTINA DE LA EMPRESA (UADE)",
    "experience.education.period2": "Aug 2018 - Dec 2024",
    "experience.education.degree3": "Advanced UX/UI Designer Course",
    "experience.education.institution3": "CODER HOUSE",
    "experience.education.period3": "January 2023",
    "experience.education.degree4": "Front-end Development Course (HTML, CSS, and Javascript)",
    "experience.education.institution4": "CODER HOUSE",
    "experience.education.period4": "Jul 2021",
    "experience.education.degree5": "UX/UI Designer Course",
    "experience.education.institution5": "CODER HOUSE",
    "experience.education.period5": "Mar 2021",
    "experience.education.degree6": "Technical Bachelor's in Industrial Design",
    "experience.education.institution6": "SECONDARY TECHNICAL SCHOOLS ORT",
    "experience.education.period6": "Mar 2011 - Dec 2017",

    // Projects
    "projects.myProjects": "My projects",
    "projects.categories.product": "Product Design",
    "projects.categories.graphic": "Graphic Design",
    "projects.viewProject": "View project",

    // Contact additional
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Send message",

    // AnimatedTextSection
    "experience.animated.paragraph1.before": "Throughout my career, I've had the opportunity to",
    "experience.animated.paragraph1.highlight": "lead complete UX/UI design projects",
    "experience.animated.paragraph1.after":
      ", from initial research to creating intuitive interfaces and optimizing the user experience.",

    "experience.animated.paragraph2.before": "I focus on thoroughly understanding",
    "experience.animated.paragraph2.highlight": "user and business needs",
    "experience.animated.paragraph2.after":
      ", which has allowed me to guide product development, aligning strategic objectives with user expectations through cross-functional collaboration and strategic planning.",

    "experience.animated.paragraph3.before": "Additionally, I've led the creation and maintenance of",
    "experience.animated.paragraph3.highlight": "robust and scalable design systems",
    "experience.animated.paragraph3.after":
      ", ensuring visual and functional consistency across various projects, and facilitating collaboration between design and development teams.",

    // Descripciones de proyectos específicos
    "projects.tickets.title": "Ticket Management",
    "projects.tickets.description":
      "I designed a system to manage multi-channel tickets in Botmaker, optimizing support and improving the experience.",

    "projects.bots.title": "Intelligent Bot Generator with Generative AI",
    "projects.bots.description":
      "We created a tool that uses generative AI to create bots from prompts, streamlining user workflows.",

    "projects.callbots.title": "Callbots and Call Management",
    "projects.callbots.description":
      "We developed integrated callbots and call handling in the platform, facilitating communication with customers.",

    "projects.contacts.title": "Contacts and Companies Directory",
    "projects.contacts.description":
      "We developed an integrated contact directory to save and manage contacts and companies in one place.",

    "projects.btrader.title": "Btrader Redesign: Modern Investment Experience",
    "projects.btrader.description":
      "I modernized the Btrader investment application, incorporating the latest design trends and improving usability. I created a new home screen with shortcuts and added key features to optimize the user experience.",

    "projects.dondevamos.title": "WHERE TO GO: Explore and Connect with Your City",
    "projects.dondevamos.description":
      "An application to discover and enjoy the best places with friends. It allows you to explore new options, make reservations, and access community opinions, all in one place.",

    "projects.fastapp.title": "FAST APP: Augmented Reality Assisted Navigation",
    "projects.fastapp.description":
      "I developed FAST APP, an augmented reality application for mobile devices, designed to improve mobility for people with reduced mobility.",

    "projects.tierraiberica.title": "Redesign of the Tierra Ibérica Non-Profit Website",
    "projects.tierraiberica.description":
      "I completed a full redesign of the Tierra Ibérica website, including the addition of an e-commerce platform.",

    "projects.vinilos.title": "VINYL RECORDS",
    "projects.vinilos.description":
      "Academic project for vinyl design with a synthwave theme, exploring retrofuturistic aesthetics and creating visual and conceptual pieces.",

    "projects.arco.title": 'Creative Cards: Inspiration from "ARCO"',
    "projects.arco.description":
      "I created a series of custom cards using the word 'ARCO' as a common thread, exploring the connection with characters and concepts like Joan of Arc and the Arc de Triomphe.",

    "projects.videofono.title": "3D Videophone",
    "projects.videofono.description":
      "Work done for the Innovation and 3D Design course at UADE. It explores learning 3D Design based on the Cyberpunk style.",

    "projects.philipdick.title": "PHILIP K. DICK Books",
    "projects.philipdick.description":
      "Design of covers for Philip K. Dick's works, visually interpreting his science fiction worlds.",

    "projects.amistades.title": "Deciphering Friendships",
    "projects.amistades.description": "Academic project about the networks one creates, with a Hacker theme.",

    "projects.friends.title": "FRIENDS Anniversary Project",
    "projects.friends.description":
      "Project about the 25th anniversary of the iconic FRIENDS series, about the realization of an event. Design of schedule and graphic materials for the celebration.",
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("es")

  // Cargar el idioma guardado en localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Guardar el idioma en localStorage cuando cambie
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Función para obtener traducciones
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

