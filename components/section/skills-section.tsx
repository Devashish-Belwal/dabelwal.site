import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {DATA.skillCategories.map((group, index) => (
        <BlurFade
          key={group.category}
          delay={BLUR_FADE_DELAY * 10 + index * 0.05}
          className="h-full"
        >
          <div className="border border-border/80 bg-card/50 rounded-xl p-5 flex flex-col gap-3 h-full hover:border-border transition-colors shadow-2xs">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-sm sm:text-base text-foreground tracking-tight">
                {group.category}
              </h3>
              <p className="text-xs text-muted-foreground">
                {group.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border bg-background/90 text-foreground text-xs font-medium px-2.5 py-1 rounded-md shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
