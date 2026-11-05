import webIcon from "@/assets/web.png";
import mobileIcon from "@/assets/mobile.png";
import backendIcon from "@/assets/backend.png";
import creatorIcon from "@/assets/creator.png";
import swiftIcon from "@/assets/tech/swift.png";
import htmlIcon from "@/assets/tech/html.png";
import cssIcon from "@/assets/tech/css.png";
import javascriptIcon from "@/assets/tech/javascript.png";
import reactIcon from "@/assets/tech/reactjs.png";
import azureIcon from "@/assets/tech/azure.png";
import csharpIcon from "@/assets/tech/csharp.png";
import pythonIcon from "@/assets/tech/python.png";
import nativeIcon from "@/assets/tech/native.png";
import javaIcon from "@/assets/tech/java.png";
import cIcon from "@/assets/tech/c.png";
import bashIcon from "@/assets/tech/bash.png";
import cplusplusIcon from "@/assets/tech/cplusplus.png";
import rustIcon from "@/assets/tech/rust.png";
import typescriptIcon from "@/assets/tech/typescript.svg";
import golangIcon from "@/assets/tech/golang.svg";
import appleLogo from "@/assets/company/apple.svg";
import twitchLogo from "@/assets/company/twitch.svg";
import workdayLogo from "@/assets/company/workday.png";
import tealsLogo from "@/assets/company/microsoft.svg";
import radLogo from "@/assets/company/rad_tile.png";
import tealsBadge from "@/assets/company/teals.png";
import benBadge from "@/assets/company/bl.png";
import rayBadge from "@/assets/company/rs.png";
import tourismBeatsProject from "@/assets/projects/tourism-beats.svg";
import nanorenderProject from "@/assets/projects/nanorender.svg";
import focusArProject from "@/assets/projects/focus-ar.svg";
import expensesProject from "@/assets/projects/expenses.svg";
import arHealthProject from "@/assets/projects/ar-health.svg";
import pomoduoProject from "@/assets/projects/pomoduo.svg";
import githubIcon from "@/assets/github.png";

export type NavigationLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  heading: string;
  highlight: string;
  subheading: string;
  description: string;
  meta: string[];
};

export type Service = {
  title: string;
  icon: string;
  summary: string;
};

export type Technology = {
  name: string;
  icon: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  icon: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  repo: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
};

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href: string;
};

export const navigation: NavigationLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const heroContent: HeroContent = {
  heading: "Ariel Tyson's",
  highlight: "Coding Universe",
  subheading: "Software Engineer · Mobile & Machine Learning",
  description:
    "I build reliable, human-centered products across Apple platforms and the web, pairing thoughtful UX with secure, scalable services.",
  meta: ["Vancouver, BC \u{1F1E8}\u{1F1E6}", "Swift \u{00B7} Python \u{00B7} C++", "UX/UI \u{00B7} AR \u{00B7} ML \u{00B7} AI"]
};

export const aboutDescription =
  "Hi, I’m Ariel, a software engineer who has worked at Apple, Amazon (Twitch), and Workday. I study Computer Science at Simon Fraser University, founded ColorStack SFU, and enjoy turning emerging tech into accessible experiences. Lately I’ve been building quantitative finance systems.";

export const services: Service[] = [
  { title: "AI Infrastructure", icon: webIcon, summary: "Distributed pipelines and efficient model inference built for production reliability." },
  { title: "Mobile Systems", icon: mobileIcon, summary: "Swift, SwiftUI, and UIKit architecture tuned for performance and accessibility." },
  { title: "Machine Learning", icon: backendIcon, summary: "PyTorch, LightGBM, and NLP models, from feature engineering through evaluation." },
  { title: "Quantitative Systems", icon: creatorIcon, summary: "Limit order books, tick data, and market making research in C++ and kdb+/q." }
];

