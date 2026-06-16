export default function Hero() {
  return (
    <section className="flex min-h-[600px] items-center justify-between px-8">
      
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Shop smarter with FluxStore
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Discover premium products with a seamless shopping experience.
        </p>

        <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
          Shop Now
        </button>
      </div>


      <div>
        {/* Product image will go here later */}
      </div>

    </section>
  );
}