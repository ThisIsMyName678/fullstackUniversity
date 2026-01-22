function CssPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/20 backdrop-blur-xl p-8 shadow-2xl text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Welcome 👋</h1>

        <p className="text-lg opacity-90 mb-8">
          We’re glad you’re here. Build something amazing with Tailwind CSS.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/40 font-semibold hover:bg-white/20 transition">
            Learn More
          </button>
        </div>

        <p className="mt-8 text-sm opacity-70">© 2026 Your App</p>
      </div>
    </div>
  );
}

export default CssPage;
