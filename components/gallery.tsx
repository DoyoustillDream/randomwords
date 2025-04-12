"use client"

export default function Gallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr3-Fco9t2Mx4ue9todYl2t4Wvt3HZgI4F.jpeg",
      alt: "Wild creature with crown",
      title: "The Wild King",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr2-mmnU8v0xmjJDkf40Uu5lm07HxLgBxf.jpeg",
      alt: "Wild creature by the sea",
      title: "Seaside Wild",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr1-kKzQbejuSJ4W4Dt7f3a7nHPDz9W9WV.jpeg",
      alt: "Wild chase scene",
      title: "The Wild Chase",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wwr5-SIBcnIMRDEqHTrXlWmxDQ1m1T3DwBZ.jpeg",
      alt: "Wild creatures dancing",
      title: "Wild Rumpus",
    },
  ]

  return (
    <div className="py-16 bg-[#2a3c48]" id="gallery">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-yellow-400 md:text-4xl">Wild Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Explore the wild world of our token through these magical illustrations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="bg-[#1a2c38] rounded-xl overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-400">{image.title}</h3>
                <p className="text-sm text-gray-400">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
