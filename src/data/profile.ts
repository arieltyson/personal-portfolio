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
import twitchLogo from "@/assets/company/twitch.png";
import workdayLogo from "@/assets/company/workday.png";
import tealsLogo from "@/assets/company/microsoft_teals.png";
import radLogo from "@/assets/company/rad.png";
import tealsBadge from "@/assets/company/teals.png";
import benBadge from "@/assets/company/bl.png";
import rayBadge from "@/assets/company/rs.png";
import expensesProject from "@/assets/expenses.png";
import beatsProject from "@/assets/beats.png";
import puzzleProject from "@/assets/puzzle.png";
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
  meta: ["San Francisco Bay Area \u{1F1FA}\u{1F1F8} / Vancouver, BC \u{1F1E8}\u{1F1E6}", "Swift \u{00B7} Python \u{00B7} C++", "UX/UI \u{00B7} AR \u{00B7} ML \u{00B7} AI"]
};

export const aboutDescription =
  "Hi, I’m Ariel — a software engineer intern at Amazon (Twitch) and former Workday iOS engineer. I study Computer Science at Simon Fraser University, lead ColorStack through community-driven events, and enjoy turning emerging tech into accessible experiences.";

export const services: Service[] = [
  { title: "Web Interfaces", icon: webIcon, summary: "Accessible React experiences with polished motion and responsive design." },
  { title: "iOS Experiences", icon: mobileIcon, summary: "SwiftUI, UIKit, and RealityKit apps tuned for performance and delight." },
  { title: "Cloud Systems", icon: backendIcon, summary: "Secure APIs, Azure pipelines, and observability-first architecture." },
  { title: "Team Leadership", icon: creatorIcon, summary: "Mentoring, curriculum design, and community-building through ColorStack." }
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
      "Working on the VoiceOver accessibility team to advance assistive technology across Apple platforms."
    ],
    icon: appleLogo
  },
  {
    id: "twitch",
    role: "Software Engineer Intern",
    company: "Twitch (Amazon)",
    period: "May 2025 - August 2025",
    highlights: [
      "Enabled anonymous session management and authentication powering 250M+ daily minutes on Twitch iOS.",
      "Optimized async networking with Swift Concurrency, improving load performance for logged-out viewers.",
      "Rolled out XCTest suites covering critical login and guest mode flows to safeguard global releases.",
      "Ported Android GraphQL features to Swift/UIKit and refreshed Lottie animations for authentication surfaces."
    ],
    icon: twitchLogo
  },
  {
    id: "workday",
    role: "Software Engineer Intern",
    company: "Workday",
    period: "May 2024 - December 2024",
    highlights: [
      "Delivered Objective-C and Swift features that streamline developer productivity tooling inside the Workday iOS app.",
      "Hardened client-server security with tokenized authentication and audited protected API usage.",
      "Shipped XCTest-driven UI flows to improve login resiliency across macOS and iPadOS clients.",
      "Partnered with accessibility specialists to raise WCAG compliance using UIKit Accessibility APIs."
    ],
    icon: workdayLogo
  },
  {
    id: "teals",
    role: "Teaching Assistant",
    company: "Microsoft TEALS",
    period: "January 2024 - Present",
    highlights: [
      "Teach Grade 9 students core Python, debugging practices, and project-based problem solving.",
      "Design inclusive assignments that develop computational thinking in diverse classrooms.",
      "Support remote learners by adapting lessons for limited access to technology and resources."
    ],
    icon: tealsLogo
  },
  {
    id: "rad",
    role: "Software Developer Co-op",
    company: "RAD Torque Systems",
    period: "September 2023 - April 2024",
    highlights: [
      "Ported torque calibration tools to .NET MAUI, trimming execution time by 20% across devices.",
      "Automated CI/CD pipelines with Docker and Jenkins, reducing deployment cycles from hours to minutes.",
      "Implemented Azure AD B2C authentication and migrated Excel workflows to SQL Server for secure, fast access."
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
    image: beatsProject,
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
    image: puzzleProject,
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
    image: expensesProject,
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
    image: beatsProject,
    repo: "https://github.com/arieltyson/ARHealth",
    tags: [
      { name: "SceneKit", color: "blue-text-gradient" },
      { name: "CoreML", color: "green-text-gradient" },
      { name: "SwiftUI", color: "pink-text-gradient" }
    ]
  },
  {
    id: "neural-network",
    name: "Neural Network",
    description:
      "Custom neural network experiments that explore gradient descent, activation tuning, and dataset visualization from scratch.",
    image: puzzleProject,
    repo: "https://github.com/arieltyson/neural-network",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "AI", color: "green-text-gradient" },
      { name: "Visualization", color: "pink-text-gradient" }
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
    value: "ariel.tyson@icloud.com",
    href: "mailto:ariel.tyson@icloud.com"
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
