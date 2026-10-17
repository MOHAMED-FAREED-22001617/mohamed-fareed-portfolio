import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Atom,
  Brain,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Moon,
  QrCode,
  ShieldCheck,
  Sun,
} from "lucide-react";
import portraitAsset from "@/assets/portrait.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Fareed — AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mohamed Fareed, AI/ML Engineer and B.Tech AI & Data Science graduate (2026) building intelligent, data-driven solutions.",
      },
      { property: "og:title", content: "Mohamed Fareed — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "AI/ML Engineer passionate about intelligent, data-driven solutions. Python, ML, deep learning, NLP and modern web technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/mohamed-fareed-f-291397300/";
const GITHUB = "https://github.com/MOHAMED-FAREED-22001617";
const EMAIL = "fareedmohamed1510@gmail.com";
const PROJECT_URL = "https://scrs.in/verify.html?file=2yaouv57386.pdf";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "NLP & Large Language Models (LLMs)",
      "Data Science",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Web",
    skills: ["Python", "React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Database & Tools",
    skills: ["SQL", "MySQL", "Git", "GitHub"],
  },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{kicker}</p>
      <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Index() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to opportunities
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/my_resume.pdf"
              download="Mohamed_Fareed_Resume.pdf"
              className="hidden items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary sm:inline-flex"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Let's Talk <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="fade-up relative z-0 text-center font-display text-[clamp(2rem,8.8vw,6.5rem)] font-extrabold leading-none tracking-tight md:whitespace-nowrap">
            <span className="text-outline">MOHAMED</span> <span>FAREED</span>
          </h1>

          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 items-center gap-8 md:-mt-16 md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-6 lg:-mt-20">
            <div
              className="fade-up portrait-frame relative z-10 order-1 justify-self-center md:order-2"
              style={{ animationDelay: "0.15s" }}
            >
              <img
                src="/images/fareed.jpg"
                alt="Portrait of Mohamed Fareed"
                width={432}
                height={416}
                className="portrait-fit block h-auto object-bottom w-72 max-w-full object-contain md:w-[22rem] lg:w-[70rem]"
              />
            </div>
            <div
            className="fade-up order-2 w-full max-w-[320px] justify-self-start pb-16 md:order-1 md:block"
            style={{ animationDelay: "0.3s" }}
            >
              <p className="text-xl font-bold leading-snug whitespace-nowrap">AI/ML Engineer</p>
              <p className="mt-3 w-full text-base leading-relaxed text-muted-foreground break-normal">
                Building intelligent solutions with AI, machine learning &amp; data-driven innovation.
                </p>
              </div>
              <div className="fade-up order-3 flex w-full max-w-[280px] flex-col gap-3 justify-self-center pb-10 md:justify-self-end md:pb-16">
              <Button
                asChild
                variant="secondary"
                className="h-11 justify-between rounded-full border border-accent/40 px-5"
              >
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-11 justify-between rounded-full border border-accent/40 px-5"
              >
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  <Github size={14} /> GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="h-11 justify-between rounded-full border border-accent/40 px-5"
              >
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={14} /> Email
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="About Me" title="Curious. Driven. Building." />
          <div className="grid gap-12 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an Artificial Intelligence and Data Science graduate of Saveetha Engineering
              College, 2026, with practical experience in AI/ML concepts, data preprocessing, model
              development, evaluation, and web development.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I bring curiosity, strong problem-solving ability, and a habit of continuous learning
              to every project — with a focus on developing AI solutions that are genuinely useful
              in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="Technical Skills" title="What I work with" />
          <div className="grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                  <group.icon size={22} />
                </div>
                <h3 className="mb-4 text-lg font-bold">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="Featured Projects" title="Selected Work" />
          <div className="space-y-8">
            <article className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex h-7 items-center rounded-full bg-secondary px-3 text-xs font-bold">
                  01
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Blockchain · Healthcare
                </span>
              </div>
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="text-2xl font-bold leading-snug">
                    Blockchain-Powered Mobile App for Emergency Medical Data Access
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    A secure medical information access application designed to help authorized
                    emergency doctors retrieve essential patient information when needed.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: ShieldCheck, text: "Secure access to critical medical information." },
                    {
                      icon: QrCode,
                      text: "QR-code-based patient identification and information retrieval.",
                    },
                    {
                      icon: ShieldCheck,
                      text: "Privacy-focused handling of sensitive medical data.",
                    },
                    {
                      icon: Database,
                      text: "Blockchain-based integrity and security architecture.",
                    },
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-border p-4"
                    >
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <f.icon size={16} />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <QuantumProjectCard />
          </div>
        </div>
      </section>

      {/* Experience + Education */}
      <section id="experience" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionHeading kicker="Experience" title="Internship" />
            <div className="relative border-l-2 border-border pl-8">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                YoungMinds Technology Solutions Pvt. Ltd., Tirupati
              </p>
              <h3 className="mt-2 text-xl font-bold">Artificial Intelligence Intern</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Applied AI/ML concepts to real-world problem statements.</li>
                <li>• Worked on data preprocessing and preparation.</li>
                <li>• Contributed to model development and evaluation.</li>
                <li>• Explored practical approaches to AI-based problem-solving.</li>
              </ul>
            </div>
          </div>
          <div>
            <SectionHeading kicker="Education" title="Academic Background" />
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-xl font-bold">
                B.Tech — Artificial Intelligence and Data Science
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">Saveetha Engineering College</p>
              <p className="mt-1 text-sm font-medium">Graduated: 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="Contact" title="Let's work together" />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="leading-relaxed text-muted-foreground">
                I'm open to internships, entry-level AI/ML roles, and collaborations. Reach out
                through any of these channels:
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Mail size={16} /> {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Linkedin size={16} /> linkedin.com/in/mohamed-fareed-f
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Github size={16} /> github.com/MOHAMED-FAREED-22001617
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Want to know more about my work? Download my resume to explore my skills, projects, and experience.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p>Designed and built by Mohamed Fareed · {year}</p>
          <div className="flex gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
            >
              <Github size={14} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form values:", form);

  const name = form.name.trim();
  const email = form.email.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  if (
    !name ||
    !subject ||
    !message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    setStatus("error");
    return;
  }

  setStatus("idle");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0e9226ec-a413-405b-a31e-c3c825a261e3",
        name,
        email,
        subject,
        message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Web3Forms submission failed:", result);
      setStatus("error");
      return;
    }

    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("Contact form error:", error);
    setStatus("error");
  }
};


  const field =
    "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className={field}
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <input
        className={field}
        placeholder="Subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        required
      />
      <textarea
        className={`${field} min-h-32 resize-y`}
        placeholder="Your message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      {status === "error" && (
        <p className="text-sm text-destructive">
          Please fill in every field with a valid email address.
        </p>
      )}
      {status === "sent" && (
        <p className="text-sm text-accent">
          Message sent successfully! Thank you for reaching out.
        </p>
      )}
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Send Message <ArrowUpRight size={14} />
      </button>
    </form>
  );
}

const QKD_CONTRIBUTIONS = [
  "Designed a hybrid cryptographic framework combining QKD-based key exchange with classical encryption.",
  "Simulated secure key exchange and explored resistance to quantum-based attacks.",
  "Evaluated data confidentiality and integrity during secure transmission.",
  "Analyzed performance and security trade-offs against traditional cryptographic approaches.",
];

const QKD_TECHNOLOGIES = [
  "Quantum Key Distribution (QKD)",
  "Quantum Cryptography",
  "Classical Encryption",
  "Secure Key Exchange",
  "Cryptographic Performance Analysis",
];

function QuantumProjectCard() {
  return (
    <article className="rounded-3xl border border-border bg-card p-8 md:p-12">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-7 items-center rounded-full bg-secondary px-3 text-xs font-bold">
          02
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Quantum Security
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold leading-snug">
            Hybrid Quantum–Classical Cryptographic Framework Using QKD
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Designed a hybrid security framework integrating Quantum Key Distribution (QKD) with
            classical encryption techniques to explore secure communication resistant to potential
            quantum-based attacks.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {QKD_TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              View Details <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Key Contributions
          </h4>
          <ul className="space-y-4">
            {QKD_CONTRIBUTIONS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border p-4"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Atom size={16} />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
