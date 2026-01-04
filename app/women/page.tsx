import CategoryProducts from "@/components/category/CategoryProducts";

export default function WomenPage() {
    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">Women</h1>
            <CategoryProducts category="women" />
        </section>
    );
}
