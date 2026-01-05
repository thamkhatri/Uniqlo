import { createSupabaseServer } from "@/lib/supabase/server";
import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";

type ProductPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const supabase = await createSupabaseServer();

    const { data: product, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

    if (!product || error) {
        return <p className="p-6">Product not found</p>;
    }

    return (
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Image
                src={product.img_url}
                alt={product.title}
                width={500}
                height={500}
                className="rounded object-cover"
            />

            <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-xl text-gray-800 mb-4">Rs {product.price}</p>

                <p className="text-gray-600 mb-6">
                    {product.description ?? "No description available"}
                </p>

                <AddToCartButton product={product} />
            </div>
        </section>
    );
}
