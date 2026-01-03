export interface Product {
    id: string;           // Product ID (uuid from Supabase)
    title: string;        // Product title
    price: number;        // Price in number
    img_url: string;      // Image URL
    category?: string;    // Optional: women / men / beauty
    created_at?: string;  // Optional: timestamp from Supabase
}
