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
    slug: 'enterprise-etl-pipeline',
    num: '01',
    title: 'Enterprise ETL Pipeline',
    category: 'Data Engineering',
    year: '2024 – 2025',
    color: '#eab308',
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
    slug: 'cipher-vault',
    num: '02',
    title: 'Cipher Vault',
    category: 'Security System',
    year: '2025 – Present',
    color: '#3b82f6',
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
    slug: 'portfolio-site',
    num: '03',
    title: 'This Portfolio Site',
    category: 'Web Development',
    year: '2025 – 2026',
    color: '#22c55e',
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
