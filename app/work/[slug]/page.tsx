import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/lib/projects'
import Footer from '@/components/Footer'
import styles from './project.module.css'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return notFound()

  return (
    <main className={styles.projectMain}>
      <Link href="/" className={styles.backLink}>
        <span className={styles.backArrow}>←</span>
        <span>Back</span>
      </Link>

      <article
        className={styles.project}
        style={{ '--project-color': project.color } as React.CSSProperties}
      >
        {/* Hero / Theme */}
        <header className={styles.hero}>
          <div className={styles.heroMeta}>
            <span className={styles.heroNum}>{project.num}</span>
            <span className={styles.heroCategory}>{project.category}</span>
          </div>

          <h1 className={styles.heroTitle}>{project.title}</h1>

          <p className={styles.heroDesc}>{project.description}</p>
        </header>

        {/* Body: left panel (Client/Role/Timeline) + right panel (Challenge/Solution/Tech) */}
        <section className={styles.body}>
          <aside className={styles.leftPanel}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Client</span>
              <span className={styles.infoValue}>{project.client}</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Role</span>
              <span className={styles.infoValue}>{project.role}</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Timeline</span>
              <span className={styles.infoValue}>{project.timeline}</span>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                Visit Live <span>↗</span>
              </a>
            )}
          </aside>

          <div className={styles.rightPanel}>
            <section className={styles.block}>
              <span className={styles.blockLabel}>The Challenge</span>
              <p className={styles.blockText}>{project.challenge}</p>
            </section>

            <section className={styles.block}>
              <span className={styles.blockLabel}>The Solution</span>
              <p className={styles.blockText}>{project.solution}</p>
            </section>

            <section className={styles.block}>
              <span className={styles.blockLabel}>Tech Used</span>
              <div className={styles.techTags}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </section>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
