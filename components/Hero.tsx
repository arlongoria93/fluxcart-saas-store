export default function Hero() {
  return (
    <section className="flex min-h-[600px] items-center justify-between px-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          Shop smarter with FluxStore
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Discover premium products with a seamless shopping experience.
        </p>

        <button className="mt-8 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90">
          Shop Now
        </button>
      </div>

      <div>{/* Product image will go here later */}</div>
    </section>
  );
}
