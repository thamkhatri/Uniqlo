import { createSupabaseServer } from "@/lib/supabase/server";
import ProductList from "@/components/product/ProductList";

export default async function ProductsPage() {
    const supabase = createSupabaseServer();
    const { data } = await supabase.from("products").select("*");
    return <ProductList products={data || []} />
}