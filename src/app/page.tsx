import Image from "next/image";
import {
  education,
  experience,
  highlights,
  languages,
  profile,
  projects,
  skills,
} from "@/data/profile";

const YEAR = 2026;

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-300">
      {children}
    </span>
  );
}

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold text-zinc-100">
            {profile.shortName.toLowerCase()}
            <span className="text-accent">.dev</span>
          </a>
          <ul className="hidden gap-6 text-sm text-zinc-400 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-zinc-100">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-zinc-950 transition hover:opacity-90"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
        {/* Hero */}
        <section className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl text-zinc-300 sm:text-2xl">
              {profile.title}
            </p>
            <p className="mt-2 font-mono text-sm text-zinc-500">{profile.tagline}</p>
            <p className="mt-4 text-sm text-zinc-400">📍 {profile.location}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
              >
                View projects
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/20" />
            <Image
              src="/zainab.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 640px) 224px, 288px"
              className="rounded-3xl object-cover object-top shadow-2xl ring-1 ring-zinc-800"
            />
          </div>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-2 gap-4 border-y border-zinc-800 py-8 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="text-3xl font-bold text-accent">{h.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{h.label}</p>
            </div>
          ))}
        </section>

        {/* About */}
        <section className="py-16">
          <SectionTitle id="about">About</SectionTitle>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
            {profile.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="py-16">
          <SectionTitle id="experience">Experience</SectionTitle>
          <div className="mt-8 space-y-12">
            {experience.map((role) => (
              <article
                key={role.company}
                className="grid gap-4 md:grid-cols-[200px_1fr]"
              >
                <div>
                  <p className="font-mono text-sm text-zinc-500">{role.period}</p>
                  {role.location && (
                    <p className="font-mono text-xs text-zinc-600">{role.location}</p>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {role.title}{" "}
                    <span className="text-zinc-400">· {role.company}</span>
                  </h3>
                  <div className="mt-4 space-y-6">
                    {role.projects.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
                      >
                        <h4 className="font-medium text-zinc-100">{p.name}</h4>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <Tag key={s}>{s}</Tag>
                          ))}
                        </div>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <SectionTitle id="projects">Selected projects</SectionTitle>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-accent/50"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <SectionTitle id="skills">Skills</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-medium text-zinc-200">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-16">
          <SectionTitle id="education">Education & languages</SectionTitle>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-zinc-400">{e.school}</p>
                  <p className="font-mono text-xs text-zinc-500">{e.period}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium">Languages</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {languages.map((l) => (
                  <Tag key={l}>{l}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <SectionTitle id="contact">Contact</SectionTitle>
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
            <h3 className="text-2xl font-semibold">Let&apos;s build something.</h3>
            <p className="mt-2 max-w-xl text-zinc-400">
              I&apos;m open to full stack and AI engineering roles, contract work and
              interesting collaborations. The fastest way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-zinc-300 hover:underline">
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center font-mono text-xs text-zinc-600">
        © {YEAR} {profile.name} · Built with Next.js
      </footer>
    </>
  );
}
