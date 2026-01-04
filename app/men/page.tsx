import CategoryProducts from "@/components/category/CategoryProducts";

export default function MenPage() {
    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">Men</h1>
            <CategoryProducts category="men" />
        </section>
    );
}
