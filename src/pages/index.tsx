export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Header/Nav */}
      <header className="w-full flex items-center justify-between py-6">
        <div className="text-xl font-semibold tracking-tight">MyBrand</div>
        <nav className="space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full mt-10 mb-20">
        <div className="flex-1 p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience Simplicity
            <br />
            and Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A single-page app that embodies a refined aesthetic.
            <br />
            Built on Next.js, beautifully integrated with Tailwind CSS.
          </p>
          <button className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-900 transition-colors">
            Get Started
          </button>
        </div>
        <div className="flex-1 p-4 md:p-8 flex justify-center">
          {/* Placeholder Apple-like hero image */}
          <div className="w-80 h-80 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-2xl text-gray-400">
              [ Your Product Image ]
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <svg
              className="w-12 h-12 mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h3 className="text-xl font-medium mb-2">Simplicity</h3>
            <p className="text-gray-600">
              Uncluttered UI that allows users to focus on what matters.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <svg
              className="w-12 h-12 mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h1m4 0h1m4 0h1m4 0h1m4 0h1M5 6h14m-7-4v4"
              />
            </svg>
            <h3 className="text-xl font-medium mb-2">Performance</h3>
            <p className="text-gray-600">
              Powered by Next.js and optimized for fast load times.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <svg
              className="w-12 h-12 mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p className="text-gray-600">
              Attention to detail in both design and code.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full max-w-3xl mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$9</p>
            <p className="text-gray-600 mb-6">
              Perfect for individuals just starting out.
            </p>
            <button className="w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors">
              Buy Now
            </button>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$29</p>
            <p className="text-gray-600 mb-6">
              Ideal for professionals who want more features.
            </p>
            <button className="w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors">
              Buy Now
            </button>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-medium mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <p className="text-gray-600 mb-6">
              Tailored solutions for your company.
            </p>
            <button className="w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you. Fill out the form below and we’ll get back
          to you shortly.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-1 focus:ring-gray-400"
          ></textarea>
          <button className="w-full py-3 bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </main>
  );
}
