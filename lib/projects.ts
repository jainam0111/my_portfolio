export interface Project {
  slug: string
  num: string
  title: string
  category: string
  year: string
  color: string
  description: string
  client: string
  role: string
  timeline: string
  challenge: string
  solution: string
  tech: string[]
  url?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'cipher-vault',
    num: '01',
    title: 'Cipher Vault',
    category: 'Security System',
    year: '2025 – Present',
    color: '#eab308',
    description:
      'Currently building a Privileged Access Management (PAM) web application designed for secure enterprise environments.',
    client: 'In Development',
    role: 'Full Stack Engineer',
    timeline: '2025 – Present',
    challenge:
      'Currently architecting a highly secure identity management gateway without sacrificing the user-friendly frontend experience.',
    solution:
      'Implementing advanced encryption standard patterns tied to an intuitive, zero-latency dashboard.',
    tech: ['React.js', 'PostgreSQL', 'Node.js', 'Docker'],
    tags: ['PAM', 'Security', 'Full Stack'],
  },
  {
    slug: 'skate-labs',
    num: '02',
    title: 'Skate Labs',
    category: 'Web Development',
    year: '2024 – 2025',
    color: '#a0a0a0',
    description:
      'A modern, high-performance website for Skate Labs India. Built for visual impact, speed, and a seamless experience that represents the brand authentically.',
    client: 'Skate Labs India',
    role: 'Web Developer & Designer',
    timeline: '2024 – 2025',
    challenge:
      'Creating a brand-defining online presence that balances bold visual storytelling with fast page loads and a clean, navigable structure.',
    solution:
      'Built a Next.js site with carefully tuned motion, typography, and layout — delivering a visual-first experience that loads quickly and scales cleanly across devices.',
    tech: ['Next.js', 'React', 'Framer Motion', 'CSS Modules'],
    url: 'https://skate-labs-india.vercel.app/',
    tags: ['Next.js', 'Motion', 'Branding'],
  },
  {
    slug: 'n8n-automation',
    num: '03',
    title: 'N8N Automation',
    category: 'AI Automation',
    year: '2025 – 2026',
    color: '#3b82f6',
    description:
      'Advanced automation workflows orchestrated with N8N. Connecting APIs, AI services, and business logic into seamless, intelligent pipelines that run 24/7.',
    client: 'Internal / Client Projects',
    role: 'Automation Engineer',
    timeline: '2025 – 2026',
    challenge:
      'Replacing slow, manual workflows spread across multiple SaaS tools with reliable, self-healing pipelines that combine APIs and AI without constant maintenance.',
    solution:
      'Designed modular N8N workflows with AI-agent steps, retries, and observable error paths — turning brittle manual processes into 24/7 automated systems.',
    tech: ['N8N', 'AI Agents', 'REST APIs', 'Webhooks'],
    tags: ['N8N', 'AI Agents', 'Pipelines'],
  },
  {
    slug: 'go-parking',
    num: '04',
    title: 'Go Parking',
    category: 'Web Development',
    year: '2024 – 2025',
    color: '#22c55e',
    description:
      'A high-credibility web presence designed for investors and enterprise clients. Trust-driven structure, modern typography, and clean visual hierarchy.',
    client: 'Go Parking',
    role: 'Web Developer & Designer',
    timeline: '2024 – 2025',
    challenge:
      'Building a site that reads as enterprise-grade to investors while remaining simple for everyday visitors — trust and clarity over flash.',
    solution:
      'Used a restrained type system, clean visual hierarchy, and a structured content layout to project credibility without overloading the user.',
    tech: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
    tags: ['Next.js', 'UI/UX', 'Enterprise'],
  },
  {
    slug: 'enterprise-etl-pipeline',
    num: '05',
    title: 'Enterprise ETL Pipeline',
    category: 'Data Engineering',
    year: '2024 – 2025',
    color: '#f97316',
    description:
      'ETL done for a major company, optimizing data extraction and transformation across large-scale systems.',
    client: 'Confidential Enterprise Client',
    role: 'ETL Developer',
    timeline: '2024 – 2025',
    challenge:
      'Consolidating data from dozens of fragmented sources with inconsistent schemas, varying update cadences, and zero existing documentation.',
    solution:
      'Built a modular ETL framework with automated schema detection, incremental loads, and comprehensive data quality checks — enabling real-time dashboards and reliable reporting.',
    tech: ['SSRS', 'SSMS', 'MS SQL', 'Visual Studio (Report Builder)', 'LotusScript'],
    tags: ['ETL', 'SQL', 'Reporting'],
  },
  {
    slug: 'portfolio-site',
    num: '06',
    title: 'This Portfolio Site',
    category: 'Web Development',
    year: '2025 – 2026',
    color: '#a855f7',
    description:
      'The site you are currently on — a custom-built portfolio showcasing my work with scroll-driven motion, WebGL backgrounds, and a pinned horizontal project gallery.',
    client: 'Self',
    role: 'Designer & Developer',
    timeline: '2025 – 2026',
    challenge:
      'Designing a portfolio that feels technical and expressive at the same time — smooth motion, custom WebGL shaders, and a layout that works across desktop and mobile without compromise.',
    solution:
      'Built with Next.js App Router, Framer Motion for scroll-driven interactions, a custom Three.js fragment shader for the fluid background, and carefully tuned CSS Modules for a pinned horizontal scroll experience inspired by modern motion-design sites.',
    tech: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Three.js', 'CSS Modules'],
    tags: ['Next.js', 'Motion', 'WebGL'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
