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
  microsoft_teals,
  puzzle,
  python,
  native,
  java,
  expenses,
  csharp,
  c,
  bash,
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
  {
    name: "csharp",
    icon: csharp,
  },
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
];

export { services, technologies, experiences, testimonials, projects };