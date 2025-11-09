export type CourseModule = {
  title: string;
  duration: string;
  description: string;
  topics: string[];
};

export type CourseBonus = {
  title: string;
  description: string;
  value: string;
};

export type CourseFAQ = {
  question: string;
  answer: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  description: string;
  price: number;
  originalPrice: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: string;
  duration: string;
  modules: CourseModule[];
  bonuses: CourseBonus[];
  outcomes: string[];
  faqs: CourseFAQ[];
};

export const courses: Course[] = [
  {
    id: "secret-of-ecommerce-nobel",
    slug: "secret-of-ecommerce-nobel",
    title: "Secret of E-Commerce Nobel",
    subtitle: "Launch, automate, and scale a resilient online commerce empire.",
    heroHeadline: "Build revenue engines with cinematic learning & ready-to-ship code.",
    description:
      "The definitive blueprint for modern e-commerce founders. Blend creative storytelling, full-stack automation, and scalable growth systems with production-ready code templates and immersive lessons.",
    price: 329,
    originalPrice: 499,
    level: "Intermediate",
    format: "Hybrid self-paced modules + weekly live labs",
    duration: "6 weeks · 42 on-demand lessons · 6 live labs",
    modules: [
      {
        title: "E-Commerce Origin Story",
        duration: "Week 1",
        description:
          "Craft a unique brand narrative anchored in customer insight and MVP validation.",
        topics: [
          "Positioning sprints & narrative frameworks",
          "UX research playbooks for rapid iteration",
          "Storyboard-driven product pitches",
          "Minimum lovable product experiments",
        ],
      },
      {
        title: "Storefront Engineering",
        duration: "Week 2",
        description:
          "Ship pixel-perfect storefronts using modular design systems and headless commerce stacks.",
        topics: [
          "Next.js commerce patterns & component recipes",
          "Dynamic product feeds with automated merchandising",
          "3D interaction patterns for hero showcases",
          "Conversion heuristic scorecards",
        ],
      },
      {
        title: "Automation & Intelligence",
        duration: "Week 3",
        description:
          "Automate the growth engine with AI-assisted merchandising, fulfillment, and support.",
        topics: [
          "Lifecycle automation with serverless workflows",
          "Realtime dashboards & revenue telemetry",
          "AI-assisted copywriting & merchandising",
          "Support automation with GPT copilots",
        ],
      },
      {
        title: "Scaling the Experience",
        duration: "Week 4",
        description:
          "Architect resilient infrastructure, experimentation loops, and productized services.",
        topics: [
          "Intent-driven personalization & pricing",
          "Data pipeline architecture & governance",
          "Performance budgets and observability",
          "Hiring your extended operator squad",
        ],
      },
      {
        title: "Launch Lab & Investor Readiness",
        duration: "Week 5",
        description:
          "Craft a launch plan with growth loops, partner strategy, and investor-ready story.",
        topics: [
          "Launch cinematic production & runway mapping",
          "Affiliate partnerships & creator economics",
          "Pitch decks with revenue instrumentation",
          "Investor Q&A masterclass",
        ],
      },
      {
        title: "Scaling Playbooks & Exit Strategy",
        duration: "Week 6",
        description:
          "Build modular playbooks for hiring, scaling, and preparing for acquisition or IPO.",
        topics: [
          "E-commerce ops handbooks & SOP builders",
          "Leadership dashboards & metrics ladders",
          "Future-proofing cashflow & valuations",
          "Exit-readiness audits & negotiation prep",
        ],
      },
    ],
    bonuses: [
      {
        title: "Headless Commerce Starter Kit",
        description:
          "Deploy-ready Next.js storefront template with digital product checkout, license key issuing, and analytics wiring.",
        value: "$199 value",
      },
      {
        title: "Automation Blueprint Library",
        description:
          "35 plug-and-play Zapier, n8n, and serverless recipes across marketing, ops, and finance.",
        value: "$149 value",
      },
      {
        title: "Investor Data Room Template Pack",
        description:
          "Due diligence-ready Notion dashboards, cohort reports, and financial models.",
        value: "$129 value",
      },
    ],
    outcomes: [
      "Launch a cinematic storefront with immersive 3D hero narratives.",
      "Automate fulfillment, retention, and upsell journeys with adaptive workflows.",
      "Leverage code blueprints to deploy scalable e-commerce infrastructure in days.",
      "Align investors and partners with a metrics-driven growth operating system.",
    ],
    faqs: [
      {
        question: "Is this course suitable if I have not sold online before?",
        answer:
          "Yes. We begin with foundational positioning and MVP labs to help you validate your first offers while giving you the systems to scale once traction hits.",
      },
      {
        question: "Do I need to know how to code to use the included assets?",
        answer:
          "All code blueprints ship with walkthroughs. Non-technical founders use the plug-and-play templates, while technical teams can extend the modular architecture.",
      },
      {
        question: "What support do I receive during the program?",
        answer:
          "Weekly live labs, async office hours, and a private operator community ensure you receive timely feedback, accountability, and hiring connections.",
      },
      {
        question: "Can my team access the content?",
        answer:
          "Absolutely. Your license includes five team seats plus additional seats at a discounted founder rate.",
      },
    ],
  },
];

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);
