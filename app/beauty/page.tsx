import CategoryProducts from "@/components/category/CategoryProducts";

export default function BeautyPage() {
    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">Beauty</h1>
            <CategoryProducts category="beauty" />
        </section>
    );
}
