import medgrocer from "../src/assets/thumbnails/medgrocer.png";
import doj from "../src/assets/thumbnails/doj.png";
import nha from "../src/assets/thumbnails/nha.png";

export default [
  {
    id: 1,
    title: "Developer",
    status: "CONTRACTUAL",
    description:
      "As a Developer at MedGrocer, my primary responsibility is to develop websites for various business units using Bulma, React, Gatsby, and Next.js programming stack. I work with IT platforms such as Make (Integromat) and Airtable to ensure seamless integration of systems and optimize website performance.",
    year: "2023",
    date: "January 2023 - April 2023",
    tags: {
      location: "MAKATI",
      role: "MAINTENANCE",
      output: "WEB APPLICATIONS",
    },
    thumbnail: medgrocer,
  },
  {
    id: 2,
    title: "Technical Assistant",
    status: "JOB ORDER",
    description:
      "I am part of the Application Systems Development (ASD) department. We develop web-based applications to meet the demands of the agency. For the front end, we use Bootstrap, JavaScript, and React. For the backend, we use PHP and MySQL. We also use Docker to build applications.",
    year: "2022",
    date: "November 2021 - November 2022",
    tags: {
      location: "MANILA",
      role: "MAINTENANCE",
      output: "WEB APPLICATIONS",
    },
    thumbnail: doj,
  },
  {
    id: 3,
    title: "Clerk Processor",
    status: "JOB ORDER",
    description:
      "As a clerk processor at the National Housing Authority, I efficiently managed administrative tasks and processed documents, ensuring accuracy and compliance with guidelines.",
    year: "2021",
    date: "January 2021 - June 2021",
    tags: {
      location: "QUEZON CITY",
      role: "ENCODE",
      output: "DOCUMENTS",
    },
    thumbnail: nha,
  },
];
