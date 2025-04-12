"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Roadmap from "@/components/roadmap"
import Gallery from "@/components/gallery"
import Community from "@/components/community"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a2c38] text-white">
      <Hero />
      <About />
      <Roadmap />
      <Gallery />
      <Community />
    </div>
  )
}
