"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
    const getTotal = useCartStore((state) => state.getTotal);

    return (
        <div className="p-4 border rounded">
            <h2 className="font-bold text-xl">Cart Summary</h2>
            <p className="mt-2">Subtotal: Rs {getTotal()}</p>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded w-full">
                Proceed to Checkout
            </button>
        </div>
    );
}
