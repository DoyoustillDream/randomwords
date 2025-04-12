"use client"

export default function About() {
  return (
    <div className="py-16 bg-[#2a3c48]" id="about">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-yellow-400 md:text-4xl">About Wild Token</h2>
            <p className="mb-6 text-lg text-gray-300">
              Wild Token was born from the imagination of crypto enthusiasts who believe finance should be as wild and
              wonderful as a child's storybook. Inspired by the beloved tale of wild things, our token embraces the
              untamed spirit of decentralized finance.
            </p>
            <p className="text-lg text-gray-300">
              Just as Max sailed away to where the wild things are, we invite you to journey with us to a place where
              financial freedom roams free and community rules supreme.
            </p>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden border-4 border-yellow-400">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr1-kKzQbejuSJ4W4Dt7f3a7nHPDz9W9WV.jpeg"
                alt="Wild creature chasing character"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
