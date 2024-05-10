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
  express,
  aws,
  azure,
  bootstrap,
  django,
  flask,
  java,
  materialUI,
  mysql,
  python,
  springboot,
  swift,
  swiftui,
  docker,
  cryptoCoins,
  mapsImg,
  portfolio,
  weather,
  HN,
  pballal,
  akash,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "flask",
  //   icon: flask,
  // },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
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
];

const testimonials = [
  {
    testimonial:
      "I can confidently say that Soham's dedication to their work, coupled with their strong analytical skills and attention to detail make him an exceptional professional. His positive attitude and collaborative nature make him a valuable asset to any team. I highly recommend Soham for his expertise and commitment to excellence.",
    name: "Prathamesh Ballal",
    designation: "Software Developer",
    company: "KPIT",
    image: pballal,
  },
  {
    testimonial:
      "I wholeheartedly recommend Soham for his exceptional backend development. His dedication, expertise, and professionalism is truly impressive. Soham consistently approaches every task with enthusiasm and creativity. They are a valuable asset to any team, and I have no doubt they will excel in any endeavor they pursue.",
    name: "Akash Butala",
    designation: "Software Engineer",
    company: "Rocket Companies",
    image: akash,
  },
];

const projects = [
  {
    name: "Smart Parking System",
    description:
      "SPS is a campus parking web app for CSU Fullerton. Users input their destination, and the app finds nearby spots with available spaces across different levels. They can select a spot, pay securely, and plan ahead.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Node.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Maps API",
        color: "green-text-gradient",
      },
      {
        name: "Stripe API",
        color: "pink-text-gradient",
      },

    ],
    image: mapsImg,
    source_code_link: "https://github.com/soham7kulkarni/Smart-Parking-System",
  },
  {
    name: "Portfolio",
    description:
      "A dynamic portfolio website showcasing my diverse range of projects and skills, providing a comprehensive overview of my expertise and accomplishments in web development and beyond.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/soham7kulkarni/Portfolio",
  },
    {
    name: "Crypto Hunter",
    description:
      "Web-based platform that allows users to get detailed information about a wide range of cryptocurrencies, including current prices, market capitalization, trading volume, historical data, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materia UI",
        color: "green-text-gradient",
      },
      {
        name: "Chart JS",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoCoins,
    source_code_link: "https://github.com/soham7kulkarni/Crypto-hunter",
  },
  {
    name: "ClimaCast",
    description:
      "Stay informed with ClimaCast, your personalized weather companion delivering precise forecasts wherever you go.",
    tags: [
      {
        name: "iOS",
        color: "blue-text-gradient",
      },
      {
        name: "Swift",
        color: "green-text-gradient",
      },
      {
        name: "CoreLocation",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/soham7kulkarni/Clima",
  },
  {
    name: "TechTrend",
    description:
      "Your ultimate destination for staying ahead of the curve in the fast-paced world of technology. Explore the latest innovations, trends, and breakthroughs shaping our digital landscape.",
    tags: [
      {
        name: "iOS",
        color: "blue-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "green-text-gradient",
      },
      {
        name: "WebView",
        color: "pink-text-gradient",
      },
    ],
    image: HN,
    source_code_link: "https://github.com/soham7kulkarni/Hacker-App",
  },
];

export { services, technologies, experiences, testimonials, projects };