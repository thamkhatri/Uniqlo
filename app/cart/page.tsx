"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
    const items = useCartStore((state) => state.items);

    if (items.length === 0) return <p className="p-4">Your cart is empty</p>;

    return (
        <div className="p-4 grid grid-cols-3 gap-6">
            <div className="col-span-2">
                {items.map((item) => (
                    <CartItem key={item.productId} product={item} />
                ))}
            </div>
            <CartSummary />
        </div>
    );
}
