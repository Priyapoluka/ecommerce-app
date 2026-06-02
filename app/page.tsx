export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Priya Store</h1>
      </nav>

      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Priya Store
        </h2>
        <p className="text-lg text-gray-600">
          Shop the latest products 🚀
        </p>
      </section>

      <div className="grid grid-cols-3 gap-6 p-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">iPhone 15</h3>
          <p>₹79,999</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Add to Cart
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">iPad Air</h3>
          <p>₹54,999</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Add to Cart
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">AirPods</h3>
          <p>₹12,999</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}