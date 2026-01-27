import { createSupabaseServer } from "@/lib/supabase/server";
import ProductList from "@/components/product/ProductList";

export default async function ProductsPage() {
    const supabase = await createSupabaseServer();

    const { data: products, error } = await supabase.from("products").select("*");

    if (error) {
        console.error("Error fetching products:", error.message);
    }

    console.log("Fetched products:", products); // <--- check this in terminal

    return <ProductList products={products || []} />;
}
