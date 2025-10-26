import amazon_clone from "../images/amazon_clone.png"
import todo from "../images/todo.png"
import tic_tac_toe from "../images/tic_tac_toe.png"
import weather from "../images/weather.png"
import socialsync from "../images/socialsync.png"
import tasknote from "../images/tasknote.png"
import bootstrap_project from "../images/bootstrap_project.png"
import frontend_certificate from "../images/frontend_certificate.jpg"
import coding_savvy from "../images/coding_savvy.jpg"

export const Bio = {
  name: "Kunal Patil",
  roles: [
    "Full Stack Developer",
    "Problem Solver",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  
  github: "https://github.com/kunalpatil-dev",
  resume: "https://drive.google.com/file/d/1N6jJSnfIRhxzgeoXZtEf5hYHL2mO57Fs/view",
  linkedin: "https://www.linkedin.com/in/kunal-patil-bb7674274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript (ES6+)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Java",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7tQBPjkPaJXrizazeYshN1G0Vj5m_O4Z7Q&s",
      },
      {
        name: "TypeScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
      },
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      },
      {
        name: "C++",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript (ES6+)",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

      {
        name: "Redux Toolkit",
        image: "https://www.svgrepo.com/show/303557/redux-logo.svg",
      },
      {
        name: "TanStack Query",
        image: "https://storage.googleapis.com/zenn-user-upload/topics/3a56c6c8af.png",
      },
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGec7kH2HjxuwdnV0XH2KyojMdkYLJU-sfw&s",
      },
      {
        name: "Zustand",
        image: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: "data:image/png;base64,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",
      },
      {
        name: "Express.js",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG-N028bTJp3uj9yWfv6QO-4C3t-m29FefA&s",
      },
      {
        name: "OAuth",
        image: "https://cdn-icons-png.flaticon.com/512/17076/17076709.png",
      },
      {
        name: "MongoDB",
        image: "https://img.icons8.com/color/512/mongodb.png"
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      
      {
        name: "JWT",
        image: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAg1AAZAA0",
      },
      {
        name: "Prisma ORM",
        image: "https://img.icons8.com/color/200w/prisma-orm.png",
      },
      {
        name: "REST APIs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5tJqLPXNRv9d747wbYMg-iK6U-j7QljdmQ&s",
      },
      
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        image:
          "https://img.favpng.com/20/3/17/github-computer-icons-logo-repository-png-favpng-3D6iEY0b391hz9PYJZqnvKTLT.jpg",
      },
      {
        name: "Stream API",
        image:
          "https://avatars.githubusercontent.com/u/8597527?s=200&v=4",
      },
      {
        name: "Render",
        image: "https://repository-images.githubusercontent.com/543813098/366e0eef-a3e8-4953-afc3-88c6e2ed954f",
      },
      {
        name: "Netlify",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHK2zbKy-AZ2qL2psLsJewD8BJBrp_08tjw&s",
      },
      {
        name: "Vercel",
        image: "https://develop.finki.ukim.mk/projects/Caessino/export/fe03f6951e060d04520fa7677350d89581daa9e7/public/favicon-vercel.ico",
      },
      {
        name: "Postman",
        image:"https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-png-download-2945092.png",
      },
      {
        name: "Thunder Client",
        image:
          "https://avatars.githubusercontent.com/u/164544218?s=200&v=4",
      },
    ],
  },
];
export const experiences = [
  {
    id: 0,
    img: coding_savvy,
    role: "Frontend Engineer Intern",
    company: "Coding Savvy",
    date: "21 December 2024 - 21 January 2025",
    desc: "Worked as a Frontend Engineer Intern at Coding Savvy, where I was responsible for developing and maintaining the user interface of web applications. I collaborated with designers to create responsive and user-friendly interfaces. My role involved writing clean and efficient code, debugging issues, and ensuring cross-browser compatibility. I gained hands-on experience in using modern frontend technologies and frameworks, which enhanced my skills in web development.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Boostrap",
      "GitHub",
      "Version Control"
    ],
    doc: frontend_certificate,
  },

];

