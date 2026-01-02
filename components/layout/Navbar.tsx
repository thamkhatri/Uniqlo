import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b">
            <h1 className="font-bold text-lg">Shop</h1>

            <div className="flex gap-4">
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}
