import { SkillDomain, Experience, ProjectProduct, Achievement, SocialLinks } from '../types/portfolio';

export const personalInfo = {
  name: "Abhishek Sharma",
  avatarUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/favicon_uxzwgh",
  profilePic: "https://res.cloudinary.com/dek8yhyjm/image/upload/copy_of_abhishek_sharma-1c_zfm9yw", 
  title: "Full-Stack Developer & IoT Engineer",
  tagline: "Bridging the physical-digital divide through highly robust web architecture, real-time IoT ecosystems, and auto-scaling cloud infrastructure.",
  bioParagraphs: [
    "I am a versatile software engineer with deep expertise across the complete hardware-to-cloud canvas. My engineering ethos centers on building resilient, full-stack IoT ecosystems and highly interactive web platforms. Over my career, I have specialized in developing low-latency telemetry pipelines, secure edge computing layers, and scalable cloud-native architectures that support complex device networks.",
    "Throughout my experience founding SaaS products and engineering robotics platforms, I have scaled systems from the ground up. Whether building custom Aedes MQTT broker validation bridges, integrating Raspberry Pi gateways with cloud backends, or optimizing web performance using React, I deliver. My commitment is to write clean, maintainable code backed by strict performance metrics, reliable data pipelines, and robust automated deployments.",
  ],
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/abhisheksharma1310",
  linkedin: "https://linkedin.com/in/abhisheksharma1310",
  email: "abhisheksharma131098@gmail.com"
};

