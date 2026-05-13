export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
          Rizzlord
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          #1 Dating Assistant
        </p>
        <p className="text-lg text-slate-400 mb-8">
          Your ultimate wingman for love, romance, and unforgettable connections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-lg border-2 border-slate-400 text-slate-300 font-bold hover:border-pink-500 hover:text-pink-500 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
