export const profile = {
  name: 'Udit Gupta',
  role: 'Frontend Software Development Engineer',
  location: 'Bhopal, India',
  email: 'udit204gupta@gmail.com',
  phone: '+91 8319227454',
  phoneHref: 'tel:+918319227454',
  linkedin: 'https://www.linkedin.com/in/udit-gupta-87bb04135',
  resume: '/Udit_Gupta_Resume.pdf',
} as const

export type ProjectSlug = 'casefox' | 'mattersuite' | 'roostercal'

export type Project = {
  slug: ProjectSlug
  number: string
  name: string
  category: string
  status: 'Live product' | 'In development'
  website?: string
  summary: string
  headline: string
  introduction: string
  role: string
  tags: string[]
  contributions: { title: string; description: string }[]
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'casefox',
    number: '01',
    name: 'CaseFox',
    category: 'LEGAL BILLING SOFTWARE',
    status: 'Live product',
    website: 'https://www.casefox.com/',
    summary: 'Strengthening the foundations of a legal billing platform.',
    headline: 'A more reliable foundation for everyday legal work.',
    introduction:
      'My first product journey began with an established legal billing application. I worked through the existing codebase, resolved bugs, improved stability, and built new modules that extended what the platform could do.',
    role: 'Frontend development · Product stabilization',
    tags: ['React', 'TypeScript', 'Internationalization'],
    contributions: [
      {
        title: 'Stability before everything',
        description:
          'Investigated and fixed bugs across the existing application, strengthening reliability while learning the product’s workflows and architecture.',
      },
      {
        title: 'A multilingual experience',
        description:
          'Added multilingual capabilities so users could work in their preferred language. My internationalization work includes Lingui and dynamic language switching.',
      },
      {
        title: 'Growing the product',
        description:
          'Created multiple application modules and extended existing functionality, balancing new requirements with the conventions of an established product.',
      },
      {
        title: 'Modernizing the foundation',
        description:
          'Contributed to the same React 16 to 18 and Node.js 14 to 18 upgrade for CaseFox, replacing deprecated libraries from the legacy codebase with appropriate alternatives.',
      },
    ],
    outcome:
      'Contributed to the stability and continued development of a live legal billing product, building a strong foundation in maintaining and extending production software.',
  },
  {
    slug: 'mattersuite',
    number: '02',
    name: 'MatterSuite',
    category: 'LEGAL PRACTICE MANAGEMENT',
    status: 'Live product',
    website: 'https://www.mattersuite.com/',
    summary: 'From the first architectural decisions to an AI-powered product.',
    headline: 'From a blank canvas to intelligent legal workflows.',
    introduction:
      'I helped build MatterSuite from the start through production, contributing to product planning, design, and architectural decisions. The work brought together a reusable frontend foundation, document tools, and AI-assisted workflows for legal professionals.',
    role: 'Product development · UI architecture · AI integration',
    tags: ['React', 'TypeScript', 'AI integration', 'Document workflows'],
    contributions: [
      {
        title: 'From inception to production',
        description:
          'Participated in product decisions, designed application experiences, and contributed to architectural choices while building the product through its production release.',
      },
      {
        title: 'Documents, in one place',
        description:
          'Contributed to the Document Module with e-signatures using DocuSeal, a document editor and viewer, document sharing, and AI-powered document summarization.',
      },
      {
        title: 'AI-assisted legal work',
        description:
          'Empowered the application with document summarization and drafting. My end-to-end AI work spans LLM APIs, Python text extraction, retrieval-augmented generation, and Qdrant vector storage.',
      },
      {
        title: 'Review contracts with more context',
        description:
          'Contributed to the Contract Management Module with AI contract review, redlining, and clause-level risk identification.',
      },
      {
        title: 'Untangling the legacy foundation',
        description:
          'Worked in the legacy codebase, identified cyclic dependencies, and reported them to my manager. I then helped clear those dependencies and make each module more independent, creating share-resources for components and features shared across modules.',
      },
      {
        title: 'Visualizing case workflows',
        description:
          'Worked on the Case Workflow Module, using React Flow to create an interactive flow chart for representing case processes.',
      },
      {
        title: 'Modernizing the application stack',
        description:
          'Contributed to the upgrade from React 16 to 18 and Node.js 14 to 18, identifying deprecated libraries in the legacy code and replacing them with appropriate modern alternatives.',
      },
      {
        title: 'Turn meetings into useful notes',
        description:
          'Added audio transcription and summarization for meeting recordings, making recorded conversations easier to review and work with.',
      },
    ],
    outcome:
      'Helped take the product from its initial foundation to a live application, with integrated document tools and practical AI capabilities.',
  },
  {
    slug: 'roostercal',
    number: '03',
    name: 'RoosterCal',
    category: 'APPOINTMENT SCHEDULING',
    status: 'In development',
    summary: 'A thoughtful UI foundation for simpler appointment scheduling.',
    headline: 'Good products start with a considered foundation.',
    introduction:
      'I am currently developing RoosterCal, an appointment booking and scheduling product. My focus has been planning and building the UI framework from scratch so the product can grow on a consistent, reusable base.',
    role: 'UI framework · Component architecture · Ongoing development',
    tags: ['React', 'Reusable UI', 'Multilingual', 'Vitest'],
    contributions: [
      {
        title: 'A framework from the ground up',
        description:
          'Planned and built the UI foundation, establishing patterns that make it easier to develop consistent product experiences.',
      },
      {
        title: 'Reusable by design',
        description:
          'Created reusable components, layouts, and templates that provide the base for ongoing feature development.',
      },
      {
        title: 'Ready for multiple languages',
        description:
          'Integrated multilingual support into the foundation rather than adding it after the interface was already built.',
      },
      {
        title: 'An agent-assisted workflow',
        description:
          'Use AI development agents with Markdown guidance to support implementation and to write and execute tests with Vitest. Review and engineering judgment remain part of the workflow.',
      },
    ],
    outcome:
      'The UI foundation is in place and product development is ongoing. RoosterCal has not been presented here as a publicly launched product.',
  },
]

