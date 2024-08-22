import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { LanguageInterface } from "../interfaces/interfaces";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { RiCodepenFill } from "react-icons/ri";

export const SpanishLanguage: LanguageInterface = {
    title: "Español",
    lang: "es",
    menu: [
        {
            title: "Sobre Mí",
            link: "about",
        },
        {
            title: "Experiencia",
            link: "experience",
        },
        {
            title: "Trabajos",
            link: "works",
        },
        {
            title: "Experimentos",
            link: "experiments",
        },
        {
            title: "Contacto",
            link: "contact",
        },
    ],
    banner: {
        title: "Hola mi nombre es",
        subtitle: "Desarrollo cosas pa' la web.",
        description: `Soy un ingeniero en sistemas que crea experiencias digitales 
                excepcionales. Actualmente me enfoco en desarrollar productos 
                accesibles y centrados en el usuario. Busco soluciones creativas 
                y efectivas para problemas de clientes y me mantengo actualizado 
                en tecnología para mejorar mi trabajo.`,
        button: "Descargar CV",
    },
    about: {
        title: "Lo que debes saber de mí",
        paragraph1: `¡Qué tal🫡, futuro empleador! Soy un desarrollador web (y a veces movil) 
                y no, no soy ningún mago o artista, aunque a veces me siento como uno. 
                Soy como un arquitecto digital que construye software o como un pintor 
                que dibuja con código. Como sea🫠, me encargo de desarrollar sitios web 
                increíbles y fáciles de usar`,
        paragraph2: `☝️🤓Disfruto trabajar en equipo (También solo UwU) y colaborar con diseñadores 
                y otros desarrolladores para crear proyectos llamativos y funcionales.`,
        paragraph3: `Mi tolerancia a la frustración arraigada de mis constantes fracasos (amorosos🤡) me 
                hicieron un terco y perspicaz detective a la hora de solucionar problemas de código👾,
                no me rindo fácilmente hasta encontrar la solución adecuada. También me las apaño 
                con tecnologias nuevas, me gusta estar al tanto de las últimas tendencias.🧑🏻‍💻`,
        skills: {
            description:
                "Aquí hay algunas tecnologías con las que he estado trabajando y habilidades que he desarrollado recientemente:",
            hardskills: {
                title: "Mis habilidades duras",
                skills: [{
                    title: "React",
                    icon: BiCheckDouble,
                },
                {
                    title: "React Native",
                    icon: BiCheckDouble,
                },
                {
                    title: "Flutter",
                    icon: BiCheck,
                },
                {
                    title: "Python",
                    icon: BiCheck,
                },
                {
                    title: "Node Js",
                    icon: BiCheckDouble,
                },
                {
                    title: "Angular",
                    icon: BiCheck,
                },
                {
                    title: "GAS",
                    icon: BiCheckDouble,
                },
                {
                    title: "PostgreSQL",
                    icon: BiCheckDouble,
                },
                {
                    title: "Mongo DB",
                    icon: BiCheck,
                },
                {
                    title: "Whatsapp API",
                    icon: BiCheck,
                },
                {
                    title: "Google Maps API",
                    icon: BiCheckDouble,
                },
                {
                    title: "OpenAI API",
                    icon: BiCheckDouble,
                },],
            },
            softskills: {
                title: "Mis habilidades blandas",
                skills: [
                    {
                        title: "Autodidacta",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Colaboración",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Perspicacia",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Comunicacion",
                        icon: BiCheck,
                    },
                    {
                        title: "Adaptacion",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Planificación",
                        icon: BiCheck,
                    },
                ],
            },
        },
    },
    experiences: {
        title: "¿Dónde he trabajado?",
        experience: [
            {
                title: "Freelance",
                position: "Desarrollador Full Stack",
                range: "Enero 2024 - Actualidad",
                company: "Freelance",
                description: [
                    `Diseñé y desarrollé aplicaciones web completas utilizando React para crear interfaces de usuario dinámicas y eficientes, asegurando una experiencia de usuario óptima.`,
                    `Desarrollé y mantuve servidores backend utilizando Node.js y bases de datos PostgreSQL, garantizando una gestión eficiente y segura de los datos y proporcionando una arquitectura robusta para las aplicaciones.`,
                    `Desplegué aplicaciones web en Vercel, utilizando sus capacidades de despliegue continuo para asegurar que las aplicaciones estuvieran siempre actualizadas y disponibles con alta disponibilidad.`,
                    `Integré y mantuve servicios en Render, aprovechando su infraestructura para alojar y escalar aplicaciones web y APIs de manera eficiente, asegurando un rendimiento y disponibilidad óptimos.`,
                ],
            },
            {
                title: "Singleton",
                position: "Desarrollador Full Stack",
                range: "Mayo 2023 - Septiembre 2023",
                company: "Singleton",
                description: [
                    `Desempeñé el rol de Full Stack Developer en Singletón, encargándome del diseño y desarrollo integral de soluciones web y móviles, abarcando tanto el frontend como el backend.`,
                    `Utilicé diversas tecnologías, incluyendo ReactJS, Flutter y Figma, para la construcción de interfaces de usuario intuitivas.`,
                    `En el backend, implementé .Net con C# para desarrollar APIs eficientes.`,
                ],
            },
            {
                title: "Freelance",
                position: "Desarrollador Freelance",
                range: "Marzo 2023 - Mayo 2023",
                company: "Freelance",
                description: [
                    `Desarrollar e implementar sistemas de inteligencia artificial 
                        conversacional para aplicaciones de mensajería con OpenAI API y WhatsApp API`,
                    `Diseñar, desarrollar e implementar aplicaciones móviles con Flutter o 
                        React Native para iOS y Android, integrando servicios web y 
                        diseñando una interfaz de usuario atractiva 
                        y fácil de usar.`,
                    `Diseñar, desarrollar e implementar aplicaciones web utilizando el 
                        framework React, integrando servicios web, realizando pruebas 
                        y depuración, optimizando el rendimiento, diseñando una interfaz 
                        de usuario atractiva y fácil de usar`,
                ],
            },
            {
                title: "UEB",
                position: "Auxiliar de CPD",
                range: "Agosto 2021 - Noviembre de 2021",
                company: "UEB",
                description: [
                    `Supervisar los sistemas informáticos y de comunicaciones 
                        del Centro de Procesamiento de Datos (CPD) para detectar cualquier fallo o irregularidad en 
                        el funcionamiento.`,
                    `Crear y desarrollar scripts personalizados para automatizar 
                        procesos específicos en aplicaciones de Google, utilizando el 
                        lenguaje de programación Google App Script.`,
                    `Integrar diferentes aplicaciones de Google para mejorar la 
                        eficiencia y productividad, mediante el uso de scripts 
                        personalizados.`,
                    `Realizar pruebas exhaustivas y depuración de los scripts, 
                        asegurándose de que los cambios no afecten negativamente el 
                        funcionamiento de las aplicaciones de Google.`,
                ],
            },
            {
                title: "Linea 58",
                position: "Secretario Contable",
                range: "Diciembre 2020 - Marzo de 2021",
                company: "Linea 58",
                description: [
                    `Registrar y clasificar las transacciones financieras diarias de la empresa, 
                        incluyendo facturas de venta, recibos de ingresos, facturas de gastos y 
                        comprobantes de pago.`,
                    `Asegurarse de que los registros contables de la empresa concuerden con 
                        las transacciones bancarias y realizar ajustes en caso de discrepancias.`,
                    `Supervisar y administrar las cuentas por pagar y por cobrar de la empresa, 
                        asegurándose de que se paguen las facturas a tiempo y de que se cobren 
                        las deudas pendientes.`,
                ],
            },
            {
                title: "SkyHub",
                position: "Desarrollador",
                range: "Diciembre 2019 - Marzo de 2020",
                company: "SkyHub",
                description: [
                    `Configurar e integrar chatbots con diferentes sistemas 
                        y herramientas de marketing, para mejorar la eficiencia 
                        y la productividad de las empresas.`,
                    `Diseñar y desarrollar sitios web personalizados, 
                        utilizando lenguajes de programación como HTML, CSS 
                        y JavaScript`,
                    `Trabajar en colaboración con diseñadores gráficos, 
                        equipos de marketing y otros desarrolladores para 
                        crear sitios web innovadores y atractivos para los 
                        usuarios.`,
                ],
            },
            {
                title: "Alfa",
                position: "Desarrollador",
                range: "Mayo 2019 - Noviembre de 2019",
                company: "Alfa",
                description: [
                    `Diseñar y desarrollar soluciones de automatización 
                        de informes utilizando Google Apps Script para diversas 
                        aplicaciones de Google, como Google Sheets, Google Drive, 
                        Google Docs, entre otras.`,
                    `Mantener y mejorar las soluciones existentes de automatización 
                        de informes, realizando actualizaciones y ajustes según sea necesario.`,
                    `Diseñar y desarrollar sitios web utilizando WordPress, 
                        trabajando con temas y plugins personalizados para adaptarse 
                        a las necesidades del cliente.`,
                    `Diseñar y desarrollar chatbots para plataformas como ManyChat 
                        y Dialogflow, asegurándose de que los chatbots sean personalizados 
                        para cumplir con los requisitos de los clientes.`,
                ],
            },
        ],
    },
    works: {
        title: "Algunas cosas que he hecho",
        work: [
            {
                title: "Asistente Psicologico Virtual",
                description: `Este es un software diseñado para brindar apoyo emocional 
                        y psicológico a través de una conversación simulada en línea.
                        La integración de WhatsApp API permite que el asistente esté disponible 
                        en la aplicación de mensajería instantánea más popular del mundo, 
                        lo que lo hace accesible y fácil de usar para los usuarios. Además, 
                        la integración de OpenAI API, una plataforma de inteligencia artificial 
                        avanzada, le permite al asistente mantener conversaciones fluidas y 
                        personalizadas, y ofrecer respuestas precisas y contextuales para las 
                        necesidades específicas de cada usuario.`,
                tecnology: ["OpenAI-API", "Whatsapp-API", "Python", "Flask", "MongoDB"],
                image: "/images/gpt.jpg",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/gpt-assistant",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Whatsapp",
                        link: "https://wa.link/2nq10x",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Sala de Chat",
                description: `Es una aplicación de chat en tiempo real con una arquitectura moderna 
                        y eficiente, que permite a los usuarios comunicarse de manera rápida 
                        y fácil en grupos en línea. Todo hecho con Angular y Firebase.`,
                tecnology: ["Angular", "Firebase"],
                image: "/images/chatroom.png",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/chat-room",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Page",
                        link: "https://chat-room-gules.vercel.app/",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Sistema de monitoreo GPS de transporte público",
                description: `Sistema que permite el seguimiento en tiempo real de 
                        vehículos de transporte público mediante tecnología GPS. 
                        Los usuarios pueden ver la ubicación de los 
                        vehículos en un mapa y obtener información en tiempo 
                        real sobre su trayectoria, velocidad y tiempo estimado 
                        de llegada. Además, el sistema puede generar alertas 
                        para los administradores en caso de retrasos, cambios 
                        en la ruta o problemas técnicos en los vehículos. 
                        Este tipo de sistema puede mejorar la eficiencia y 
                        seguridad del transporte público, así como brindar 
                        una mejor experiencia a los usuarios.`,
                tecnology: ["React", "React-Native", "NodeJS", "PostgreSQL"],
                image: "/images/tutut.png",
                state: 5,
                links: [
                    {
                        title: "Control",
                        link: "https://github.com/isaiahsalah/tutut-control",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Server",
                        link: "https://github.com/isaiahsalah/tutut-server",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Driver-Owner App",
                        link: "https://github.com/isaiahsalah/tutut-driver-owner",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Passenger App",
                        link: "https://github.com/isaiahsalah/tutut-passenger",
                        icon: AiFillGithub,
                    },
                    {
                        title: "page",
                        link: "https://tutut-control.vercel.app",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Mi portafolio",
                description: `Un sitio web diseñado para mostrar mi trabajo y mis 
                        habilidades como desarrollador de software. Se construyó 
                        utilizando React, que proporciona una forma eficiente de 
                        crear interfaces de usuario interactivas y responsivas.`,
                tecnology: ["React", "styled-components"],
                image: "/images/portfolio.png",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/portfolio",
                        icon: AiFillGithub,
                    },
                    {
                        title: "page",
                        link: "https://www.isaias.lat/",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Lefitel",
                description: `Desarrollé un sistema de gestión de datos especializado 
                        para "Lefitel", una empresa dedicada a la gestión y mantenimiento 
                        de postes de cableado telefónico para Tigo. Este software está 
                        diseñado para optimizar y centralizar todas las operaciones 
                        relacionadas con la inspección, reparación y mantenimiento de 
                        estos postes, mejorando la eficiencia y precisión en la gestión 
                        de sus actividades diarias.`,
                tecnology: ["React", "NodeJS", "Postgresql", "Leaflet"],
                image: "/images/lefitel.png",
                state: 4,
                links: [
                    {
                        title: "page",
                        link: "https://lefitel-frontend.vercel.app",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Munay",
                description: `"Munay" es una aplicación de pareja completa que ayuda a las 
                        parejas a profundizar en su relación y a fortalecer su conexión emocional. 
                        Con características únicas como la sección de preguntas, los consejos 
                        personalizados y la integración de ChatGPT, esta aplicación es una 
                        herramienta valiosa para cualquier pareja que quiera 
                        mejorar su relación.`,
                tecnology: ["Flutter", "OpenAI-API", ".Net", "MongoDB"],
                image: "/images/munay.png",
                state: 4,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/munay",
                        icon: AiFillGithub,
                    },
                ],
            },
        ],
    },
    experiments: {
        title: "Algunos pequeños experimentos",
        experiment: [
            {
                title: "Efecto de Ruido al desplazarse",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/RweGqBa",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/RweGqBa",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto de hacker en texto",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/qBJqmGy",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/qBJqmGy",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto de Blur en el mouse",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/XWxNzGo",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/XWxNzGo",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto de escritura",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/KKGNooX",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/KKGNooX",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto de Sombra Dinamica",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/poxNMXm",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/poxNMXm",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Paint con JS",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/mdzRqYJ",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/mdzRqYJ",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto Parallax al hacer scroll",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/bGmgKoz",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/bGmgKoz",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto al desplazarse por un botón",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/OJBWwEy",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/OJBWwEy",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Efecto de Cursor dentro de un texto",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/gOBgjqa",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/gOBgjqa",
                        icon: AiOutlineLink,
                    },
                ],
            },
        ],
    },
    contact: {
        title: "¿Y ahora?",
        subtitle: "Ponete en contacto",
        description: `En resumen, soy un apasionado por la tecnología que se divierte 
                construyendo cosas en línea. Si querés un desarrollador que sea 
                eficiente, amigable y tenga ganas de aprender más allá de lo enseñado, 
                ¡acá estoy!`,
        button: "Decí hola",
    },
    footer: "Desarrollado por Isaias Salas Montesinos",
}

