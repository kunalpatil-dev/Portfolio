import amazon_clone from "../images/amazon_clone.png"
import todo from "../images/todo.png"
import tic_tac_toe from "../images/tic_tac_toe.png"
import weather from "../images/weather.png"
import bootstrap_project from "../images/bootstrap_project.png"
import frontend_certificate from "../images/frontend_certificate.jpg"
import elegant_vision from "../images/elegant_vision.jpg"

export const Bio = {
  name: "Kunal Patil",
  roles: [
    "Full Stack Developer",
    "Problem Solver",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  
  github: "https://github.com/kunal-patil-dev",
  resume: "",
  linkedin: "https://www.linkedin.com/in/kunal-patil-bb7674274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  twitter: "",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Tailwind",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGec7kH2HjxuwdnV0XH2KyojMdkYLJU-sfw&s",
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
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Prisma ORM",
        image: "https://img.icons8.com/color/200w/prisma-orm.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Java",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7tQBPjkPaJXrizazeYshN1G0Vj5m_O4Z7Q&s",
      },
      {
        name: "Git",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAy8UFMdYpxsf1wGImhBGfQNaph3tJ7bQa5A&s",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD///8EBARUVFT8/PwJCQn5+fnCwsL29vZpaWnHx8ckJCTt7e0NDQ0/Pz+IiIjk5ORMTEyhoaE4ODhdXV3T09OysrItLS27u7uZmZlERER+fn4yMjITExN0dHQZGRmRkZFx1+pkAAAD2ElEQVR4nO3a626jMBAF4LEx4IRrSKBpNpe+/1PumDRNFwKlBK3t6HxSVe2qP3xkbI8HiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAekRQyKW2PYxFShkSvE4aCgF4kTEhJ0yT86xWEtErT1YuEobe9EPs326NYSCG0FoXtUSyA131emjBl7v0eIMOQ3oVSKhLvfNx4nUby8A9aRRxG6UP7T3+ZuYiFCaOUiNt58pfMKOAsJoxWIiCvZ4atBS8Z86NEbXsszwmpUFp8Uqrw++RMat7HPvH2fLQ9nqc00T0Mr5zG9nhmM9VyKZT4okRpqmcvNwEedCw6YvJzR+Mr2Z+0Gyb942kYOu67Wbh6PpJvYa4Lo+hNTDs1ZjH5FIiLsJA2tYi6Wfjk3HjXD5CZvLyLqB+Gq+cTH50+pZFclB3Sh2F0eiDP6s2QTtW1KOuE4f+pTn5dBXiseX/x3+Tk1WPGg62Hw9R+hZF0Fr1H7CYSK3/CtIdMORxGqTLzpUTju3FIldCDYXhqKtNL9yGN6ZNvU9Xfye4zE+mtJyen6VrsNd/7ByeGNZ6cNdL0lk1DZmRmhOk9ezEzJNeDy+Ur0NqPYlM+rJa7Uk96z9t6+BH7mhmx3toe5yTVg5qsv254e3Yd71G7UuifsrR9p53jnXRzKaseVP59/DdV6Hbvma8xu5IfoQlrhouaHWW2BzxGUtKIkfPyWxqemn1ie7yjuFo2TfKfs1zn5uz2WXOpp0W5xqkvtsc7qhBqwuq/4gfN7ZNTjFTLvZnhP7U93kFc0zdTg9w0jl4F+Mw4/DaLEI72nfg0/7la7lmTi2/T+GFZTShjuvTK9sD7zF35WE/eyO6i+s0sG5fWjWy/xNBTjv5/KaWd+3JDtk3/aKQjMzQxkXLutYDMQqqiSUVZN42O2r6T7QTfmSbGhDvZA0qUK7e+d2qr5dmaxKmCU5qJmc21bx636+nVcpcSsTPNDXNIyGJ+FtN7LqQjnXRzxOTlrMV/mxpV5pQ5cdiYMB/T7soDWfhi8+HIySkz2uhoxun/LYzSG8qcCGO+XBzpk09Ic/3m0YUwIQXzc9wFjmzPv2hiDE+OI988fqgZ95huGLMHWGYOhySd3pAZSSPShOxeoc1+2vy+8H8gUu2rQYu7gLnGBCWf4M+vmc/XAjZ3tFBmsYoWecz4ZhefMpuPmaRz2n5M/jw+qdKzxSicZRsvEeSGq2eLz1lY6GeO/g6lC5svbMyXi4uF4aVXB/ayXKqlgtxU9l5yZHmwsNzpF4M+kQuznQcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6nv8+yInbYDEQZAAAAAElFTkSuQmCC",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Thunder Client",
        image:
          "https://avatars.githubusercontent.com/u/164544218?s=200&v=4",
      },
      {
        name: "Figma",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: elegant_vision,
    role: "Frontend Engineer Intern",
    company: "Elegant Vision",
    date: "21 December 2024 - 21 January 2025",
    desc: "Worked as a Frontend Engineer Intern at Elegant Vision, where I was responsible for developing and maintaining the user interface of web applications. I collaborated with designers to create responsive and user-friendly interfaces. My role involved writing clean and efficient code, debugging issues, and ensuring cross-browser compatibility. I gained hands-on experience in using modern frontend technologies and frameworks, which enhanced my skills in web development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Boostrap",
      "ReactJS",
      "GitHub",
    ],
    doc: frontend_certificate,
  },

];

export const education = [
  {
    id: 0, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvABRYX2AA1UH9iqPgU-heBr5IWK1HgI1wJw&s",
    school: "RMD Sinhgad School of Engineering, Warje, Pune",
    date: "Year: 2022 to 2026",
    desc: "I am currently pursuing a Bachelor's degree in Computer Engineering at RMD Sinhgad School of Engineering. I have completed 6 semesters. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering, (SPPU)",
  },
  {
    id: 1,
    img: "https://www.mahahsscboard.in/LogoBord.png",
    school: "Jay Bharat Higher Secondary School, Nilanga, Latur",
    date: "Year: 2020 to 2022",
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
    id: 2,
    title: "Weather App",
    description:
      "I have built Weather App using React JS, HTML, CSS. The app allows users to search for the weather of any city. It provides real-time weather information, including temperature, humidity, and weather conditions. Users can enter a city name and retrieve the current weather data.",
    image: weather,
    tags: ["React JS", "HTML", "CSS"],
    category: "machine learning",
    github: "https://github.com/kunal-patil-dev/Weather-App",
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
    github: "https://github.com/kunal-patil-dev/Amazon-Clone",
    webapp: "https://kunal-patil-dev.github.io/Amazon-Clone/",
  },
  {
    id: 0,
    title: "To Do Web App",
    description:
      "I have built To Do app using HTML, CSS, and JavaScript. The app allows users to create and delete tasks, helping them stay organized and manage their time effectively. Users can add new tasks and remove them when no longer needed. The app provides a simple and intuitive interface for efficient task management.",
    image: todo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/kunal-patil-dev/To-Do-List",
    webapp: "https://kunal-patil-dev.github.io/To-Do-List/",
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
    github: "https://github.com/kunal-patil-dev/Tic-Tac-Toe-Game",
    webapp: "https://kunal-patil-dev.github.io/Tic-Tac-Toe-Game/",
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
    github: "https://github.com/kunal-patil-dev/Coding_Monkeys_Boostrap",
    webapp: "https://kunal-patil-dev.github.io/Coding_Monkeys_Boostrap/",
  },

];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