export const technologies: Technology[] = [
  { name: "Swift", icon: swiftIcon },
  { name: "HTML 5", icon: htmlIcon },
  { name: "CSS 3", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Azure", icon: azureIcon },
  { name: "C#", icon: csharpIcon },
  { name: "Python", icon: pythonIcon },
  { name: "React Native", icon: nativeIcon },
  { name: "Java", icon: javaIcon },
  { name: "C", icon: cIcon },
  { name: "C++", icon: cplusplusIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Rust", icon: rustIcon },
  { name: "Go", icon: golangIcon },
  { name: "Bash", icon: bashIcon }
];

export const experiences: Experience[] = [
  {
    id: "apple",
    role: "Software Engineer Intern",
    company: "Apple",
    period: "May 2026 - August 2026",
    highlights: [
      "Engineered Swift and Objective-C improvements to assistive technology infrastructure on the VoiceOver accessibility team.",
      "Worked across decoupled macOS system services, where latency and reliability directly shape the experience of blind users."
    ],
    icon: appleLogo
  },
  {
    id: "twitch",
    role: "Software Engineer Intern",
    company: "Amazon (Twitch)",
    period: "May 2025 - August 2025",
    highlights: [
      "Enabled anonymous session state management and authentication, adding 250M+ daily minutes watched to the Twitch iOS app.",
      "Leveraged Swift Concurrency with async/await to handle asynchronous network requests from a GraphQL backend.",
      "Implemented discovery feeds powered by AI Personas, driving a 30% improvement in content engagement.",
      "Customized interactive UI for anonymous users, reducing onboarding friction and boosting retention by 20%.",
      "Ported Android Kotlin implementations to iOS and updated Go GraphQL schemas, improving recommendations by 10%."
    ],
    icon: twitchLogo
  },
  {
    id: "workday",
    role: "Mobile Engineering Intern (iOS)",
    company: "Workday",
    period: "May 2024 - December 2024",
    highlights: [
      "Delivered Objective-C and Swift functionality for developer productivity tools and frameworks in the Workday iOS app.",
      "Architected API designs with tokenized authentication, improving client-server protocol security.",
      "Refactored Swift classes to MVVM and SOLID principles, supporting dependency injection and the factory pattern.",
      "Implemented Signposts and Combine to track in-app navigation, increasing event observability by 75%.",
      "Enhanced usability and WCAG compliance using Apple's Accessibility Inspector and the UIKit Accessibility API."
    ],
    icon: workdayLogo
  },
  {
    id: "teals",
    role: "Teaching Assistant",
    company: "Microsoft TEALS",
    period: "January 2024 - August 2024",
    highlights: [
      "Conducted Python and Java tutorials, from debugging to functional application building with object-oriented design, with a 95% pass rate."
    ],
    icon: tealsLogo
  },
  {
    id: "rad",
    role: "DevOps / Full-Stack Software Developer Intern",
    company: "RAD Torque Systems",
    period: "September 2023 - April 2024",
    highlights: [
      "Developed a search feature with C# and .NET MAUI, consuming a RESTful API for multi-platform, real-time information access.",
      "Automated infrastructure workflows with a Jenkins CI/CD pipeline, reducing deployment cycles from 2 hours to 10 minutes.",
      "Hosted a web server with Flask and Docker to trigger stages of a custom DevOps flow."
    ],
    icon: radLogo
  }
];

export const projects: Project[] = [
  {
    id: "tourism-beats",
    name: "Tourism Beats",
    description:
      "A SwiftUI travel companion blending MapKit, WeatherKit, and SceneKit animations to spotlight local landmarks with live context.",
    image: tourismBeatsProject,
    repo: "https://github.com/arieltyson/Tourism-Beats",
    tags: [
      { name: "SwiftUI", color: "green-text-gradient" },
      { name: "MapKit", color: "blue-text-gradient" },
      { name: "WeatherKit", color: "pink-text-gradient" }
    ]
  },
  {
    id: "nanorender",
    name: "NanoRender Engine",
    description:
      "A lightweight rendering engine exploring ray marching, dynamic lighting, and GPU particle systems for interactive scenes.",
    image: nanorenderProject,
    repo: "https://github.com/arieltyson/NanoRender-Engine",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Graphics", color: "green-text-gradient" },
      { name: "Metal", color: "pink-text-gradient" }
    ]
  },
  {
    id: "focus-ar",
    name: "Focus AR",
    description:
      "Apple Swift Student Challenge winner built with ARKit, CoreML, and Speech to deliver clutter-aware guidance and Siri-enabled assistance.",
    image: focusArProject,
    repo: "https://github.com/arieltyson/FocusAR-Swift-Student-Challenge",
    tags: [
      { name: "ARKit", color: "blue-text-gradient" },
      { name: "CoreML", color: "green-text-gradient" },
      { name: "RealityKit", color: "pink-text-gradient" }
    ]
  },
  {
    id: "expenses",
    name: "Enterprise Expense Tracker",
    description:
      "An ASP.NET Core MVC portal backed by SQL Server and Syncfusion dashboards to illuminate enterprise spending in real time.",
    image: expensesProject,
    repo: "https://github.com/arieltyson/Enterprise-Expenses_Tracker",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "ASP.NET Core MVC", color: "green-text-gradient" },
      { name: "Syncfusion", color: "pink-text-gradient" }
    ]
  },
  {
    id: "ar-health",
    name: "AR Health",
    description:
      "An AR-powered wellness companion that layers heart-rate analytics and contextual overlays using SceneKit, CoreML, and SwiftUI.",
    image: arHealthProject,
    repo: "https://github.com/arieltyson/ARHealth",
    tags: [
      { name: "SceneKit", color: "blue-text-gradient" },
      { name: "CoreML", color: "green-text-gradient" },
      { name: "SwiftUI", color: "pink-text-gradient" }
    ]
  },
  {
    id: "pomoduo",
    name: "PomoDuo",
    description:
      "A synchronized Pomodoro timer for couples using Screen Time APIs, Firebase real-time sync, and Live Activities on Dynamic Island.",
    image: pomoduoProject,
    repo: "https://github.com/arieltyson/PomoDuo",
    tags: [
      { name: "SwiftUI", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Screen Time", color: "pink-text-gradient" }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "teals-class",
    quote:
      "Sir Tyson is very good at making complex topics easy to understand. He teaches with kindness and patience and never leaves any student behind.",
    name: "John Oliver Secondary School",
    title: "Grade 9 Computer Science Class",
    company: "Microsoft TEALS Program",
    avatar: tealsBadge
  },
  {
    id: "workday-mentor",
    quote:
      "Ariel is truly a hard worker and makes a genuine effort to connect with his co-workers. Teammates like him are the glue that hold our team together.",
    name: "Ben Longoria",
    title: "Senior Software Engineer",
    company: "Workday",
    avatar: benBadge
  },
  {
    id: "rad-manager",
    quote:
      "Mr. Tyson is a testament to how one can be a great team member by combining deep technical knowledge and unparalleled people skills!",
    name: "Ray Sewlochan",
    title: "Engineering Manager",
    company: "RAD Torque Systems",
    avatar: rayBadge
  }
];

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "ariel30190@hotmail.com",
    href: "mailto:ariel30190@hotmail.com"
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/arieltyson",
    href: "https://github.com/arieltyson"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/arieltyson",
    href: "https://www.linkedin.com/in/arieltyson"
  }
];

export const socialIcon = githubIcon;
