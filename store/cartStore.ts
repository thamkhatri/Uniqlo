import { create } from "zustand";

// Define type for a cart item
export type CartItem = {
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image_url?: string;
};

// Define the state type
type CartState = {
    items: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getTotal: () => number;
    clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    // Add product to cart
    addToCart: (product) => {
        const existingItem = get().items.find((i) => i.productId === product.productId);

        if (existingItem) {
            // Increment quantity if already exists
            set({
                items: get().items.map((i) =>
                    i.productId === product.productId
                        ? { ...i, quantity: i.quantity + product.quantity }
                        : i
                ),
            });
        } else {
            // Add new item
            set({ items: [...get().items, product] });
        }
    },

    // Remove item
    removeFromCart: (productId) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
    },

    // Update quantity
    updateQuantity: (productId, quantity) => {
        set({
            items: get().items.map((i) =>
                i.productId === productId ? { ...i, quantity } : i
            ),
        });
    },

    // Calculate total
    getTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    // Clear cart
    clearCart: () => set({ items: [] }),
}));