export const experienceHighlights = [
  {
    title: 'Modernized the frontend stack',
    description:
      'Upgraded React 16 to 18 and Node.js 14 to 18, with a reported 30–40% improvement in rendering efficiency and load times. Migrated Webpack to Vite, reducing startup time and production bundle size.',
  },
  {
    title: 'Built connected, data-rich experiences',
    description:
      'Implemented JWT authentication across 20+ internal pages, architected Redux Toolkit and Context API state management, and built Recharts dashboards with billing insights, KPI cards, and filters.',
  },
  {
    title: 'Brought AI into real workflows',
    description:
      'Shipped LLM-powered document drafting and summarization, AI appointment booking, intelligent search, and contextual conversation using Python, RAG, and Qdrant.',
  },
  {
    title: 'Made good work repeatable',
    description:
      'Built reusable Storybook component libraries, implemented Lingui internationalization, and owned Docker image building, versioning, and deployment. Mentored interns and junior engineers through onboarding, reviews, and code standards.',
  },
]

export const skillGroups = [
  {
    title: 'Interfaces & experiences',
    note: 'The tools I build with every day.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Redux Toolkit',
      'Context API',
      'MUI',
      'Formik',
      'Recharts',
      'React Flow',
    ],
  },
  {
    title: 'Intelligence & integration',
    note: 'Connecting products with useful capabilities.',
    skills: [
      'Python',
      'LLM integration',
      'OpenAI API',
      'RAG',
      'Qdrant',
      'REST APIs',
      'JWT',
      'Axios',
    ],
  },
  {
    title: 'Quality & performance',
    note: 'Fast, consistent, and built to last.',
    skills: [
      'Vite',
      'Webpack',
      'Code splitting',
      'Lazy loading',
      'Bundle optimization',
      'Vitest',
      'Unit testing',
      'Playwright / MCP',
      'Storybook',
    ],
  },
  {
    title: 'Delivery & collaboration',
    note: 'From a good idea to a shipped product.',
    skills: [
      'Git',
      'GitHub',
      'Azure DevOps',
      'Docker',
      'CI/CD',
      'Lingui / i18n',
      'AI agents',
      'Technical planning',
      'Code reviews',
      'Mentorship',
    ],
  },
]
