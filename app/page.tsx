import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkSection from "@/components/section/work-section";
import { CopyableEmail } from "@/components/copyable-email";
import { ArrowUpRight, FileText } from "lucide-react";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 md:gap-20 relative w-full">
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <div className="w-full space-y-6">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 w-full">
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground w-fit mb-1">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Full-Stack &amp; AI Engineering Roles</span>
                </div>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFadeText
                className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed text-pretty max-w-2xl"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                  <CopyableEmail
                    email={DATA.contact.email}
                    className="text-sm md:text-base"
                  />
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium border border-border bg-background hover:bg-muted text-foreground px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <FileText className="size-3.5" />
                    <span>View Resume (PDF)</span>
                  </a>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium border border-border bg-background hover:bg-muted text-foreground px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <Icons.github className="size-3.5" />
                    <span>GitHub</span>
                  </Link>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium border border-border bg-background hover:bg-muted text-foreground px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <Icons.linkedin className="size-3.5" />
                    <span>LinkedIn</span>
                  </Link>
                </BlurFade>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-none">
              <Avatar className="size-28 sm:size-36 md:size-40 border border-border rounded-2xl shadow-xl ring-4 ring-muted/50">
                {DATA.avatarUrl ? (
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                ) : null}
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-linear-to-br from-primary/10 to-primary/25 text-primary rounded-2xl">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="prose max-w-full text-pretty font-sans text-base sm:text-lg leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Technical Skills Bento Grid */}
      <section id="skills" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Technical Skills</h2>
              <p className="text-sm text-muted-foreground">
                Categorized domains across AI systems, streaming protocols, data engines, and cloud infrastructure.
              </p>
            </div>
          </BlurFade>
          <SkillsSection />
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Work Experience</h2>
              <p className="text-sm text-muted-foreground">
                Engineering roles and full-stack client production deployments.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 9.5 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 sm:p-6 border border-border rounded-xl bg-card/40 hover:bg-card/70 transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold text-lg flex items-center gap-2">
                        <span>{education.school}</span>
                        <ArrowUpRight
                          className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-medium text-sm text-foreground/90">
                        {education.degree}
                      </div>
                      {education.cgpa && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          <span className="font-medium text-foreground">CGPA:</span> {education.cgpa}
                        </div>
                      )}
                    </div>
                    <div className="text-xs tabular-nums text-muted-foreground shrink-0 font-mono sm:text-right">
                      {education.start} – {education.end}
                    </div>
                  </div>
                  {education.courses && education.courses.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-muted-foreground mr-1">Relevant Coursework:</span>
                      {education.courses.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-medium border border-border/80 bg-background/80 px-2 py-0.5 rounded-md text-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
