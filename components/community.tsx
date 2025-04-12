"use client"

export default function Community() {
  return (
    <div className="py-16 bg-[#1a2c38]" id="community">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-yellow-400 md:text-4xl">Join Our Wild Community</h2>
            <p className="mb-6 text-lg text-gray-300">
              Become part of our growing community of wild enthusiasts. Stay updated with the latest news, events, and
              token developments.
            </p>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden border-4 border-yellow-400">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr5-SIBcnIMRDEqHTrXlWmxDQ1m1T3DwBZ.jpeg"
                alt="Wild creatures dancing"
                className="w-full h-auto"
              />
              <div className="bg-[#2a3c48] p-4 text-center">
                <h3 className="text-2xl font-bold text-white">Let the Wild Rumpus Start!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