export const EnglishLanguage: LanguageInterface = {
    title: "English",
    lang: "en",
    menu: [
        {
            title: "About me",
            link: "about",
        },
        {
            title: "Experience",
            link: "experience",
        },
        {
            title: "Works",
            link: "works",
        },
        {
            title: "Experiments",
            link: "experiments",
        },
        {
            title: "Contact",
            link: "contact",
        },
    ],
    banner: {
        title: "Hi my name is",
        subtitle: "I develop things for the web.",
        description: `I am a systems engineer who creates 
            exceptional digital experiences. Currently, my focus 
            is on developing accessible and user-centered products. 
            I seek creative and effective solutions for client 
            problems and stay up-to-date with technology to improve 
            my work.`,
        button: "Download CV",
    },
    about: {
        title: "What you should know about me",
        paragraph1: `Hello🫡 future employer! I'm a web (and sometimes mobile) developer, 
            and no, I'm not a wizard or an artist, although sometimes I feel like one. 
            I'm like a digital architect who builds software or like a painter who draws 
            with code. Anyway🫠, I'm responsible for developing amazing and easy-to-use websites.`,
        paragraph2: `☝️🤓I enjoy working in teams (also alone UwU) and collaborating with 
            designers and other developers to create eye-catching and functional projects.`,
        paragraph3: `My rooted tolerance for frustration from my constant (romantic🤡) 
            failures has made me a stubborn and insightful detective when it comes to solving 
            code problems👾. I don't give up easily until I find the right solution. 
            I also manage with new technologies, I like to stay up-to-date with the 
            latest trends.🧑🏻‍💻`,
        skills: {
            description: `Here are some technologies I've been working with and skills 
                    I've recently developed:`,
            hardskills: {
                title: "My hard skills",
                skills: [
                    {
                        title: "React",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "React Native",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Flutter",
                        icon: BiCheck,
                    },
                    {
                        title: "Python",
                        icon: BiCheck,
                    },
                    {
                        title: "Node Js",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Angular",
                        icon: BiCheck,
                    },
                    {
                        title: "GAS",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "PostgreSQL",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Mongo DB",
                        icon: BiCheck,
                    },
                    {
                        title: "Whatsapp API",
                        icon: BiCheck,
                    },
                    {
                        title: "Google Maps API",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "OpenAI API",
                        icon: BiCheckDouble,
                    },
                ],
            },
            softskills: {
                title: "My soft skills",
                skills: [
                    {
                        title: "Self-taught",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Collaborative",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Insightful",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Communicative",
                        icon: BiCheck,
                    },
                    {
                        title: "Adaptive",
                        icon: BiCheckDouble,
                    },
                    {
                        title: "Strategic",
                        icon: BiCheck,
                    },
                ],
            },
        },
    },
    experiences: {
        title: "Where have I worked?",
        experience: [
            {
                title: "Freelancer",
                position: "Full Stack Developer",
                range: "May 2023 - September 2023",
                company: "Freelancer",
                description: [
                    `Designed and developed complete web applications using React to create dynamic and efficient user interfaces, ensuring an optimal user experience.`,
                    `Developed and maintained backend servers using Node.js and PostgreSQL databases, ensuring efficient and secure data management and providing a robust architecture for applications.`,
                    `Deployed web applications on Vercel, utilizing its continuous deployment capabilities to ensure applications were always up-to-date and highly available.`,
                    `Integrated and maintained services on Render, leveraging its infrastructure to host and scale web applications and APIs efficiently, ensuring optimal performance and availability.`,
                ],
            },
            {
                title: "Singleton",
                position: "Full Stack Developer",
                range: "May 2023 - September 2023",
                company: "Singleton",
                description: [
                    `As a Full Stack Developer at Singletón, I undertook the design and development of comprehensive web and mobile solutions, addressing both frontend and backend aspects.`,
                    `I utilized technologies such as ReactJS, Flutter, and Figma to craft intuitive user interfaces.`,
                    `In the backend, I employed .Net with C# to develop efficient APIs.`,
                ],
            },
            {
                title: "Freelancer",
                position: "Developer",
                range: "March 2023 - May 2023",
                company: "Freelancer",
                description: [
                    `Developing and implementing conversational 
                        AI systems for messaging applications using 
                        OpenAI API and WhatsApp API.`,
                    `Designing, developing, and implementing 
                        mobile applications for iOS and Android 
                        using Flutter or React Native, integrating 
                        web services and designing an attractive 
                        and user-friendly interface.`,
                    `Designing, developing, and implementing 
                        web applications using React framework, 
                        integrating web services, conducting testing 
                        and debugging, optimizing performance, and 
                        designing an attractive and user-friendly 
                        interface.`,
                ],
            },
            {
                title: "UEB",
                position: "CPD Assistant",
                range: "August 2021 - November 2021",
                company: "UEB",
                description: [
                    `Supervise the computer and communication systems 
                        of the Data Processing Center (DPC) to detect any 
                        failure or irregularity in their operation.`,
                    `Create and develop customized scripts to automate 
                        specific processes in Google applications, using 
                        the Google App Script programming language.`,
                    `Integrate different Google applications to improve 
                        efficiency and productivity, through the use of 
                        customized scripts.`,
                    `Perform thorough testing and debugging of the 
                        scripts, ensuring that changes do not negatively 
                        affect the operation of the Google applications.`,
                ],
            },
            {
                title: "Linea 58",
                position: "Secretary Accountant",
                range: "December 2020 - March 2021",
                company: "Linea 58",
                description: [
                    `Register and classify daily financial transactions 
                        of the company, including sales invoices, income 
                        receipts, expense invoices, and payment vouchers.`,
                    `AEnsure that the company's accounting records 
                        match the banking transactions and make adjustments 
                        in case of discrepancies.`,
                    `Supervise and manage the company's accounts payable 
                        and accounts receivable, ensuring that invoices are 
                        paid on time and outstanding debts are collected.`,
                ],
            },
            {
                title: "SkyHub",
                position: "Developer",
                range: "December 2019 - March 2020",
                company: "SkyHub",
                description: [
                    `Configure and integrate chatbots with different 
                        marketing systems and tools to improve efficiency 
                        and productivity of businesses.`,
                    `Design and develop customized websites using 
                        programming languages such as HTML, CSS, and 
                        JavaScript.`,
                    `Collaborate with graphic designers, marketing 
                        teams, and other developers to create innovative 
                        and attractive websites for users.`,
                ],
            },
            {
                title: "Alfa",
                position: "Developer",
                range: "May 2019 - November 2019",
                company: "Alfa",
                description: [
                    `Designing and developing report automation solutions 
                        using Google Apps Script for various Google applications 
                        such as Google Sheets, Google Drive, Google Docs, and others.`,
                    `Maintaining and improving existing report automation 
                        solutions by making updates and adjustments as needed.`,
                    `Designing and developing websites using WordPress, working 
                        with custom themes and plugins to fit the client's needs.`,
                    `Designing and developing chatbots for platforms such as 
                        ManyChat and Dialogflow, ensuring that the chatbots are 
                        customized to meet the clients' requirements.`,
                ],
            },
        ],
    },
    works: {
        title: "Some Things I’ve Built",
        work: [
            {
                title: "Virtual Psychological Assistant",
                description: `This is a software designed to provide emotional and psychological support 
                        through a simulated online conversation. The integration of WhatsApp API allows 
                        the assistant to be available on the world's most popular instant messaging 
                        application, making it accessible and easy to use for users. In addition, 
                        the integration of OpenAI API, an advanced artificial intelligence platform, 
                        allows the assistant to maintain fluid and personalized conversations 
                        and offer accurate and contextual responses to the specific needs of each user.`,
                tecnology: ["OpenAI-API", "Whatsapp-API", "Python", "Flask", "MongoDB"],
                image: "/images/gpt.jpg",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/gpt-assistant",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Whatsapp",
                        link: "https://wa.link/2nq10x",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Chat Room",
                description: `It is a real-time chat application with a modern and efficient architecture 
                        that allows users to communicate quickly and easily in online groups. Everything 
                        is built with Angular and Firebase.`,
                tecnology: ["Angular", "Firebase"],
                image: "/images/chatroom.png",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/chat-room",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Page",
                        link: "https://chat-room-gules.vercel.app/",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "GPS Monitoring System for Public Transportation",
                description: `A system that allows for real-time tracking of public transportation 
                        vehicles through GPS technology. Users can view the vehicles' 
                        location on a map and obtain real-time information on their 
                        trajectory, speed, and estimated time of arrival. Additionally, 
                        the system can generate alerts for administrators in case of delays, 
                        route changes, or technical issues with the vehicles. This type 
                        of system can improve the efficiency and safety of public 
                        transportation, as well as provide a better experience for users.`,
                tecnology: ["React", "React-Native", "NodeJS", "PostgreSQL"],
                image: "/images/tutut.png",
                state: 5,
                links: [
                    {
                        title: "Control",
                        link: "https://github.com/isaiahsalah/tutut-control",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Server",
                        link: "https://github.com/isaiahsalah/tutut-server",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Driver-Owner App",
                        link: "https://github.com/isaiahsalah/tutut-driver-owner",
                        icon: AiFillGithub,
                    },
                    {
                        title: "Passenger App",
                        link: "https://github.com/isaiahsalah/tutut-passenger",
                        icon: AiFillGithub,
                    },
                    {
                        title: "page",
                        link: "https://tutut-control.vercel.app",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "My portfolio",
                description: `A website designed to showcase my work and skills as a software developer. 
                        It was built using React, which provides an efficient way to create 
                        interactive and responsive user interfaces.`,
                tecnology: ["React", "styled-components"],
                image: "/images/portfolio.png",
                state: 6,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/portfolio",
                        icon: AiFillGithub,
                    },
                    {
                        title: "page",
                        link: "https://www.isaias.lat/",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Lefitel",
                description: `I developed a specialized data management system for "Lefitel", a 
          company dedicated to the management and maintenance of telephone wiring poles for Tigo. 
          This software is designed to optimize and centralize all operations related to the inspection, 
          repair, and maintenance of these poles, enhancing efficiency and accuracy in their daily 
          management activities.`,
                tecnology: ["React", "NodeJS", "Postgresql", "Leaflet"],
                image: "/images/lefitel.png",
                state: 4,
                links: [
                    {
                        title: "page",
                        link: "https://lefitel-frontend.vercel.app",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Munay",
                description: `"Munay" is a comprehensive couples' app that helps partners deepen their 
                        relationship and strengthen their emotional connection. With unique features 
                        such as the question section, personalized advice, and integration with ChatGPT, 
                        this app is a valuable tool for any couple looking to enhance their relationship.`,
                tecnology: ["Flutter", "OpenAI-API", ".Net", "MongoDB"],
                image: "/images/munay.png",
                state: 4,
                links: [
                    {
                        title: "Repository",
                        link: "https://github.com/isaiahsalah/munay",
                        icon: AiFillGithub,
                    },
                ],
            },

        ],
    },
    experiments: {
        title: "Here are some small experiments",
        experiment: [
            {
                title: "Noise Hover Effect",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/RweGqBa",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/RweGqBa",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Hacker Effect On Text",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/qBJqmGy",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/qBJqmGy",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Blur Effect On Mouse",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/XWxNzGo",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/XWxNzGo",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Writing Effect",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/KKGNooX",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/KKGNooX",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Dynamic Shadow Effect",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/poxNMXm",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/poxNMXm",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Paint With JS",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/mdzRqYJ",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/mdzRqYJ",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Parallax Effect When Scrolling",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/bGmgKoz",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/bGmgKoz",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Effect When Hovering A Button",
                tecnology: ["CSS", "HTML"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/OJBWwEy",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/OJBWwEy",
                        icon: AiOutlineLink,
                    },
                ],
            },
            {
                title: "Cursor Effect Within A Text",
                tecnology: ["CSS", "HTML", "JS"],
                links: [
                    {
                        link: "https://codepen.io/isaiahsalah/pen/gOBgjqa",
                        icon: RiCodepenFill,
                    },
                    {
                        link: "https://codepen.io/isaiahsalah/full/gOBgjqa",
                        icon: AiOutlineLink,
                    },
                ],
            },
        ],
    },
    contact: {
        title: "And now?",
        subtitle: "Get in touch",
        description: `In summary, I'm a technology enthusiast who enjoys 
                building things online. If you're looking for a web 
                developer who is efficient, friendly, and eager to 
                learn beyond what's taught, here I am!`,
        button: "Say hello",
    },
    footer: "Developed by Isaias Salas Montesinos",
}