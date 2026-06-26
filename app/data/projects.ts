// ─── Types ───────────────────────────────────────────────────────────────────

export interface ChallengeCard {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  role: string;
}

export interface Callout {
  label: string;
  description: string;
  side: "left" | "right";
  top?: number;
}

export interface Goal {
  title: string;
  description: string;
}

export interface SuccessMetric {
  title: string;
  description: string;
}

export interface ResultMetric {
  stat: string;
  action: string;
  description: string;
}

export interface FlowColumn {
  items: string[];
  arrows: ("short" | "long")[];
}

export interface PersonaData {
  photo: string;
  name: string;
  role: string;
  details: { label: string; value: string }[];
  traits: string[];
  quote: string;
  bio: string;
  goals: string[];
  frustrations: string[];
  personality: { label: string; percentage: number }[];
  motivations: string[];
  interests: string[];
  influences: string[];
  frequentlyUsedApps: string[];
  motivationsLabel?: string;
  interestsLabel?: string;
}

export interface VideoPreviewPanel {
  challengeTitle: string;
  challengeDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  video: string;
}

export interface ProjectDetail {
  hero: {
    heading: string;
    headingItalic: string;
    description: string;
    role: string;
    timeline: string;
    whatIs: string;
    whatIsLabel?: string;
    whatIsPoints?: string[];
    deliverables: string[];
    team: string[];
    heroVideo: string;
    heroMockupType: "phone" | "macbook";
    heroMockupFrame?: string;
    darkHeading?: boolean;
  };
  challenge?: {
    heading: string;
    headingItalic: string;
    description: string[];
    cards: ChallengeCard[];
  };
  interviews: {
    heading: string;
    headingItalic: string;
    description: string[];
    descriptionBullets?: string[];
    testimonials: Testimonial[];
  };
  showcaseSection?: {
    type: "video" | "image" | "macbook" | "frame" | "browser";
    src: string;
  };
  appOverview?: {
    mainImage: string;
    usageCallout: string;
    projectReadyCallout: string;
    homePageCallout: string;
    requestPageCallout: string;
    arrowSrc: string;
    decorativeSrc?: string;
    decorativeSrc2?: string;
  };
  panelsShowcase?: {
    rows: {
      image: string;
      aspectRatio?: string;
      pills?: {
        image: string;
        vector?: string;
        pillTop: string;
        pillLeft: string;
        pillWidth: number;
        vectorTop?: string;
        vectorLeft?: string;
        vectorWidth?: number;
      }[];
    }[];
  };
  featureShowcase?: {
    heading: string;
    headingItalic: string;
    description: string;
    decorativeImage?: string;
    cards: {
      icon: string;
      title: string;
      description: string;
      previewImage: string;
    }[];
  };
  userFlow: {
    heading: string;
    headingItalic: string;
    description: string;
    flowchart: {
      startLabel: string;
      hubLabel: string;
      leftColumn: FlowColumn;
      centerColumn: FlowColumn;
      rightColumn: FlowColumn;
    };
  };
  solution: {
    heading: string;
    headingItalic: string;
    description: string;
    video?: string;
    image?: string;
    mediaSize?: {
      width: number;
      height: number;
      containerHeight: number;
      top?: number;
    };
    callouts: Callout[];
  };
  otherProblems: {
    heading: string;
    headingItalic: string;
    cards: ChallengeCard[];
  };
  goals: {
    heading: string;
    headingItalic: string;
    goals: Goal[];
    successMetrics: SuccessMetric[];
  };
  personas: {
    heading: string;
    headingItalic: string;
    description: string;
    persona: PersonaData;
    image: string;
  };
  teamDiagram: {
    heading: string;
    headingItalic: string;
    description: string;
    teamTitle: string;
    teamPlatform: string;
    image: string;
  };
  designSystem: {
    heading: string;
    headingItalic: string;
    description: string;
    image: string;
    variant?: "leeb-ai" | "foodforesight" | "petlays";
    assets?: {
      rightTop?: string;
      rightBottom?: string;
      fontName?: string;
      cards?: string[];
    };
  };
  mobileFirst: {
    heading: string;
    headingItalic: string;
    description: string;
    video: string;
    frame?: string;
    image?: string;
    // Full-width "website" video — rendered in the same slot as `image`
    // (landscape, full width) rather than the centered phone mockup.
    websiteVideo?: string;
  };
  designEnhancements: {
    heading: string;
    headingItalic: string;
    description: string;
    mockups: {
      image: string;
      label: string;
      description: string;
      callout?: {
        barSrc: string;
        barWidth: number;
        top: string;
        direction: "left" | "right" | "below";
      };
    }[];
  };
  adminDashboard: {
    heading: string;
    headingItalic: string;
    description: string;
    video: string;
    macbookFrame?: string;
    macbookScreenArea?: {
      top: string;
      left: string;
      width: string;
      height: string;
    };
  };
  usabilityTesting: {
    topHeading: string;
    topHeadingItalic: string;
    topDescription: string;
    heading: string;
    headingItalic: string;
    description: string;
    descriptionBullets?: string[];
    phoneImage?: string;
    // When false, the phone image already includes its own rounded corners and
    // shadow, so the section renders it bare (no white border/heavy shadow frame).
    phoneFramed?: boolean;
    darkCardHeading?: string;
    darkCardHeadingItalic?: string;
    challenges: { label: string; description: string }[];
    solutions: { label: string; description: string }[];
  };
  videoPreview: {
    panels: VideoPreviewPanel[];
  };
  allDevices: {
    heading: string;
    headingItalic: string;
    description: string;
    macbookVideo: string;
    phoneVideo: string;
  };
  scalability: {
    heading: string;
    headingItalic: string;
    description: string;
    video: string;
    type?: "video" | "image" | "macbook" | "frame" | "browser";
  };
  documentation: {
    heading: string;
    headingItalic: string;
    description: string;
    image: string;
    showMobileGrid?: boolean;
    showDesktopGrid?: boolean;
  };
  results: {
    heading: string;
    headingItalic: string;
    metrics: ResultMetric[];
  };
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  year: string;
  client: string;
  type: string;
  timeline: string;
  backgroundColor: string;
  previewImage: string;

  // Work page info card
  logo: string;
  logoAlt: string;
  tags: string;
  caseStudyTitle: string;
  caseStudyDescription: string;

