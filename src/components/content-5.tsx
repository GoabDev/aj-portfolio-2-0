import { Rocket, Sparkles, TabletSmartphone, Zap } from "lucide-react";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-2xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-bold text-primary lg:text-5xl">
            About Me
          </h2>
          <p>
            What started as a curiosity about building computers evolved into a
            passion for crafting digital experiences. Four years ago, I wrote my
            first line of HTML, and I&apos;ve been hooked on the endless
            possibilities of web and mobile development ever since.
            <br /> <br />
            Today, I&apos;m a mid-level frontend developer who bridges the gap
            between design and functionality, specializing in React ecosystems
            and mobile applications. I believe great software isn&apos;t just
            about clean code; it&apos;s about solving real problems for real
            people.
          </p>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                Problem-Solving Mindset
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Every project is a puzzle waiting to be solved elegantly.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TabletSmartphone className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                User-First Approach
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Beautiful interfaces mean nothing if users can&apos;t navigate
              them intuitively.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Rocket className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                Continuous Evolution
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Technology changes rapidly, and I thrive on staying ahead of the
              curve.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                Quality Craftsmanship
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Whether it&apos;s a SaaS platform or mobile app, I build with
              scalability and maintainability in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
