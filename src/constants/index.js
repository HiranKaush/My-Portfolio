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
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  sql,
  java,
  bootsrap,
  gl,
  ob,
  trans,
  bb,
  lotus,
  stack,
  queue,
  pm,
  jira
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
    title: "FullStack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer (Intern)",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: web,
  },
  ,
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
    name: "Java",
    icon:java
  },
  {
    name:"sql",
    icon:sql,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon:bootsrap
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  },
  
];

const experiences = [
  {
    title: "Freelance FullStack Developer",
    company_name: "SoftSora",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April - June 2023",
    points: [
      "2 Months working experience in TransChat",
      "Real time chat application made to communicate within the company of a company in Japan. ",
      "Next-level app with the ability to translate messages into any language of our choice.",
      "DeepL translator was used to translate the messages.",
      "Contribution: Implement the UI components ,Implement the backend APIs ,research on requirements and ideas.",
      "Responsibilities: Collaborate with team members, Join to all standard up meetings and scrum meetings. work distribution , maintain project requests, responsible for on time delivery. ",
      "Technologies: React and Node JS"
      ,
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
    name: "Golden-Lands",
    description:
      "Golden-Lands is a Web application that allows users to sell and buy lands from various landlords, providing a convenient and efficient solution for selling and buying lands. The goal of this project is to showcase and demonstrate usage of basic web development technologies including HTML,CSS,JS,PHP and MySql . Developed as part of the Internet and Web Technologies module at SLIIT.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: gl,
    source_code_link: "https://github.com/HiranKaush/Golden-Lands",
  },
  {
    name: "CREDISY-OOP",
    description:
      "CREDISY is a web application designed to provide an online banking experience. The goal of this project is to showcase and demonstrate object-oriented programming (OOP) concepts. Developed as part of the Object-Oriented Programming module at SLIIT, CREDISY offers a secure and user-friendly platform for banking transactions. With features like account management, fund transfers, and transaction history, CREDISY highlights the principles of encapsulation, inheritance, and polymorphism in OOP",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: ob,
    source_code_link: "https://github.com/HiranKaush/CREDISY-Online-Banking",
  },
  {
    name: "Ceylon-Translate",
    description:
    "Ceylon-Translate is a multimodal web application designed to provide an English to Sinhala , Sinhala to Englis - Text, Images, PDF , Voice translation. The goal of this project is develop the English language skills of Sri Lankan children and to make them use the English language. Developed as part of the Software Project Management(SPM) module at SLIIT, Ceylon-Translate offers a multitasking and user-friendly platform for translations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tesseractOCR",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      }
    ],
    image: trans,
    source_code_link: "https://github.com/HiranKaush/Ceylon-Translate",
  },
  ,
  {
    name: "Boarding-Buddy",
    description:
    "Boarding-Buddy is a mobile application designed to provide user friendly mobile app to find boardings and restaurants easily for University Students. With features like Search boarding places by filtering , boarding house's management(landlord's), restaurant management, special thing is when using this app no need any third-party app to communication between landlord and tenant . We implemented a real time chat application to fullfill that task. and tenant management . Developed as part of the User Experience Engineering(UEE) module at SLIIT.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      }
    ],
    image: bb,
    source_code_link: "https://github.com/HiranKaush/boardingBuddy",
  },
  {
    name: "Procurement-Management",
    description:
      "Procurement-Management system is  combination of web and mobile applications implemented to provide a better procurement management in a construction site. When site manager makes purchase order in site using mobile app, it checks the total budget of the purchase order through the system. If the total budget is more than the limit of the company, the purchase order goes as a request to the procurement manager. Then he can consider it and give actions it to the supplier or reject the request. We have made a simple algorithm for this.. The goal of this project is to showcase and demonstrate How to Design and Implement a System related to a Case Study. Developed as part of the Case Studies in Software Engineering(CSSE) module at SLIIT.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: pm,
    source_code_link: "https://github.com/HiranKaush/Procurement-Management",
  },
  {
    name: "Lotus-Fitness",
    description:
      "Lotus-Fitness is a e-commerce web application of Lotus Fitness designed to provide a userfriendly platform for users . The goal of this project is to showcase and demonstrate my Frontend skills using React.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      
    ],
    image: lotus,
    source_code_link: "https://hirankaush.github.io/gym-project/",
  },
  {
    name: "DSA-Stacks",
    description:
      "This project is making Stack in data structure using Array and LinkedList and operations related to Stacks. The goal of this project is to showcase and demonstrate my DSA knowledge using JAVA.And also I hope to further continue this repository .",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      }
      
    ],
    image: stack,
    source_code_link: "https://github.com/HiranKaush/DSA",
  },
  {
    name: "DSA-Queues",
    description:
      "This project is making Queue and Circular queue in data structure using Array and LinkedList and operations related to Queues. The goal of this project is to showcase and demonstrate my DSA knowledge using JAVA.And also I hope to further continue this repository .",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      }
      
    ],
    image: queue,
    source_code_link: "https://github.com/HiranKaush/DSA-Queues",
  },
];
export { services, technologies, experiences, testimonials, projects };
