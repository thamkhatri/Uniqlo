"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
    const items = useCartStore((state) => state.items);
    const getTotal = useCartStore((state) => state.getTotal);
    const router = useRouter();

    // Guard: cart empty
    if (items.length === 0) {
        return (
            <div className="p-6">
                <h1 className="text-xl font-bold">Your cart is empty</h1>
                <Button onClick={() => router.push("/products")}>
                    Go to Products
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="grid grid-cols-3 gap-6">
                {/* Left: Order Items */}
                <div className="col-span-2 space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.productId}
                            className="flex justify-between border p-4 rounded"
                        >
                            <div>
                                <h2 className="font-semibold">{item.title}</h2>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">
                                Rs {item.price * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right: Order Summary */}
                <div className="border p-4 rounded">
                    <h2 className="font-bold text-lg mb-4">Order Summary</h2>

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>Rs {getTotal()}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <hr className="my-2" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>Rs {getTotal()}</span>
                    </div>

                    <Button
                        className="w-full mt-4"
                        onClick={() => router.push("/checkout/payment")}
                    >
                        Continue to Payment
                    </Button>
                </div>
            </div>
        </div>
    );
}
