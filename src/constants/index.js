const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Way of Life",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Company Projects" },
  { value: 11, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Work Speed" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality-Driven",
    desc: "I deliver clean, thoughtful code where every detail reflects care and precision.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "You’ll always know where things stand—no surprises, just progress.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Execution",
    desc: "I hit deadlines without compromising quality or cutting corners.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Richard brought creativity and technical expertise to the team, significantly improving our automation efficiency. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "RPA-Developer",
    date: "January 2025 - April 2025",
    responsibilities: [
      "Delivered end-to-end RPA bots, built AI Copilot chatbot, designed PDF-to-Excel automation",
      "Designed an AI Copilot chatbot integrated with Excel for customer support & product lookup",
        "Automated PDF-to-Excel workflows, reducing manual effort by 80%",
        "Skills: RPA · Power Platform · AI Chatbots · Process Automation · Microsoft 365"
    ],
  },
  {
    review: "Richard is a natural leader. He transformed our store's operations, brought clarity to inventory control, and built a strong team culture.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Shift Supervisor",
    date: "January 2023 - December 2024",
    responsibilities: [
      "Managed a team of 10+ retail staff, overseeing scheduling, floor operations, and compliance enforcement",
      "Led in-store compliance audits and ensured 100% adherence to provincial cannabis regulations",
      "Fostered a customer-first culture, improving satisfaction scores and staff accountability.",
    ],
  },
  {
    review: "I worked on Appwrite’s mobile app brought a high level of quality and efficiency. Delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "August 2021 - September 2023",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Build it like it’s mine.",
    mentions: "@builddiff",
    review:
      "I treat every project like I own it — from performance to UI polish to secure backend logic — because I believe pride of ownership leads to perfect execution.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Never push blind code.",
    mentions: "@mindsetdiff",
    review:
      "Every line I commit is reviewed mentally and logically like it’s going into a banking system — because stability and reliability come before shortcuts.",
    imgPath: "/images/client3.png",
  },
  {
    name: "If it breaks, I fix it first — then I talk.",
    mentions: "@dedicationdiff",
    review:
      "I believe in being proactive, not reactive. If a bug shows up, I don’t wait for instructions — I replicate, debug, patch, and then report the solution, not the problem.",
    imgPath: "/images/client2.png",
  },
  {
    name: "I speak in outcomes, not excuses.",
    mentions: "@no-excuses",
    review:
    "Whether it’s React, FastAPI, SQL, or secure coding — if I’m given a problem, I deliver a working, testable solution, not reasons why it couldn’t be done.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Documentation is part of the product.",
    mentions: "@perfection",
    review:
      "I make sure my code is readable, my APIs are documented, and every feature has traceability — because I respect the dev who inherits my work tomorrow.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Users don’t care about logic, they care about experience.",
    mentions: "@qualitywork",
    review:
      "My goal is always to bridge clean backend architecture with intuitive UI/UX — making sure the final product works and feels like magic to the user.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/rezephwords/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/richard.khristi",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/IC3E11",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/richard-khristi/",
    imgPath: "/images/linkedin.png",
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
};
