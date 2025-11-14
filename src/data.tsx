import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import ceenditLaptopImg from "../public/assets/ceendit-laptop.png";
import ceenditPhoneImg from "../public/assets/ceendit-phone.png";
import dailyTaskLaptopImg from "../public/assets/daily-task-laptop.png";
import dailyTaskWatchImg from "../public/assets/daily-task-watch.png";
import kaddIpadImg from "../public/assets/kadd-ipad.png";
import kaddPhoneImg from "../public/assets/kadd-phone.png";
import prytoIpadImg from "../public/assets/pryto-ipad.png";
import prytoPhoneImg from "../public/assets/pryto-phone.png";
import noteBoxPhoneImg from "../public/assets/noteboxMobile.png";
import noteBoxDesktopImg from "../public/assets/noteboxDesktop.png";
import ratesReaderDesktopImg from "../public/assets/ratesReaderDesktop.png";
import ratesReaderPhoneImg from "../public/assets/ratesReaderMobile.png";
import lifelaneDesktopImg from "../public/assets/lifelanenetworkdesktop.png";
import lifelanePhoneImg from "../public/assets/lifelanenetworkmobile.png";
import healthVizReminderAndLogs from "../public/assets/healthviz-reminder-log.jpg";
import healthVizHome from "../public/assets/healthviz-home.png";
import glowdropMix from "../public/assets/glowdropMix.jpg";
import glowdropHome from "../public/assets/glowdropHome.png";
import homnicsDesktop from "../public/assets/homnics-desktop.png";
import homnicsMobile from "../public/assets/homnics-mobile.png";
import balanceeDesktop from "../public/assets/balancee-desktop.png";
import balanceeMobile from "../public/assets/balancee-mobile.png";
import udemyJavascriptCert from "../public/assets/udemy-javascript-course.jpg";
import udemyFlutterCert from "../public/assets/udemy-flutter-certificate.jpg";
import courseraMetaReactBasics from "../public/assets/coursera-introduction-to-frontend.jpeg";
import courseraMetaIntroToFrontend from "../public/assets/coursera-reactbasics-meta.jpeg";
import courseraMetaAdvancedReact from "../public/assets/courseraMetaAdvancedReact.png";
import techSkillsHackFeature from "../public/assets/techskills-hack-feature.png";
import womenDayFeature from "../public/assets/womenDayFeature.png";
import freecodecampPublication from "../public/assets/freecodecamp-unstyleduicomponents.png";
import linuxOwaspSecurityCert from "../public/assets/linuxOwaspSecurityCert.jpeg";
import ciscoIntroductionToCybersecurity from "../public/assets/ciscoIntroductionToCybersecurity.png";
import courseraGoogleFoundationsOfCybersecurity from "../public/assets/courseraGoogleFoundationsOfCybersecurity.png";

export interface ListItem {
  text: string;
  link: string;
}

export const profileListItems: ListItem[] = [
  { text: "About", link: "/about" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Certifications", link: "/certifications" },
  {
    text: "CV",
    link: "https://drive.google.com/drive/folders/1mtB7QT5DY_l9n7blL6txMKN9G5mg4Iw_",
  },
  { text: "Blog", link: "/blog" },
  { text: "Features", link: "/features" },
  { text: "Publications", link: "/publications" },
];

export interface IconItem {
  icon: React.ReactElement;
  link: string;
  text: string;
}

export const iconData: IconItem[] = [
  {
    icon: <AiFillGithub />,
    link: "https://github.com/kodervine",
    text: "Github",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/chinenye-anikwenze/",
    text: "Linkedin",
  },
  {
    icon: <MdOutlineMarkEmailUnread />,
    link: "mailto:anikwenzekelly@gmail.com",
    text: "Email",
  },
  {
    icon: <SiHashnode />,
    link: "https://hashnode.com/@kodervine",
    text: "Hashnode",
  },
  {
    icon: <AiOutlineMedium />,
    link: "https://kodervine.medium.com/",
    text: "Medium",
  },

  {
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/kodervine",
    text: "Twitter",
  },
];

export interface PortfolioInterface {
  title: string;
  description: string;
  link: string;
  technologiesUsed: string[];
  githubIcon: React.ReactElement;
  githubLink: string;
  image1?: string;
  image2?: string;
}

export const portfolioData: PortfolioInterface[] = [
  {
    title: "Homnics",
    description:
      "A telemedicine platform that allows patients to connect with medical professionals, book appointments, get prescriptions, share records.",
    link: "https://portal.homnics.com/register",
    githubIcon: <AiFillGithub />,
    githubLink: "",
    technologiesUsed: ["Typescript", "React", "Mantine UI"],
    image1: homnicsDesktop,
    image2: homnicsMobile,
  },
  {
    title: "Balanceè",
    description:
      "A platform connects repair stations with customers, providing reliable solutions for automotive needs.",
    link: "https://www.balancee.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "",
    technologiesUsed: ["Flutter", "Dart", "Javascript", "React"],
    image1: balanceeDesktop,
    image2: balanceeMobile,
  },
  {
    title: "Healthviz - Health management tool",
    description:
      "A health management tool featuring a customizable reminder system, pain level logger, and habit tracker. Users can easily set reminders for daily, or custom schedules, log their pain levels and habits, and track progress with built-in analytics.",
    link: "",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/healthviz",
    technologiesUsed: ["Flutter", "Dart"],
    image1: healthVizReminderAndLogs,
    image2: healthVizHome,
  },
  {
    title: "Glowdrop - Beauty service and product app",
    description:
      "Glowdrop is your one-stop beauty service and product app, built to provide a streamlined experience in booking services, discovering products, and maintaining a beauty routine",
    link: "",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/glowdrop",
    technologiesUsed: ["React native", "Typescript"],
    image1: glowdropMix,
    image2: glowdropHome,
  },
  {
    title: "Ceendit - an invoice generator",
    description:
      "Say goodbye to manual invoicing and hello to effortless payment processing. Create professional invoices in pdf format for your clients in less than a minute",
    link: "https://ceendit.netlify.app",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/ceendit-react",
    technologiesUsed: ["React", "Javascript", "Chakra UI", "Firebase"],
    image1: ceenditLaptopImg,
    image2: ceenditPhoneImg,
  },
  {
    title: "Lifelane Films Network",
    description: "Creating health instructional films, one story at a time.",
    link: "https://lifelanefilmsnetwork.com/",
    githubIcon: <AiFillGithub />,
    githubLink: "",
    technologiesUsed: ["React", "Javascript", "Framer Motion"],
    image1: lifelaneDesktopImg,
    image2: lifelanePhoneImg,
  },
  {
    title: "Ratesreader - News update and Data visualization dashboard",
    description:
      "The currency data visualization dashboard is a tool that helps users stay updated on the latest currency exchange rates and market news. The dashboard displays real-time exchange rates for different currencies, along with historical price data and news updates.",
    link: "https://ratesreader.brimble.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/ratesreader",
    technologiesUsed: ["React", "Tailwind", "Typescript", "Context API"],
    image1: ratesReaderDesktopImg,
    image2: ratesReaderPhoneImg,
  },
  {
    title: "Pryto - Live crypto currency converter",
    description:
      "This is a live crypto currency converter to naira. Created a multi-page app that updates select crypto currency price in real time with css3, Tailwind css, and vanilla Javascript. The data is powered by the Coingecko APIs to gain access to the current crypto currencies market values.",
    link: "https://kodervine.github.io/pryto/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/pryto",
    technologiesUsed: ["Javascript", "Tailwind", "Coingecko API"],
    image1: prytoIpadImg,
    image2: prytoPhoneImg,
  },
  {
    title: "Notebox - Personal notetaking application",
    description:
      "This web app allows users to easily create, manage, and categorize notes with a user-friendly interface, while also offering features like sorting, searching by tags, and responsiveness for both desktop and mobile devices.",
    link: "https://notebox.brimble.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/notebox",
    technologiesUsed: ["Javascript", "Tailwind"],
    image1: noteBoxDesktopImg,
    image2: noteBoxPhoneImg,
  },
  {
    title: "Kadd - Customizable business card creator",
    description:
      "This is a customizable business card creator. Created with HTML, CSS, and Javascript.  Create a customizable business card in just a few clicks. Can change to the theme color of your choice, and save to a png file in seconds.",
    link: "https://kadd.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/kadd-business-card-creator",
    technologiesUsed: ["Javascript", "CSS", "HTML"],
    image1: kaddPhoneImg,
    image2: kaddIpadImg,
  },
  {
    title: "My Tasks - Daily schedule tools",
    description:
      "This is a simple daily schedule programme. Created with HTML, Tailwind CSS, and Javascript.Have an organised day by creating simple daily-task reminders. Made with User friendly interface and easy navigation in mind.",
    link: "https://my-dailytask.netlify.app/",
    githubIcon: <AiFillGithub />,
    githubLink: "https://github.com/kodervine/my-daily-task",
    technologiesUsed: ["Javascript", "HTML", "Bootstrap"],
    image1: dailyTaskLaptopImg,
    image2: dailyTaskWatchImg,
  },
];

export const certificationsData = [
  {
    year: "2025",
    certifications: [
      {
        date: "November, 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/YDY4HE4159OC",
        image: courseraGoogleFoundationsOfCybersecurity,
        organisation: "Google",
        title: "Foundations of Cybersecurity",
        description:
          "Recognize core skills and knowledge needed to become a cybersecurity analyst. Identify how security attacks impact business operations. Explain security ethics. Identify common tools used by cybersecurity analysts. ",
      },
      {
        date: "August, 2025",
        link: "https://www.credly.com/earner/earned/badge/20fb1b64-cff0-4334-93d9-8871bda38671",
        image: linuxOwaspSecurityCert,
        organisation: "Linux Foundation",
        title: "SKF100: Understanding the OWASP® Top 10 Security Threats",
        description:
          "The recipient understands key concepts and best practices in web application security. They are proficient in identifying/addressing common vulnerabilities. ",
      },
      {
        date: "July, 2025",
        link: "https://www.credly.com/earner/earned/badge/781d9911-2453-449e-ad2a-996262229170",
        image: ciscoIntroductionToCybersecurity,
        organisation: "Cisco Networking Academy",
        title: "Introduction to Cybersecurity",
        description:
          "A recipient of this credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession",
      },
    ],
  },
  {
    year: "2024",
    certifications: [
      {
        date: "May, 2024",
        link: "https://www.udemy.com/certificate/UC-e76870f4-dd35-483b-b990-54d136bd97ae/",
        image: udemyFlutterCert,
        organisation: "Udemy",
        title: "Flutter & Dart - The Complete Guide [2024 Edition]",
        description:
          "A Complete Guide to the Flutter SDK &amp; Flutter Framework for building native iOS and Android apps",
      },
    ],
  },
  {
    year: "2023",
    certifications: [
      {
        date: "April, 2023",
        link: "https://www.coursera.org/account/accomplishments/verify/9DVVQR5SLM9A",
        image: courseraMetaAdvancedReact,
        organisation: "Meta",
        title: "Advanced React",
        description:
          "This course teaches how to create robust and reusable components using advanced techniques and common behavior patterns. Covers interacting with remote servers and fetching/posting data via APIs",
      },
      {
        date: "February, 2023",
        link: "https://www.coursera.org/account/accomplishments/verify/L4F72SP5WTT6",
        image: courseraMetaReactBasics,
        organisation: "Meta",
        title: "React basics",
        description:
          "Organize React projects to create more scalable and maintainable websites and apps. Use props to pass data between components. Create dynamic and interactive web pages and apps.",
      },
      {
        date: "January, 2023",
        link: "https://www.coursera.org/account/accomplishments/verify/7FX52L2P3K79",
        image: courseraMetaIntroToFrontend,
        organisation: "Meta",
        title: "Introduction to Frontend development",
        description:
          "Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
      },
    ],
  },
  {
    year: "2022",
    certifications: [
      {
        date: "October, 2022",
        link: "https://www.udemy.com/certificate/UC-7e265b5b-9364-4456-af4e-5d512c7810e9/",
        image: udemyJavascriptCert,
        organisation: "Udemy",
        title: "Modern Javascrpt from the beginning",
        description:
          "Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
      },
    ],
  },
];

export const featureData = [
  {
    dateAdded: "8 March 2023",
    link: "https://kodervine.hashnode.dev/from-history-academia-to-programming-my-180-journey-to-software-development",
    title: "From History Academia to Software development",
    organisation: "Empower Her Community",
    coverImg: womenDayFeature,
  },
  {
    dateAdded: "8 March 2023",
    link: "https://techskillshack.com/how-tech-skills-hack-helped-me-land-my-first-tech-job/",
    title: "How I landed my first tech job",
    organisation: "Tech skills hack",
    coverImg: techSkillsHackFeature,
  },
];

export const publicationsData = [
  {
    dateAdded: "27th August, 2023",
    link: "https://www.freecodecamp.org/news/unstyled-ui-components-for-front-end-developers/",
    title:
      "How to Use Un-Styled UI Components – Guide for Front-End Developers",
    organisation: "Freecodecamp",
    coverImg: freecodecampPublication,
  },
];
