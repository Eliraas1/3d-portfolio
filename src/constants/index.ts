import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  sellme,
  here,
  nextjs,
  nestjs,
  reactNative,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React Native",
    icon: reactNative,
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
    name: "Nest JS",
    icon: nestjs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Sellme",
    icon: sellme,
    iconBg: "#AD3FF0",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native, Redux, and Redux-Saga for efficient state management and enhanced user experiences.",
      "Collaborated closely with a UI/UX designer to ensure a seamless and visually appealing interface.",
      "Utilized Reanimated, TypeScript, Redux, and RTK Query to enhance the app's functionality and user experience.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "HERE: ADHD assist",
    icon: here,
    iconBg: "#F2F1ED",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed a React Native application, designed to help people with ADHD stay organized and on top of their daily tasks.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed server-side applications, RESTful APIs, and data models using Node.js And MongoDB",
      "Collaborated closely with a UI/UX designer to ensure a seamless and visually appealing interface",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Omer Attias",
    designation: "Team Leader",
    company: "Sellme",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Gil Sasi",
    designation: "Software Engineer Student",
    company: "SCE",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Zohar",
    designation: "CTO",
    company: "Sellme",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HERE: ADHD assist",
    description:
      "HERE is a task management app designed to help people with ADD/ADHD stay organized and on top of their daily tasks.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "react reanimated",
        color: "blue-text-gradient",
      },
      {
        name: "rtk and rtk query",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://camo.githubusercontent.com/e51ca463abc0cfbd88291efdf3b2b651378194f2e14364862ae543eb4b695b49/68747470733a2f2f692e6962622e636f2f6e633346534c442f362e706e67",
    source_code_link: "https://github.com/omeratt/HereApp-FrontEnd",
    demo: "https://www.youtube.com/watch?v=7yljqBFDWtA",
    store: "https://play.google.com/store/apps/details?id=com.fronend",
  },
];

export { services, technologies, experiences, testimonials, projects };
