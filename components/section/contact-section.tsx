import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Mail, Phone } from "lucide-react";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <div className="relative border rounded-2xl p-8 sm:p-12 overflow-hidden w-full bg-card/40">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden opacity-70 pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center border bg-primary rounded-xl px-4 py-1 shadow-xs">
          <span className="text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            Contact
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
            I&apos;m always open to discussing new engineering opportunities, distributed systems challenges, and autonomous AI architectures.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={DATA.contact.social.email.url}
            className="inline-flex items-center gap-2 border border-primary bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-xs"
          >
            <Mail className="size-4" />
            <span>Send Email</span>
          </a>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-background hover:bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-xs"
          >
            <Icons.linkedin className="size-4" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-background hover:bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-xs"
          >
            <Icons.github className="size-4" />
            <span>GitHub</span>
          </Link>
          <a
            href={`tel:${DATA.contact.tel}`}
            className="inline-flex items-center gap-2 border border-border bg-background hover:bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-xs"
          >
            <Phone className="size-4" />
            <span>{DATA.contact.tel}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
