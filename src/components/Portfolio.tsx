"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  certifications,
  education,
  experience,
  leadership,
  projects,
  sectionIds,
  site,
  skillGroups,
} from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { Sidebar } from "./Sidebar";
import { ArrowIcon } from "./icons";

export function Portfolio() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onNavigate = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-dvh">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        active={active}
        onToggle={() => setCollapsed((value) => !value)}
        onMobileToggle={() => setMobileOpen((value) => !value)}
        onNavigate={onNavigate}
      />

      <main
        className={cn(
          "relative min-h-dvh transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          collapsed ? "md:pl-20" : "md:pl-72",
        )}
      >
        <Hero onNavigate={onNavigate} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}

function SectionScene({
  children,
  className,
  orbClassName = "-top-16 -right-16 h-72 w-72",
}: {
  children: ReactNode;
  className?: string;
  orbClassName?: string;
}) {
  const [glow, setGlow] = useState({ x: 42, y: 28 });

  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setGlow({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(520px circle at ${glow.x}% ${glow.y}%, rgba(154,52,18,0.14), transparent 46%)`,
        }}
      />
      <div className={cn("orb", orbClassName)} />
      <div className="relative">{children}</div>
    </div>
  );
}

function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section id="home">
      <SectionScene className="min-h-dvh px-6 pt-28 pb-20 md:px-12 md:pt-24 lg:px-20">
        <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-4xl flex-col justify-center">
        <p className="hero-line font-mono text-xs tracking-[0.28em] text-lime uppercase">
          {site.role} · {site.location}
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[0.92] font-medium tracking-[-0.03em] text-cream sm:text-6xl md:text-7xl">
          <span className="hero-line block italic" style={{ animationDelay: "80ms" }}>
            Rishi
          </span>
          <span className="hero-line block" style={{ animationDelay: "180ms" }}>
            Bharadwaj
          </span>
        </h1>
        <p
          className="hero-line mt-8 max-w-xl text-lg leading-8 text-sand md:text-xl"
          style={{ animationDelay: "280ms" }}
        >
          {site.summary}
        </p>
        <p
          className="hero-line mt-3 max-w-xl text-lg leading-8 text-sand md:text-xl"
          style={{ animationDelay: "340ms" }}
        >
          {site.tagline}
        </p>
        <div className="hero-line mt-10 flex flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
          <button
            type="button"
            onClick={() => onNavigate("experience")}
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View work
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-cream transition-colors hover:border-lime hover:text-lime"
          >
            Get in touch
          </button>
        </div>
        </div>
      </SectionScene>
    </section>
  );
}

function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  orbClassName,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  orbClassName?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line md:scroll-mt-10">
      <SectionScene className="px-6 py-20 md:px-12 md:py-28 lg:px-20" orbClassName={orbClassName}>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-[0.24em] text-lime uppercase">{eyebrow}</p>
                <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-cream md:text-5xl">{title}</h2>
              </div>
              <span className="hidden font-mono text-sm text-sand/60 sm:block">{index}</span>
            </div>
          </Reveal>
          {children}
        </div>
      </SectionScene>
    </section>
  );
}

function About() {
  return (
    <Section id="about" index="02" eyebrow="Profile" title="A bit about me" orbClassName="-bottom-24 -left-16 h-80 w-80">
      <Reveal delay={80}>
        <p className="max-w-2xl text-lg leading-8 text-sand">{site.summary}</p>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-sand">{site.tagline}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Based in", value: site.location },
            { label: "Currently", value: "Optym · SDE-1" },
            { label: "Focus", value: "React · Next.js" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-line bg-paper p-5">
              <p className="font-mono text-[11px] tracking-wider text-sand uppercase">{item.label}</p>
              <p className="mt-2 text-cream">{item.value}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function Experience() {
  const job = experience[0];
  if (!job) return null;

  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Where I work" orbClassName="-top-20 -right-12 h-72 w-72">
      <Reveal delay={80}>
        <article className="relative overflow-hidden rounded-4xl border border-line bg-paper p-6 md:p-8">
          <div className="timeline-dot" />
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-mono text-xs tracking-wider text-lime uppercase">{job.period}</p>
              <h3 className="mt-2 font-serif text-3xl font-medium text-cream">{job.company}</h3>
              <p className="mt-1 text-sand">
                {job.role} · {job.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.products.map((product) => (
                <span key={product} className="rounded-full border border-line px-3 py-1 text-xs text-cream">
                  {product}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-8 space-y-3 text-sand">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Projects" title="Selected work" orbClassName="-bottom-16 right-1/4 h-72 w-72">
      <div className="grid gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-4xl border border-line bg-paper p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-lime/40 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs tracking-wider text-lime uppercase">{project.year}</p>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-cream">{project.name}</h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-cream transition-colors group-hover:border-lime group-hover:text-lime">
                  <ArrowIcon />
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-black/5 px-3 py-1 text-xs text-sand">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-3 text-sand">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="leading-7">
                    {bullet}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" index="05" eyebrow="Technical skills" title="What I use" orbClassName="-top-16 left-8 h-64 w-64">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 70}>
            <div className="rounded-[1.6rem] border border-line bg-paper p-5">
              <p className="font-mono text-[11px] tracking-wider text-lime uppercase">{group.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-cream transition-colors hover:border-lime hover:text-lime"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" index="06" eyebrow="Education" title="Where I studied" orbClassName="-bottom-20 right-8 h-72 w-72">
      <Reveal delay={80}>
        <article className="rounded-4xl border border-line bg-paper p-6 md:p-8">
          <p className="font-mono text-xs tracking-wider text-lime uppercase">{education.period}</p>
          <h3 className="mt-3 font-serif text-3xl font-medium text-cream">{education.school}</h3>
          <p className="mt-2 text-lg text-sand">{education.degree}</p>
          <p className="mt-1 text-sand">{education.location}</p>
        </article>
      </Reveal>
    </Section>
  );
}

function Highlights() {
  return (
    <Section id="highlights" index="07" eyebrow="Beyond the desk" title="Certs & leadership" orbClassName="-top-12 -left-16 h-80 w-80">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="rounded-4xl border border-line bg-paper p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-wider text-lime uppercase">Certifications</p>
            <ul className="mt-5 space-y-4">
              {certifications.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-4">
                  <span className="text-cream">{item.name}</span>
                  <span className="font-mono text-xs text-sand">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="rounded-4xl border border-line bg-paper p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-wider text-lime uppercase">Leadership</p>
            <ul className="mt-5 space-y-5">
              {leadership.map((item) => (
                <li key={item.detail}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-serif text-2xl text-cream">{item.title}</p>
                    <span className="font-mono text-xs text-sand">{item.year}</span>
                  </div>
                  <p className="mt-1 text-sand">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line md:scroll-mt-10">
      <SectionScene
        className="px-6 py-20 md:px-12 md:py-28 lg:px-20"
        orbClassName="-bottom-16 right-1/4 h-80 w-80"
      >
        <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.24em] text-lime uppercase">Contact</p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-cream md:text-6xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-sand">
            Open to conversations about frontend engineering, product UI, and high-performance web apps.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${site.email}`}
              className="group rounded-[1.6rem] border border-line bg-paper p-5 transition-colors hover:border-lime"
            >
              <p className="font-mono text-[11px] tracking-wider text-sand uppercase">Email</p>
              <p className="mt-2 text-cream group-hover:text-lime">{site.email}</p>
            </a>
            <a
              href={`tel:+91${site.phone}`}
              className="group rounded-[1.6rem] border border-line bg-paper p-5 transition-colors hover:border-lime"
            >
              <p className="font-mono text-[11px] tracking-wider text-sand uppercase">Phone</p>
              <p className="mt-2 text-cream group-hover:text-lime">{site.phoneDisplay}</p>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.6rem] border border-line bg-paper p-5 transition-colors hover:border-lime"
            >
              <p className="font-mono text-[11px] tracking-wider text-sand uppercase">LinkedIn</p>
              <p className="mt-2 text-cream group-hover:text-lime">rishi-bharadwaj</p>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.6rem] border border-line bg-paper p-5 transition-colors hover:border-lime"
            >
              <p className="font-mono text-[11px] tracking-wider text-sand uppercase">GitHub</p>
              <p className="mt-2 text-cream group-hover:text-lime">azbestos21</p>
            </a>
          </div>
          <p className="mt-8 text-sm text-sand">{site.address}</p>
        </Reveal>
        <p className="mt-16 font-mono text-xs tracking-wider text-sand/60">
          © 2026 {site.name}
        </p>
        </div>
      </SectionScene>
    </section>
  );
}
