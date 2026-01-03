
import Link from "next/link";
import Image from "next/image";


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

            <div className="flex gap-4">
                <Link href="/women">Women</Link>
                <Link href="/men">Men</Link>
                <Link href="/beauty">Beauty</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}
