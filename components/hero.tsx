"use client"

export default function Hero() {
  return (
    <div className="relative py-24 bg-[#1a2c38]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr3-Fco9t2Mx4ue9todYl2t4Wvt3HZgI4F.jpeg"
            alt="Wild Token Mascot"
            className="mx-auto w-64 h-64 rounded-full border-4 border-yellow-400 object-cover"
          />
        </div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-yellow-400">WILD</span> TOKEN
        </h1>

        <p className="mb-8 mx-auto max-w-2xl text-xl text-gray-300">
          Where the wild gains are. Join the wildest community in crypto and let the rumpus start!
        </p>

        <button
  className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400"
  onClick={() => window.open("https://odin.fun", "_blank", "noopener,noreferrer")}
>
  Buy $WILD
</button>
      </div>
    </div>
  )
}
