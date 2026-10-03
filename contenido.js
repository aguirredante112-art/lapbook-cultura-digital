/**
 * LAPBOOK DIGITAL INTERACTIVO — CULTURA DIGITAL
 * Archivo de Datos y Contenido Editable
 * 
 * ✏️ EDITA AQUÍ SI NECESITAS CAMBIAR LA INFORMACIÓN
 */

const LAPBOOK_DATA = {
  alumno: {
    nombre: "AGUIRRE MARTÍNEZ DANTE SEBASTIÁN",
    docente: "Calixto González Roxana Ivette",
    grupo: "1 P.M.",
    turno: "MATUTINO",
    materia: "CULTURA DIGITAL",
    titulo: "TECNOLOGÍA AL DESCUBIERTO",
    subtitulo: "LAPBOOK DIGITAL INTERACTIVO — CULTURA DIGITAL"
  },

  codigoAbierto: {
    titulo: "Software de Código Abierto (Open Source)",
    queEs: "Es aquel software cuyo código fuente está disponible públicamente para que cualquier persona pueda inspeccionarlo, modificarlo, mejorarlo y redistribuirlo libremente bajo licencias permisivas o copyleft.",
    caracteristicas: [
      "Transparencia total en el código fuente.",
      "Desarrollo colaborativo impulsado por comunidades globales.",
      "Libertad de modificación y redistribución.",
      "Independencia de un único proveedor tecnológico."
    ],
    ventajas: [
      "Mayor seguridad gracias a la revisión continua por miles de desarrolladores.",
      "Costos significativamente menores o inexistentes en licencias.",
      "Alta personalización y adaptación a necesidades específicas.",
      "Fomenta la innovación abierta y la educación."
    ],
    ejemplos: [
      "Sistema Operativo Linux (Ubuntu, Debian, Fedora)",
      "Navegador Web Mozilla Firefox",
      "Suite Ofimática LibreOffice",
      "Servidor Web Apache y Lenguaje Python"
    ],
    importancia: "Es el motor fundamental de la infraestructura digital moderna. Impulsa la mayoría de los servidores en la nube, supercomputadoras y la educación en programación a nivel mundial."
  },

  propietario: {
    titulo: "Software Propietario (Privativo)",
    definicion: "Es aquel programa informático en el que los usuarios tienen limitaciones estrictas para usarlo, modificarlo o redistribuirlo. El código fuente es secreto y propiedad exclusiva de una empresa o persona.",
    caracteristicas: [
      "Código fuente cerrado y protegido por derechos de autor / patentes.",
      "Uso regulado mediante licencias EULA (End User License Agreement).",
      "Soporte técnico oficial respaldado por la empresa desarrolladora.",
      "Actualizaciones periódicas centralizadas."
    ],
    ventajas: [
      "Interfaces altamente pulidas y enfocadas en la experiencia de usuario.",
      "Garantía de soporte técnico y responsabilidad legal del proveedor.",
      "Integración fluida dentro del ecosistema del mismo fabricante.",
      "Especialización avanzada en nichos profesionales (diseño, ingeniería)."
    ],
    limitaciones: [
      "Costos de licencias recurrentes o suscripciones elevadas.",
      "Dependencia total del proveedor para actualizaciones o corrección de fallos.",
      "Imposibilidad de auditar el código para verificar la privacidad de los datos."
    ],
    ejemplos: [
      "Microsoft Windows y Microsoft 365",
      "macOS e iOS de Apple",
      "Adobe Creative Cloud (Photoshop, Premiere)",
      "AutoCAD y MATLAB"
    ],
    diferencias: "A diferencia del código abierto, el software propietario restringe el acceso al código interno y prohíbe la copia o modificación no autorizada, cobrando por el derecho de uso."
  },

  tiposSoftware: {
    sistema: {
      nombre: "Software de Sistema",
      definicion: "Conjunto de programas fundamentales que gestionan el hardware de la computadora y proporcionan una plataforma para ejecutar otros programas.",
      funcion: "Servir de interfaz entre los componentes físicos (CPU, memoria, disco) y las aplicaciones del usuario.",
      caracteristicas: [
        "Control directo del hardware.",
        "Ejecución en segundo plano con alto rendimiento.",
        "Administración de memoria y procesos."
      ],
      ejemplos: ["Windows 11", "Linux Kernel", "macOS Sonoma", "Android OS", "Controladores de dispositivos (Drivers)"]
    },
    aplicacion: {
      nombre: "Software de Aplicación",
      definicion: "Programas diseñados para ayudar al usuario a realizar tareas específicas de productividad, entretenimiento, comunicación o creación.",
      funcion: "Resolver necesidades concretas del usuario en su vida cotidiana, académica o profesional.",
      caracteristicas: [
        "Enfocado 100% en la interacción directa con el usuario final.",
        "Diversidad enorme según el área (diseño, ofimática, juegos).",
        "Requiere un sistema operativo para poder ejecutarse."
      ],
      ejemplos: ["Google Chrome", "Microsoft Word", "Spotify", "Blender", "WhatsApp Web"]
    },
    desarrollo: {
      nombre: "Software de Desarrollo",
      definicion: "Herramientas utilizadas por los programadores para escribir, probar, depurar y mantener otros programas y sistemas.",
      funcion: "Traducir instrucciones lógicas humanas a lenguaje máquina comprensible por el procesador.",
      caracteristicas: [
        "Incluye editores de código, compiladores e intérpretes.",
        "Ofrece Entornos de Desarrollo Integrados (IDE).",
        "Control de versiones y depuradores de errores."
      ],
      ejemplos: ["Visual Studio Code", "PyCharm", "Git & GitHub", "GCC Compiler", "Eclipse"]
    },
    seguridad: {
      nombre: "Software de Seguridad",
      definicion: "Programas diseñados para proteger la integridad, confidencialidad y disponibilidad de los sistemas, redes y datos contra amenazas informáticas.",
      funcion: "Monitorear, detectar, prevenir y neutralizar código malicioso o accesos no autorizados.",
      caracteristicas: [
        "Análisis heurístico y en tiempo real.",
        "Actualizaciones constantes de firmas de virus.",
        "Filtrado de tráfico de red sospechoso."
      ],
      ejemplos: ["Windows Defender", "Malwarebytes", "Wireshark", "Bitdefender", "Firewall de red"]
    }
  },

  seguridadDigital: {
    titulo: "Seguridad Digital",
    queEs: "Es la disciplina y conjunto de herramientas destinadas a proteger los activos de información, dispositivos y la privacidad de los usuarios en entornos conectados.",
    paraQueSirve: "Sirve para evitar el robo de identidad, pérdida de datos financieros, infecciones por malware, acceso no autorizado a cámaras y micrófonos, y ataques cibernéticos.",
    funciones: [
      "Detección y eliminación de Malware / Ransomware.",
      "Filtrado de conexiones no seguras mediante Firewall.",
      "Cifrado de datos sensibles y gestión de contraseñas.",
      "Protección contra phishing y suplantación de identidad."
    ],
    ejemplos: ["Antivirus en tiempo real", "Autenticación de Dos Factores (2FA)", "Gestores de Contraseñas Cifrados"],
    importancia: "En el mundo hiperconectado actual, garantiza que la identidad personal, académica y económica no sea vulnerada, previniendo extorsiones y pérdidas irreparables de información."
  },

  timeline: [
    {
      year: "1947",
      title: "Transistor",
      inventor: "John Bardeen, Walter Brattain y William Shockley (Bell Labs)",
      desc: "Dispositivo semiconductor que sustituyó a los tubos de vacío para amplificar y conmutar señales eléctricas.",
      impacto: "Es el componente base de toda la microelectrónica moderna y la computación digital."
    },
    {
      year: "1969",
      title: "ARPANET",
      inventor: "DARPA (Departamento de Defensa de EE. UU.)",
      desc: "Primera red interconectada de computadoras mediante conmutación de paquetes.",
      impacto: "Sentó las bases arquitectónicas de lo que hoy conocemos como Internet."
    },
    {
      year: "1971",
      title: "Microprocesador (Intel 4004)",
      inventor: "Marcian Hoff, Federico Faggin y Masatoshi Shima",
      desc: "Unidad Central de Procesamiento (CPU) integrada por completo en un solo chip de silicio.",
      impacto: "Permitió la miniaturización drástica de las computadoras y el nacimiento de las PCs."
    },
    {
      year: "1973",
      title: "Protocolo TCP/IP",
      inventor: "Vinton Cerf y Robert Kahn",
      desc: "Conjunto de reglas de comunicación de datos que permite la interconexión de redes heterogéneas.",
      impacto: "Es el estándar global que permite el funcionamiento unificado de la red mundial."
    },
    {
      year: "1981",
      title: "Computadora Personal (IBM PC)",
      inventor: "Equipo de ingeniería de IBM liderado por Don Estridge",
      desc: "Estandarización de las computadoras de escritorio accesibles para oficinas y hogares.",
      impacto: "Democratizó el acceso a la informática en la vida académica y laboral."
    },
    {
      year: "1989",
      title: "World Wide Web (WWW)",
      inventor: "Tim Berners-Lee (CERN)",
      desc: "Sistema de gestión de información basado en hipertextos navegables mediante enlaces.",
      impacto: "Transformó Internet en una red de fácil acceso gráfico y consulta masiva de información."
    },
    {
      year: "1991",
      title: "Núcleo Linux",
      inventor: "Linus Torvalds",
      desc: "Kernel de sistema operativo libre y de código abierto desarrollado colaborativamente.",
      impacto: "Impulsa hoy la mayoría de servidores web, supercomputadoras y dispositivos Android."
    },
    {
      year: "1998",
      title: "Motor de Búsqueda Google",
      inventor: "Larry Page y Sergey Brin",
      desc: "Algoritmo de clasificación de páginas web (PageRank) que organizó la información global.",
      impacto: "Revolucionó la forma en que la humanidad accede y consume información digital."
    },
    {
      year: "2007",
      title: "Teléfono Inteligente Moderno (iPhone)",
      inventor: "Apple / Steve Jobs",
      desc: "Dispositivo móvil con interfaz táctil capacitiva multi-touch y ecosistema de aplicaciones.",
      impacto: "Inició la era de la computación móvil ubicua y la conectividad permanente 24/7."
    },
    {
      year: "2022",
      title: "Modelos de IA Generativa Masiva",
      inventor: "OpenAI, Google, Investigadores de IA",
      desc: "Sistemas basados en redes neuronales de Transformador capaces de procesar y generar lenguaje natural.",
      impacto: "Revolución tecnológica en la automatización, análisis de datos y asistencia académica/profesional."
    }
  ],

  fuentes: [
    {
      nombre: "RAE & IEEE - Conceptos de Ingeniería Informática",
      url: "https://www.ieee.org"
    },
    {
      nombre: "Open Source Initiative (OSI) - Definiciones Oficiales",
      url: "https://opensource.org"
    },
    {
      nombre: "GNU Operating System - Free Software Foundation",
      url: "https://www.gnu.org"
    },
    {
      nombre: "Computer History Museum - Línea del Tiempo de la Computación",
      url: "https://www.computerhistory.org"
    }
  ]
};
