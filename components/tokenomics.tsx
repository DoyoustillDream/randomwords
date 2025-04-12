export default function Tokenomics() {
  const tokenomicsItems = [
    {
      title: "Royal Rewards",
      description:
        "5% of every transaction is redistributed to all holders. The longer you hold, the more wild your rewards.",
      emoji: "👑",
    },
    {
      title: "Wild Supply",
      description:
        "Total supply of 1 billion $WILD tokens. 40% available at launch, 30% locked for development, 20% for team, 10% for marketing.",
      emoji: "📊",
    },
    {
      title: "Liquidity Lock",
      description: "Initial liquidity locked for 1 year to ensure stability and build trust within our wild community.",
      emoji: "🔒",
    },
    {
      title: "Eco Friendly",
      description:
        "Built on energy-efficient blockchain technology. 1% of all profits donated to wildlife conservation efforts.",
      emoji: "🌿",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#1a2c38] py-24" id="tokenomics">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-yellow-400 sm:text-5xl">Tokenomics</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Our wild tokenomics are designed to reward holders and ensure sustainable growth for our ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tokenomicsItems.map((item, index) => (
            <div key={index} className="rounded-xl bg-[#2a3c48] p-6 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3a5c58]">
                <span className="text-2xl text-yellow-400">{item.emoji}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border-4 border-yellow-400 bg-[#2a3c48] p-6 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-yellow-400">Token Distribution</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
                  <span className="text-gray-300">Public Sale: 40%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-green-500"></span>
                  <span className="text-gray-300">Development: 30%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-blue-500"></span>
                  <span className="text-gray-300">Team: 20%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-purple-500"></span>
                  <span className="text-gray-300">Marketing: 10%</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-64 w-64 rounded-full border-8 border-yellow-400 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">$WILD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
