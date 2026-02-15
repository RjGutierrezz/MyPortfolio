// changed: ensure BASE_URL always works as an absolute path and joins correctly
const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

// helper: make in-app hash links always target the homepage
const homeHash = (hash) => asset(String(hash).replace(/^\/+/, ""));

const navLinks = [
  {
    name: "Personal Projects",
    link: "/projects", // changed: router path (no BASE_URL prefix)
  },
  {
    name: "Collaborated Projects",
    link: homeHash("#experience"), // changed
  },
  {
    name: "Skills",
    link: homeHash("#skills"), // changed
  },
  {
    name: "Tech Stack",
    link: homeHash("#techstack"), // changed
  },
  {
    name: "GitHub",
    link: "https://github.com/RjGutierrezz",
    icon: "images/github.png", // added
  },
];

const words = [
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Concepts", imgPath: asset("images/concepts.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Concepts", imgPath: asset("images/concepts.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Coding Experience" },
  { value: 5, suffix: "+", label: "Team Based Projects" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "On-Time Project Delivery" },
];

const logoIconsList = [
  {
    imgPath: asset("images/logos/company-logo-1.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-2.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-3.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-4.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-5.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-6.png"),
  },
  {
    imgPath: asset("images/logos/company-logo-7.png"),
  },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    imgPath: asset("images/seo.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: asset("images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: asset("images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: asset("images/logos/react.png"),
  },
  {
    name: "Python",
    imgPath: asset("images/logos/python.svg"),
  },
  {
    name: "TypeScript",
    imgPath: asset("images/logos/ts.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: asset("images/logos/three.png"),
  },
  {
    name: "Git",
    imgPath: asset("images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: asset("models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: asset("models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "TypeScript",
    modelPath: asset("models/ts.glb"),
    scale: 1.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: asset("models/js.glb"),
    scale: 10,
    rotation: [0, 0, 0],
  },
  {
    name: "C++",
    modelPath: asset("models/c.glb"),
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: asset("models/java.glb"),
    scale: 1.2,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "HTML",
    modelPath: asset("models/html.glb"),
    scale: 1.2,
    rotation: [0, 0, 0],
    // position: [0, 10, 0] ,
  },
  {
    name: "CSS",
    modelPath: asset("models/css.glb"),
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: asset("models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: asset("models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "The Machine Learning Model for Income & Expense Prediction is a supervised learning specifically regression-based machine learning models to predict outcomes using a computer science salary dataset.",
    imgPath: asset("images/exp2.png"),
    logoPath: asset("images/salary.png"),
    title: "Machine Learning Model for Income & Expense Prediction ",
    date: "Fall 2025",
    responsibilities: [
      "Developed and evaluated multiple regression models, including Linear Regression, Ridge Regression, and Lasso Regression, to predict outcomes using a CS salary dataset.",
      "Implemented a Random Forest regression model to capture non-linear relationships and compare performance against linear approaches.",
      "Performed feature preprocessing and model evaluation using appropriate error metrics to assess accuracy and generalization.",
    ],
  },
  {
    review: "The Photon Project was a team-based academic project focused on building a real-time multiplayer laser tag UI . Working in an Agile development environment, our team collaborated through sprint planning, regular stand-ups, and iterative development cycles to design a responsive and scalable application.",
    imgPath: asset("images/exp1.png"),
    logoPath: asset("images/spacegun.png"),
    title: "Photon Project",
    date: "Spring 2025",
    responsibilities: [
      "Created a real-time multiplayer laser tag application system using a client-server architecture in Python.",
      "Implemented custom networking protocol to handle players actions, scores, and game state synchronization.",
      "Optimized the application for maximum speed and scalability.",
    ],
  },
  {
    review: "PokemonShop is a database-driven web application that simulates a Pokémon bundle marketplace, allowing users to manage accounts, view and analyze bundle ownership, and generate detailed reports. The project integrates a Python backend with a MySQL database to handle user data, bundle relationships, and analytics such as shared bundle matching and total value summaries.",
    imgPath: asset("images/exp3.png"),
    logoPath: asset("images/shop.png"),
    title: "Pokemon TCG Shop",
    date: "Spring 2025",
    responsibilities: [
      "Developed the entire frontend interface, designing user workflows and dynamically rendering database query results as structured HTML tables.",
      "Implemented the majority of backend functionality in Python, including user creation, bundle reporting, data filtering, user matching, and summary analytics using MySQL queries.",
      "Designed and executed complex SQL joins and aggregations to support features such as bundle ownership reports, user matching based on shared attributes, and total value analysis.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: asset("images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: asset("images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: asset("images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: asset("images/client1.png"),
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: asset("images/client3.png"),
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: asset("images/client2.png"),
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: asset("images/client5.png"),
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: asset("images/client4.png"),
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: asset("images/client6.png"),
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: asset("images/insta.png"),
    url: "https://www.instagram.com/hotmorovs/"
  },
  {
    name: "fb",
    imgPath: asset("images/fb.png"),
    url: "https://www.facebook.com/roverjuliann.gutierrez/"
  },
  {
    name: "x",
    imgPath: asset("images/x.png"),
  },
  {
    name: "linkedin",
    imgPath: asset("images/linkedin.png"),
    url: "https://www.linkedin.com/in/rover-gutierrez-536669249"
  },
];

const projects = [
  {
    id: "studybreak-bite",
    title: "StudyBreak-Bite",
    imgPath: asset("images/appmockup.png"),
    imgAlt: "StudyBreak-Bite",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "A mobile food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.",
    href: "https://github.com/RjGutierrezz/StudyBreak-Bite.git",
    techStack: ["React Native", "JavaScript", "TypeScript", "Expo",
      "Expo Router", "Tailwind CSS"],
    gallery: [
      asset("images/appmockup.png"),
      // asset("images/appmockup-2.png"),
    ],
  },
  {
    id: "pottery-webapp",
    title: "Pottery WebApp",
    imgPath: asset("images/project1.png"),
    imgAlt: "Pottery WebApp",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "A full-stack web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.",
    href: "https://github.com/jjmendez819/sales-app/tree/main",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    gallery: [
      asset("images/project1.png"),
      // asset("images/project1-2.png"),
    ],
  },
  {
    id: "todo-app",
    title: "Tiny Wins Matter",
    imgPath: asset("images/lightmode.png"),
    imgAlt: "Tiny Wins Matter",
    imgBgClass: "bg-[#E0E1DD]",
    description: `This is a responsive, retro-inspired Todo app built with vanilla JavaScript using Vite. I created it to strengthen my understanding of object-oriented programming, state management, and dynamic DOM rendering without relying on a frontend framework.
                  Instead of building just another basic task tracker, I focused on structuring the app cleanly by separating the data model, persistence layer, and UI logic into dedicated classes. This helped me better understand how real-world frontend applications manage state and updates behind the scenes.
                  The app includes light and dark mode with saved theme preference, along with motivational quotes to make the experience feel more personal and encouraging. My goal was to combine solid engineering fundamentals with thoughtful design and usability.`,
    href: "https://github.com/RjGutierrezz/ToDo-Quotes",
    liveHref: "https://tiny-wins-matter.vercel.app/",
    techStack: ["JavaScript", "HTML", "CSS", "Vite"],
    gallery: [
      asset("images/lightmode.png"),
      asset("images/darkmode.png"),
    ],
  },
  {
    id: "bill-splitter",
    title: "Bill Splitter",
    imgPath: asset("images/tip-splitter.png"),
    imgAlt: "Bill Splitter",
    imgBgClass: "bg-[#E0E1DD]",
    description: "This is a small webApp I created to practice my JavaScript skills and also avoid those awkward moment of not knowing how much to tip when going out with friends.",
    href: "https://github.com/RjGutierrezz/Tip-Calculator",
    liveHref: "https://rj-billsplitter.vercel.app/https://rj-billsplitter.vercel.app/", 
    techStack: ["JavaScript", "HTML", "CSS"],
    gallery: [
      asset("images/tip-splitter.png"),
      // asset("images/tip-splitter-2.png"),
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
