export default function Hero() {
    return (
        <section className="bg-gray-100 py-20 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
                Discover Your Style
            </h1>
            <p className="text-gray-600 mb-6">
                New arrivals every week. Shop the latest trends.
            </p>
            <a
                href="/products"
                className="inline-block bg-black text-white px-6 py-3 rounded"
            >
                Shop Now
            </a>
        </section>
    );
}
