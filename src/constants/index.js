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
  spacetraveller,
  recipeApp,
  SHOPPINGSPREE,
  moviegeeks,
  // mongodb,
  rails,
  ruby,
  git,
  figma,
  // docker,
  // meta,
  // starbucks,
  personalproject,
  murple_logo,
  at,
  infy,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  magicmath,
  awesomeBook,
  garmentexpo,
  WeatherReport,
  bnb,
  bookstore,
  expenseTracker,
  saba,
  dimond,

  // tripguide,
  threejs,
  blessing,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "System Engineer",
    icon: creator,
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
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Highlighted Personal Projects",
    icon: personalproject,
    iconBg: "#383E56",
    date: "December 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies for various domains including E-commerce, Daily-use and entertainment.",
      "Collaborating with cross-cultural teams of developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder and Operations Manager",
    company_name: "Aryan Textiles Jabalpur",
    icon: at,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2022",
    points: [
      "Designed the entire production process from design to delivery, ensuring high-quality standards and timely delivery",
      "Optimized production and increased the efficiency of the process by utilizing data analysis and process improvement techniques.",
      "Demonstrated strong leadership skills by managing a team of 20 employees, ensuring smooth operations and meeting production targets.",
      "Possessing a diverse skill set gained from 4+ years of successfully operating a sock manufacturing company, including expertise in supply chain management, product development, team leadership,operation management, growth driving, business innovation, and process optimization, these skills are highly transferable and can be crucial in web development, where complex projects requiring collaboration with multiple stakeholders and data-driven decision making can be efficiently delivered with a focus on delivering high-quality solutions on time and within budget",
    ],
  },
  {
    title: "Sr System Engineer",
    company_name: "Infosys",
    icon: infy,
    iconBg: "#383E56",
    date: "June 2014 - April 2017",
    points: [
      "System engineer with specialization in Microsoft Technologies.Dot net Developer. Development of WCF web services and MVC applications",
      "Installed entire support of Air Miles Middle East and Nectar ITALY, which involved setting up customized loyalty programs and managing the points flow",
      "Designed UI using asp.net 4.0, C# to call the jobs and SSIS packages for creation of files and other data warehousing processes.",
      " Interacted with Product Owner and BA for understanding requirements for the Change requests",
    ],
  },
  {
    title: "Student Mentor",
    company_name: "Microverse",
    icon: murple_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Mentoring junior web developers, and providing technical support through code reviews",
      " Proposing improvements to code organization to improve code quality and overall performance.",
      " Providing advice and tips on maintaining motivation to maintain longevity in the program.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Karan as a coding partner and I was thoroughly impressed with their technical skills, attention to detail, and ability to consistently deliver high-quality work. Karan is a true professional and a valuable asset to any team. I highly recommend Karan Jain for any coding projects and I am confident they will exceed expectations.",
    name: "Saba Ahmed",
    designation:
      "Full-Stack Web Developer. JavaScript || Rails || React || Redux || open for my next development job",
    company: "Microverse",
    image: saba,
  },
  {
    testimonial:
      "Karan has been an integral part of our development team for the past two years, and his contributions have been invaluable. He has a deep understanding of frontend development, including proficiency in HTML, CSS, JavaScript, and various frontend frameworks such as React, Angular, and Vue. ",
    name: "Diamond Nathaniel",
    designation:
      "Full-Stack Web Developer. JavaScript || Rails || React || Redux || ",
    company: "Microverse",
    image: dimond,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Blessing Okpara ",
    designation: "Full-Stack Web Developer",
    company: "MICROVERSE",
    image: blessing,
  },
];

