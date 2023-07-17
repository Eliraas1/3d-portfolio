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
  firebase,
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
      "Eliran is one of the most ambitious and motivated developers I have worked with. Professional at the highest level, he is an asset to any team.",
    name: "Omer Attias",
    designation: "Team Leader",
    company: "Sellme",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEIpLZuKY3vjw/profile-displayphoto-shrink_400_400/0/1643539380924?e=1695254400&v=beta&t=nP2QaR4QeaXiwlNrpIv3-cIVYhuatsvE85JQywDQyr4",
  },
  {
    testimonial:
      "Eliran effectively solved complex problems, understanding product requirements and implementing well-engineered solutions. He was also a valuable team player.",
    name: "Micha Isaev",
    designation: "Co-Founder & CEO",
    company: "Sellme",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGcNEdJ6UePvw/profile-displayphoto-shrink_400_400/0/1666044653898?e=1695254400&v=beta&t=6Ughm2PiNsZ2YEME3KdQPbjGEX8nA8S3QHq3t2ekq50",
  },
  {
    testimonial:
      "Eliran joined our Company as a junior engineer and proved that he's able to match the expectations and exceed them with determination and professionalism.",
    name: "Zohar Azriel",
    designation: "Co-Founder & CEO & CTO",
    company: "Sellme",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEx8I8napyohQ/profile-displayphoto-shrink_400_400/0/1628169005595?e=1695254400&v=beta&t=9GgV80pxpEp-kdyyodIeoBfH0m3kATKRDQffAGTylUg",
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
        color: "text-[#8ab4f8]",
        icon: typescript,
      },
      {
        name: "react native",
        color: "text-[#61dafb]",
        icon: reactNative,
      },
      {
        name: "redux toolkit, rtk query",
        color: "text-[#ba8fff]",
        icon: redux,
      },
      {
        name: "node.js",
        color: "green-text-gradient",
        icon: nodejs,
      },
      {
        name: "mongodb",
        color: "text-[#00ED64]",
        icon: mongodb,
      },
      {
        name: "firebase",
        color: "text-[#00ED64]",
        icon: firebase,
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
