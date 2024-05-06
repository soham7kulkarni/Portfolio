import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  pearson,
  CSUF,
  globalshala,
  Rotaract,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "iOS Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Financial Director - Board of Director",
    company_name: "Rotaract Club of DYPIEMR",
    icon: Rotaract,
    iconBg: "#FFFFFF",
    date: "June 2019 - July 2020",
    points: [
      "Our mission is to contribute positively to society by championing impactful causes and serving humanity.",
      "To guide our members in developing their interpersonal and leadership abilities.",
      "Grew club from 100 to 250+ members by arranging 15+ events throughout the year, including donating toys to orphaned children and clothes to homeless people.",
      "Collaborated with motivational speakers to organize a Talk Show for 300+ on-campus attendees.",
    ],
  },
  {
    title: "Software Engineer - Data Platform Intern",
    company_name: "Globalshala",
    icon: globalshala,
    iconBg: "#FFFFFF",
    date: "March 2021 - August 2021",
    points: [
      "Leveraged Python and SQL to develop automated scripts for data cleaning and preprocessing, effectively slashing manual effort by 50%. This involved writing robust code to handle diverse data formats and sources, ensuring data integrity and accuracy throughout the process.",
      "Developed a custom analytics platform using React and Node.js for real-time data visualization. The platform enables live insights and interactive visualizations by leveraging React's frontend capabilities and Node.js's backend efficiency.",
      "Presented detailed analysis and actionable recommendations to stakeholders using Tableau's advanced visualization capabilities. Key findings and insights were effectively communicated through compelling data storytelling and interactive dashboards, enabling stakeholders to make confident, data-driven decisions.",
     
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Pearson",
    icon: pearson,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Automated the weekly refresh of critical production databases by building an Azure Pipeline, streamlining processes, and reducing backup time by 50%.",
      "Developed APIs adhering to the MVC pattern to facilitate seamless integration between two distinct microservices, enhancing system modularity and scalability.",
      "Deployed efficient SQL procedures, reducing server load by 30% and cutting operational costs.",
      "Collaborated with cross-functional teams, actively participating in Agile practices like sprint meetings and code reviews, fostering effective communication and teamwork.",
      "Contributed to front-end bug fixes, gaining insights into user-centric design principles and the importance of cohesive software components."
    ],
  },
  {
    title: "Graduate Teaching Associate",
    company_name: "Cal State Fullerton",
    icon: CSUF,
    iconBg: "#E6DEDD",
    date: "August 2023 - May 2024",
    points: [
      "Instructed 75+ students in Swift via weekly lectures for comprehensive coverage of iOS development.",
      "Delivered comprehensive lectures on SwiftUI, UIKit, and Cocoa Touch framework, equipping students with practical skills and knowledge essential for iOS development.",
      "Covered a wide range of topics in class, including MVC and MVVM patterns, CoreData, data persistence, and sessions networking, providing students with a solid foundation in essential iOS development concepts and practices.",
      "Demonstrated a student-centered approach by addressing individual needs, optimizing office hours to accommodate students' diverse schedules, and effectively resolving their doubts."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };