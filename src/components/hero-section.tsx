"use client";
import React from "react";
import Image from "next/image";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import SocialSelector from "./smoothui/ui/SocialSelector";
import { motion } from "motion/react";

const skilsData = [
  {
    id: 1,
    name: "React",
    imageUrl: "/images/react.svg",
  },
  {
    id: 2,
    name: "React Native",
    imageUrl: "/images/react.svg",
  },
  {
    id: 3,
    name: "Next Js",
    imageUrl: "/images/nextdotjs.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    imageUrl: "/images/tailwindcss.svg",
  },
  {
    id: 5,
    name: "Type Script",
    imageUrl: "/images/typescript.svg",
  },
  {
    id: 6,
    name: "Java Script",
    imageUrl: "/images/javascript.svg",
  },
  {
    id: 7,
    name: "Shadcn",
    imageUrl: "/images/shadcnui.svg",
  },
  {
    id: 8,
    name: "Tanstack Query",
    imageUrl: "/images/reactquery.svg",
  },
  {
    id: 9,
    name: "Claude",
    imageUrl: "/images/claude.svg",
  },
  {
    id: 10,
    name: "Node Js",
    imageUrl: "/images/nodedotjs.svg",
  },
  {
    id: 11,
    name: "Express",
    imageUrl: "/images/express.svg",
  },
];

export default function HeroSection() {
  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="will-change-transform"
                >
                  <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:mt-16">
                    <h1 className="max-w-4xl text-balance text-6xl font-medium leading-[1.12] text-primary md:text-7xl md:leading-[1.1] xl:text-8xl xl:leading-[1.08]">
                      Building Digital Experiences That Scale
                    </h1>
                  </div>
                </motion.div>
                {/* <div className="mx-auto inline-flex w-fit items-center gap-3 rounded-2xl border border-primary/20 bg-background/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-primary/20">
                    <Image
                      src="/images/Image.webp"
                      alt="Profile"
                      fill
                      sizes="48px"
                      className="object-cover"
                      quality={70}
                      priority
                    />
                  </div>
                  <p className="text-base font-semibold text-primary md:text-lg">
                    AjoguJoseph
                  </p>
                </div> */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
                  className="mx-auto mt-8 max-w-2xl text-pretty text-lg"
                >
                  Mid-Level Software Developer specializing in React ecosystems,
                  mobile applications, and SaaS platforms with years of
                  experience crafting user-centered solutions
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
                  className="flex justify-center"
                >
                  <SocialSelector />
                </motion.div>
                {/* <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">View My Work</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Let's Build Together</span>
                    </Link>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">
                  Powered by modern technologies
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  {skilsData.map((skill) => (
                    <div
                      className="flex gap-2 items-center justify-center"
                      key={skill.id}
                    >
                      <img
                        className="mx-auto h-5 w-fit dark:invert"
                        src={skill.imageUrl}
                        alt="React Logo"
                        height="30"
                        width="auto"
                      />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
