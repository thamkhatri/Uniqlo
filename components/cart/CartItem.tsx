"use client";


import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";

type CartItemProps = {
    product: CartItemType;
};
export default function CartItem({ product }: CartItemProps) {
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const qty = Number(e.target.value);
        if (qty > 0) updateQuantity(product.productId, qty);
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <img src={product.image_url} className="w-16 h-16 object-cover" />
            <div className="flex-1 ml-4">
                <h3 className="font-bold">{product.title}</h3>
                <p>Rs {product.price}</p>
            </div>
            <input
                type="number"
                value={product.quantity}
                onChange={handleChange}
                className="border w-16 text-center"
            />
            <button
                onClick={() => removeFromCart(product.productId)}
                className="text-red-500 ml-2"
            >
                Remove
            </button>
        </div>
    );
}
