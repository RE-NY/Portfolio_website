// import {
//   // mobile,
//   // backend,
//   // creator,
//   // web,
//   // javascript,
//   // typescript,
//   // html,
//   // css,
//   // reactjs,
//   // redux,
//   // tailwind,
//   // nodejs,
//   // mongodb,
//   // git,
//   // figma,
//   // docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   // carrent,
//   // jobit,
//   // tripguide,
//   // threejs,
// } from "../app";

// import meta from "../assets/company/meta.png"
// import starbucks from "../assets/company/starbucks.png"
// import tesla from "../assets/company/tesla.png"
// import shopify from "../assets/company/shopify.png"
import github from "../assets/tech/github.png"
import IITD from "../assets/tech/IITD.svg"

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "TimeTabling",
    company_name: "Automating BTech Project Scheduling, Prof.Prashant Palkar",
    icon: IITD,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Designed an AMPL model to optimize BTech presentation schedules, maximizing professors' consecutive slots.",
      "Preprocessed and converted .xlsx data to .dat format for seamless model integration.",
      "Solved scheduling optimization using the Gurobi solver for efficient time allocation.",
      "Visualized the solution with Gantt charts, highlighting schedule insights for Professors.",
    ],
  },
  {
    title: "DSCoin-Cryptocurrency",
    company_name: "Data Structures and Algorithms Project",
    icon: IITD,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
      "Understood about cryptographic hash functions and collision resistant functions(CRFs).",
      "Utilized CRF Concepts to build many Authenticated data structures such as AuthLinkedList, AuthStack and AuthSortedSet using Merkle Tree.",
      "Implemented a balanced Merkle Tree with insertion and deletion, and blockchain using AuthLinkedList and MerkleTree.",
      "Extended Blockchain to support mining from honest and fraudulent miners and proof of work(nonce) to implement the cryptocurrency",
    ],
  },
  {
    title: "Medical Chatbot using Retrieval Augmented Generation",
    company_name: "Experience with RAG",
    icon: github,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Implemented RAG to specialize llama-2-7b-chat model from huggingface to answering only medical-related questions.",
      "Used the Gale encyclopedia of medicine as the data source.",
      "Used huggingface embeddings model to generate word embeddings and stored it as an index in Pinecone database as long term memory.",
      "Used langchain to implement the RAG pipeline, flask for basic back-end use, and HTML for front-end.",
    ],
  },
  {
    title: "Text Summariser",
    company_name: "Summarizing text with huggingface",
    icon: github,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "A structured project that uses the google pegasus model from huggingface transformers library and Samsum dataset to full fine-tune it.",
      "Implemented with logging and exceptions modules. Made a simple web app using Flask for back end.",
      "Deployable application with working docker image file and GitHub workflow CI/CD pipeline enabled.",
    ],
  },
  {
    title: "Anamoly Detection",
    company_name: "Anomaly detection in Wind turbine using drone imagery",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Nov 2023",
    points: [
      "Employed the DTU dataset containing images of a wind turbine situated in Denmark, captured between the years 2017 and 2018.",
      "Classified the dataset and used a pre-trained VGG19 network on imagenet data for the classification of images.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
// 
// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
// services, technologies, , testimonials, projects 
export { experiences};
