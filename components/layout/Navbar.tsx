"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

import { useState, useEffect } from "react";
import LogoutButton from "../auth/LogoutButton";


export default function Navbar() {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        // get current session user
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });

        // listen to auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <nav className="flex justify-between items-center p-4 border-b">


            <Link href="/" className="relative w-32 h-12">
                <Image
                    src="/images/uniqlo_logo.svg.png"
                    alt="UNIQLO Logo"
                    fill
                    style={{ objectFit: "contain" }} />


            </Link>
            {/* center  */}
            <div className="flex gap-12 font-medium">
                <Link href="/women">Women</Link>
                <Link href="/men">Men</Link>
                <Link href="/beauty">Beauty</Link>
            </div>
            {/* right */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900" />
                    <input type="text" className="border pl-9 pr-3 py-1 rounded" />
                </div>
                <Link href="/cart"><ShoppingCart className="w-6 h-6" /></Link>
                {/* <Link href="/login"> <User className="w-6 h-6" /></Link> */}

                {user ? (
                    <>
                        <span>Hi, {user.email}</span>
                        <LogoutButton />
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )}
            </div>


        </nav>
    );
}
