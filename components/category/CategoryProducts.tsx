"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Product } from "@/types/product";
import ProductList from "@/components/product/ProductList";

type Category = "women" | "men" | "beauty";

export default function CategoryProducts({ category }: { category: Category }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);

            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("category", category);

            if (error) {
                console.error(error);
            } else {
                setProducts(data as Product[]);
            }

            setLoading(false);
        }

        fetchProducts();
    }, [category]);

    if (loading) return <p>Loading {category} products...</p>;

    return <ProductList products={products} />;
}
