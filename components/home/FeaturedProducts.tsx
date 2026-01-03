"use client";
import { Product } from "@/types/product";
import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product/ProductList";

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .limit(8);

            if (error) console.error(error);
            else setProducts(data as Product[]);

            setLoading(false);
        }

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;

    return <ProductList products={products} />;
}