export const education = [
  {
    id: 0, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvABRYX2AA1UH9iqPgU-heBr5IWK1HgI1wJw&s",
    school: "Bachelor of Engineering (B.E.) in Computer Engineering, (Pune University)",
    date: "Year: 2022 to 2026",
    desc: "I am currently pursuing a Bachelor's degree in Computer Engineering at RMD Sinhgad School of Engineering. I have completed 6 semesters. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "RMD Sinhgad School of Engineering, Warje, Pune",
  },
  {
    id: 1,
    img: "https://www.mahahsscboard.in/LogoBord.png",
    school: "Jay Bharat Higher Secondary School, Nilanga, Latur",
    date: "Year: 2021 to 2022",
    grade: "88.2%",
    desc: "I completed my class 12 high school education at Jay Bharat Higher Secondary School, Nilanga, Latur, where I studied Science.",
    degree: "HSC(XII), Science",
  },
  {
    id: 2,
    img: "https://www.mahahsscboard.in/LogoBord.png",
    school: "Jay Bharat School, Nilanga, Latur",
    date: "Year: 2019 to 2020",
    grade: "92.3%",
    desc: "I completed my class 10 education at Jay Bharat School, Nilanga, Latur.",
    degree: "SSC(X), Semi English",
  },
];

export const projects = [

  {
    id: 5,
    title: "SocialSync",
    description:
      "Real-time social and language exchange platform with messaging, video calls, and onboarding flows",
    image: socialsync,
    tags: ["React", "Nodde.js", "Express.js", "MongoDB", " TanStack Query", "Tailwind CSS", "Zustand", "Stream API", "JWT"],
    category: "machine learning",
    github: "https://github.com/kunalpatil-dev/SocialSync",
    webapp: "https://socialsync-sp8d.onrender.com/",
  },
  {
    id: 4,
    title: "TaskNote",
    description:
      "MERN-based productivity app for managing notes efficiently, featuring RESTful APIs, Upstash Redis rate limiting, and responsive design.",
    image: tasknote,
    tags: ["React", "Nodde.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
    category: "machine learning",
    github: "https://github.com/kunalpatil-dev/TaskNote",
    webapp: "https://tasknote-2.onrender.com/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "I have built Weather App using React JS, HTML, CSS. The app allows users to search for the weather of any city. It provides real-time weather information, including temperature, humidity, and weather conditions. Users can enter a city name and retrieve the current weather data.",
    image: weather,
    tags: ["React JS", "HTML", "CSS"],
    category: "machine learning",
    github: "https://github.com/kunalpatil-dev/Weather-App",
    webapp: "https://weather-app-peach-five-40.vercel.app/",
  },
  {
    id: 9,
    title: "Amazon Clone",
    description:
      "I have built an Amazon Clone single page web application using only HTML & CSS. The project is a static representation of the Amazon website, showcasing its layout and design. It serves as a demonstration of my HTML and CSS skills, allowing me to practice and improve my front-end development abilities. The project is not intended for production use and is purely for educational purposes.",
    image: amazon_clone,
    tags: [
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/kunalpatil-dev/Amazon-Clone",
    webapp: "https://kunalpatil-dev.github.io/Amazon-Clone/",
  },
  {
    id: 0,
    title: "To Do Web App",
    description:
      "I have built To Do app using HTML, CSS, and JavaScript. The app allows users to create and delete tasks, helping them stay organized and manage their time effectively. Users can add new tasks and remove them when no longer needed. The app provides a simple and intuitive interface for efficient task management.",
    image: todo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/kunalpatil-dev/To-Do-List",
    webapp: "https://kunalpatil-dev.github.io/To-Do-List/",
  },
  {
    id: 1,
    title: "Tic-Tac-Toe Game",
    description:
      "I have built tic-tac-toe game using HTML, CSS, and JavaScript. The game is played on a 3x3 grid, where two players take turns marking their symbols (X or O) in the empty cells. The objective is to get three of their symbols in a row, either horizontally, vertically, or diagonally. The game ends when one player wins or all cells are filled without a winner (a draw).",
    image: tic_tac_toe,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "web app",
    github: "https://github.com/kunalpatil-dev/Tic-Tac-Toe-Game",
    webapp: "https://kunalpatil-dev.github.io/Tic-Tac-Toe-Game/",
  },
  {
    id: 3,
    title: "Bootstrap basic project",
    description:
      "I have built a basic project using Bootstrap. The project showcases the use of Bootstrap components and layout system to create a responsive and visually appealing web page. It serves as a demonstration of my skills in using Bootstrap for front-end development.",
    image: bootstrap_project,
    tags: [
      "HTML",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/kunalpatil-dev/Coding_Monkeys_Boostrap",
    webapp: "https://kunalpatil-dev.github.io/Coding_Monkeys_Boostrap/",
  },

];

