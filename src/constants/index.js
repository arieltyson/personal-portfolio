import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  CJSF,
  rad,
  //tutor,
  microsoft_teals,
  //am,
  puzzle,
  //rails,
  python,
  native,
  java,
  //cplusplus,
  expenses,
  csharp,
  c,
  bash,
  //processor,
  beats,
  azure,
  rs,
  bl,
  twitch,
  workday,
  teals,
  swift,
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
    title: "Cloud Architect",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Swift",
    icon: swift,
  },
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
    name: "azure",
    icon: azure,
  },
  // {
  //   name: "rust",
  //   icon: rust,
  // },
  {
    name: "csharp",
    icon: csharp,
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
  // {
  //   name: "c++",
  //   icon:  cplusplus,
  // },
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
    title: "Software Engineer Intern",
    company_name: "Twitch (Amazon)",
    icon: twitch,
    iconBg: "#383E56",
    date: "May 2025 - August 2025",
    points: [
      "Developed a modular architecture for the Twitch iOS app, enabling independent feature development and reducing build times by 30%.",
      "Optimized app startup time by refactoring initialization processes and lazy-loading non-critical components, resulting in a 25% improvement in launch speed.",
      "Introduced a scalable image caching mechanism to efficiently handle high-resolution assets, reducing memory usage and enhancing scrolling performance.",
      "Established a comprehensive suite of automated UI tests using XCTest, ensuring high-quality releases and reducing manual testing efforts by 50%.",
      "Integrated a custom logging framework to monitor app performance metrics, facilitating proactive issue resolution and performance optimization.",
      "Devised a robust hybrid caching system that combined in-memory and persistent storage strategies, ensuring rapid access to dynamic content even under variable network conditions.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Workday",
    icon: workday,
    iconBg: "#383E56",
    date: "May 2024 - December 2024",
    points: [
      "Delivered functionalities in Objective-C & Swift to improve developer productivity tools & frameworks for the Workday iOS application",
      "Architected API designs to allow access to protected APIs via tokenized authentication for improved client-server protocol security",
      "Analyzed costumer & stakeholder objectives to craft multi-functional requirements & translate them into practical engineering tasks",
      "Leveraged XCTest to create unit tests in XCode following Test-Driven Development to address bug fixes in macOS and iPadOS",
      "Enhanced app usability through Apple accessibility inspector & UIKit Accessibility API to ensure compliance with WCAG standards.",
      "Investigated the incorporation of iOS 18 features from WWDC 24 into the Workday application and presented in an internal keynote",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Microsoft TEALS",
    icon: microsoft_teals,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Conducted classes overseeing a full cycle education of Python from syntax, to debugging, to functional application building and object-oriented design skills with personalised teaching and consistent feedback",
      "Built a platform for 9th grade students of BC to enhance analytical, debugging, critical thinking, and problem-solving skills and work effectively, both in teams & independently, through structured tasks ",
      "Distributed learning opportunities to students with limited access due to factors such as geography",
      "Fostered a culture of diversity, equity, inclusion and belonging to students from different backgrounds",
    ],
  },
  {
    title: "Software Developer Co-op",
    company_name: "RAD Torque Systems",
    icon: rad,
    iconBg: "#383E56",
    date: "September 2023 - April 2024",
    points: [
      "Optimized execution speeds by 20% by porting a full stack calibration software in Visual Basic .NET to C# .NET using .NET MAUI",
      "Implemented Azure Active Directory Business to Consumer service as an authentication solution, reducing security risks by 80%",
      "Minimized data access speeds by 60% by transitioning a large-scale data storage system using Microsoft Excel to Microsoft SQL Server",
      "Developed a search feature in .NET MAUI which consumed a RESTful API to allow access to tool information on multiple device platforms",
      "Led agile sprint plannings and reviews, using UML diagrams for system design architecture and Microsoft Office for product feature demos",
      "Automated process workflows by building a CI/CD pipeline with Docker and Jenkins, leading to a 25% increase in deployment speeds",
      "Achieved full code coverage of the application by implementing comprehensive unit tests using xUnit for Services & View Models (MVVM)",
      "Utilized Webhooks & Adaptive Cards to display real-time notifications of Pipeline results in MS Teams for approval by the executive board",
      "Created a Python script to customize a JSON payload and utilize HTTP network methods to send a post request to an incoming webhook URL",
    ],
  },
  // {
  //   title: "Mobile App Developer",
  //   company_name: "CJSF 90.1 FM",
  //   icon: CJSF,
  //   iconBg: "#383E56",
  //   date: "May 2023 - August 2023",
  //   points: [
  //     "Deployed a fully functional mobile app using React Native, resulting in a 60% increase in user engagement on App Store & Play Store",
  //     "Added live streaming, on-demand playback, scheduling, and push notification features within the UI, gaining positive customer feedback",
  //     "Solved 100% of bug reports utilizing Jest to perform manual, automated and functional testing to ensure new features were compatible",
  //     "Implemented new updates, such as database access to archived radio shows, and maintained the app stability, resulting in 50% fewer crashes",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Sir Tyson is very good at making complex topics easy to understand. He teaches with kindness and patience and never leaves any student behind.",
    name: "John Oliver Secondary School",
    designation: "Grade 9 Computer Science Class",
    company: "Microsoft TEALS Program",
    image: teals,
  },
  {
    testimonial:
      "Ariel is truly a hard worker and makes a genuine effort to connect with his co-workers. Teammates like him are the glue that hold our team together.",
    name: "Ben Longoria",
    designation: "Senior Software Engineer",
    company: "Workday",
    image: bl,
  },
  {
    testimonial:
      "Mr. Tyson is a testament to how one can be a great team member by combining deep technical knowledge and unparalleled people skills!",
    name: "Ray Sewlochan",
    designation: "Engineering Manager",
    company: "Rad Torque Systems",
    image: rs,
  },
];

