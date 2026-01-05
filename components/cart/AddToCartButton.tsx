"use client";

import { useCartStore } from "@/store/cartStore";

type Product = {
    id: string;
    title: string;
    price: number;
    img_url: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image_url: "/images/item1.jpg",
        });
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
            Add to Cart
        </button>
    );
}
