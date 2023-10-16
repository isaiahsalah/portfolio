import React, { createContext, useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { RiCodepenFill } from "react-icons/ri";

const _experiment = [
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    }
]
const _works = [
    {
        tecnology: ["OpenAI-API", "Whatsapp-API", "Python", "Flask", "MongoDB"],
        image: "./assets/images/gpt.jpg",
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
            }
        ]
    },
    {
        tecnology: ["Angular", "Firebase"],
        image: "./assets/images/chatroom.png",
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
            }
        ]
    },
    {
        tecnology: ["React", "React-Native", "NodeJS", "PostgreSQL"],
        image: "./assets/images/tutut.png",
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
            }
        ]

    },
    {
        tecnology: ["React", "styled-components"],
        image: "./assets/images/portfolio.png",
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
            }
        ]

    },
    {
        tecnology: ["Flutter", "OpenAI-API", ".Net", "MongoDB"],
        image: "./assets/images/munay.png",
        state: 4,
        links: [
            {
                title: "Repository",
                link: "https://github.com/isaiahsalah/munay",
                icon: AiFillGithub,
            }
        ]

    },
    {
        tecnology: ["ThreeJS", ".Net", "React"],
        image: "https://cdn.zendalibros.com/wp-content/uploads/socrates.jpg",
        state: 1,
        links: [
            {
                title: "Repository",
                link: "https://github.com/isaiahsalah/information-game",
                icon: AiFillGithub,
            },
            {
                title: "Page",
                link: "",
                icon: AiOutlineLink,
            }
        ]

    },
    {
        tecnology: ["Angular", ".Net"],
        image: "https://cdn.zendalibros.com/wp-content/uploads/socrates.jpg",
        state: 1,
        links: [
            {
                title: "Repository",
                link: "https://github.com/isaiahsalah/spotify-stats",
                icon: AiFillGithub,
            },
            {
                title: "page",
                link: "",
                icon: AiOutlineLink,
            }
        ]

    },

]
const hardSkills = [
    {
        name: "React",
        icon: BiCheckDouble,
    },
    {
        name: "React Native",
        icon: BiCheckDouble,
    },
    {
        name: "Flutter",
        icon: BiCheck,
    },
    {
        name: "Python",
        icon: BiCheck,
    },
    {
        name: "Node Js",
        icon: BiCheckDouble,
    },
    {
        name: "Angular",
        icon: BiCheck,
    },
    {
        name: "GAS",
        icon: BiCheckDouble,
    },
    {
        name: "PostgreSQL",
        icon: BiCheckDouble,
    },
    {
        name: "Mongo DB",
        icon: BiCheck,
    },
    {
        name: "Whatsapp API",
        icon: BiCheck,
    },
    {
        name: "Google Maps API",
        icon: BiCheckDouble,
    },
    {
        name: "OpenAI API",
        icon: BiCheckDouble,
    },
];
const languajeLabels = [
    {
        title: "Español",
        ling: "es",
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
            description1: `¡Qué tal🫡, futuro empleador! Soy un desarrollador web (y a veces movil) 
                y no, no soy ningún mago o artista, aunque a veces me siento como uno. 
                Soy como un arquitecto digital que construye software o como un pintor 
                que dibuja con código. Como sea🫠, me encargo de desarrollar sitios web 
                increíbles y fáciles de usar`,
            description2: `☝️🤓Disfruto trabajar en equipo (También solo UwU) y colaborar con diseñadores 
                y otros desarrolladores para crear proyectos llamativos y funcionales.`,
            description3: `Mi tolerancia a la frustración arraigada de mis constantes fracasos (amorosos🤡) me 
                hicieron un terco y perspicaz detective a la hora de solucionar problemas de código👾,
                no me rindo fácilmente hasta encontrar la solución adecuada. También me las apaño 
                con tecnologias nuevas, me gusta estar al tanto de las últimas tendencias.🧑🏻‍💻`,
            skill: {
                description:
                    "Aquí hay algunas tecnologías con las que he estado trabajando y habilidades que he desarrollado recientemente:",
                hardskill: {
                    title: "Mis habilidades duras",
                    skills: hardSkills,
                },
                softskill: {
                    title: "Mis habilidades blandas",
                    skills: [
                        {
                            name: "Autodidacta",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Colaboración",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Perspicacia",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Comunicacion",
                            icon: BiCheck,
                        },
                        {
                            name: "Adaptacion",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Planificación",
                            icon: BiCheck,
                        },
                    ],
                },
            },
        },
        experience: {
            title: "¿Dónde he trabajado?",
            jobs: [
                {
                    title: "Desarrollador",
                    position: "Desarrollador Full Stack",
                    company: "Singleton",
                    range: "Mayo 2023 - Septiembre 2023",
                    description: [
                        `Desempeñé el rol de Full Stack Developer en Singletón, encargándome del diseño y desarrollo integral de soluciones web y móviles, abarcando tanto el frontend como el backend.`,
                        `Utilicé diversas tecnologías, incluyendo ReactJS, Flutter y Figma, para la construcción de interfaces de usuario intuitivas.`,
                        `En el backend, implementé .Net con C# para desarrollar APIs eficientes.`,
                    ],
                },
                {
                    title: "Desarrollador",
                    position: "Desarrollador",
                    company: "Autónomo",
                    range: "Marzo 2023 - Mayo 2023",
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
                    title: "Auxiliar",
                    position: "Auxiliar de CPD",
                    company: "UEB",
                    range: "Agosto 2021 - Noviembre de 2021",
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
                    title: "Contable",
                    position: "Secretario Contable",
                    company: "Linea58",
                    range: "Diciembre 2020 - Marzo de 2021",
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
                    title: "Desarrollador",
                    position: "Desarrollador",
                    company: "SkyHub",
                    range: "Diciembre 2019 - Marzo de 2020",
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
                    title: "Desarrollador",
                    position: "Desarrollador",
                    company: "Alfa",
                    range: "Mayo 2019 - Noviembre de 2019",
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
                    description:
                        `Este es un software diseñado para brindar apoyo emocional 
                        y psicológico a través de una conversación simulada en línea.
                        La integración de WhatsApp API permite que el asistente esté disponible 
                        en la aplicación de mensajería instantánea más popular del mundo, 
                        lo que lo hace accesible y fácil de usar para los usuarios. Además, 
                        la integración de OpenAI API, una plataforma de inteligencia artificial 
                        avanzada, le permite al asistente mantener conversaciones fluidas y 
                        personalizadas, y ofrecer respuestas precisas y contextuales para las 
                        necesidades específicas de cada usuario.`,
                    ..._works[0]
                },
                {
                    title: "Sala de Chat",
                    description:
                        `Es una aplicación de chat en tiempo real con una arquitectura moderna 
                        y eficiente, que permite a los usuarios comunicarse de manera rápida 
                        y fácil en grupos en línea. Todo hecho con Angular y Firebase.`,
                    ..._works[1]
                },
                {
                    title: "Sistema de monitoreo GPS de transporte público",
                    description:
                        `Sistema que permite el seguimiento en tiempo real de 
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
                    ..._works[2]

                },
                {
                    title: "Mi portafolio",
                    description:
                        `Un sitio web diseñado para mostrar mi trabajo y mis 
                        habilidades como desarrollador de software. Se construyó 
                        utilizando React, que proporciona una forma eficiente de 
                        crear interfaces de usuario interactivas y responsivas.`,
                    ..._works[3]

                },
                {
                    title: "Munay",
                    description:
                        `"Munay" es una aplicación de pareja completa que ayuda a las 
                        parejas a profundizar en su relación y a fortalecer su conexión emocional. 
                        Con características únicas como la sección de preguntas, los consejos 
                        personalizados y la integración de ChatGPT, esta aplicación es una 
                        herramienta valiosa para cualquier pareja que quiera 
                        mejorar su relación.`,
                    ..._works[4]

                },
                /*{
                    title: "Juego 3d de información sobre seguridad",
                    description:
                        `Página de Juego 3D de información sobre seguridad de una forma divertida 
                        y educativa de aprender sobre seguridad en línea y mejorar tus habilidades 
                        en este tema crucial en la era digital actual.`,
                    ..._works[5]

                },
                {
                    title: "Spotify Stats",
                    description:
                        `Una aplicación que utiliza la API de Spotify para mostrar estadísticas 
                        de uso y reproducción de música de los usuarios en una interfaz de 
                        usuario limpia y moderna creada con Angular. La aplicación también 
                        incluye recomendaciones de canciones y artistas, basadas en las 
                        preferencias del usuario.`,
                    ..._works[6]

                },*/

            ],
        },
        experiment: {
            title: "Algunos pequeños experimentos",
            experiments: [
                {
                    title: "Efecto de Ruido al desplazarse",
                    ..._experiment[0]
                },
                {
                    title: "Efecto de hacker en texto",
                    ..._experiment[1]
                },
                {
                    title: "Efecto de Blur en el mouse",
                    ..._experiment[2]
                },
                {
                    title: "Efecto de escritura",
                    ..._experiment[3]
                },
                {
                    title: "Efecto de Sombra Dinamica",
                    ..._experiment[4]
                },
                {
                    title: "Paint con JS",
                    ..._experiment[5]
                },
                {
                    title: "Efecto Parallax al hacer scroll",
                    ..._experiment[6]
                },
                {
                    title: "Efecto al desplazarse por un botón",
                    ..._experiment[7]
                }
                ,
                {
                    title: "Efecto de Cursor dentro de un texto",
                    ..._experiment[8]
                }
            ],
        },
        contact: {
            title: "¿Y ahora?",
            subtitle: "Ponete en contacto",
            description:
                `En resumen, soy un apasionado por la tecnología que se divierte 
                construyendo cosas en línea. Si querés un desarrollador que sea 
                eficiente, amigable y tenga ganas de aprender más allá de lo enseñado, 
                ¡acá estoy!`,
            button: "Decí hola",
        },
        footer: "Desarrollado por Isaias Salas Montesinos",
    },
    {
        title: "English",
        ling: "en",
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
            description1: `Hello🫡 future employer! I'm a web (and sometimes mobile) developer, 
            and no, I'm not a wizard or an artist, although sometimes I feel like one. 
            I'm like a digital architect who builds software or like a painter who draws 
            with code. Anyway🫠, I'm responsible for developing amazing and easy-to-use websites.`,
            description2: `☝️🤓I enjoy working in teams (also alone UwU) and collaborating with 
            designers and other developers to create eye-catching and functional projects.`,
            description3: `My rooted tolerance for frustration from my constant (romantic🤡) 
            failures has made me a stubborn and insightful detective when it comes to solving 
            code problems👾. I don't give up easily until I find the right solution. 
            I also manage with new technologies, I like to stay up-to-date with the 
            latest trends.🧑🏻‍💻`,
            skill: {
                description:
                    `Here are some technologies I've been working with and skills 
                    I've recently developed:`,
                hardskill: {
                    title: "My hard skills",
                    skills: hardSkills,
                },
                softskill: {
                    title: "My soft skills",
                    skills: [
                        {
                            name: "Self-taught",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Collaborative",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Insightful",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Communicative",
                            icon: BiCheck,
                        },
                        {
                            name: "Adaptive",
                            icon: BiCheckDouble,
                        },
                        {
                            name: "Strategic",
                            icon: BiCheck,
                        },
                    ],
                },
            },
        },
        experience: {
            title: "Where have I worked?",
            jobs: [
                {
                    title: "Developer",
                    position: "Full Stack Developer",
                    company: "Singleton",
                    range: "May 2023 - September 2023",
                    description: [
                        `As a Full Stack Developer at Singletón, I undertook the design and development of comprehensive web and mobile solutions, addressing both frontend and backend aspects.`,
                        `I utilized technologies such as ReactJS, Flutter, and Figma to craft intuitive user interfaces.`,
                        `In the backend, I employed .Net with C# to develop efficient APIs.`,
                    ],
                },
                {
                    title: "Developer",
                    position: "Developer",
                    company: "Freelancer",
                    range: "March 2023 - May 2023",
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
                    title: "Assistant",
                    position: "CPD Assistant",
                    company: "UEB",
                    range: "August 2021 - November 2021",
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
                    title: "Accountant",
                    position: "Secretary Accountant",
                    company: "Linea58",
                    range: "December 2020 - March 2021",
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
                    title: "Developer",
                    position: "Developer",
                    company: "SkyHub",
                    range: "December 2019 - March 2020",
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
                    title: "Developer",
                    position: "Developer",
                    company: "Alfa",
                    range: "May 2019 - November 2019",
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
                    description:
                        `This is a software designed to provide emotional and psychological support 
                        through a simulated online conversation. The integration of WhatsApp API allows 
                        the assistant to be available on the world's most popular instant messaging 
                        application, making it accessible and easy to use for users. In addition, 
                        the integration of OpenAI API, an advanced artificial intelligence platform, 
                        allows the assistant to maintain fluid and personalized conversations 
                        and offer accurate and contextual responses to the specific needs of each user.`,
                    ..._works[0]
                },
                {
                    title: "Chat Room",
                    description:
                        `It is a real-time chat application with a modern and efficient architecture 
                        that allows users to communicate quickly and easily in online groups. Everything 
                        is built with Angular and Firebase.`,
                    ..._works[1]

                },
                {
                    title: "GPS Monitoring System for Public Transportation",
                    description:
                        `A system that allows for real-time tracking of public transportation 
                        vehicles through GPS technology. Users can view the vehicles' 
                        location on a map and obtain real-time information on their 
                        trajectory, speed, and estimated time of arrival. Additionally, 
                        the system can generate alerts for administrators in case of delays, 
                        route changes, or technical issues with the vehicles. This type 
                        of system can improve the efficiency and safety of public 
                        transportation, as well as provide a better experience for users.`,
                    ..._works[2]

                },
                {
                    title: "My portfolio",
                    description:
                        `A website designed to showcase my work and skills as a software developer. 
                        It was built using React, which provides an efficient way to create 
                        interactive and responsive user interfaces.`,
                    ..._works[3]

                },
                {
                    title: "Munay",
                    description:
                        `"Munay" is a comprehensive couples' app that helps partners deepen their 
                        relationship and strengthen their emotional connection. With unique features 
                        such as the question section, personalized advice, and integration with ChatGPT, 
                        this app is a valuable tool for any couple looking to enhance their relationship.`,
                    ..._works[4]

                },
                /*{
                    title: "3D Security Information Game",
                    description:
                        `3D Security Information Game page is a fun and educational way to learn 
                        about online security and improve your skills in this crucial topic in 
                        the current digital age.`,
                    ..._works[5]

                },
                {
                    title: "Spotify Stats",
                    description:
                        `An application that utilizes Spotify's API to display users' 
                        music usage and playback statistics on a clean and modern user interface 
                        created with Angular. The application also includes song and artist 
                        recommendations based on user preferences.`,
                    ..._works[6]

                }*/

            ],
        },
        experiment: {
            title: "Here are some small experiments",
            experiments: [
                {
                    title: "Noise Hover Effect",
                    ..._experiment[0]
                },
                {
                    title: "Hacker Effect On Text",
                    ..._experiment[1]
                },
                {
                    title: "Blur Effect On Mouse",
                    ..._experiment[2]
                },
                {
                    title: "Writing Effect",
                    ..._experiment[3]
                },
                {
                    title: "Dynamic Shadow Effect",
                    ..._experiment[4]
                },
                {
                    title: "Paint With JS",
                    ..._experiment[5]
                },
                {
                    title: "Parallax Effect When Scrolling",
                    ..._experiment[6]
                },
                {
                    title: "Effect When Hovering A Button",
                    ..._experiment[7]
                }
                ,
                {
                    title: "Cursor Effect Within A Text",
                    ..._experiment[8]
                }
            ],
        },
        contact: {
            title: "And now?",
            subtitle: "Get in touch",
            description:
                `In summary, I'm a technology enthusiast who enjoys 
                building things online. If you're looking for a web 
                developer who is efficient, friendly, and eager to 
                learn beyond what's taught, here I am!`,
            button: "Say hello",
        },
        footer: "Developed by Isaias Salas Montesinos",
    },
];


export const LanguajeContext = createContext();

export const LanguajeProvider = ({ children }) => {
    const [languaje, setLanguaje] = useState(languajeLabels[0]);

    const changeLanguaje = () => {
        if (languaje.ling === "en") {
            document.documentElement.lang = "es";
            setLanguaje(languajeLabels[0]);
        } else {
            document.documentElement.lang = "en";
            setLanguaje(languajeLabels[1]);
        }
    };

    return (
        <LanguajeContext.Provider value={{ languaje, changeLanguaje }}>
            {children}
        </LanguajeContext.Provider>
    );
};
