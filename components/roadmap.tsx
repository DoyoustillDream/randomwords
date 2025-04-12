"use client"

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "The Wild Beginning",
      items: ["Token Launch", "Website Release", "Community Building", "Initial Marketing Push"],
      completed: true,
    },
    {
      phase: "Phase 2",
      title: "Where the Wild Things Grow",
      items: ["Partnerships Announcement", "Enhanced Social Media Presence"],
      completed: false,
    },
    {
      phase: "Phase 3",
      title: "Let the Wild Rumpus Start",
      items: ["Wild NFT Collection", "Community Governance Implementation"],
      completed: false,
    },
    {
      phase: "Phase 4",
      title: "King of All Wild Things",
      items: ["Wild Ecosystem Expansion", "Cross-Chain Integration"],
      completed: false,
    },
  ]

  return (
    <div className="py-16 bg-[#1a2c38]" id="roadmap">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-yellow-400 md:text-4xl">Roadmap</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Our journey through the wild lands of crypto has just begun. Here's where we're headed.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="bg-[#2a3c48] rounded-xl p-6">
              <div className="mb-2 inline-block bg-yellow-400/20 px-3 py-1 rounded-full text-sm font-semibold text-yellow-400">
                {item.phase}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((listItem, listIndex) => (
                  <li key={listIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
