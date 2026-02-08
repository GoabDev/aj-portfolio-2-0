"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl text-primary"
                >
                  Building Digital Experiences That Scale
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="mt-8 max-w-2xl text-pretty text-lg"
                >
                  Mid-Level Software Developer specializing in React ecosystems,
                  mobile applications, and SaaS platforms with years of
                  experience crafting user-centered solutions
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
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
              <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="-z-10 order-first ml-auto w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-56 lg:order-last lg:h-max lg:w-2xl"
              >
                  <Image
                    className="rounded-full object-cover w-full h-full lg:object-contain dark:mix-blend-lighten dark:invert-0"
                    src="/images/Image.webp"
                    alt="My Image"
                    height="4000"
                    width="3000"
                    loading="lazy"
                    quality={70}
                  />
              </motion.div>
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
