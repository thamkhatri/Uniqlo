
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search } from "lucide-react";


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="font-bold text-lg">
                <div className="relative w-32 h-12">
                    <Image
                        src="/images/uniqlo_logo.svg.png"
                        alt="UNIQLO Logo"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

            </Link>

            <div className="flex gap-12">
                <Link href="/women">Women</Link>
                <Link href="/men">Men</Link>
                <Link href="/beauty">Beauty</Link>
            </div>
            <div className="flex gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900" />
                    <input type="text" className="border px-3 py-1 rounded" />
                </div>
                <Link href="/cart"><ShoppingCart className="w-6 h-6" /></Link>
                <Link href="/login"> <User className="w-6 h-6" /></Link>
            </div>

        </nav>
    );
}