export const skillDomain: SkillDomain = {
  frontend: [
    { name: "HTML5 / CSS3", icon: "Code" },
    { name: "JavaScript (ES6+)", icon: "Code2" },
    { name: "TypeScript", icon: "Braces" },
    { name: "React.js", icon: "Atom" },
    { name: "Next.js", icon: "Activity" },
    { name: "Astro Build", icon: "Rocket" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Redux Toolkit", icon: "Layers" },
  ],
  backend: [
    { name: "Node.js Runtime", icon: "Server" },
    { name: "Express.js Framework", icon: "Cpu" },
    { name: "FastAPI (Python)", icon: "Zap" },
    { name: "RESTful API Design", icon: "Network" },
    { name: "WebSockets & Event-Driven", icon: "Radio" },
    { name: "Flow Automation (Node-RED)", icon: "GitFork" },
    { name: "Hardware Bridging (SerialPort)", icon: "Plug" },
    { name: "Robotics Logic (Johnny-Five)", icon: "Bot" }
  ],
  database: [
    { name: "PostgreSQL", icon: "Database" },
    { name: "MongoDB", icon: "FileCode" },
    { name: "Redis Cache & Pub/Sub", icon: "Flame" },
    { name: "ioredis Driver", icon: "Link" },
    { name: "TimescaleDB (Time-series)", icon: "Clock" },
    { name: "InfluxDB Core (Telemetry)", icon: "TrendingUp" }, 
  ],
  iot: [
    { name: "MQTT & CoAP Protocols", icon: "Wifi" },
    { name: "Aedes & Mosquitto Brokers", icon: "Share2" }, 
    { name: "Arduino & ESP32/ESP8266", icon: "Microchip" }, 
    { name: "Raspberry Pi Gateways", icon: "Cpu" },
    { name: "Modbus & CAN-Bus Bridges", icon: "HardDrive" },
    { name: "Industrial IIoT (Node-OPCUA)", icon: "Factory" },
  ],
  cloud: [
    { name: "Amazon Web Services (AWS)", icon: "Cloud" },
    { name: "Google Cloud Platform (GCP)", icon: "CloudSun" },
    { name: "Microsoft Azure", icon: "CloudLightning" },
    { name: "Oracle Cloud Infrastructure", icon: "CloudRain" },
    { name: "Cloudflare Edge Workers", icon: "Globe" },
    { name: "AWS IoT Core Device SDK", icon: "Key" }
  ],
  devops: [
    { name: "Linux System Administration", icon: "Terminal" },
    { name: "Docker Containerization", icon: "Box" },
    { name: "GitHub Actions CI/CD", icon: "GitBranch" }, 
    { name: "Grafana Dashboards", icon: "BarChart3" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    date: "April 2023 - Present",
    company: "Iotmanager.online",
    role: "Founder & Lead Developer",
    type: "Full-time",
    description: [
      "Architected a comprehensive SaaS platform for real-time IoT device management and high-throughput data visualization using Next.js and Node.js.",
      "Implemented responsive dashboards with drag-and-drop widgets using react-grid-layout and recharts to stream live telemetry, send commands, and down logs.",
      "Engineered secure edge connectivity over MQTT over TLS (mqtts) and WebSocket Secure (wss) using an Aedes broker and a custom credential validation bridge.",
      "Optimized cloud state synchronization leveraging Supabase Realtime/Storage, Redis caching, and automated deployment pipelines via GitHub Actions."
    ]
  },
  {
    id: "exp-2",
    date: "April 2023 - Present",
    company: "Learncode.live",
    role: "Founder & Developer",
    type: "Full-time",
    description: [
      "Designed an interactive e-learning infrastructure utilizing Next.js (SSR/SSG), TypeScript, and Shadcn UI for smooth client-side interactions.",
      "Integrated Sanity headless CMS to execute dynamic content management for real-time lessons, coding tutorials, and custom quiz modules.",
      "Developed complex UI features embedding Monaco Editor, PortableText, and Mermaid blocks to render live code and technical diagrams.",
      "Slashed core Web Vitals page loading times using performance-focused code-splitting, caching strategies, and robust GitHub Actions CI/CD workflows."
    ]
  },
  {
    id: "exp-3",
    date: "January 2022 - March 2023",
    company: "Jetsons Robotics",
    role: "Fullstack Developer",
    type: "Full-time",
    description: [
      "Architected a secure end-to-end robotics IoT SaaS platform linking physical mobile systems directly to interactive web applications.",
      "Built low-latency telemetry streaming and predictive alert pipelines via Node.js, Express, and Socket.IO, reducing manual device diagnostics by 95%.",
      "Created a scalable, responsive frontend framework using React.js, Redux Toolkit, and React Query for multi-device management.",
      "Integrated field robot controllers using Raspberry Pi gateways directly connected with Google Cloud Platform (GCP) IoT Core and Firebase."
    ]
  },
  {
    id: "exp-4",
    date: "July 2021 - December 2021",
    company: "Jetsons Robotics",
    role: "Fullstack Developer Intern",
    type: "Internship",
    description: [
      "Spearheaded a complete cross-platform migration projecting existing Flutter mobile app capabilities onto a high-performance React.js web portal.",
      "Utilized Firebase as a comprehensive Backend-as-a-Service (BaaS) layer managing Firestore, Cloud Storage, and multi-user authentication.",
      "Authored custom Firebase Cloud Functions to process secure serverless business logic and maintain real-time database lookups."
    ]
  }
];

export const products: ProjectProduct[] = [
  {
    id: "prod-1",
    name: "IoT Manager",
    shortDesc: "Enterprise-grade SaaS platform designed for high-throughput IoT device management and real-time state visualization.",
    longDesc: "IoT Manager bridges the gap between hardware layers and analytics through a multi-tenant SaaS architecture built on Next.js and Node.js. It features fully responsive dashboards powered by react-grid-layout and Recharts, enabling live telemetry streaming, direct down-log views, and automated command delivery. Secure edge gateway authentication and real-time synchronization are decoupled using an active Redis layer alongside Supabase cloud storage.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/iot-manager_f9rg9o", // High-tech circuit background
    videoUrl: "",
    links: { live: "https://www.iotmanager.online" },
    type: "fullstack"
  },
  {
    id: "prod-2",
    name: "IoT Bridge",
    shortDesc: "All-in-one open-source command line workspace and visual dashboard bundling standard IoT communication stacks.",
    longDesc: "Distributed via npm as @smartiot-stack/iot-bridge, this open-source tool abstracts network complexities into a lightweight, unified ecosystem. It integrates a local Aedes MQTT broker instance, an embedded SQLite database engine, a standalone REST API server, and native WSL USB port mapping capabilities. It features a developer-centric interactive CLI alongside an integrated web logging portal to enable rapid device profiling and telemetry debugging without separate software configurations.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/iot-bridge_irejbc", // Server rack visualization
    videoUrl: "",
    links: { live: "https://www.npmjs.com/package/@smartiot-stack/iot-bridge", github: "https://github.com/smartiot-stack/iot-bridge" },
    type: "iot"
  },
  {
    id: "prod-3",
    name: "Learn Code Live",
    shortDesc: "Interactive full-stack e-learning ecosystem featuring in-browser code sandboxes and physical hardware simulators.",
    longDesc: "Learn Code Live is a specialized technical education platform serving massive curriculum paths spanning software engineering, data structures, and embedded engineering. It features an advanced workspace integrating a Monaco Editor engine, PortableText rendering pipelines, and live preview consoles. The platform features an interactive hardware lab supporting over 60 physical Arduino sensor module profiles, letting students write, execute, and preview micro-controller code architectures fully inside modern browser layers.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/learncodelive-main_gnexkt", // Coding/Education aesthetic
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/learncodelive-demo_wxwai1",
    links: { live: "https://learncode.live" },
    type: "frontend"
  },
  {
    id: "prod-4",
    name: "Streamlist",
    shortDesc: "High-performance M3U media streaming client and custom IPTV categorization management application.",
    longDesc: "Streamlist is an optimized multimedia dashboard platform engineered to manage, edit, and stream high-bandwidth IPTV playlists. Built using a reactive web layout, it lets users parse, categorize, and cross-reference extensive M3U file arrays without client-side lag. The platform includes full playlist modification options, live player playback frameworks, and a flexible structure to re-export tailored data sets into custom playlist configurations.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/Screenshot_2-6-2026_173819_www.streamlist.online_qgsm4r", // Sleek media interface aesthetic
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/streamlist-demo_omyk6x",
    links: { live: "https://www.streamlist.online" },
    type: "frontend"
  }
];

export const projects: ProjectProduct[] = [
  {
    id: "fullstack-prj-1",
    name: "Memories Blog",
    shortDesc: "Platform to share memories in form of blogs",
    longDesc: "This project is a full‑stack MERN web application built with React.js on the frontend and Node.js + Express.js on the backend, seamlessly connected to a MongoDB Atlas Cloud database for storing user accounts and blog posts. The frontend and backend communicate through REST APIs, enabling complete CRUD functionality (Create, Read, Update, Delete) across the platform. Designed as a practical showcase of the MERN stack, the application allows users to share and manage personal memories with friends and family, making it both a technical demonstration and a meaningful social experience.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/memories-blog_d7fgiw",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/memories-blog-demo_wfzhjk",
    links: { live: "https://memoriesblogposts.netlify.app", github: "https://github.com/abhisheksharma1310/memories_blog" },
    type: "fullstack",
    featured: true
  },
  {
    id: "fullstack-prj-2",
    name: "Chat WebApp",
    shortDesc: "Real-time Chat Web Application.",
    longDesc: "This real‑time chat application combines a ReactJS frontend with Firebase services as backend to deliver a seamless, interactive experience where multiple users can connect across different chat rooms simultaneously. Users can log in easily using Google or Facebook, create new rooms, and manage participants with admin privileges. The platform supports rich communication by allowing you to send text, images, videos, audio, PDFs, ZIP files, and more, while also offering built‑in voice recording so you can capture and share messages instantly. With integrated media playback, you can view shared pictures and listen to audio messages directly within the app, making it a versatile and engaging hub for modern digital conversations.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/chat-app_dgqbx9",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/chat-app-demo_ip3jka",
    links: { live: "https://chatwebreactapp.web.app", github: "https://github.com/abhisheksharma1310/chat-app-react" },
    type: "fullstack",
    featured: true
  },
  {
    id: "fullstack-prj-3",
    name: "Daily Journal Blog",
    shortDesc: "Simple server side rendered website for news post.",
    longDesc: "The Daily Journal Blog Website is a simple yet effective server‑side rendered platform designed for publishing and reading news posts. Developed using EJS, Node.js, Express.js, Mongoose, and MongoDB Atlas cloud storage, it provides a streamlined experience for managing content. Users can easily create new posts and read existing ones, making it a practical example of a lightweight, full‑stack application that balances functionality with simplicity.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/daily-journal_lgncey",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/daily-journal-demo_gagy8a",
    links: { live: "https://journal-4eb0.onrender.com", github: "https://github.com/abhisheksharma1310/daily_journal_ssr" },
    type: "fullstack",
    featured: false
  },
  {
    id: "fullstack-prj-4",
    name: "To do list",
    shortDesc: "A Node.js + Express app with server‑side rendering",
    longDesc: "The To‑Do List SSR (Server‑Side Rendering) project is a productivity web application built to demonstrate backend integration with dynamic rendering. Using Node.js, Express, and EJS templates, the app allows users to create, manage, and organize tasks with persistent storage, ensuring that data remains intact across sessions. By leveraging server‑side rendering, the project delivers faster load times, improved SEO, and a smoother user experience compared to purely client‑side solutions. This project highlights my backend development skills in routing, middleware, database connectivity, and template rendering, while also showcasing how clean architecture and modular code can be applied to build scalable task‑management applications.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/todo-list-ssr_cnroez",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/todo-list-ssr-demo_rx1sdz",
    links: { live: "https://todolist-0fjc.onrender.com/", github: "https://github.com/abhisheksharma1310/todolist_ssr" },
    type: "fullstack",
    featured: false
  },
  {
    id: "fullstack-prj-5",
    name: "Secrets",
    shortDesc: "A website where anyone can post their secrets anonymously.",
    longDesc: "The Secrets Website is a secure authentication and data‑encryption web application built with Node.js, Express, MongoDB, and Passport.js, designed to demonstrate modern backend security practices. The project allows users to register and log in with multiple authentication strategies, including local login and OAuth providers (Google), ensuring flexibility and scalability. Sensitive information is protected using environment variables, hashing, and encryption techniques, highlighting my ability to implement layered security in real‑world applications. By combining robust authentication flows with encrypted data storage, this project showcases my backend expertise in user management, session handling, and secure API design, making it a strong example of practical, production‑ready web security.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/secrets_pvl1me",
    videoUrl: "",
    links: { live: "https://secrets-hjhd.onrender.com", github: "https://github.com/abhisheksharma1310/secrets-app" },
    type: "fullstack",
    featured: false
  },
  {
    id: "frontend-prj-1",
    name: "Box Office",
    shortDesc: "WebApp for Shows and Actor Search.",
    longDesc: "This web application is built with React.js and powered by Tvmaze APIs, enabling users to seamlessly search for both shows and actors. For shows, it provides rich details including a short summary, genre tags, premiere dates, season timelines, current status, and complete cast information. Actor searches by name reveal key details such as name, date of birth, country of origin, and gender, making it easy to explore profiles. To enhance usability, the app also allows users to star shows for offline viewing, ensuring favorite content is always accessible.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/box-office_hzcc9j",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/box-office-demo_tmeu4r",
    links: { live: "https://abhisheksharma1310.github.io/box-office-react-app/", github: "https://github.com/abhisheksharma1310/box-office-react-app" },
    type: "frontend",
    featured: true
  },
  {
    id: "frontend-prj-2",
    name: "Little Lemon",
    shortDesc: "Online Table Reservation and Online Food Order Web App",
    longDesc: "Welcome to the Little Lemon Restaurant Online Reservation & Food Ordering App, a modern capstone project from the Meta Front End Development course. Built with React.js, enhanced by Redux Toolkit for state management, React Router DOM for seamless navigation, and the Browser Local Storage API for persistent user experience, this application delivers a smooth, intuitive platform where customers can reserve tables and order food online with ease.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/little-lemon_we2c0t.jpg",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/little-lemon-demo_gie3zn",
    links: { live: "https://little-lemon-restaurant-web.netlify.app", github: "https://github.com/abhisheksharma1310/little-lemon" },
    type: "frontend",
    featured: true
  },
  {
    id: "frontend-prj-3",
    name: "Drum Machine",
    shortDesc: "A interactive drum machine web app.",
    longDesc: "This project is a React.js‑based drum machine web application that lets users trigger a variety of drum sound clips either by clicking on interactive drum pads or using keyboard shortcuts for a faster, more dynamic experience. It adheres to the FreeCodeCamp specifications, ensuring a structured and standards‑aligned build. With its responsive design and intuitive controls, the app delivers an engaging way to explore rhythm and sound directly in the browser.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/drum_kkgnkx",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/drum-demo_mapmc0",
    links: { live: "https://kv7m45.csb.app", github: "https://github.com/abhisheksharma1310/drum-machine" },
    type: "frontend",
    featured: false
  },
  {
    id: "frontend-prj-4",
    name: "Calculator",
    shortDesc: "A simple calculator web app.",
    longDesc: "This project is a web‑based calculator developed with React.js, designed to perform essential arithmetic operations while adhering to the FreeCodeCamp user stories. It delivers a clean, responsive interface that ensures accurate calculations and a smooth user experience, making it both a practical tool and a showcase of modern frontend development practices.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/calculator_oioyxr",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/calculator-demo_bcnxm1",
    links: { live: "https://f9x9f2.csb.app", github: "https://github.com/abhisheksharma1310/javascript-calculator" },
    type: "frontend",
    featured: false
  },
  {
    id: "frontend-prj-5",
    name: "Tic Tac Toe Game",
    shortDesc: "A simple tic tac toe game web app.",
    longDesc: "This Tic Tac Toe game is built with the React.js library, offering a smooth and interactive experience where players can instantly see the winner marked as X or O, or a tie displayed when neither side prevails. A standout feature is the ability to traverse through the game’s history, allowing you to revisit and jump back to any move at any point, making clashes easy to resolve. You can also start a new game anytime, ensuring endless replayability. Simple yet engaging, it’s a fun way to enjoy a classic game with modern functionality.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/tictactoe_yabsa8",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/tictacttoe-demo_lg4ymo",
    links: { live: "https://abh-tictactoegame-react.surge.sh/", github: "https://github.com/abhisheksharma1310/tictactoe-game-react-app" },
    type: "frontend",
    featured: false
  },
  {
    id: "frontend-prj-6",
    name: "TinDog",
    shortDesc: "TinDog is a playful, responsive website.",
    longDesc: "TinDog is a playful, responsive website built using HTML, CSS, and Bootstrap, designed as a mock startup landing page for a fictional dog‑dating service. The project highlights my ability to craft clean, modern UI layouts with Bootstrap’s grid system, reusable components, and responsive design principles. It features a professional landing page structure with sections for product features, testimonials, and pricing, all styled to deliver a startup‑like aesthetic. This project demonstrates my front‑end development skills in building static websites that are visually appealing, mobile‑friendly, and structured for scalability, making it a strong showcase of my proficiency in web design and Bootstrap integration.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/tindog_knncww",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/tindog-demo_p5phl1",
    links: { live: "https://abhisheksharma1310.github.io/tinDog-web", github: "https://github.com/abhisheksharma1310/tinDog-web" },
    type: "frontend",
    featured: false
  },
  {
    id: "backend-prj-1",
    name: "Backend API's Design",
    shortDesc: "Backend API's design with documentation using swagger",
    longDesc: "This project demonstrates my backend development expertise through the DT Backend WebDev Challenge, where I designed and implemented a robust API system from scratch. The challenge involved two core tasks: API creation and API documentation, both of which highlight my ability to architect clean, scalable, and well‑structured backend solutions. The API was built with a focus on modularity, security, and performance, ensuring seamless data handling and reliable communication between client and server. To complement the implementation, I prepared comprehensive documentation that makes the endpoints easy to understand and consume, reflecting industry best practices for developer experience. This project not only showcases my technical proficiency in backend web development but also emphasizes my commitment to clarity, maintainability, and professional delivery.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/backend-dt-swagger_jiz9co",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/backend-swagger-demo_g1uz9j",
    links: { live: "https://event-api-3biz.onrender.com/api-docs", github: "https://github.com/abhisheksharma1310/dt-backend-web-dev-challange" },
    type: "backend",
    featured: true
  },
  {
    id: "iot-prj-1",
    name: "Data Logger",
    shortDesc: "A serial data logger web app",
    longDesc: "This web application provides an all-encompassing solution for automated data logging and real-time visualization, featuring flexible storage options, historical data access, automated log deletion, customizable chart visualizations, and versatile data export capabilities, all managed through an intuitive browser-based configuration interface and compatible with a wide range of devices and operating systems.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/data-logger_c3deqp",
    videoUrl: "",
    links: { live: "https://abhisheksharma1310.github.io/data-logger", github: "https://github.com/abhisheksharma1310/data-logger" },
    type: "iot",
    featured: false
  },
  {
    id: "iot-prj-2",
    name: "Data Visualizer",
    shortDesc: "A multi protocol data visualizer web app.",
    longDesc: "This project is a React and Node.js web application designed to seamlessly access and display data from multiple communication protocols, including Serial Port, HTTP, MQTT, WebSocket, and Socket.io. Built to support both Node.js and browser environments, it provides a versatile platform for developers to interact with diverse data streams in real time, making it a powerful tool for integration, monitoring, and experimentation across modern web and IoT applications.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/data-visualizer_qwqngb",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/data-visualizer-demo_hscq3h",
    links: { live: "https://abhisheksharma1310.github.io/data-visualizer", github: "https://github.com/abhisheksharma1310/data-visualizer" },
    type: "iot",
    featured: false
  },
  {
    id: "iot-prj-3",
    name: "ESP-Firebase WebApp",
    shortDesc: "A web app to monitor ESP connected devices and data on webapp",
    longDesc: "This project showcases a comprehensive IoT system powered by the ESP32, integrating real‑time sensor monitoring with remote control through Firebase. The ESP32 gathers environmental data using a DHT22 sensor for temperature and humidity, calculates the heat index, and displays live readings on a Nokia 5110 LCD screen. All sensor data is securely transmitted to the Firebase Realtime Database under user‑specific authenticated paths. Complementing the hardware, a web application provides a dynamic interface where data can be viewed in tables and graphs, while users can interact in real time using sliders and buttons to control connected devices — delivering a complete end‑to‑end IoT experience.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/v1776869531/esp-firebase-webapp_vftmww",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/v1776869691/Firebase-esp32_xlxzsj.mp4",
    links: { github: "https://github.com/smartiot-stack/iot-with-esp/tree/main/esp-firebase" },
    type: "iot",
    featured: true
  },
  {
    id: "iot-prj-4",
    name: "Arduino Control",
    shortDesc: "Arduino Control Panel with Data Visualization",
    longDesc: "The Arduino Control Panel with Data Visualization is an embedded IoT system that combines hardware control with real‑time data monitoring. Built around the Arduino microcontroller, the project integrates multiple sensors and actuators into a centralized control panel, allowing users to interact with devices through switches, buttons, and sliders. Sensor data is captured and transmitted to a connected application, where it is visualized in dynamic charts and graphs for easy interpretation. This dual functionality—local hardware control and remote data visualization—demonstrates my ability to bridge embedded programming with modern UI/UX principles. The project highlights skills in Arduino interfacing, serial/MQTT communication, and frontend visualization frameworks, showcasing how embedded systems can be transformed into interactive dashboards for IoT applications.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/arduino-control_a6kpbf",
    videoUrl: "",
    links: { github: "https://github.com/abhisheksharma1310/data-visualization-using-python" },
    type: "iot",
    featured: false
  },
  {
    id: "iot-prj-5",
    name: "Bolt Robotic Car",
    shortDesc: "Google Assistant and Self Controlled Robotic Car",
    longDesc: "This project presents an innovative approach to controlling a Robotic Car through multiple devices and platforms, offering diverse interaction methods such as voice commands, mouse, keyboard, and mobile touch screens. It extends accessibility by integrating with a web application, mobile app, and even digital assistants like Google Assistant, enabling intuitive control across environments. Commands are simple and natural — saying start robot moves the car forward, move left or move right steers it accordingly, move backward reverses its direction, and stop halts it instantly. By combining hardware with modern interfaces, this project demonstrates a versatile, user‑friendly system for robotic navigation and control.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/Bolt_rovor_p9it8r",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/Bolt_Robotic_Car_lvqfe3",
    links: { live: "https://www.hackster.io/abhisheksharma/google-assistant-and-self-controlled-robotic-car-e25b9e", github: "https://github.com/abhisheksharma1310/Bolt_Robotic_Car" },
    type: "iot",
    featured: true
  },
  {
    id: "embedded-prj-1",
    name: "Rover",
    shortDesc: "Self Controlled Robotic Car",
    longDesc: "This Robotic Car project leverages an Ultrasonic Sensor to intelligently detect obstacles in its path. When an obstacle is identified, the sensor dynamically scans both right and left directions to evaluate the surrounding environment and determine the best possible distance for safe movement. By continuously analyzing these readings, the car adapts its navigation to move freely and avoid collisions, showcasing a smart and efficient obstacle‑avoidance system.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/rover-self_g0zvlc",
    videoUrl: "https://res.cloudinary.com/dek8yhyjm/video/upload/Self_Controlled_Robotic_Car_using_Arduino_and_Ultra_Sonic_Sensor_1_zjuuvd",
    links: { live: "https://www.hackster.io/abhisheksharma/self-controlled-robotic-car-fa2ed8", github: "https://github.com/abhisheksharma1310/Ultrasonic_Robotic_Car" },
    type: "embedded",
    featured: true
  },
  {
    id: "embedded-prj-2",
    name: "LCD Arduino Shield",
    shortDesc: "16x2 LCD Arduino Shield",
    longDesc: "The 16x2 LCD Arduino Shield is a custom‑designed PCB that stacks seamlessly on top of an Arduino board, transforming it into a compact embedded system for real‑time data visualization and wireless communication. At its core, the shield integrates a 16x2 LCD display to present sensor readings or user‑defined messages directly on the screen, making it ideal for monitoring IoT data or debugging embedded applications. To extend functionality beyond local display, the shield also incorporates an NRF24 wireless transmitter, enabling data to be sent wirelessly to other devices or nodes in a network. This project highlights my skills in PCB design, hardware interfacing, and embedded programming, showcasing how hardware and software can be combined to deliver practical, scalable solutions for IoT and embedded systems.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/16x2_LCD_Arduino_Shield_PCB_top_nk72dp",
    videoUrl: "",
    links: { github: "https://github.com/abhisheksharma1310/16x2_LCD_Arduino_Shield" },
    type: "embedded",
    featured: false
  },
  {
    id: "cloud-prj-1",
    name: "Web Traffic Manager",
    shortDesc: "Microsoft Azure Project for website traffic management using load balancer.",
    longDesc: "The Web Traffic Manager project leverages Microsoft Azure Traffic Manager to intelligently distribute incoming user requests across multiple endpoints, ensuring high availability, scalability, and optimized performance. By configuring DNS‑based load balancing, the system routes traffic according to priority, geographic location, or performance metrics, providing seamless failover and improved user experience. This project highlights my ability to design and implement cloud‑native backend solutions with a focus on resilience, disaster recovery, and global reach. It demonstrates practical skills in Azure resource management, networking, and deployment automation, making it a strong example of how cloud infrastructure can be harnessed to deliver reliable, enterprise‑grade web applications.",
    photoUrl: "https://res.cloudinary.com/dek8yhyjm/image/upload/cloud-traffic-manager_sgbqlm.png",
    videoUrl: "",
    links: { github: "https://lab.inversion.co.in/oncloud/managing_user_traffic" },
    type: "cloud",
    featured: true
  },
];

export const achievements: Achievement[] = [
  {
  id: "ach-1",
  name: "Meta Front-End Developer Certificate",
  shortDesc: "Professional credential validating production-ready React.js application design and UI architecture.",
  longDesc: "Successfully completed the rigorous Meta-certified curriculum covering advanced UI engineering workflows. Key proficiencies demonstrated include component lifecycle orchestration in React, complex state management, custom hooks development, deep responsive HTML/CSS structures, semantic layouts, and modern front-end interview patterns backed by a technical capstone application.",
  gallery: [
    "https://res.cloudinary.com/dek8yhyjm/image/upload/Credly-Meta-Certificate_abanfl",
    "https://res.cloudinary.com/dek8yhyjm/image/upload/Meta-Certificate_kikqbi"
  ]
  },
  {
  id: "ach-2",
  name: "Introduction to Programming the Internet of Things (IoT)",
  shortDesc: "Specialization credential validating embedded systems architecture, hardware interfacing, and dual-platform development.",
  longDesc: "Successfully completed the University of California, Irvine specialization covering core IoT infrastructure and embedded systems design. Demonstrated technical competency across both the Arduino (C programming) and Raspberry Pi (Python ecosystem) platforms. Practical expertise includes hardware-level pin interfacing, sensor data acquisition, mesh configuration setups, and low-level communication protocol management.",
  gallery: [
    "https://res.cloudinary.com/dek8yhyjm/image/upload/iot-coursera_nvqn1u",
    "https://res.cloudinary.com/dek8yhyjm/image/upload/IoT-certificate_oppqdt"
  ]
  },
  {
    id: "ach-3",
    name: "HEC-A-THON 2K19 - Winner",
    shortDesc: "Haryana Engineering College Hackathon 2019 - Winner.",
    longDesc: "My team proudly secured the First Winner award in the hardware category at HEC-A-THON 2K19, an intensive 24-hour competition organized by Haryana Engineering College. Out of more than 50 competing ideas, our team, Bits & Bytes, was one of only 12 selected to build a functional prototype for the final stage. We developed a comprehensive 'Smart City' working prototype that integrated IoT, AI/ML, and embedded systems to solve real-world urban challenges. The system featured multiple interconnected subsystems, including smart traffic lights, irrigation, waste management, fire safety, and a centralized Master City control facility. As the lead developer and the only ECE student in a team of six, I designed the hardware architecture and wrote the entire codebase for the primary system and all subsystems using Arduino Mega, ESP32, and ESP8266. This achievement, which earned us a spot in a national-level competition, highlights my technical expertise in full-stack embedded development and our team's dedication to engineering excellence.",
    gallery: [
      "https://res.cloudinary.com/dek8yhyjm/image/upload/New_Doc_2019-04-13_18.09.17_4_rdz20b",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/New_Doc_2019-04-13_18.09.17_2_vapgfr",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/FB_IMG_1555510294269_wu2tm6",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/IMG_20190412_100941_zttt7j",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/IMG_20190412_101308_hi0eac",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/New_Doc_2019-04-13_18.09.17_11_epss32"
    ]
  },
  {
    id: "ach-4",
    name: "Arduino Day 2019 - RunnerUp",
    shortDesc: "Held at Teerthankar Mahaveer University, Moradabad, UP",
    longDesc: "I am proud to have secured the second rank at Arduino Day 2019, an international event held on March 16, 2019, at the College of Computing Sciences & Information Technology, Teerthanker Mahaveer University, Moradabad. Representing Haryana Engineering College as a member of the 'Beats and Byte' team, I worked alongside my teammates and mentors to design and develop two innovative IoT-based projects: a Smart Vehicle Parking system and a self-directed autonomous vehicle. This achievement, recognized by the IEEE Student Branch and the MIC Institution Innovation Council (MHRD), highlights my technical proficiency in hardware and software integration using the Arduino open-source platform to create automated solutions.",
    gallery: [
      "https://res.cloudinary.com/dek8yhyjm/image/upload/IMG-20190320-WA0005_swcuru",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/Screenshot_28-5-2026_12248_drive.google.com_tq76vi",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/IMG-20190318-WA0002_qzmm0t",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/TMU_Magazine_ugzsxc",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/19-03-2019-Danik-Jagran_sfj8l0",
      "https://res.cloudinary.com/dek8yhyjm/image/upload/IMG-20190318-WA0006_bgltsh"
    ]
  }
];