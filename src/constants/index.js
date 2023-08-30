import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    git,
    CJSF,
    tutor,
    mt,
    am,
    bi,
    puzzle,
    quote,
    rps,
    //rust,
    ruby,
   //rails,
    python,
    native,
    java,
    cplusplus,
    c,
    bash,
    ios1,
    //ios2,
    //ios3,
    list,
    fish,
    mortgage,
    event,
    trivia,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "rust",
    //   icon: rust,
    // },
    {
      name: "ruby",
      icon: ruby,
    },
    // {
    //   name: "rails",
    //   icon: rails,
    // },
    {
      name: "python",
      icon: python,
    },
    {
      name: "native",
      icon: native,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "c++",
      icon:  cplusplus,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "bash",
      icon: bash,
    },
  ];
  
  const experiences = [
    {
      title: "Coding Instructor",
      company_name: "Jennylene's Coding Tutoring",
      icon: tutor,
      iconBg: "#383E56",
      date: "January 2021 - August 2022",
      points: [
        "Developed a fun and interactive teaching regime to help students learn the basics of coding.",
        "Assisted students in completing assignments and understanding concepts that they struggled with in school.",
        "Tailored teaching techniques to each student's strengths and weaknesses to promote flexible learning and maximize potential for improvement.",
        "Imparted knowledge on fundamental programming topics and syntax in Python, HTML and JavaScript .",
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "CJSF 90.1 FM",
      icon: CJSF,
      iconBg: "#383E56",
      date: "May 2023 - present",
      points: [
        "Developed and maintained mobile applications using React Native and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive designs and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    // MANIFESTING MY DREAM CAREER
    // {
    //   title: "Game Developer",
    //   company_name: "Electronic Arts Inc.",
    //   icon: EA,
    //   iconBg: "#E6DEDD",
    //   date: "January 2026 - December 2028",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Rust Developer",
    //   company_name: "Amazon",
    //   icon: amazon,
    //   iconBg: "#383E56",
    //   date: "Jan 2029 - Dec 2030",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Senior Software Developer",
    //   company_name: "Apple",
    //   icon: apple,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2031 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Never before have I encountered an entry-level developer with such sheer motivation and drive to reach the top.",
      name: "Magnus Thyvold",
      designation: "Station Manager",
      company: "CJSF 90.1 FM",
      image: mt,
    },
    {
      testimonial:
        "Ariel is truly a hard worker and makes a genuine effort to connect with his co-workers. Employees like him are the glue that hold our team together.",
      name: "Abdullah Mohammedkamal",
      designation: "Assistant Store Manager",
      company: "The Home Depot Canada",
      image: am,
    },
    {
      testimonial:
        "A resilient human being who never gives up and always has a creative solution to unique problems!",
      name: "Brian Irish",
      designation: "Store Manager",
      company: "Roots Canada",
      image: bi,
    },
  ];
  
  const projects = [
    {
      name: "CJSF Radio Mobile App", 
      description:
        "A mobile application compatible with both IOS and Android, built to act as an easy to use connector for the CJSF 90.1 FM Radio Station.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Xcode",
          color: "green-text-gradient",
        },
        {
          name: "Android Studio",
          color: "pink-text-gradient",
        },
      ],
      image: ios1,
      source_code_link: "https://github.com/arieltyson/CJSF-Radio-App",
    },
    {
      name: "Quote Generator",
      description:
        "A web-based platform that allows users to generate motivational quotes to tackle the everyday struggles of demotivation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RESTful API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: quote,
      source_code_link: "https://github.com/arieltyson/RESTful-API-Quote-Generator",
    },
    {
      name: "15 Puzzle Solver",
      description:
        "A comprehensive pathfining algorithm which utilizes the A* algorithm with the Manhattan distance heuristic to solve the 15 Puzzle Problem.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Artificial Intelligence",
          color: "green-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: puzzle,
      source_code_link: "https://github.com/arieltyson/FifteenPuzzleSolver/tree/main",
    },
    {
      name: "Rock Paper Scissors",
      description:
        "An interactive web platform that allows users to engage in an immersive gaming experience with an automated opponent.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: rps,
      source_code_link: "https://github.com/arieltyson/Rock-Paper-Scissors",
    },
    {
      name: "Image Processor",
      description:
        "A Python application built with the purpose of manipulating the shape, colour and direction of images.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Editor",
          color: "green-text-gradient",
        },
        {
          name: "Image Processing",
          color: "pink-text-gradient",
        },
      ],
      image: fish,
      source_code_link: "https://github.com/arieltyson/ImageProcessor",
    },
    {
      name: "To-Do List",
      description:
        "A web-based platform that allows users to keep track of pending and completed tasks.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: list,
      source_code_link: "https://github.com/arieltyson/To-Do-List",
    },
    {
      name: "World Trivia",
      description:
        "A command line game that test users' knowledge of random facts about the World.",
      tags: [
        {
          name: "Ruby",
          color: "blue-text-gradient",
        },
        {
          name: "Polymorphism",
          color: "green-text-gradient",
        },
        {
          name: "World Leaderboard",
          color: "pink-text-gradient",
        },
      ],
      image: trivia,
      source_code_link: "https://github.com/arieltyson/World-Trivia",
    },
    {
      name: "Mortgage Calculator",
      description:
        "A constantly evolving mortgage calculator application built in Java.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Version Control Master",
          color: "green-text-gradient",
        },
        {
          name: "Command Line Pro",
          color: "pink-text-gradient",
        },
      ],
      image: mortgage,
      source_code_link: "https://github.com/arieltyson/mortgage-calculator",
    },
    {
      name: "Event Manager",
      description:
        "A Ruby application that makes calls to the GoogleCivic API to manage client information from a database.",
      tags: [
        {
          name: "Ruby",
          color: "blue-text-gradient",
        },
        {
          name: "CSV",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: event,
      source_code_link: "https://github.com/arieltyson/Event-Manager",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };