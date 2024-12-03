import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, ScrollTextIcon } from "lucide-react";

export const DATA = {
  name: "John Ayeni",
  initials: "JA",
  url: "https://johnayeni.com",
  location: "Amsterdam, Netherlands",
  locationLink: "https://www.google.com/maps/place/amsterdam",
  description:
    "Software Engineer with a dream of changing the world through the use of computers.",
  summary: `I got into computer science because I wanted to learn how to make games. I didn’t write my first line of code until college, but that moment completely changed my life.
  I’ve spent most of my career as a Frontend developer, but along the way, I decided to branch out and become a Fullstack engineer to enable me in crafting more comprehensive and impactful solutions.
    `,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Ruby",
    "Go",
    "Rails",
    "MySQL",
    "MongoDB",
    "Angular",
    "Docker",
    "Vue.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: ScrollTextIcon, label: "Resume" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "johnayeni10.aj@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/johnayeni",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-ayeni-ifeoluwapo",
        icon: Icons.linkedin,

        navbar: true,
      },
      Substack: {
        name: "Substack",
        url: "https://limestack.substack.com/",
        icon: Icons.substack,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:johnayeni10.aj@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Catawiki",
      href: "https://www.catawiki.com/en/",
      badges: [],
      location: "Amsterdam",
      title: "Senior Software Engineer",
      logoUrl: "/catawiki.svg",
      start: "November 2021",
      end: "Present",
      description:
        "Developed a web tool that reduced customer service ticket backlogs by 60% in 3 months and scaled the solution to mobile apps using web views. Designed an internal tool to track Web Vitals, improving visibility into performance metrics. Led the frontend development for cross-border transactions, enabling 16,000 sellers to provide customs information. Boosted mobile web messaging accessibility by 30% and increased shipping label success rates by 7.7% through A/B testing. Contributed to developer productivity by managing runtime utility libraries and spearheading the migration of 40% of web pages to Next.js for faster performance",
    },
    {
      company: "Paystack (Stripe company)",
      href: "https://paystack.com/",
      badges: [],
      location: "Lagos",
      title: "Front-End Engineer",
      start: "May 2021",
      end: "Oct 2021",
      logoUrl: "/paystack.png",
      description:
        "Increased customer authorization rates in 60+ countries by integrating Apple Pay, Amex, and Pay Attitude into the checkout system. Improved developer experience with new APIs for smoother third-party integration.",
    },
    {
      company: "Busha",
      href: "https://www.busha.co/",
      badges: [],
      location: "Lagos",
      title: "Front-End Engineer",
      start: "Oct 2019",
      end: "Apr 2021",
      logoUrl: "/busha.svg",
      description:
        "Designed the architecture and implemented the custodial trading web client for customers to buy and sell cryptocurrencies. The platform processed over 200 million dollars in the year 2020",
    },
    {
      company: "Stallsone",
      badges: [],
      href: null,
      location: "Remote",
      title: "Cofounder",
      start: "June 2019",
      end: "Nov 2021",
      logoUrl: "/stalls.svg",
      description:
        "Built a web-based order management dashboard for logistics and a mobile app for inventory, payment, and order management, simplifying operations for small businesses.",
    },
    {
      company: "Fieldinsight",
      badges: [],
      href: "https://fieldinsight.co/",
      location: "Lagos",
      title: "Software Engineer",
      start: "Sep 2018",
      end: "Jul 2019",
      logoUrl: "/field-insight.svg",
      description:
        "Added offline support for mobile platforms to ensure functionality without network access. Improved dashboard performance from 76% to 97% with frontend refactoring.",
    },
    {
      company: "Fieldinsight",
      href: "https://fieldinsight.co/",
      badges: [],
      location: "Lagos",
      title: "Software Engineer Intern",
      start: "Apr 2018",
      end: "Jul 2018",
      logoUrl: "/field-insight.svg",
      description:
        "Refactored codebases to ES6 standards, enhancing maintainability. Fixed critical bugs, increasing platform stability and user satisfaction.",
    },
    {
      company: "Trivoda Digital",
      href: "https://www.linkedin.com/company/trivoda/about/",
      badges: [],
      location: "Lagos",
      logoUrl: "",
      title: "Software Engineer Intern",
      start: "Jan 2018",
      end: "Mar 2018",
      description:
        "Built a progressive web app integrating social media (Facebook, Twitter, Instagram), enabling influencers to earn by promoting client products.",
    },
  ],
  education: [
    {
      school: "Covenant University",
      href: "https://covenantuniversity.edu.ng",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/covenant-university.png",
      start: "2015",
      end: "2019",
    },
    {
      school: "Udacity",
      href: "https://www.udacity.com/",
      degree: "Nano degree - Mobile Web Specialist",
      logoUrl: "/udacity.svg",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Grey finance (YC W'22) - Freelance",
      href: "https://grey.co/",
      dates: "March 2020 - March 2021",
      active: true,
      description:
        "Grey provides US, EU, and UK accounts for remote workers in emerging markets. For the first time, western companies feel comfortable recruiting skilled workers from anywhere and Grey is making it easy for these workers to receive their salary, save in foreign currency, convert to local currency and spend.",
      technologies: ["React", "Typescript", "Redux"],
      links: [
        {
          type: "Website",
          href: "https://grey.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/grey-bg.svg",
    },
    {
      title: "Naija Guru Spell Checker",
      href: "https://spellchecker.naija.guru/",
      dates: "2024",
      active: true,
      description:
        "Naija Spell Checker is an Open Source proofreading software for Pidgin English",
      technologies: ["React", "Typescript", "Tailwind", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://spellchecker.naija.guru/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Naija-Guru/naija-spell-checker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/naija-guru-bg.png",
    },
    {
      title: "Faith Egwuenu Portfolio",
      href: "https://www.faithegwuenu.design/",
      dates: "2024",
      active: true,
      description: "Portfolio website for Faith Egwuenu",
      technologies: ["React", "Typescript", "Tailwind", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://www.faithegwuenu.design/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/faith-egwuenu-bg.png",
    },
  ],
} as const;