const reactProject = [
  {
    name: "Movie Geeks",
    description:
      "The website is a powerful search engine for shows and movies, built using the cutting-edge React and Redux toolkit. With this website, users can easily find and browse through their favorite shows and movies with an intuitive and user-friendly interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "create-react",
        color: "pink-text-gradient",
      },
      {
        name: "storage",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: moviegeeks,
    source_code_link: "https://github.com/karanJ2212/moviegeeks",
    live_link: "https://karanj2212.github.io/moviegeeks/",
  },
  {
    name: "Shopping Spree",
    description:
      "An innovative e-commerce website project, built with the advanced technologies of React and Redux Toolkit. Our website boasts a sleek, modern SAAS design and interactive features such as a shopping cart, category page, and detailed product descriptions, providing a seamless online shopping experience for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "create-react",
        color: "pink-text-gradient",
      },
      {
        name: "storage",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: SHOPPINGSPREE,
    source_code_link: "https://github.com/karanJ2212/shoppingspree",
    live_link: "https://karanj2212.github.io/shoppingspree/",
  },
  {
    name: "The_Bookstore_app with React",
    description:
      "[the_bookstore_app] is an online Application made with react and redux . It allows user to seemlessly manage online book collection",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/karanJ2212/the_bookstore_app",
    live_link: "https://bookstorereact22.netlify.app/",
  },
  {
    name: "Weather Report",
    description:
      "Weather Report Weather Report is a SPA built using react and redux toolkit. It contains list of all the countries and their states . You can select any country and get the detailed weather condition in the specific country and its state territory.",
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
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: WeatherReport,
    source_code_link: "https://github.com/karanJ2212/weather_report",
    live_link: "https://weather-report22.netlify.app/",
  },
  {
    name: "space_travelers_hub",
    description:
      "The Spacetravelers is a website for a company that provides commercial and scientific space travel services. It uses real live data from the SpaceX API. The website allows users to book rockets and join selected space missions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },

      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: spacetraveller,
    source_code_link: "https://github.com/karanJ2212/space_travelers_hub",
    live_link: "https://space-travelers-hub-70x5.onrender.com/",
  },
  {
    name: "Magic Math",
    description:
      "This is a React website that has a functional calculator app. Key feature include -a home page -a calculator page -a quote page - complete testing modules",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "red-text-gradient",
      },
      {
        name: "router-dom",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "yellow-text-gradient",
      },
      {
        name: "jest-mocking",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: magicmath,
    source_code_link: "https://github.com/karanJ2212/magic-math",
    live_link: "https://github.com/karanJ2212/magic-math",
  },
];
const jsProjects = [
  {
    name: "The Recipe App",
    description:
      "Javascript Capstone Recipe-App is a website that displays meals categorized into 3 groups. Each meal has cooking instructions, comments, likes and additional information (incl video)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "green-text-gradient",
      },

      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: recipeApp,
    source_code_link:
      "https://github.com/karanJ2212/Recipe-App?organization=karanJ2212&organization=karanJ2212",
    live_link: "https://recipe-app-0tvs.onrender.com/",
  },
  {
    name: "Awesome Books",
    description:
      "This is vanilla javascript book keeping application. Its has functionality of add and remove and uses local storage. Its made as per design requirements of microverse and made using HTML,CSS and Javascript",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: awesomeBook,
    source_code_link: "https://github.com/karanJ2212/ES6AwesomeBook",
    live_link: "https://javascript-awesomebook.netlify.app/#",
  },
  {
    name: "GARMENT TECHNOLOGY EXPO",
    description:
      "This project is Microverse Module 1 Capstone project and made with HTML, CSS and JavaScript. This a website for garment expo India which showcases main events ,highlights and contact informations.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: garmentexpo,
    source_code_link: "https://github.com/karanJ2212/CapstoneModule1",
    live_link: "https://karanj2212.github.io/CapstoneModule1/",
  },
];
const projects = [
  {
    name: "BnB Homes",
    description:
      "BnB Homes is an app that allows users to view homes and reserve them for stays. It features a simple authentication and it is built with Rails and React (styled with Tailwind-CSS).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: bnb,
    source_code_link: "https://github.com/karanJ2212/BnB-homes",
  },
  {
    name: "Expense-tracker",
    description:
      "Expense Tracker is a user-friendly web-based budgeting application built on the powerful Ruby on Rails framework, with PostgreSQL as its reliable database backend. This application empowers users to effortlessly monitor and manage their income and expenses, providing full control over their financial activities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "green-text-gradient",
      },

      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Full-stack",
        color: "pink-text-gradient",
      },
    ],
    image: expenseTracker,
    source_code_link: "https://github.com/karanJ2212/BnB-homes",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  jsProjects,
  reactProject,
};