  // Detail page content
  detail: ProjectDetail | null;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: ProjectData[] = [
  {
    slug: "leeb-ai",
    title: "Leeb AI",
    description:
      "A modern web application designed for a clean and seamless digital experience",
    year: "2025",
    client: "UAE",
    type: "Web Application",
    timeline: "1 Month",
    backgroundColor: "bg-[#000000]",
    previewImage: "/assets/images/projects/leeb-ai-preview.png",

    logo: "/assets/images/logos/leebai.svg",
    logoAlt: "LeebAI",
    tags: "UX Design | usability testing | ui design",
    caseStudyTitle: "Enhancing Productivity with AI-Powered Conversations",
    caseStudyDescription:
      "Leeb AI is a platform designed to help users interact, create, and solve problems through intelligent AI conversations. It enables seamless communication, smart assistance, and efficient workflow — all in one place.",

    detail: {
      hero: {
        heading: "Reducing Friction & Supercharging Conversations",
        headingItalic: "with an AI-Driven Chat Ecosystem",
        description:
          "Your AI Chat Platform transforms how users interact with artificial intelligence — from simple chats to advanced workflows like PDF analysis, web search, YouTube summarization, and organization-level usage analytics, all powered by multi-model AI and customizable personas.",
        role: "Product & UX Designer (Lead)",
        timeline: "Sep 2025 — Oct 2025 | 1 months",
        whatIs:
          "The AI Chat Platform is a multi-model AI ecosystem that enables individuals and organizations to interact with AI through chat, documents, images, and web search, while managing usage, billing, personas, and AI behavior from a centralized system.",
        deliverables: [
          "Stakeholder Interviews",
          "User Interviews",
          "User Personas",
          "User Journey Maps",
          "User Interface Kit",
          "Responsive Design",
          "Prototypes",
          "Usability Testing",
          "Mobile & Web Design",
          "Admin Dashboard",
          "Design Documentation",
        ],
        team: [
          "2 UI/UX Designers",
          "1 Product Managers",
          "4 scrum teams x 12 people each",
        ],
        heroVideo: "/assets/projectdetail/project-leebai-hero.mp4",
        heroMockupType: "phone",
      },
      challenge: {
        heading: "The existing experience lacked clarity",
        headingItalic: "control, and transparency.",
        description: [
          "The previous design made it difficult for users to understand how AI models differed, what tools were available, and how their usage translated into costs. Users were often unsure which actions consumed tokens, images, or searches.",
          "AI behavior was largely generic, offering limited customization and reducing the effectiveness of responses across different use cases.",
        ],
        cards: [
          {
            title: "Fragmented AI tools",
            description:
              "Users had to navigate multiple disconnected tools, making workflows slow and unintuitive.",
          },
          {
            title: "Limited AI customization",
            description:
              "Users could not easily tailor AI behavior for different tasks or roles.",
          },
          {
            title: "Poor usage visibility",
            description:
              "Users lacked real-time insights into their consumption, leading to surprise billing concerns.",
          },
        ],
      },
      interviews: {
        heading: "Interviews with stakeholders and users revealed",
        headingItalic: "friction across AI workflows.",
        description: [
          "To uncover the challenges users were facing, interviews were conducted with internal stakeholders including product managers, engineers, and support teams. These discussions revealed that users frequently contacted support due to confusion around AI models, billing, and feature limitations.",
          "We also interviewed individual users, professionals, and organizational admins to understand how they used AI tools daily, where they struggled, and how current solutions failed to scale with their needs.",
        ],
        testimonials: [
          {
            quote:
              "I never know which model to use, and I'm always worried about hitting usage limits without realizing it.",
            role: "Power User, AI Chat Platform",
          },
          {
            quote:
              "Managing multiple users and tracking AI costs without visibility is extremely difficult.",
            role: "Organization Admin",
          },
          {
            quote:
              "I want the AI to behave differently depending on the task, but there's no easy way to control that.",
            role: "Product Manager",
          },
        ],
      },
      showcaseSection: {
        type: "video",
        src: "/assets/projectdetail/chatify.mp4",
      },
      userFlow: {
        heading: "The existing user flows had opportunities for",
        headingItalic: "merging duplicates",
        description:
          "Starting an AI task from Chat, Tools, or Model Selection led users through a multi-step configuration flow to choose a model, select a persona, and adjust settings before generating a response. However, this configuration process was identical across all entry points, regardless of how the task was initiated.",
        flowchart: {
          startLabel: "Start",
          hubLabel: "Landing Page",
          leftColumn: {
            items: [
              "Chat Input",
              "System prompts",
              "Select AI Model",
              "Choose Persona",
              "Adjust Model Settings",
            ],
            arrows: ["short", "long", "short", "short"],
          },
          centerColumn: {
            items: ["User action", "Enter prompt", "Persona, Modal"],
            arrows: ["short", "short"],
          },
          rightColumn: {
            items: [
              "Output",
              "Post-task actions",
              "View usage",
              "Switch model",
              "Restart task",
            ],
            arrows: ["short", "long", "short", "short"],
          },
        },
      },
      solution: {
        heading: "Users weren\u2019t clear about where to",
        headingItalic: "send which payment",
        description:
          "General Motors would often receive cheques for Market-Based Price, even when those payments were processed by their auction partners, Openlane. By the time the dealer realized their mistake, the vehicle may have already sold in an auction.",
        video: "/assets/projectdetail/usage-billing.mp4",
        callouts: [
          {
            label: "Usage",
            description:
              "Usage provides real-time visibility into AI consumption across models and tools.",
            side: "left",
          },
          {
            label: "Billing",
            description:
              "Billing clearly shows plans, invoices, and cost breakdowns to avoid surprises.",
            side: "right",
          },
        ],
      },
      otherProblems: {
        heading: "Other problems with the",
        headingItalic: "current design",
        cards: [
          {
            title: "Unclear model capabilities",
            description:
              "Many users selected models without knowing their limitations, resulting in failed tasks or inefficient usage.",
          },
          {
            title: "AI behavior felt inconsistent",
            description:
              "Without personas or system instructions, responses varied unpredictably across tasks.",
          },
          {
            title: "Organizations lacked governance",
            description:
              "Admins had no effective way to manage users, models, or limits at scale.",
          },
          {
            title: "Support requests increased",
            description:
              "Confusion around billing, usage resets, and model selection drove frequent support inquiries.",
          },
        ],
      },
      goals: {
        heading: "Before the redesign, we aligned on how we would measure",
        headingItalic: "success.",
        goals: [
          {
            title: "Goal 1",
            description:
              "Improve clarity across AI models, tools, and usage to reduce user confusion.",
          },
          {
            title: "Goal 2",
            description:
              "Create a flexible, scalable design system that supports individuals and organizations.",
          },
        ],
        successMetrics: [
          {
            title: "Reduce user error",
            description: "Clarify AI capabilities, limits, and costs",
          },
          {
            title: "Increase user satisfaction",
            description:
              "Make AI interactions more intuitive and customizable.",
          },
          {
            title: "Reduce customer support requests",
            description: "Minimize billing and usage confusion.",
          },
          {
            title: "Enable cross-device usage",
            description:
              "Ensure seamless experiences across web and mobile.",
          },
        ],
      },
      personas: {
        heading:
          "User personas enabled a shared understanding of user behaviour",
        headingItalic: "within the team.",
        description:
          "The UX research identified 6 personas that interact with the AI Chat Platform. However, for this case study, we focused on the two personas most impacted by AI model selection, personas, and usage visibility: Power User and Organization Admin.",
        persona: {
          photo: "/assets/projectdetail/user-photo.svg",
          name: "Aisha Khan",
          role: "Product Strategist",
          details: [
            { label: "Age", value: "23" },
            { label: "Gender", value: "Female" },
            { label: "Status", value: "Single" },
            { label: "Education", value: "BSc Computer Science" },
            { label: "Location", value: "Remote" },
          ],
          traits: [
            "Analytical",
            "Independent",
            "Organised",
            "Curious",
            "Practical",
          ],
          quote:
            "\u201CAt times I just want to travel, cherish the nature and enjoy its beauty, listen to the insects chirping, and experience the poetic feel. Looking for apps that give a detailed outline of a place and its planning.\u201D",
          bio: "Aisha is a tech-savvy professional who uses AI daily for research, writing, planning, and analysis. She relies heavily on AI tools to speed up her work but feels frustrated switching between models and tools without knowing which one best fits her task. She wants a single platform that gives her clarity, control, and flexibility without overwhelming complexity.",
          goals: [
            "Get accurate AI responses quickly",
            "Choose the right model for each task",
            "Track usage without surprise limits",
            "Customize AI behaviour for different workflows",
          ],
          frustrations: [
            "Unclear differences between AI models",
            "Unexpected usage limits and costs",
            "Inconsistent AI responses",
            "Switching between multiple tools",
          ],
          personality: [
            { label: "Traveller", percentage: 84 },
            { label: "Observant", percentage: 84 },
            { label: "Empathetic", percentage: 84 },
          ],
          motivations: [
            "Productivity",
            "Efficiency",
            "Accuracy",
            "Cost Transparency",
          ],
          interests: [
            "AI & Productivity Tools",
            "Research & Writing",
            "Strategic Planning",
            "Technology Trends",
          ],
          influences: [
            "AI Communities",
            "Tech Blogs",
            "Product Thought Leaders",
            "SaaS Platforms",
          ],
          frequentlyUsedApps: [
            "ChatGPT",
            "Notion",
            "Google Docs",
            "Figma",
            "Research Tools",
          ],
        },
        image: "/assets/projectdetail/usability-testing.png",
      },
      teamDiagram: {
        heading: "Mapping journeys revealed",
        headingItalic: "where friction occurred",
        description:
          "Journey mapping helped visualize how users moved between chatting, selecting models, using tools, and reviewing usage. This exposed breakdowns where users lost context, misunderstood costs, or abandoned tasks.",
        teamTitle: "The Technical Team",
        teamPlatform: "AI Chat Platform",
        image: "/assets/projectdetail/usability-testing.png",
      },
      designSystem: {
        heading: "A unified design system ensured consistency",
        headingItalic: "across the ecosystem",
        description:
          "A shared design system was created to support the website, mobile app, and admin panel. Components, typography, spacing, and interaction patterns were standardized to ensure consistency and faster iteration.",
        image: "/assets/projectdetail/typography.png",
      },
      mobileFirst: {
        heading: "A mobile-first approach",
        headingItalic: "shaped prioritization",
        description:
          "Designing for mobile forced a focus on essential features first. Progressive disclosure was used to surface advanced controls only when needed, ensuring clarity without overwhelming users.",
        video: "/assets/projectdetail/project-leebai-hero.mp4",
      },
      designEnhancements: {
        heading: "A closer look at the",
        headingItalic: "design enhancements",
        description:
          "Small but impactful improvements were introduced throughout the platform to improve clarity, reduce errors, and guide users through complex AI workflows.",
        mockups: [
          {
            image: "/assets/projectdetail/closer-mockup-1.png",
            label: "Search by Code",
            description:
              "Search by code reduces navigation time by allowing direct lookup through reference codes.",
          },
          {
            image: "/assets/projectdetail/closer-mockup-2.png",
            label: "Tools",
            description:
              "Tools enable users to switch between different AI actions based on their task.",
          },
          {
            image: "/assets/projectdetail/closer-mockup-3.png",
            label: "YouTube Tool",
            description:
              "The YouTube tool allows users to summarize, transcribe, and extract key insights from videos.",
          },
        ],
      },
      adminDashboard: {
        heading:
          "To eliminate *confusion,* the End of Term options were *reduced*\n*from 3 to 2.*",
        headingItalic: "",
        description:
          "Admins can manage organizations, users, plans, models, and partners from a single dashboard. Usage analytics provide insights into tokens, searches, and costs.",
        video: "/assets/projectdetail/admin-dashboard.mp4",
      },
      usabilityTesting: {
        topHeading:
          "Usability testing with 16 users showed we were (mostly) headed",
        topHeadingItalic: "in the right direction",
        topDescription:
          "We conducted moderated and unmoderated usability testing with 15 users, including individual users and organization admins. Testing revealed significant improvements in task completion and confidence.",
        heading: "*Usability testing* results users better understood AI behavior and costs",
        headingItalic: "",
        description:
          "Usability testing confirmed that users could start tasks faster and felt more confident navigating the mobile experience. Users better understood AI behavior, available tools, and usage limits, leading to smoother task completion on mobile.",
        challenges: [
          {
            label: "Hidden Tools",
            description:
              "Users struggled to quickly find AI tools on mobile.",
          },
          {
            label: "Complex Navigation",
            description:
              "Key actions required too many steps to access.",
          },
          {
            label: "Lack of Immediate Context",
            description:
              "Usage and AI state were not visible at a glance.",
          },
        ],
        solutions: [
          {
            label: "Tool-First Layout",
            description:
              "Core AI tools are surfaced directly on the home screen.",
          },
          {
            label: "Quick Action Access",
            description:
              "A plus action enables fast entry into task-based tools.",
          },
          {
            label: "Clear Visual Hierarchy",
            description:
              "Important information is prioritized using a clean, mobile-first design.",
          },
        ],
      },
      videoPreview: {
        panels: [
          {
            challengeTitle: "Testing Insights",
            challengeDescription:
              "Testing highlighted the need for a faster, centralized way to access tools without interrupting the chat flow.",
            solutionTitle: "Testing Validation",
            solutionDescription:
              "Usability testing confirmed that users could switch tools faster, maintain task context, and complete actions with fewer steps and less friction.",
            video: "/assets/projectdetail/video-preview-1.mp4",
          },
          {
            challengeTitle: "Testing Insights",
            challengeDescription:
              "Usability testing revealed that users wanted clearer separation between usage and billing, along with simple visual indicators to quickly understand their current status and spending.",
            solutionTitle: "Testing Validation",
            solutionDescription:
              "Post-testing showed that users could accurately interpret usage data, understand billing breakdowns, and felt more confident tracking their AI spending on mobile.",
            video: "/assets/projectdetail/video-preview-2.mp4",
          },
        ],
      },
      allDevices: {
        heading: "A design for all devices",
        headingItalic: "",
        description:
          "The platform was designed across multiple breakpoints. On smaller screens, secondary information is hidden behind expandable components, ensuring focus on primary tasks.",
        macbookVideo: "/assets/projectdetail/macbook-pro-recording.mp4",
        phoneVideo: "/assets/projectdetail/desing-for-all-mobile-mockup.mp4",
      },
      scalability: {
        heading: "Designing for scalability and future growth",
        headingItalic: "",
        description:
          "The architecture supports adding new AI models, tools, and personas without disrupting existing workflows.",
        video: "/assets/projectdetail/macbook-pro-recording.mp4",
      },
      documentation: {
        heading: "Comprehensive design documentation streamlined development",
        headingItalic: "for a cohesive end product",
        description:
          "Detailed design documentation, annotated screens, and interactive prototypes were shared with engineering teams to ensure accuracy and consistency during implementation.",
        image: "/assets/projectdetail/typography.png",
      },
      results: {
        heading: "The outcome of the redesign -",
        headingItalic: "overall inefficiencies reduced by 49%",
        metrics: [
          {
            stat: "41%",
            action: "reduction",
            description: "in AI-related support requests",
          },
          {
            stat: "52%",
            action: "Increase",
            description: "in successful task completion",
          },
          {
            stat: "38%",
            action: "Increase",
            description: "in daily active usage",
          },
          {
            stat: "45%",
            action: "Increase",
            description: "in admin task efficiency",
          },
        ],
      },
    },
  },
  {
    slug: "foodforesight",
    title: "Food Foresight",
    description:
      "A user focused mobile app designed to simplify food tracking and reduce waste.",
    year: "2023",
    client: "FYP Project",
    type: "Mobile Application",
    timeline: "3 Month",
    backgroundColor: "bg-[#E8783A]",
    previewImage: "/assets/images/projects/food-foresight-preview.png",

    logo: "/assets/images/logos/food-foresight.svg",
    logoAlt: "Food Foresight",
    tags: "UX Design | usability testing | ui design",
    caseStudyTitle:
      "Reducing food waste and improving kitchen management for Food Foresight users",
    caseStudyDescription:
      "Food Foresight is a smart kitchen and grocery management app that helps users track food items, manage expiry dates, plan meals, and get personalized meal and grocery suggestions.",

    detail: {
      hero: {
        heading: "Food Foresight",
        headingItalic: "Smart Kitchen & Grocery Assistant",
        description:
          "Food Foresight is a smart kitchen and grocery management app that helps users track food items, manage expiry dates, plan meals, and get personalized suggestions. The platform provides grocery recommendations, expiry reminders, recipe guidance, and seamless checkout all tailored to cooking level and dietary preferences.",
        role: "Product & UX Designer (Lead)",
        timeline: "Feb 2023 — Apr 2023 | 3 months",
        whatIs: "",
        whatIsLabel: "Platform Capabilities:",
        whatIsPoints: [
          "Personalized grocery suggestions based on cooking level and dietary preferences",
          "Expiry date tracking with smart reminders",
          "Grocery organization by storage type (fridge, freezer, pantry)",
          "Recipe recommendations with step-by-step guidance",
          "Seamless cart and checkout with multiple payment options",
          "Analytics for grocery usage, trends, and meal planning efficiency",
        ],
        deliverables: [
          "Stakeholder Interviews",
          "User Interviews",
          "User Personas",
          "User Journey Maps",
          "User Interface Kit",
          "Responsive Design",
          "Prototypes",
          "Usability Testing",
          "Mobile Design",
          "User Flows",
          "Design Documentation",
        ],
        team: [
          "2 UI/UX Designers",
          "1 Product Managers",
          "4 scrum teams x 12 people each",
        ],
        heroVideo: "/assets/projectdetail/foodforesight/food-foresight-hero.mp4",
        heroMockupType: "phone",
        heroMockupFrame: "/assets/projectdetail/Free Transparent iPhone Air Mockup (Mockuuups Studio).png",
      },
      interviews: {
        heading: "User & Stakeholder Insights",
        headingItalic: "Food Foresight.",
        description: [
          "Internal teams including product managers, engineers, and support staff were consulted to identify common pain points.",
          "Discussions revealed that users frequently contacted support due to confusion around:",
        ],
        descriptionBullets: [
          "Grocery categorization (fridge, freezer, pantry)",
          "Expiry reminders and notifications",
          "Recipe suggestions and personalized meal plans",
          "Payment and checkout issues",
        ],
        testimonials: [
          {
            quote:
              "“I never know which ingredient to use, and I’m always worried about food going bad without realizing it.”",
            role: "Novice Home Cook",
          },
          {
            quote:
              "“Managing multiple meals and tracking grocery items without visibility is extremely difficult.”",
            role: "Meal Planner",
          },
          {
            quote:
              "“I want recipes and meal suggestions to adapt depending on my dietary needs and cooking level, but there’s no easy way to control that.”",
            role: "Professional Home Cook",
          },
        ],
      },
      appOverview: {
        mainImage: "/assets/projectdetail/foodforesight/Business Profile.png",
        usageCallout: "/assets/projectdetail/foodforesight/useage.png",
        projectReadyCallout: "/assets/projectdetail/foodforesight/projectapplicationisready.png",
        homePageCallout: "/assets/projectdetail/foodforesight/homepage.png",
        requestPageCallout: "/assets/projectdetail/foodforesight/requestpage.png",
        arrowSrc: "/assets/projectdetail/foodforesight/Arrow 5.svg",
        decorativeSrc: "/assets/projectdetail/foodforesight/Vector 7185.svg",
        decorativeSrc2: "/assets/projectdetail/foodforesight/Vector 7187.svg",
      },
      userFlow: {
        heading: "The Existing User Flows Had Opportunities",
        headingItalic: "consolidation and simplification.",
        description:
          "Starting a task from Dashboard, Grocery List, or Meal Planner led users through a multi-step flow to check item status, select ingredients, adjust quantities, and confirm meal plans before proceeding. However, this process was repeated across all entry points, regardless of how the action was initiated.",
        flowchart: {
          startLabel: "Start",
          hubLabel: "Home",
          leftColumn: {
            items: [
              "Grocery / Meal / Recipe",
              "Switch flow",
              "Choose dietary preference",
              "Update quantity & status",
              "Add another item or meal",
            ],
            arrows: ["short", "long", "short", "short"],
          },
          centerColumn: {
            items: ["Novice", "Intermediate", "Professional"],
            arrows: ["short", "short"],
          },
          rightColumn: {
            items: [
              "Add item",
              "Added to inventory with category & expiry",
              "Set reminders",
              "Mark opened",
              "Add to shopping list",
            ],
            arrows: ["short", "long", "short", "short"],
          },
        },
      },
      solution: {
        heading: "Users weren’t clear about how to filter and view",
        headingItalic: "the right business data.",
        description:
          "Users often struggled to understand which metrics belonged to which grocery category, recipe type, or storage location. Without proper filtering, insights around food usage, expiry dates, and meal planning efficiency felt mixed and hard to act on.",
        image: "/assets/projectdetail/foodforesight/businessdata.png",
        mediaSize: {
          width: 368,
          height: 429,
          containerHeight: 593,
          top: 52,
        },
        callouts: [
          {
            side: "left",
            label: "Billing / Payment Insight",
            description:
              "Clearly displays grocery costs, ingredient pricing, and checkout totals based on selected filters (e.g., storage type, recipe category) to reduce confusion.",
            top: 184,
          },
          {
            side: "right",
            label: "Usage / Performance Insight",
            description:
              "Provides real-time visibility into ingredient usage, meal prep interactions, and recipe performance based on applied filters (e.g., dietary preference, cooking level).",
            top: 299,
          },
        ],
      },
      otherProblems: {
        heading: "TBD",
        headingItalic: "",
        cards: [],
      },
      goals: {
        heading: "Improve clarity across recipes, inventory tracking and",
        headingItalic: "meal planning to reduce confusion.",
        goals: [
          {
            title: "Goal 1",
            description:
              "Improve clarity across ingredients, recipe suggestions, and expiry tracking to reduce confusion.",
          },
          {
            title: "Goal 2",
            description:
              "Create a flexible, scalable system that helps users manage groceries, meal plans, and dietary preferences efficiently.",
          },
        ],
        successMetrics: [
          {
            title: "Reduce user error",
            description:
              "Improve ingredient visibility, expiry reminders, and recipe suggestions.",
          },
          {
            title: "Reduce customer support requests",
            description:
              "Minimize confusion around ingredient tracking, shopping lists, and notifications.",
          },
          {
            title: "Increase user satisfaction",
            description:
              "Make grocery insights easier to understand and manage.",
          },
          {
            title: "Enable cross-platform usage",
            description: "Ensure a smooth experience across all app features.",
          },
        ],
      },
      personas: {
        heading: "User personas enabled a shared understanding of user behaviour",
        headingItalic: "within the team.",
        description:
          "The UX research identified 6 personas that interact with Food Foresight. For this case study, we focused on the two personas most impacted by grocery management, meal planning, and recipe recommendations: Home Cook and Meal Planner.",
        persona: {
          photo: "/assets/projectdetail/foodforesight/michael-dam.svg",
          name: "Sarah Ahmed",
          role: "Home Cook",
          details: [
            { label: "Age", value: "29" },
            { label: "Gender", value: "Female" },
            { label: "Status", value: "Single" },
            { label: "Education", value: "Bachelor’s Degree" },
            { label: "Location", value: "Urban Area" },
          ],
          traits: ["Analytical", "Independent", "Organised", "Curious", "Practical"],
          quote:
            "I want to manage my groceries efficiently, track ingredient expiry dates, and get recipe suggestions based on what I already have without wasting time searching multiple apps.",
          bio: "Sarah is a home cook who manages groceries, plans meals for the week, and tracks ingredients in her kitchen daily. She relies on recipe apps and grocery lists to stay organized but feels frustrated when ingredients expire unnoticed or when recipes don’t match what she already has at home. She wants a single platform that helps her manage groceries, track expiry dates, and suggest recipes based on available ingredients.",
          goals: [
            "Plan meals efficiently for the week",
            "Track ingredient expiry dates easily",
            "Reduce food waste at home",
            "Get recipe suggestions based on available ingredients",
          ],
          frustrations: [
            "Ingredients expiring without reminders",
            "Difficulty tracking items in fridge, freezer, and pantry",
            "Recipes requiring ingredients she doesn’t have",
            "Using multiple apps for groceries and recipes",
          ],
          personality: [
            { label: "Reduce food waste", percentage: 70 },
            { label: "Save time in meal preparation", percentage: 80 },
            { label: "Eat healthier meals", percentage: 75 },
          ],
          motivations: ["Curious", "Practical", "Organized", "Independent", "Analytical"],
          motivationsLabel: "Research Tools",
          interests: [
            "Grocery Inventory Management",
            "Recipe Discovery",
            "Meal Planning",
            "Expiry Date Tracking",
          ],
          interestsLabel: "Cooking & Kitchen Tools",
          influences: [
            "Food Blogs",
            "Cooking Communities",
            "Recipe Websites",
            "Kitchen Management Apps",
          ],
          frequentlyUsedApps: ["YouTube", "Pinterest", "Google Keep", "Instagram"],
        },
        image: "",
      },
      teamDiagram: {
        heading: "TBD",
        headingItalic: "",
        description: "TBD",
        teamTitle: "TBD",
        teamPlatform: "Food Foresight",
        image: "",
      },
      designSystem: {
        heading: "A unified design system ensured consistency",
        headingItalic: "across the ecosystem",
        description:
          "A shared design system was created to support the website, mobile app, and admin panel. Components, typography, spacing, and interaction patterns were standardized to ensure consistency and faster iteration.",
        image: "",
        variant: "foodforesight",
        assets: {
          rightTop: "/assets/projectdetail/foodforesight/right-food-11.png",
          rightBottom: "/assets/projectdetail/foodforesight/colors-cards.png",
        },
      },
      mobileFirst: {
        heading: "A mobile-first approach",
        headingItalic: "shaped prioritization",
        description:
          "Designing for mobile ensured that essential features like grocery tracking, recipe discovery, and meal planning were prioritized first. Progressive disclosure was used to reveal advanced options such as dietary preferences, inventory categorization, and expiry reminders only when needed, keeping the experience simple and easy for users without overwhelming them.",
        video: "/assets/projectdetail/foodforesight/free-transparent.mp4",
        frame: "/assets/projectdetail/foodforesight/free-transparent-case.png",
      },
      designEnhancements: {
        heading: "A closer look at the",
        headingItalic: "design enhancements",
        description:
          "Small but impactful improvements were introduced throughout the app to improve clarity, reduce food waste, and guide users smoothly through grocery tracking, recipe discovery, and meal planning features.",
        mockups: [
          {
            image: "/assets/projectdetail/foodforesight/Free-Transparent-iPhone-Air-Mockup-1.png",
            label: "Filter by Preferences",
            description:
              "Filter options on each grocery cycle: allow recipes and ingredients based on cooking preferences, dietary preferences, or meal goals without browsing through multiple lists.",
            callout: {
              barSrc: "/assets/projectdetail/search-by-code-bar.svg",
              barWidth: 60,
              top: "40%",
              direction: "right",
            },
          },
          {
            image: "/assets/projectdetail/foodforesight/Free-Transparent-iPhone-Air-Mockup-2.png",
            label: "Review Cart Items",
            description:
              "Get a clear, detailed view of selected ingredients and products before checkout — including quantity, pricing, and any swaps suggested through grocery filters.",
            callout: {
              barSrc: "/assets/projectdetail/tools-bar.svg",
              barWidth: 60,
              top: "80%",
              direction: "right",
            },
          },
          {
            image: "/assets/projectdetail/foodforesight/Free-Transparent-iPhone-Air-Mockup-3.png",
            label: "Cooking Level Selection",
            description:
              "An interface that lets users share their cooking level (Novice through Professional) so the app can tailor recipe complexity, prep guidance, and meal recommendations accordingly.",
            callout: {
              barSrc: "/assets/projectdetail/youtube-tool-bar.svg",
              barWidth: 60,
              top: "40%",
              direction: "left",
            },
          },
        ],
      },
      adminDashboard: {
        heading: "TBD",
        headingItalic: "",
        description: "TBD",
        video: "",
      },
      usabilityTesting: {
        topHeading: "",
        topHeadingItalic: "",
        topDescription: "",
        heading:
          "*Usability testing* results  Users Understood Services and Metrics Better",
        headingItalic: "",
        description: "",
        descriptionBullets: [
          "Usability testing confirmed users could find recipes and manage groceries faster and navigate the app more confidently",
          "Users better understood cooking levels, dietary preferences, and available recipe options",
          "Ingredient visibility and recipe suggestions helped users plan meals more easily and complete tasks smoothly on mobile",
        ],
        phoneImage: "/assets/projectdetail/foodforesight/usability-food.png",
        challenges: [
          {
            label: "Hidden Tools",
            description:
              "Users struggled to quickly find recipes, grocery items, or inventory details on mobile.",
          },
          {
            label: "Complex Navigation",
            description:
              "Key actions required too many steps to add ingredients, scan items, or create meal plans.",
          },
          {
            label: "Lack of Immediate Context",
            description:
              "Ingredient availability, expiry status, and recipe suggestions were not visible at a glance.",
          },
        ],
        solutions: [
          {
            label: "Feature-First Layout",
            description:
              "Core features like recipes, grocery tracking, and meal plans surfaced directly on the home screen.",
          },
          {
            label: "Quick Action Access",
            description:
              "A scan-and-quick-add action enables fast entry into tasks like ingredient scanning, grocery adding, and meal planning.",
          },
          {
            label: "Clear Visual Hierarchy",
            description:
              "Expiry alerts, available ingredients, and recommended recipes prioritized for mobile-first view.",
          },
        ],
      },
      videoPreview: {
        panels: [],
      },
      allDevices: {
        heading: "TBD",
        headingItalic: "",
        description: "TBD",
        macbookVideo: "",
        phoneVideo: "",
      },
      scalability: {
        heading: "TBD",
        headingItalic: "",
        description: "TBD",
        video: "",
      },
      documentation: {
        heading: "Comprehensive design documentation streamlined development",
        headingItalic: "for a cohesive end product",
        description:
          "Detailed design documentation, annotated screens, and interactive prototypes were shared with engineering teams to ensure accuracy and consistency during implementation.",
        image: "",
        showDesktopGrid: false,
      },
      results: {
        heading: "TBD",
        headingItalic: "",
        metrics: [],
      },
    },
  },
  {
    slug: "interview bu...",
    title: "Interview bu...",
    description:
      "From structured interview practice to performance insights, it helps users prepare with clarity and measurable progress.",
    year: "2023",
    client: "Pakistan",
    type: "Web Application",
    timeline: "1 Month",
    backgroundColor: "bg-[#5B8DB8]",
    previewImage: "/assets/images/projects/pet-lays-preview.png",

    logo: "/assets/images/logos/interview-buddy.svg",
    logoAlt: "Interview Buddy",
    tags: "UX Design | usability testing | ui design",
    caseStudyTitle:
      "Improving interview preparation through structured practice and performance feedback",
    caseStudyDescription:
      "Interview Buddy is a guided interview practice platform that helps users simulate real interview scenarios, track their performance, and improve communication skills through structured feedback.",

    detail: {
      hero: {
        heading: "Designing a smarter way to prepare for interviews",
        headingItalic:
          "turning a complex tool into a clear, guided experience.",
        description:
          "Interview Buddy is a platform designed to help people prepare for interviews through guided practice, performance tracking, and real-time feedback. The product had powerful features, but the experience felt scattered, repetitive, and hard to follow. Users weren’t guided they were left figuring things out on their own.",
        role: "End-to-end product redesign",
        timeline: "Dec 2023 — Jan 2024 | 1 months",
        whatIs:
          "Interview Buddy is an interview preparation platform that helps users practice interviews, analyze their performance, and improve over time.\n\nIt includes features like:",
        whatIsLabel: "What is Interview Buddy?",
        whatIsPoints: [
          "Video & audio analysis",
          "Interview templates",
          "Performance scoring",
          "Practice sessions",
        ],
        deliverables: [
          "Stakeholder Interviews",
          "UX Audit",
          "User Personas",
          "Wireframes",
          "User Flow Improvement",
          "Design System Refinement",
          "Prototypes",
          "Usability Testing",
        ],
        team: [
          "2 UI/UX Designers",
          "1 Product Managers",
          "4 scrum teams x 12 people each",
        ],
        heroVideo: "",
        heroMockupType: "phone",
      },
      interviews: {
        heading: "Interviews with stakeholders and users revealed",
        headingItalic: "friction across AI workflows.",
        description: [
          "To understand where users were struggling, interviews were conducted with stakeholders including product managers and internal teams. These conversations revealed that users were often confused while navigating the platform, especially during interview setup and while interpreting feedback.",
        ],
        testimonials: [
          {
            quote:
              "“I don’t know where to start or what to focus on first when I open the platform.”",
            role: "Job Seeker",
          },
          {
            quote:
              "“After completing an interview, I can see scores, but I don’t really understand what to improve.”",
            role: "Professional",
          },
          {
            quote:
              "“I want a clear way to track progress and help users improve, but the current flow feels disconnected.”",
            role: "Stakeholder",
          },
        ],
      },
      challenge: {
        heading: "The existing experience lacked clarity",
        headingItalic: "control, and transparency.",
        description: [
          "The previous design made it difficult for users to understand how the platform worked, what actions to take next, and how their performance was being evaluated. Users often felt unsure about where to start, how to navigate interviews, and what their scores actually meant.",
        ],
        cards: [
          {
            title: "Fragmented AI tools",
            description:
              "Users had to move across disconnected sections, making the flow slow and hard to follow.",
          },
          {
            title: "Limited control over practice",
            description:
              "Users couldn’t easily manage how they practiced or structure their interview sessions.",
          },
          {
            title: "Poor feedback clarity",
            description:
              "Scores were shown, but users lacked clear insights into what to improve and why.",
          },
        ],
      },
      showcaseSection: {
        type: "browser",
        src: "/assets/projectdetail/petlays/devsort.mp4",
      },
      userFlow: {
        heading: "The existing user flows had opportunities for",
        headingItalic: "merging duplicates",
        description:
          "Starting an interview from different entry points like Dashboard, Templates, or Quick Actions led users through a similar multi-step process — selecting a role, setting preferences, and starting the session. However, this flow was repeated across multiple areas without any variation or simplification.",
        flowchart: {
          startLabel: "Start",
          hubLabel: "Dashboard",
          leftColumn: {
            items: [
              "Select Role",
              "Choose Level",
              "Set Preferences",
              "User action",
              "Start Interview",
            ],
            arrows: ["short", "long", "short", "short"],
          },
          centerColumn: {
            items: ["Output", "View Results", "Check Scores"],
            arrows: ["short", "short"],
          },
          rightColumn: {
            items: [
              "History",
              "View all scroes",
              "Resources",
              "Setting",
            ],
            arrows: ["short", "long", "short"],
          },
        },
      },
      solution: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        callouts: [],
      },
      otherProblems: {
        heading: "Other problems with the",
        headingItalic: "current design",
        cards: [
          {
            title: "Unclear feature understanding",
            description:
              "Users interacted with interview tools without fully understanding how they worked or what to expect from them.",
          },
          {
            title: "Feedback felt inconsistent",
            description:
              "Results and scores varied in presentation, making it difficult for users to clearly evaluate their performance.",
          },
          {
            title: "Lack of structured management",
            description:
              "There was no clear way to track progress, manage multiple attempts, or view improvement over time.",
          },
          {
            title: "Increased user confusion",
            description:
              "Unclear flows and feedback led to hesitation, repeated actions, and overall frustration while using the platform.",
          },
        ],
      },
      goals: {
        heading: "Before the redesign, we aligned on how we would measure",
        headingItalic: "success.",
        goals: [
          {
            title: "Goal 1",
            description:
              "Improve clarity across interview flows, feedback, and performance tracking to reduce user confusion.",
          },
          {
            title: "Goal 2",
            description:
              "Create a structured and scalable design system that supports both individual users and professionals preparing for interviews.",
          },
        ],
        successMetrics: [
          {
            title: "Reduce user error",
            description:
              "Make interview setup, practice, and results easier to understand.",
          },
          {
            title: "Reduce drop-offs in interview flow",
            description:
              "Ensure users complete full practice sessions without friction.",
          },
          {
            title: "Increase user satisfaction",
            description:
              "Help users clearly understand feedback and how to improve.",
          },
          {
            title: "Improve accessibility across device",
            description:
              "Provide a seamless experience across web and mobile platforms.",
          },
        ],
      },
      personas: {
        heading: "User personas enabled a shared understanding of user behavior",
        headingItalic: "within the team.",
        description:
          "The research identified multiple types of users interacting with Interview Buddy. However, for this case study, we focused on the two most important personas who are directly impacted by the interview practice and feedback system: Job Seekers and Professionals.",
        persona: {
          photo: "/assets/projectdetail/petlays/Aisha.svg",
          name: "Aisha Khan",
          role: "Job Seeker",
          details: [
            { label: "Age", value: "23" },
            { label: "Gender", value: "Female" },
            { label: "Status", value: "Single" },
            { label: "Education", value: "BSC Computer Science" },
            { label: "Location", value: "Remote" },
          ],
          traits: ["Analytical", "Independent", "Organised", "Curious", "Practical"],
          quote:
            "“At times I just want to travel, cherish the nature and enjoy its beauty, listen to the insects chirping, and experience the poetic feel. Looking for apps that give a detailed outline of a place and its planning.”",
          bio: "Aisha is a tech-savvy job seeker who regularly practices interviews to improve her chances of landing better roles. She uses online tools to prepare but often feels overwhelmed by unclear feedback and complicated practice flows. She wants a simple, structured experience that helps her improve step by step.",
          goals: [
            "Improve interview performance with structured practice",
            "Understand feedback clearly and quickly",
            "Build confidence before real interviews",
            "Track improvement over time",
          ],
          frustrations: [
            "Confusing interview setup flow",
            "Feedback that is hard to interpret",
            "Lack of clear improvement direction",
            "Repetitive practice experience",
          ],
          personality: [
            { label: "Curious", percentage: 75 },
            { label: "Self-motivated", percentage: 85 },
            { label: "Detail-oriented", percentage: 80 },
          ],
          motivations: [
            "Career growth",
            "Confidence building",
            "Skill improvement",
            "Job success",
          ],
          interests: [
            "Interview preparation",
            "Learning platforms",
            "Career development tools",
            "Productivity apps",
          ],
          influences: [
            "AI Communities",
            "Tech Blogs",
            "Product Thought Leaders",
            "SaaS Platforms",
          ],
          frequentlyUsedApps: [
            "LinkedIn",
            "Notion",
            "YouTube",
            "Google Docs",
            "Practice platforms",
          ],
        },
        image: "",
      },
      teamDiagram: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        teamTitle: "",
        teamPlatform: "PetLays",
        image: "",
      },
      designSystem: {
        heading: "A unified design system ensured consistency",
        headingItalic: "across the ecosystem",
        description:
          "A shared design system was created to support the interview practice platform across all modules including dashboard, templates, interview sessions, and results. Components, typography, spacing, and interaction patterns were standardized to ensure consistency and a smoother user experience.",
        image: "",
        variant: "petlays",
        assets: {
          fontName: "HELVETICA",
          cards: [
            "/assets/projectdetail/petlays/logo-card.svg",
            "/assets/projectdetail/petlays/speech-card.svg",
            "/assets/projectdetail/petlays/video-card.svg",
            "/assets/projectdetail/petlays/audio-card.svg",
            "/assets/projectdetail/petlays/text-card.svg",
            "/assets/projectdetail/petlays/live-video-card.svg",
          ],
        },
      },
      mobileFirst: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        video: "",
      },
      designEnhancements: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        mockups: [],
      },
      adminDashboard: {
        heading: "To eliminate *confusion,* redundant options were reduced and simplified",
        headingItalic: "",
        description:
          "Multiple overlapping actions across templates and interview setup were streamlined to reduce repetition and make the flow more intuitive. Users can now complete interview setup through a single guided path instead of multiple repeated steps.",
        video: "/assets/projectdetail/petlays/interview-buddy.mp4",
        macbookFrame: "/assets/projectdetail/petlays/MacBook-Pro.png",
        macbookScreenArea: {
          top: "5.7%",
          left: "11.59%",
          width: "76.83%",
          height: "83.42%",
        },
      },
      usabilityTesting: {
        topHeading: "",
        topHeadingItalic: "",
        topDescription: "",
        heading:
          "*Usability testing* confirmed improved confidence and clarity",
        headingItalic: "",
        description:
          "After redesign, users were able to start interviews faster, complete sessions more smoothly, and better understand their performance. The overall experience felt more guided, structured, and supportive.",
        phoneImage: "/assets/projectdetail/petlays/usability-custom.png",
        phoneFramed: false,
        darkCardHeading: "Usability testing confirmed",
        darkCardHeadingItalic: "improved confidence and clarity",
        challenges: [
          {
            label: "Unclear Starting Point",
            description:
              "Users were unsure how to begin an interview session.",
          },
          {
            label: "Overloaded Interface",
            description:
              "Too much information reduced focus during practice.",
          },
          {
            label: "Weak Feedback Interpretation",
            description:
              "Users struggled to understand what scores actually meant.",
          },
        ],
        solutions: [
          {
            label: "Guided Start Flow",
            description:
              "Users are now taken through a clear step-by-step interview setup.",
          },
          {
            label: "Focused Practice Environment",
            description:
              "Distraction-free interface helps users concentrate during answers.",
          },
          {
            label: "Structured Feedback Layout",
            description:
              "Scores and insights are grouped into clear, readable sections.",
          },
        ],
      },
      videoPreview: {
        panels: [],
      },
      allDevices: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        macbookVideo: "",
        phoneVideo: "",
      },
      scalability: {
        heading: "Designing for scalability and future growth",
        headingItalic: "",
        description:
          "The structure was designed to support adding new interview types, roles, and assessment features without breaking existing flows.",
        video: "/assets/projectdetail/petlays/elevate.mp4",
        type: "browser",
      },
      documentation: {
        heading: "Comprehensive design documentation streamlined development",
        headingItalic: "for a cohesive end product",
        description:
          "Detailed design specifications, annotated screens, and structured handoff files were shared with the development team to ensure accuracy and consistency during implementation.",
        image: "",
        showMobileGrid: false,
        showDesktopGrid: true,
      },
      results: {
        heading: "The outcome of the redesign -",
        headingItalic: "overall friction reduced significantly",
        metrics: [
          {
            stat: "41%",
            action: "reduction",
            description: "in drop-off during interview setup",
          },
          {
            stat: "55%",
            action: "Increase",
            description: "in completed interview sessions",
          },
          {
            stat: "40%",
            action: "Increase",
            description: "in user engagement with feedback",
          },
          {
            stat: "45%",
            action: "improvement",
            description: "in overall task efficiency",
          },
        ],
      },
    },
  },
  {
    slug: "laplocal",
    title: "LapLocal",
    description:
      "A clean e-commerce platform designed to simplify browsing and improve shopping.",
    year: "2024",
    client: "Pakistan",
    type: "E-commerce Platform",
    timeline: "2 Week",
    backgroundColor: "bg-[#c4d97f]",
    previewImage: "/assets/images/projects/laplocal-preview.png",

    logo: "/assets/images/logos/laplocal.svg",
    logoAlt: "LapLocal",
    tags: "UX Design | usability testing | ui design",
    caseStudyTitle:
      "Improving laptop browsing, comparison, and purchase experience for LapLocal users",
    caseStudyDescription:
      "LapLocal is a smart laptop marketplace that helps users explore products, compare specifications, track deals, and get personalized device recommendations.",

    detail: {
      hero: {
        heading: "*LapLocal* Smart Laptop Marketplace *& Services Assistant*",
        headingItalic: "",
        description:
          "LapLocal is a smart laptop marketplace and services app that helps users explore laptops, compare specifications, manage purchases, and discover the best device options. The platform provides laptop recommendations, deal alerts, product insights, and seamless buying  all tailored to user needs and performance preferences",
        role: "Product & UX Designer (Lead)",
        timeline: "May 2024 — May 2024 | 2 weeks",
        whatIs: "",
        whatIsLabel: "Platform Capabilities:",
        whatIsPoints: [
          "Personalized laptop suggestions based on user needs and performance preferences",
          "Laptop browsing and comparison with smart filters",
          "Product organization by brand, model, and specifications",
          "Laptop recommendations with detailed feature insights",
          "Seamless purchasing with multiple payment options",
          "Analytics for product trends, demand, and marketplace activity",
        ],
        deliverables: [
          "Stakeholder Interviews",
          "User Interviews",
          "User Personas",
          "User Journey Maps",
          "User Interface Kit",
          "Visitor Panel",
          "Prototypes",
          "Usability Testing",
          "Seller Panel",
          "Admin Dashboard",
          "Design Documentation",
        ],
        team: [
          "2 UI/UX Designers",
          "1 Product Managers",
          "4 scrum teams x 12 people each",
        ],
        heroVideo: "",
        heroMockupType: "phone",
        darkHeading: true,
      },
      panelsShowcase: {
        rows: [
          {
            image: "/assets/projectdetail/laplocal/visitor-row.png",
            aspectRatio: "1200 / 230",
            pills: [
              {
                image: "/assets/projectdetail/laplocal/visitor-panel-btn.png",
                vector: "/assets/projectdetail/laplocal/Vector-visitor-panel.svg",
                pillTop: "-7%",
                pillLeft: "1%",
                pillWidth: 90,
                vectorTop: "11%",
                vectorLeft: "5%",
                vectorWidth: 12,
              },
              {
                image: "/assets/projectdetail/laplocal/home-visitor-btn.png",
                vector: "/assets/projectdetail/laplocal/Vector-home-visitor.svg",
                pillTop: "100%",
                pillLeft: "26%",
                pillWidth: 86,
                vectorTop: "96%",
                vectorLeft: "25%",
                vectorWidth: 12,
              },
            ],
          },
          {
            image: "/assets/projectdetail/laplocal/seller-panel-row.png",
            aspectRatio: "1200 / 230",
            pills: [
              {
                image: "/assets/projectdetail/laplocal/seller-panel-btn.png",
                vector: "/assets/projectdetail/laplocal/Vector-seller-panel.svg",
                pillTop: "-7%",
                pillLeft: "1%",
                pillWidth: 86,
                vectorTop: "11%",
                vectorLeft: "5%",
                vectorWidth: 12,
              },
            ],
          },
          {
            image: "/assets/projectdetail/laplocal/admin-row.png",
            aspectRatio: "1200 / 230",
            pills: [
              {
                image: "/assets/projectdetail/laplocal/admin-btn.png",
                vector: "/assets/projectdetail/laplocal/Vector-admin.svg",
                pillTop: "-7%",
                pillLeft: "1%",
                pillWidth: 110,
                vectorTop: "11%",
                vectorLeft: "6%",
                vectorWidth: 12,
              },
            ],
          },
        ],
      },
      interviews: {
        heading: "User & Stakeholder Insights –",
        headingItalic: "LapLocal",
        description: [
          "Internal teams including product managers, engineers, and support staff were consulted to identify common pain points. Discussions revealed that users frequently contacted support due to confusion around:",
        ],
        descriptionBullets: [
          "Laptop category selection (gaming, business, student use)",
          "Product specifications and comparison understanding",
          "Laptop recommendations and personalized device suggestions",
          "Checkout process and payment related issues",
        ],
        testimonials: [
          {
            quote:
              "“I’m never sure which laptop actually fits my needs, and I worry about choosing the wrong device.”",
            role: "New Laptop Buyer",
          },
          {
            quote:
              "“Comparing multiple laptop models and understanding their specifications without clear guidance is very difficult.”",
            role: "Laptop Comparison User",
          },
          {
            quote:
              "“I want laptop suggestions based on my usage and budget, but there’s no easy way to control that.”",
            role: "Experienced Laptop User",
          },
        ],
      },
      userFlow: {
        heading: "The Existing User Flows Had Opportunities",
        headingItalic: "consolidation and simplification.",
        description:
          "Starting a purchase from Home, Browse Laptops, or Product Listings led users through a multi-step flow to check laptop details, select specifications, adjust preferences, and confirm the purchase before proceeding. However, this process was repeated across all entry points, regardless of how the action was initiated.",
        flowchart: {
          startLabel: "Start",
          hubLabel: "Home",
          leftColumn: {
            items: [
              "Add Preferred Laptop",
              "View Product Details",
              "Select Delivery Option",
              "Add Warranty Plan",
            ],
            arrows: ["short", "short", "short"],
          },
          centerColumn: {
            items: [
              "Create Laptop Wishlist",
              "Choose Laptop Category",
              "Set Price Alerts",
              "Book Service",
              "Enter Laptop Preferences",
              "Select Trusted Seller",
            ],
            arrows: ["short", "short", "short", "short", "short"],
          },
          rightColumn: {
            items: [
              "Save Laptop Wishlist",
              "Added to Wishlist with Alert",
              "Receive Price Alert",
              "View Wishlist",
              "View Order Details",
            ],
            arrows: ["short", "short", "short", "short"],
          },
        },
      },
      featureShowcase: {
        heading: "Laplocal transforms laptops into tools for",
        headingItalic: "productivity and performance.",
        description:
          "Our platform empowers seamless connections for thousands of users, streamlining the process of finding and purchasing premium laptops.",
        decorativeImage: "/assets/projectdetail/laplocal/Union.svg",
        cards: [
          {
            icon: "/assets/projectdetail/laplocal/user-switch.svg",
            title: "Seamless Filter",
            description:
              "Transform your product search with interactive filters to find exactly what you need effortlessly.",
            previewImage: "/assets/projectdetail/laplocal/filter.png",
          },
          {
            icon: "/assets/projectdetail/laplocal/arrow-expand.svg",
            title: "Communication",
            description:
              "Empower buyers to connect and communicate with sellers for a seamless purchasing experience.",
            previewImage: "/assets/projectdetail/laplocal/seller.png",
          },
          {
            icon: "/assets/projectdetail/laplocal/workflow-square-10.svg",
            title: "Top Brands Products",
            description:
              "Enhance your tech experience with top laptop brands, bringing reliability and innovation to your fingertips.",
            previewImage:
              "/assets/projectdetail/laplocal/selling-products.png",
          },
        ],
      },
      solution: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        callouts: [],
      },
      otherProblems: {
        heading: "TBD",
        headingItalic: "",
        cards: [],
      },
      goals: {
        heading: "Improve clarity across pet services, activity tracking,",
        headingItalic: "and care scheduling to reduce confusion.",
        goals: [
          {
            title: "Goal 1",
            description:
              "Improve clarity across laptop types, specifications, and product comparisons to reduce confusion.",
          },
          {
            title: "Goal 2",
            description:
              "Create a flexible, scalable system that helps users browse laptops, compare devices, and manage purchases efficiently.",
          },
        ],
        successMetrics: [
          {
            title: "Reduce user error",
            description:
              "Improve visibility of laptop specs, pricing, and product details.",
          },
          {
            title: "Reduce customer support requests",
            description:
              "Make laptop information easier to understand and navigate.",
          },
          {
            title: "Increase user satisfaction",
            description:
              "Provide clearer product insights and better browsing experience.",
          },
          {
            title: "Enable cross-platform usage",
            description:
              "Ensure a smooth experience across all platform features.",
          },
        ],
      },
      personas: {
        heading: "User personas enabled a shared understanding of user behaviour",
        headingItalic: "within the team.",
        description:
          "The UX research identified 6 personas that interact with LapLocal. For this case study, we focused on the two personas most impacted by laptop browsing, comparison, and purchase management: New Laptop Buyer and Laptop Comparison Planner",
        persona: {
          photo: "/assets/projectdetail/laplocal/alex.svg",
          name: "Alex Ahmed",
          role: "New Laptop Buyer",
          details: [
            { label: "Age", value: "29" },
            { label: "Gender", value: "Male" },
            { label: "Status", value: "Single" },
            { label: "Education", value: "Bachelor’s Degree" },
            { label: "Location", value: "Urban Area" },
          ],
          traits: ["Analytical", "Independent", "Organised", "Curious", "Practical"],
          quote:
            "“I want to browse laptops efficiently, track specifications and deals, and get personalized recommendations without juggling multiple websites.”",
          bio: "Alex is a new laptop buyer who researches devices, compares specs, and tracks deals daily. He relies on multiple websites and notes to stay organized but feels frustrated when pricing alerts or product suggestions don’t match his needs. He wants a single platform that helps him browse laptops, compare features, and suggest products based on his preferences.",
          goals: [
            "Manage laptop research efficiently",
            "Track product specs and deal alerts easily",
            "Ensure purchase meets performance and budget needs",
            "Get recommendations based on usage and preferences",
          ],
          frustrations: [
            "Missed deal alerts or product updates",
            "Difficulty tracking multiple devices",
            "Suggestions that don’t match usage needs",
            "Using multiple sites for comparison and research",
          ],
          personality: [
            { label: "Curious", percentage: 70 },
            { label: "Organized", percentage: 80 },
            { label: "Analytical", percentage: 65 },
          ],
          motivations: [
            "Reduce missed appointments",
            "Save time managing pet care",
            "Keep pets healthy",
            "Make informed pet care decisions",
          ],
          motivationsLabel: "Research Tools",
          interests: [
            "Laptop Browsing & Filtering",
            "Product Recommendations",
            "Specifications & Deal Tracking",
            "Price & Stock Alerts",
          ],
          interestsLabel: "Key Features:",
          influences: [
            "Tech Communities",
            "Laptop Review Blogs & Websites",
            "Deal & Price Alert Apps",
            "Comparison Platforms",
          ],
          frequentlyUsedApps: ["YouTube", "Pinterest", "Google Keep", "Instagram"],
        },
        image: "",
      },
      teamDiagram: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        teamTitle: "",
        teamPlatform: "LapLocal",
        image: "",
      },
      designSystem: {
        heading: "A Unified Design System Ensured Consistency",
        headingItalic: "Across the LapLocal Ecosystem",
        description:
          "A shared design system was created to support the mobile app, product browsing dashboard, and admin panel. Components, typography, spacing, and interaction patterns were standardized to ensure consistency, better usability, and faster design iteration.",
        image: "",
        variant: "foodforesight",
        assets: {
          rightTop: "/assets/projectdetail/laplocal/right-colums.png",
          rightBottom: "/assets/projectdetail/laplocal/colors-cards.png",
          fontName: "LUFGA",
        },
      },
      mobileFirst: {
        heading: "A Website-First Approach",
        headingItalic: "shaped prioritization",
        description:
          "Designing for the website ensured that essential features like laptop browsing, specification comparison, and deal tracking were prioritized first. Advanced options such as brand preferences, product categories, and price alerts were progressively disclosed only when needed, keeping the experience simple, clear, and easy to navigate without overwhelming users.",
        video: "",
        websiteVideo: "/assets/projectdetail/laplocal/website-video.mp4",
      },
      designEnhancements: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        mockups: [],
      },
      adminDashboard: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        video: "",
      },
      usabilityTesting: {
        topHeading: "",
        topHeadingItalic: "",
        topDescription: "",
        heading:
          "*Usability testing* results  Users Understood Services and Metrics Better",
        headingItalic: "",
        description: "",
        descriptionBullets: [
          "Usability testing confirmed users could find laptops, deals, and product details faster and navigate the website more confidently.",
          "Users better understood product categories, brand preferences, and upcoming deal alerts.",
          "Feature visibility and personalized recommendations helped users plan purchases more easily and complete tasks smoothly on the website.",
        ],
        phoneImage: "/assets/projectdetail/laplocal/Navbar-usability.png",
        challenges: [
          {
            label: "Hidden Tools",
            description:
              "Users struggled to quickly find laptops, deals, or product details on the website.",
          },
          {
            label: "Complex Navigation",
            description:
              "Key actions required too many steps to compare products, track deals, or add items to wishlist/cart.",
          },
          {
            label: "Lack of Immediate Context",
            description:
              "Product status, alerts, and recommended laptops were not visible at a glance.",
          },
        ],
        solutions: [
          {
            label: "Feature-First Layout",
            description:
              "Core features like product comparison, deal tracking, and wishlist management surfaced directly on the homepage.",
          },
          {
            label: "Quick Action Access",
            description:
              "A quick-add and filter system enables fast access to actions like comparing laptops, adding to wishlist/cart, and tracking price alerts.",
          },
          {
            label: "Clear Visual Hierarchy",
            description:
              "Upcoming deals, active alerts, and recommended laptops are prioritized for the website-first view.",
          },
        ],
      },
      videoPreview: {
        panels: [],
      },
      allDevices: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        macbookVideo: "",
        phoneVideo: "",
      },
      scalability: {
        heading: "TBD",
        headingItalic: "",
        description: "",
        video: "",
      },
      documentation: {
        heading: "Comprehensive design documentation streamlined development",
        headingItalic: "for a cohesive end product",
        description:
          "Detailed design documentation, annotated screens, and interactive prototypes were shared with engineering teams to ensure accuracy and consistency during implementation.",
        image: "",
        showMobileGrid: false,
        showDesktopGrid: true,
      },
      results: {
        heading: "TBD",
        headingItalic: "",
        metrics: [],
      },
    },
  },
];

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getAllProjects(): ProjectData[] {
  return projects;
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: ProjectData | null;
  next: ProjectData | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
