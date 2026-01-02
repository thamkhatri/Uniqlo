"use client";
import { useCartStore } from "@/store/cartStore";
type Product = {
    id: string;
    title: string;
    price: number;
    img_url: string;
}
export default function ProductCard({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart)
    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image_url: "/images/item1.jpg"

        })
    }
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
                src={product.img_url}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{product.title}</h3>
            <p className="text-gray-700">Rs {product.price}</p>
            <button
                onClick={handleAddToCart}
                className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                ADD TO CART
            </button>
        </div>

    )
}