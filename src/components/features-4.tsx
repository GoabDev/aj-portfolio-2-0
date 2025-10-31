import {
  Brain,
  Cpu,
  Fingerprint,
  Monitor,
  Pencil,
  Settings2,
  Sparkles,
  TabletSmartphone,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20" id="services">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl text-primary">
            Services I Provide
          </h2>
          <p>
            I help businesses and startups turn ideas into powerful digital
            products from web and mobile applications to complete SaaS platforms
            that scale.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-3 col-span-3">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                SaaS Development
              </h3>
            </div>
            <p className="text-sm">
              Specialized in building scalable software-as-a-service platforms
              with modern React architectures, from MVP to enterprise-level
              applications.
            </p>
          </div>
          <div className="space-y-2 col-span-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <TabletSmartphone className="size-4 text-primary" />
              <h3 className="text-sm font-bold text-primary">
                Mobile Applications
              </h3>
            </div>
            <p className="text-sm">
              Cross-platform mobile app development using React Native and Expo,
              delivering native performance with web development efficiency.
            </p>
          </div>
          <div className="space-y-2 col-span-3  md:col-span-1">
            <div className="flex items-center gap-2">
              <Monitor className="size-4 text-primary" />

              <h3 className="text-sm font-bold text-primary">
                Frontend Development
              </h3>
            </div>
            <p className="text-sm">
              Complete frontend solutions including responsive web applications,
              dashboard interfaces, and interactive user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
