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
  { text: "Visions", imgPath: asset("images/concepts.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Visions", imgPath: asset("images/concepts.svg") },
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
    id: "aura-drip",
    title: "AuraDrip WebApp",
    date: "2026",
    imgPath: asset("images/dashboard.png"),
    imgAlt: "AuraDrip WebApp",
    imgBgClass: "bg-[#E0E1DD]",
    description: `Overview
Aura Drip is a [[full-stack|accent]] wardrobe management and outfit recommendation app that helps users organize their clothing in one place and get outfit suggestions based on what they already own. It is designed for users who want a more personalized alternative to generic fashion apps. Instead of browsing random outfit ideas, users can upload their own pieces, manage favorites, and generate recommendations from their actual wardrobe.

Why I Built It
I built Aura Drip because I wanted a project that felt more like a real product than a tutorial or classroom assignment. As a new computer science graduate, I wanted to challenge myself to build something end-to-end that involved frontend development, backend APIs, authentication, database design, deployment, and UI polish. I was also interested in creating something personal and visual, since that pushed me to think more carefully about user experience and responsiveness.

What It Does
- Lets users create an account, sign in securely, and access only their own wardrobe data.
- Allows users to upload clothing items with images and save details like category, color, style, occasion, and warmth.
- Provides search, filtering, editing, deleting, and favoriting for wardrobe items.
- Generates outfit suggestions from natural language prompts using the user's saved clothing items.
- Includes a responsive dashboard, favorites page, outfit page, and profile page for a more complete app experience.

My Contribution
I built this project myself from the ground up, including both the frontend and backend. I implemented the React frontend, designed the app flow and UI, created the Express API, modeled the database with Prisma, and connected everything to Supabase for authentication and image storage. I also handled deployment with Vercel and Render, debugged production issues around database connectivity and auth redirects, and iterated on the mobile experience after the first live version was up.

Technical Highlights
- Built a full-stack architecture with a React + TypeScript frontend and an Express + Prisma backend.
- Designed authenticated API routes that verify Supabase JWTs and scope all clothing data to the current user.
- Modeled wardrobe data in PostgreSQL with Prisma and used migrations to manage schema changes.
- Integrated Supabase Storage for image uploads and Supabase Auth for account creation and login.
- Implemented a rule-based outfit recommendation flow that parses prompt intent and scores saved items based on style, occasion, color, warmth, and favorites.

Challenges and Decisions
One of the biggest challenges was getting the deployed app working smoothly across multiple services. I had to debug issues involving Prisma migrations, environment variables, Supabase auth redirect URLs, and database connectivity from Render. I chose a split deployment setup with Vercel for the frontend and Render for the backend because it matched the architecture of the project better than forcing everything onto one platform. I also spent time refining the mobile experience, which taught me that responsive design is not just about shrinking layouts, but about rethinking spacing, hierarchy, and navigation for smaller screens.

Outcome or What I Learned
This project taught me how much goes into building and shipping a full-stack product beyond just writing features. I became more comfortable working across the entire stack, from database design and API validation to deployment and post-launch UI improvements. More than anything, Aura Drip helped me practice thinking like an engineer who owns a problem end-to-end, which is exactly the kind of mindset I want to bring into an entry-level software engineering role.`,
    href: "https://github.com/RjGutierrezz/Aura-Drip",
    techStack: ["Vite", "TypeScript", "HTML", "CSS", "Supabase", "React", "Express", "Prisma"],
    gallery: [asset("images/dashboard.png"),asset("images/wardrobe.png"), asset("images/login.png"), asset("images/favorite.png"), asset("images/add.png"), asset("images/profile.png"), asset("images/outfit.png")],
    liveHref: "https://aura-drip.vercel.app",
    disabled: false,
  },

  {
    id: "studybreak-bite",
    title: "StudyBreak-Bite",
    date: "2026",
    imgPath: asset("images/appmockup.png"),
    imgAlt: "StudyBreak-Bite",
    imgBgClass: "bg-[#E0E1DD]",
    description: `Overview
StudyBreak-Bite is a [[mobile|accent]] food ordering app concept built for college students who need a faster, more convenient way to grab meals between classes, study sessions, and other campus commitments. The app is designed to make ordering feel simple and low-friction by letting users browse menu items, customize meals, manage a cart, and save delivery details in one place. I built it around the idea that even small campus frustrations, like long lines or leaving a study spot, can be improved with thoughtful software.

Why I Built It
I built this project because I wanted to move beyond small isolated assignments and create something that felt closer to a real product. As a new CS graduate, I wanted practice building a full mobile app experience with authentication, state management, backend integration, and user-focused flows. I was especially interested in learning how to connect a polished frontend to real data and make the app feel useful, not just functional.

What It Does
- Allows users to create an account, sign in, and access a personalized in-app experience.
- Lets users browse food items, search by keyword, and filter by category.
- Provides a product details flow where users can customize meals with toppings and sides.
- Supports cart management with quantity updates, pricing totals, and customized item handling.
- Gives users a profile area where they can update personal information like name, phone number, address, and profile photo preview.

My Contribution
I personally built the core mobile application experience, including the authentication flow, screen routing, menu browsing, search and filtering, product detail customization flow, cart functionality, and profile management features. I also integrated the app with Appwrite for user accounts and database-backed content, and used Zustand to manage authentication and cart state across the app. In addition to building the UI, I worked through the underlying logic for dynamic pricing, customized cart entries, and syncing user-facing profile data with backend records.

Technical Highlights
- Built the app with React Native, Expo, TypeScript, and Expo Router for a structured mobile development workflow.
- Integrated Appwrite for authentication and database operations, including user records, menu data, and category-based content.
- Used Zustand for lightweight global state management for both auth state and cart behavior.
- Implemented customization-aware cart logic so identical products with different add-ons are treated as separate entries.
- Organized the project with clear separation between route screens, reusable components, backend integration logic, constants, and state stores.

Challenges and Decisions
One of the biggest challenges was making the cart logic behave in a way that felt realistic. It was not enough to simply add products by ID, because the same item can be added with different toppings or sides, so I had to think more carefully about how those variations should be stored and compared. I chose Expo and Appwrite because they gave me a practical way to focus on building product features quickly while still working with real authentication and backend data, which made the project feel much closer to production-style development than a static frontend mockup.

Outcome or What I Learned
This project helped me grow from building individual components to thinking in terms of complete user flows and real product structure. I got more comfortable connecting frontend screens to backend services, managing shared application state, and making implementation decisions based on how users would actually interact with the app. More than anything, it reinforced that I enjoy building practical software and that I want to keep growing into an engineer who can contribute across both product experience and technical implementation.`,
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
    date: "2025",
    imgPath: asset("images/project1.png"),
    imgAlt: "Pottery WebApp",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "A [[full-stack|accent]] web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.",
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
    date: "2025",
    imgPath: asset("images/lightmode.png"),
    imgAlt: "Tiny Wins Matter",
    imgBgClass: "bg-[#E0E1DD]",
    description: `This is a responsive, retro-inspired Todo app built with vanilla JavaScript using Vite. I created it to strengthen my understanding of [[object-oriented programming|accent]], state management, and dynamic DOM rendering without relying on a frontend framework.
                  The app includes [[light and dark mode|accent]], along with [[motivational quotes|accent]] to make the experience feel more personal and encouraging. It uses [[localStorage|tech]] to persist tasks and theme preferences, allowing the user experience to remain consistent across sessions.
                  Instead of building just another basic task tracker, I focused on structuring the app cleanly by separating the data model, persistence layer, and UI logic into dedicated classes. 
                  This helped me better understand how real-world frontend applications manage state and updates behind the scenes. My goal was to combine solid engineering fundamentals with thoughtful design and usability.`,
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
    date: "2025",
    imgPath: asset("images/tip-splitter.png"),
    imgAlt: "Bill Splitter",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "This is a small [[webApp|accent]] I created to practice my [[JavaScript|accent]] skills and also avoid those awkward moment of not knowing how much to tip when going out with friends.",
    href: "https://github.com/RjGutierrezz/Tip-Calculator",
    liveHref: "https://rj-billsplitter.vercel.app/", 
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
