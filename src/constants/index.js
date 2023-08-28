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
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  magicmath,
  awesomeBook,
  garmentexpo,
  WeatherReport,
  bnb,
  bookstore,
  expenseTracker,

  // tripguide,
  threejs,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    image: recipeApp,
    source_code_link:
      "https://github.com/karanJ2212/Recipe-App?organization=karanJ2212&organization=karanJ2212",
    live_link: "https://recipe-app-0tvs.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
