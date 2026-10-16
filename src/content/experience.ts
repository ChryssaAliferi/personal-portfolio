// Work history shown on /cv. Dates are "YYYY-MM"; `end: null` means the role is ongoing.

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string | null;
  description: string[];
  current: boolean;
};

export const experiences: Experience[] = [
  {
    company: "RudderStack",
    role: "Product Manager",
    type: "Full-time",
    location: "Remote",
    start: "2026-02",
    end: null,
    description: [
      "Defining the product vision and strategy across SDKs, Integrations, and Warehouses.",
      "Driving closer alignment between customer needs, engineering, and business impact.",
      "Enabling more flexible, scalable, and intelligent data flows.",
      "Empowering developers with better tooling and experiences.",
    ],
    current: true,
  },
  {
    company: "RudderStack",
    role: "Engineering Manager",
    type: "Full-time",
    location: "Remote",
    start: "2023-09",
    end: "2026-02",
    description: [
      "Ownership of 15+ RudderStack SDKs from development to post-production.",
      "Managing the team of developers and working with them to deliver high-quality products.",
      "Mentoring, supporting, and conducting regular 1:1s, providing architectural and technical guidance.",
      "Set up and led mobile end-to-end testing framework for the engineering organisation.",
      "Defining and building a roadmap by collaborating with the product managers.",
    ],
    current: false,
  },
  {
    company: "Plum",
    role: "Head of Mobile",
    type: "Full-time",
    location: "On-site",
    start: "2019-06",
    end: "2023-09",
    description: [
      "Led the Mobile Platform team, overseeing both Android and iOS development.",
      "Managed and mentored a growing team, expanding from an initial group to 24 engineers.",
      "Accountable for the architecture, tooling, mobile infrastructure, CI/CD processes, design system, security, and performance of Plum's mobile apps.",
      "Initiated and kick-started the Android application development for Plum.",
      "Led the creation of the Plum Android Design System, adhering to Material Design principles.",
    ],
    current: false,
  },
  {
    company: "Beat",
    role: "Senior Android Engineer",
    type: "Full-time",
    location: "Athens",
    start: "2017-06",
    end: "2019-05",
    description: [
      "\"Squad launcher\", helped 3 new cross-functional squads to kick-off, leading teams to cultivate product-oriented engineering focus.",
      "Leading role in cross-functional squads responsible for creating end-to-end features in Payments, Analytics, and Growth missions.",
      "Leading Android hiring manager and code reviewer.",
      "Led the investigation, proposal, and presentation of the Android projects' modularization.",
    ],
    current: false,
  },
  {
    company: "Beat",
    role: "Android Developer",
    type: "Full-time",
    location: "Athens",
    start: "2014-03",
    end: "2017-06",
    description: [
      "Part of a small mobile team to develop Beat Android passenger and driver apps.",
      "Responsible for setting the architectural re-structure of the projects.",
      "Successfully developed numerous features, from geolocation services to analytics and integration with 3rd party tools, libraries, and APIs.",
      "Direct collaboration with Google to integrate ride-hailing service directly from the Google Maps app.",
    ],
    current: false,
  },
  {
    company: "Intracom Telecom",
    role: "Junior Software Engineer",
    type: "Full-time",
    location: "Greece",
    start: "2013-04",
    end: "2014-02",
    description: [
      "OSS/BSS Department working on Billing systems.",
      "Software Architecture design and implementation.",
    ],
    current: false,
  },
  {
    company: "Intracom Telecom",
    role: "Intern",
    type: "Internship",
    location: "Greece",
    start: "2012-10",
    end: "2013-03",
    description: [
      "Distributed System for Log File Analysis (Big Data Analytics) using Apache Hadoop.",
      "Creation and installation of the Hadoop distributed environment with local virtual machines.",
      "Implementation of a MapReduce algorithm for analysis of IPTV user log files.",
    ],
    current: false,
  },
];