const projects = [
  
  {
    name: "Expense Tracker",
    description:
      "A Microsoft SQL Server integrated, enterprise application built with ASP.NET Core, demonstrating the Model-View-Controller architecture",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET Core MVC",
        color: "green-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "pink-text-gradient",
      },
    ],
    image: expenses,
    source_code_link: "https://github.com/arieltyson/Enterprise-Expenses_Tracker",
  },
//   {
//     name: "Contacts Application",
//     description:
//       "A multi-platform contacts application made from a single codebase, built using Microsoft's cutting edge .NET MAUI Framework.",
//     tags: [
//       {
//         name: "C#",
//         color: "blue-text-gradient",
//       },
//       {
//         name: ".NET MAUI",
//         color: "green-text-gradient",
//       },
//       {
//         name: "XAML",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: contacts,
//     source_code_link: "https://github.com/arieltyson/contacts_app",
//   },
{
  name: "Tourism Beats",
  description:
    "An iOS application that combines a plethora of Apple frameworks (MapKit, WeatherKit, TipKit, SceneKit, CoreLocation etc.) in an immersive SwiftUI interface !",
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
      name: "XCode",
      color: "pink-text-gradient",
    },
  ],
  image: beats,
  source_code_link: "https://github.com/arieltyson/Tourism-Beats",
},
  // {
  //   name: "Quote Generator",
  //   description:
  //     "A web-based platform that allows users to generate motivational quotes to tackle the everyday struggles of demotivation.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "RESTful API",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: quote,
  //   source_code_link: "https://github.com/arieltyson/RESTful-API-Quote-Generator",
  // },
  {
    name: "15 Puzzle Solver",
    description:
      "A comprehensive pathfinding algorithm which utilizes the A* algorithm with the Manhattan distance heuristic to solve the 15 Puzzle Problem.",
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
  // {
  //   name: "Rock Paper Scissors",
  //   description:
  //     "An interactive web platform that allows users to engage in an immersive gaming experience with an automated opponent.",
  //   tags: [
  //     {
  //       name: "JavaScript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rps,
  //   source_code_link: "https://github.com/arieltyson/Rock-Paper-Scissors",
  // },
  // {
  //   name: "Image Processor",
  //   description:
  //     "A Python application built with the purpose of manipulating the shape, colour and direction of images.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Editor",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Image Processing",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: processor,
  //   source_code_link: "https://github.com/arieltyson/ImageProcessor",
  // },
  // {
  //   name: "To-Do List",
  //   description:
  //     "A web-based platform that allows users to keep track of pending and completed tasks.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "TypeScript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: checklist,
  //   source_code_link: "https://github.com/arieltyson/To-Do-List",
  // },
//   {
//     name: "World Trivia",
//     description:
//       "A command line game that test users' knowledge of random facts about the World.",
//     tags: [
//       {
//         name: "Ruby",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Polymorphism",
//         color: "green-text-gradient",
//       },
//       {
//         name: "World Leaderboard",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: trivia,
//     source_code_link: "https://github.com/arieltyson/World-Trivia",
//   },
//   {
//     name: "Mortgage Calculator",
//     description:
//       "A constantly evolving mortgage calculator application built in Java.",
//     tags: [
//       {
//         name: "Java",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Version Control Master",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Command Line Pro",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: mortgage,
//     source_code_link: "https://github.com/arieltyson/mortgage-calculator",
//   },
//   {
//     name: "Event Manager",
//     description:
//       "A Ruby application that makes calls to the GoogleCivic API to manage client information from a database.",
//     tags: [
//       {
//         name: "Ruby",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "CSV",
//         color: "green-text-gradient",
//       },
//       {
//         name: "API",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: event,
//     source_code_link: "https://github.com/arieltyson/Event-Manager",
//   },
 ];

export { services, technologies, experiences, testimonials, projects };