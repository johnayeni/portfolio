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
  summary: `As a Senior Software Engineer at Catawiki, the leading online marketplace for special objects, I leverage my expertise in front-end engineering, fintech, and logistics domains to deliver high-quality, user-friendly web applications.

I am passionate about creating innovative and impactful solutions that solve real-world problems and add value to users and businesses. I am always eager to learn new skills and technologies and to collaborate with diverse and talented teams. You can learn all about this through my [resume](https://www.johnayeni.com/resume.pdf)

Aside from typing away on my keyboard and writing code, I [write](https://limestack.substack.com/), take really [cool photos](https://unsplash.com/@johnayeni), [edit videos](https://www.youtube.com/@insidethetechosystem), and also play football and basketball. I kinda have a [design resume](https://johnayeni.notion.site/John-Ayeni-Design-portfolio-07925ee1819747f3bc96a04ca10613dd?pvs=74) too :)`,
  avatarUrl: "/me.png",
  skills: [
    "Fullstack Software development",
    "Writing",
    "Video Editing",
    "Photography",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: ScrollTextIcon, label: "Resume" },
    {
      href: "https://limestack.substack.com/",
      icon: NotebookIcon,
      label: "Blog",
    },
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
        url: "https://johnayeni.substack.com/",
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
        "Catawiki is the leading online marketplace to buy and sell special objects. Over 75,000 objects are offered in auction every week - each reviewed and selected by one of Catawiki’s hundreds of in-house experts specialised in Art, Design, Jewellery, Fashion, Classic Cars, Collectables and much more. Catawiki is headquartered in Amsterdam with over 750 employees across the world. ",
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
        "Over 60,000 businesses trust Paystack to help accept online and offline payments from anyone, anywhere in the world.",
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
        "Busha is one of Africa’s leading digital asset platforms. They are on a mission to onboard millions of Africans into the crypto economy and are building software and services that will enable it's users to experience the blockchain-enabled future of finance.",
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
        "Fieldinsight was a customer relationship management solution built for activities in the field to strengthen companies’ bond with their customers. It was a platform that works offline and online helping teams in the field — including, field-sales, customer service and logistics, all working together to ensure customer satisfaction",
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
        "Fieldinsight was a customer relationship management solution built for activities in the field to strengthen companies’ bond with their customers. It was a platform that works offline and online helping teams in the field — including, field-sales, customer service and logistics, all working together to ensure customer satisfaction",
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
        "Trivoda digital a full service digital agency helping organizations achieve their bottom-line through experiential digital marketing.",
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
  ],
  certifications: [
    {
      org: "Udacity",
      href: "https://drive.google.com/file/d/17Nrjv2SeBZhajZ0c7mvbw5ZSQAa7Csok/view",
      degree: "Nano degree - Mobile Web Specialist",
      logoUrl: "/udacity.svg",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Inside the Techosystem",
      href: "https://insidethetechosystem.com/",
      dates: "2019 - Present",
      active: true,
      description:
        "Inside the Techosystem is a tech podcast bringing you fun and insightful topics about tech and its ecosystem in Nigeria. I make all our media assets and content and serve as the gate keeper of the brand.",
      technologies: ["Davinci Resolve", "Figma", "Canva"],
      links: [
        {
          type: "Website",
          href: "https://insidethetechosystem.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://www.youtube.com/@insidethetechosystem",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/itt.png",
    },
    {
      title: "Naija Guru Spell Checker",
      href: "https://spellchecker.naija.guru/",
      dates: "2024 - Present",
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
      image: "/naija-guru.png",
    },
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
    {
      title: "Stalls",
      href: "https://www.faithegwuenu.design/",
      dates: "2019 - 2021",
      active: true,
      description:
        "Stalls was platform that aimed to simplifying operations for small businesses. I built a web-based order management dashboard for logistics and a mobile app for inventory, payment, and order management.",
      technologies: ["React Native", "Node.js"],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=-rKe9O4P-jU&ab_channel=AyeniJohn",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=tMdBstgKOhA&ab_channel=AyeniJohn",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/stalls.png",
    },
  ],
} as const;
