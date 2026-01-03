"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Product } from "@/types/product";
import ProductList from "@/components/product/ProductList";

export default function NewInSection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNewInProducts() {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .order("created_at", { ascending: false }) // newest first
                .limit(4);

            if (error) {
                console.error("Error fetching New In products:", error);
            } else {
                setProducts(data as Product[]);
            }

            setLoading(false);
        }

        fetchNewInProducts();
    }, []);

    if (loading) return <p className="p-6">Loading New In products...</p>;
    if (!products.length) return <p className="p-6">No new products yet.</p>;

    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-4">New In</h2>
            <ProductList products={products} />
        </section>
    );
}
